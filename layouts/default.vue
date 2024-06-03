<script setup lang="ts">
import VHeader from "~/components/layout/VHeader.vue";
</script>

<template>
  <div class="layout" id="layout">
    <div class="main">
      <slot />
    </div>
  </div>
</template>

<style scoped lang="scss">
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding-bottom: 60px;
  cursor: url("/cursor/dota-hand.png"), auto !important;
  .main {
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
  }
}
</style>
