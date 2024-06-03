<script setup lang="ts">
import { FAQ_ENUM } from "~/enums/FAQEnum.js";
import { ref } from "vue";
import FaqItem from "~/components/common/FaqItem.vue";
</script>

<template>
  <div class="faq-list flex flex-col gap-[36px] sm:gap-[20px]">
    <faq-item v-for="item in FAQ_ENUM" :data="item" />
  </div>
</template>

<style scoped lang="scss">
.faq-list {
}
</style>
