<script setup lang="ts"></script>

<template>
  <div class="skeleton" />
</template>

<style scoped lang="scss">
.skeleton {
  position: relative;
  overflow: hidden;
  background-color: #e2e8f0;
  &::before {
    content: "";
    animation: p-skeleton-animation 1.2s infinite;
    height: 100%;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    transform: translateX(-100%);
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0.4),
      rgba(255, 255, 255, 0)
    );
    z-index: 1;
  }
  @keyframes p-skeleton-animation {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }
}
</style>
