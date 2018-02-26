<template>
  <div>
    <div class="md-layout md-alignment-top-center">
      <div class="md-layout-item">
        <h2>{{ subtitle }}</h2>
      </div>
    </div>
    <form id="codeForm" class="md-layout md-alignment-top-center">
      <div class="md-layout-item md-size-85">
        <md-field>
          <label>Código del Paquete</label>
          <md-input type="text" v-model="code" required></md-input>
        </md-field>
      </div>
      <div class="md-layout-item md-size-85">
        <div class="md-layout md-gutter md-alignment-top-center">
          <div class="md-layout-item">
            <md-button type="button" class="md-raised md-accent" v-on:click="getCainiao()">
              Buscar en AliExpress/Cainiao
            </md-button>
          </div>
          <div class="md-layout-item">
            <md-button type="button" class="md-raised md-primary" v-on:click="getCorreosChile()">
              Buscar en CorreosChile
            </md-button>
          </div>
        </div>
      </div>
    </form>
    <div class="md-layout md-alignment-center-center">
      <div class="md-layout-item md-size-85" v-if="resultStatus === 'cainiao'">
        <h3>Resultado en AliExpress/Cainiao</h3>
        <pre>{{ trackResult }}</pre>
      </div>
      <div class="md-layout-item md-size-85" v-else-if="resultStatus === 'correos-chile'">
        <h3>Resultado en CorreosChile</h3>
        <pre>{{ trackResult }}</pre>
      </div>
      <div class="md-layout-item md-size-85" v-else-if="resultStatus === 'loading'">
        <div class="md-layout md-alignment-center-center">
          <div class="md-layout-item">
            <md-progress-spinner :md-diameter="100" :md-stroke="10" md-mode="indeterminate"></md-progress-spinner>
            <md-snackbar md-position="center" :md-duration="3500" :md-active.sync="showSnackbar">
              <span>Rastreando el paquete {{ code }}</span>
            </md-snackbar>
          </div>
        </div>
      </div>
      <div class="md-layout-item md-size-85" v-else-if="resultStatus === 'error'">
        <p>Es posible que el código del paquete no sea válido o esté mal escrito, o que el servicio de rastreo no esté operativo.</p>
      </div>
      <div class="md-layout-item md-size-85" v-else>
        <p>Ingresa un código de AliExpress Standard Shipping, China Post, Singapore Post o CorreosChile.</p>
        <p>Ejemplo: <i>12891902267000204623069001</i> o <i>RB351146770SG</i></p>
      </div>
    </div>
  </div>
</template>

<script>
import Tracker from '../services/tracker';

export default {
  name: 'home',
  data() {
    return {
      appName: 'TrackAliChile',
      subtitle: 'Rastreo de paquetes en AliExpress Standard Shipping y CorreosChile',
      showSnackbar: true,
      code: '',
      trackResult: '',
      pingResult: '',
      resultStatus: 'none'
    }
  },
  computed: {
    emptyCode() {
      return this.code === '';
    }
  },
  methods: {
    getCorreosChile() {
      if (!this.emptyCode) {
        console.log(this.code);
        this.resultStatus = 'loading';
        Tracker.queryCorreosChile(this.code)
        .then((res) => {
          this.trackResult = res.data;
          this.resultStatus = 'correos-chile';
        })
        .catch((err) => {
          this.resultStatus = 'error';
        });
      }
    },
    getCainiao() {
      if (!this.emptyCode) {
        console.log(this.code);
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
    }
  }
};
</script>

<style scoped>
</style>