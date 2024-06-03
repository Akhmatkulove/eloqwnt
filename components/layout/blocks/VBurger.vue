<script setup lang="ts">
import { ref } from "vue";
import { BURGER_ENUM } from "~/enums/_BurgerEnum";
import useGsap from "~/combosables/UseGsap";
import { MENU_ENUM } from "~/enums/MenuEnum";

const emit = defineEmits(["close"]);

const isBg = ref(false);
const bgValue = ref("");
const setBg = (value: string) => {
  isBg.value = true;
  bgValue.value = value;
};
const close = () => {
  isBg.value = false;
  setTimeout(() => {
    emit("close");
  }, 300);
};

const { gsap } = useGsap();
const listItem = ref(null);
const triggerItem = ref(null);

const itemMobile = ref(null);
onMounted(() => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerItem.value,
    },
  });
  tl.from(listItem.value, 0.4, {
    x: -200,
    opacity: 0,
    delay: 0.4,
    stagger: {
      amount: 0.2,
    },
  });

  tl.from(itemMobile.value, 0.4, {
    y: 100,
    opacity: 0,
    delay: -0.4,
    stagger: {
      amount: 0.4,
    },
  });
});
</script>

<template>
  <div class="burger-wrapper">
    <div class="v-burger flex flex-col gap-[70px]" :class="{ isBg: isBg }">
      <button @click="close" class="z-10 close-button">
        <span></span>
        <span></span>
      </button>
      <div
        ref="triggerItem"
        class="z-10 flex flex-col overflow-auto burger-body"
      >
        <div v-for="item in BURGER_ENUM" ref="listItem">
          <nuxt-link
            @mouseover="setBg(item.image)"
            @mouseleave="isBg = false"
            @click="close"
            to="/"
            class="text-[24px] flex flex-col link"
          >
            <p>{{ item.title }}</p>
            <p class="text-gray-second">{{ item.subtitle }}</p>
          </nuxt-link>
        </div>
      </div>
    </div>
    <transition name="blur">
      <img
        v-if="isBg"
        :src="bgValue"
        class="absolute inset-0 w-full h-full object-cover z-2"
        alt=""
        decoding="async"
      />
    </transition>
    <!--	MOBILE VERSION  -->
    <div class="v-burger-mobile">
      <div class="flex items-center justify-between">
        <div>
          <img
            src="/logo.svg"
            class="w-[127px] h-[33px] phone:w-[100px] phone:h-[25px]"
            alt="eloqwnt logo"
          />
        </div>
        <div class="flex items-center gap-[16px]">
          <button
            class="bg-gray rounded-[72px] leading-none text-[16px] py-[12px] px-[20px]"
          >
            Let’s chat
          </button>
          <button @click="close" class="z-10 close-button">
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
      <div class="flex flex-col gap-[24px] items-center" ref="triggerItem">
        <div v-for="item in MENU_ENUM" ref="itemMobile">
          <nuxt-link
            @click="close"
            class="flex items-end gap-[5px]"
            :to="item.link"
          >
            <span class="text-gray-second phone:text-[16px]"
              >({{ item.id }})</span
            >
            <span class="text-[48px] phone:text-[32px]">
              {{ item.title }}
            </span>
          </nuxt-link>
        </div>
      </div>
      <div class="flex flex-col gap-[24px] items-center">
        <div class="flex flex-col gap-[12px]">
          <span class="text-[48px] phone:text-[32px]">Eloqwnt</span>
          <nuxt-link
            class="phone:text-[16px] text-gray-second"
            to="mailto:hi@eloqwnt.com"
          >
            ( hi@eloqwnt.com )
          </nuxt-link>
        </div>
        <div>
          <span class="text-[16px] phone:text-[14px] text-gray-second"
            >© 2024 Eloqwnt. All rights reserved</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.burger-wrapper {
  position: fixed;
  inset: 0;
  z-index: 9999;
  height: 100vh;
  width: 100vw;
}
.v-burger {
  position: absolute;
  right: 0;
  top: 0;
  z-index: 10;
  height: 100%;
  width: 447px;
  background: rgba(251, 251, 251, 1);
  padding: 40px 0;
  transition: all 0.5s ease;
  &.isBg {
    background: transparent;
    .link p {
      color: white;
    }
    .close-button {
      border-color: white;
      span {
        background: white;
      }
    }
  }
  .burger-body {
    overflow: auto;
    @include noScrollbar();
    margin-bottom: -40px;
    padding-bottom: 40px;
  }
  .link {
    padding: 32px 40px;
    position: relative;
    transition: all 0.5s;
    p {
      transition: all 0.5s;
    }
    &:hover {
      background: rgba(148, 180, 193, 1);
      p:first-child {
        color: white;
      }
      p:last-child {
        color: #bfd2da;
      }
    }
    //&::before {
    //  content: "";
    //  background-image: url("/example.png");
    //  position: fixed;
    //  left: 0;
    //  top: 0;
    //  width: 100vw;
    //  height: 100vh;
    //  opacity: 0;
    //  z-index: -1;
    //  background-repeat: no-repeat;
    //}
  }
}
.close-button {
  aspect-ratio: 1 / 1;
  width: 54px;
  border-radius: 50%;
  border: 1px solid var(--black);
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  flex-shrink: 0;
  right: 60px;
  transition: all 0.5s;

  span {
    position: absolute;
    width: 15px;
    height: 1px;
    background: var(--black);
    top: 50%;
    transition: all 0.5s;

    left: calc(50% - 15px / 2);
  }
  span:first-child {
    rotate: 45deg;
  }
  span:last-child {
    rotate: -45deg;
  }
}
.blur-enter-active,
.blur-leave-active {
  transition: all 0.5s;
}
.blur-enter-from,
.blur-leave-to {
  opacity: 0;
  filter: blur(4rem);
}
//MOBILE
.v-burger-mobile {
  min-height: 100vh;
  width: 100vw;
  background: white;
  overflow: auto;
  @include noScrollbar();
  padding: 33px 30px;
  display: none;
  flex-direction: column;
  items: center;
  justify-content: space-between;
  gap: 100px;
}

@include adaptive(tablet-big) {
  .v-burger-mobile {
    display: flex;
  }
  .v-burger {
    display: none;
  }
  .close-button {
    right: 0;
    width: 40px;
  }
}
</style>
