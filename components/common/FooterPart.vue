<script setup lang="ts">
import VDot from "~/components/ui/VDot.vue";
</script>

<template>
  <div class="footer-part flex flex-col gap-[36px] xl:gap-[16px]">
    <div class="flex gap-[20px] items-end lg:gap-[8px]">
      <span class="text-[100px] leading-[0.9] xl:text-[64px] lg:text-[36px]"
        >Eloqwnt</span
      >
      <nuxt-link
        class="text-[24px] mb-[20px] underline underline-offset-8 text-gray-second xl:mb-[16px] lg:text-[14px] lg:underline-offset-2 lg:mb-[8px]"
        target="_blank"
        to="mailto:hi@eloqwnt.com"
      >
        ( hi@eloqwnt.com )
      </nuxt-link>
    </div>
    <div class="flex items-center gap-[12px] flex-wrap">
      <span class="text-[16px] text-gray-second lg:text-[14px]"
        >© 2024 Eloqwnt. All rights reserved</span
      >
      <v-dot label="Privacy Policy" class="privacy" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.footer-part {
  .privacy:deep(.text) {
    font-size: 16px;
    @include adaptive(tablet-small) {
      font-size: 14px;
    }
  }
}
</style>
