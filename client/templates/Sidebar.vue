<template>
  <div>
    <md-toolbar class="md-transparent" md-elevation="0">
      <div class="md-toolbar-container">
        <span class="md-title">{{ appName }}</span>
      </div>
    </md-toolbar>
    <md-list>
      <md-list-item to="/">
        <md-icon>home</md-icon>
        <span class="md-list-item-text">Rastreo Simple</span>
      </md-list-item>
      <!--
      <md-list-item to="/multiple">
        <md-icon>home</md-icon>
        <span class="md-list-item-text">Rastreo Múltiple</span>
      </md-list-item>
      -->
      <md-list-item to="/about">
        <md-icon>help</md-icon>
        <span class="md-list-item-text">Acerca de TrackAliChile</span>
      </md-list-item>
    </md-list>
  </div>
</template>

<script>
import * as Constants from '../utils/constants';

export default {
  name: 'sidebar',
  data() {
    return {
      appName: Constants.appName,
      appDescription: Constants.appDescription
    }
  }
};
</script>

<style scoped>
</style>