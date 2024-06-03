<script setup lang="ts">
import type { IFaq } from "~/enums/FAQEnum";
import { ref } from "vue";

const props = defineProps<{
  data: IFaq;
}>();
const isActive = ref();
const toggle = () => {
  isActive.value = !isActive.value;
};
const emit = defineEmits(["toggle"]);
</script>

<template>
  <div class="item" :class="{ active: isActive }">
    <div
      @click="toggle"
      class="flex items-center cursor-pointer justify-between gap pb-[36px] xl:pb-[24px] sm:pb-[16px] border-b border-gray-second"
    >
      <div class="text-[24px] sm:text-[16px]">
        ( {{ data.id }} )
        <span class="text-gray-second">{{ data.title }}</span>
      </div>
      <div class="open-button"></div>
    </div>
    <div class="text text-[26px] xl:text-[24px] sm:text-[16px]">
      <p class="text-wrapper">
        {{ data.text }}
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.item {
  .text {
    display: grid;
    grid-template-rows: 0fr;
    overflow: hidden;
    transition: all 0.3s ease;
    opacity: 0;
    padding-top: 0;
  }
  .text-wrapper {
    min-height: 0;
  }
  .open-button {
    position: relative;
    &::before {
      content: "";
      position: relative;
      display: block;
      width: 14px;
      height: 1px;
      background: #000;
      top: 50%;
      left: 50%;
      transform: translate(-50%, 50%);
    }
    &::after {
      content: "";
      position: relative;
      display: block;
      width: 1px;
      height: 14px;
      background: #000;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      transition: all 0.3s ease;
    }
  }
  &.active {
    .text {
      grid-template-rows: 1fr;
      opacity: 1;
      padding-top: 36px;
    }
    .open-button {
      &::after {
        rotate: 90deg;
        opacity: 0;
        transform: translate(-800%, 0);
      }
    }
  }

  @include adaptive(phone-big) {
    &.active {
      .text {
        padding-top: 16px;
      }
    }
  }
}
</style>
