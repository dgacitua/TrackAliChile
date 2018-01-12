<template>
  <div class="full-height" md-mode="reveal">
    <md-toolbar class="md-primary">
      <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
        <md-icon>menu</md-icon>
      </md-button>
      <span class="md-title">{{ appName }}</span>
    </md-toolbar>
    <md-drawer :md-active.sync="menuVisible">
      <sidebar></sidebar>
    </md-drawer>
    <md-content>
      <router-view></router-view>
    </md-content>
  </div>
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
.full-height {
  height: 100vh;
}
</style>