<template>
  <div>
    simple
  </div>
  <!--
  <md-layout md-column id="home">
    <md-layout md-row>
      <h2>{{ subtitle }}</h2>
    </md-layout>
    <form novalidate>
      <md-layout md-row>
        <md-input-container>
          <label>Código del Paquete</label>
          <md-input type="text" v-model="code" required=""></md-input>
        </md-input-container>
      </md-layout>
      <md-layout md-row>
        <md-layout md-column md-flex="50">
          <md-button type="submit" class="md-raised md-warn" v-on:click="getCainiao()">Buscar en AliExpress/Cainiao</md-button>
        </md-layout>
        <md-layout md-column md-flex="50">
          <md-button type="submit" class="md-raised md-accent" v-on:click="getCorreosChile()">Buscar en CorreosChile</md-button>
        </md-layout>
      </md-layout>
    </form>
    <md-layout md-row>
      <md-layout md-column v-if="resultStatus === 'cainiao'">
        <h3>Buscando en Cainiao</h3>
        <pre>{{ trackResult }}</pre>
      </md-layout>
      <md-layout md-column v-else-if="resultStatus === 'correos-chile'">
        <h3>Buscando en CorreosChile</h3>
        <pre>{{ trackResult }}</pre>
      </md-layout>
      <md-layout md-column v-else-if="resultStatus === 'loading'">
        <md-layout md-align="center">
          <md-progress-spinner :md-diameter="100" :md-stroke="10" md-mode="indeterminate"></md-progress-spinner>
        </md-layout>
        <md-snackbar md-position="center" md-duration="3000" md-persistent>
          <span>Rastreando el paquete {{ code }}</span>
        </md-snackbar>
      </md-layout>
      <md-layout md-column v-else-if="resultStatus === 'error'">
        <md-layout md-align="center">
          <h3>¡Ha ocurrido un error al buscar el paquete!</h3>
        </md-layout>
        <md-layout md-align="center">
          <p>Es posible que el código del paquete no sea válido o esté mal escrito, o que el servicio de rastreo no esté operativo.</p>
        </md-layout>
      </md-layout>
      <md-layout md-column v-else>
        asdf!
      </md-layout>
    </md-layout>
  </md-layout>
  -->
</template>

<script>
import Tracker from '../services/tracker';

export default {
  name: 'home',
  data() {
    return {
      appName: 'TrackAliChile',
      subtitle: 'Rastreo de paquetes en AliExpress Standard Shipping y CorreosChile',
      requiredField: true,
      code: '',
      trackResult: '',
      pingResult: '',
      resultStatus: 'none'
    }
  },
  methods: {
    getPing() {
      Tracker.ping().then((res) => { this.pingResult = res.data });
    },
    getCorreosChile() {
      this.resultStatus = 'loading';
      Tracker.queryCorreosChile(this.code)
      .then((res) => {
        this.trackResult = res.data;
        this.resultStatus = 'correos-chile';
      })
      .catch((err) => {
        this.resultStatus = 'error';
      });
    },
    getCainiao() {
      this.resultStatus = 'loading';
      Tracker.queryCainiao(this.code)
      .then((res) => {
        this.trackResult = res.data;
        this.resultStatus = 'cainiao';
      })
      .catch((err) => {
        this.resultStatus = 'error';
      });
    }
  },
  mounted() {
    this.getPing();
  }
};
</script>

<style scoped>
</style>