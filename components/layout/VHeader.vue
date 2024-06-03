<script setup lang="ts">
import { MENU_ENUM } from "~/enums/MenuEnum.js";
import BurgerButton from "~/components/layout/blocks/BurgerButton.vue";
import VBurger from "~/components/layout/blocks/VBurger.vue";
import { ref } from "vue";

const isDropped = ref(false);

let showScroll: ReturnType<typeof setTimeout> | null;

function openBurger() {
  if (isDropped.value == false) {
    isDropped.value = true;
    if (showScroll) {
      clearTimeout(showScroll);
      showScroll = null;
    }
    document.body.classList.add("no-scroll");
  }
}
function closeBurger() {
  if (isDropped.value == true) {
    isDropped.value = false;
    showScroll = setTimeout(
      () => document.body.classList.remove("no-scroll"),
      300,
    );
  }
}
function toggleBurger() {
  if (isDropped.value) {
    openBurger();
  } else {
    closeBurger();
  }
}
</script>

<template>
  <header class="header flex items-center justify-between">
    <nuxt-link to="/">
      <img
        src="/logo.svg"
        class="w-[127px] h-[33px] phone:w-[100px] phone:h-[25px]"
        alt="eloqwnt logo"
      />
    </nuxt-link>
    <div class="flex items-center gap-[50px] lg:hidden">
      <nuxt-link
        class="text-[20px] link"
        :to="`/${item.link}`"
        v-for="item in MENU_ENUM"
      >
        <span>{{ item.title }}</span>
      </nuxt-link>
    </div>
    <div class="flex items-center gap-[16px]">
      <burger-button @click="openBurger()" />
      <button
        class="bg-gray py-[20px] px-[28px] rounded-[72px] leading-none lg:text-[16px] lg:py-[12px] lg:px-[20px] lg:order-first"
      >
        Let’s chat
      </button>
    </div>
    <transition name="translateX">
      <v-burger v-if="isDropped" @close="closeBurger" />
    </transition>
  </header>
</template>

<style scoped lang="scss">
.header {
  .link.router-link-active {
    text-decoration: underline;
    text-underline-offset: 10px;
  }
  .link {
    position: relative;
    &::before {
      content: "";
      position: absolute;
      width: 0;
      bottom: -8px;
      height: 2px;
      transition: all 0.3s ease;
      background: #000;
    }
    @media (hover: hover) and (pointer: fine) {
      &:hover:not(.router-link-active) {
        &::before {
          width: 100%;
        }
      }
    }
  }
  .translateX-enter-from {
    transform: translateX(100%);
  }
  .translateX-enter-active {
    transition: 0.5s ease-out;
  }
  .translateX-leave-active {
    transition: 0.5s ease-in;
  }
  .translateX-leave-to {
    transform: translateX(100%);
  }
  @include adaptive(tablet-big) {
    .translateX-enter-from {
      transform: translateY(-100%);
    }
    .translateX-enter-active,
    .translateX-leave-active {
      transition: 0.4s ease-in-out;
    }
    .translateX-leave-to {
      transform: translateY(-100%);
    }
  }
}
</style>
