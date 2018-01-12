<template>
  <md-app md-mode="reveal">
    <md-app-toolbar class="md-primary">
      <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
        <md-icon>menu</md-icon>
      </md-button>
      <span class="md-title">{{ appName }}</span>
    </md-app-toolbar>
    <md-app-drawer :md-active.sync="menuVisible">
      <sidebar></sidebar>
    </md-app-drawer>
    <md-app-content>
      <router-view></router-view>
    </md-app-content>
  </md-app>
</template>

<script>
import * as Constants from '../utils/constants';
import Sidebar from './Sidebar.vue';

export default {
  name: 'app',
  components: {
    sidebar: Sidebar
  },
  data() {
    return {
      appName: Constants.appName,
      appDescription: Constants.appDescription,
      menuVisible: false
    }
  }
}
</script>

<style scoped>
.md-app {
  max-height: 100vh;
}
</style>