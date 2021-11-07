<template>
  <div v-if="notification">
    <div :class="typeClass()" class="alert  alert-dismissible fade show" role="alert">
      <button
        type="button"
        class="close"
        data-dismiss="alert"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
       {{ notification.message }}
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    props: ['notification'],
    data(){
      return{
        timeout: null,
      }
    },
    methods: {
        typeClass(){
            return `alert-${this.notification.type}`;
        },
        ...mapActions(['removeNotification'])
    },
    created(){
    this.timeout =   setTimeout(() => {
        this.removeNotification(this.notification);
      }, 3000);
    },
    beforeDestroy(){
      clearTimeout(this.timeout)
    },
   
};
</script>

<style>
</style>