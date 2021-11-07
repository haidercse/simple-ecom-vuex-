<template>
  <div class="notification-list">
    <notification-message v-for="notification in notifications" :key="notification.id" :notification="notification"></notification-message>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import NotificationMessage from "./NotificationMessage.vue";
export default {
  components: { NotificationMessage },
  computed: {
      ...mapState({
          notifications: state => state.notification.notifications,
      })
  }
};
</script>

<style>
.notification-list {
  position: fixed;
  width: 320px;
  bottom: 0;
  right: 0;
  font-weight: bold;
}
</style>