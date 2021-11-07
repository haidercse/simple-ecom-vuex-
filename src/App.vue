<template>
  <div class="">
    <app-header></app-header>
    <div class="container">
      <router-view></router-view>
    </div>
    <notification-list></notification-list>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import NotificationList from './components/NotificationList.vue';

export default {
  components: { AppHeader, NotificationList },

  data() {
    return {};
  },
  methods: {},
};
</script>

<style>
</style>