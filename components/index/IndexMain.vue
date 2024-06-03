<script setup lang="ts">
import VHeader from "~/components/layout/VHeader.vue";
import VDot from "~/components/ui/VDot.vue";
import { SERVICE_LIST_ENUM } from "~/enums/ServicesListEnum";
import useGsap from "~/combosables/UseGsap";
const { gsap } = useGsap();

const title = ref(null);
const listItem = ref(null);
const container = ref(null);
const tl = gsap.timeline();

let mm = gsap.matchMedia();

function listFade() {
  tl.from(listItem.value, 0.5, {
    y: 50,
    ease: "power4.out",
    opacity: 0,
    delay: 0.5,
    skewY: 7,
    stagger: {
      amount: 0.3,
    },
  });
}
function wordFade() {
  gsap.from(title.value, {
    opacity: 0,
    duration: 0.7,
    yPercent: 50,
    ease: "power4.out",
    stagger: 0.1,
  });
}

// function containerToggle() {
//   mm.add("(min-width: 993px)", () => {
//     // this setup code only runs when viewport is at least 800px wide
//     gsap.from(container.value, {
//       scrollTrigger: {
//         trigger: container.value,
//         toggleClass: "active",
//         start: "20px top",
//         toggleActions: "restart pause pause none",
//       },
//       ease: "",
//     });
//   });
// }
onMounted(() => {
  wordFade();
  listFade();
  // containerToggle();
});
</script>

<template>
  <div
    ref="container"
    class="index-main min-h-[100vh] bg-white pt-[40px] pb-[60px] flex flex-col lg:pt-[24px] lg:pb-[32px] lg:m-[10px] lg:rounded-[40px] lg:min-w-[unset]"
  >
    <div
      class="mx-auto px-[20px] max-w-[1640px] w-full flex-auto flex flex-col body"
    >
      <div
        class="bg-white flex flex-col justify-between flex-auto gap-[100px] lg:gap-[40px]"
      >
        <v-header />
        <div
          ref="title"
          class="flex flex-col gap-[100px] self-center xl:gap-[50px] lg:gap-[32px]"
        >
          <h1 class="_h1-title text-center max-w-[1200px]">
            We use design as an impactful communication language
          </h1>
          <p
            class="text-[24px] text-center leading-[1.2] font-light lg:text-[16px]"
          >
            Your trusted creative partner <br />
            Comprehend, design, communicate
          </p>
        </div>
        <div class="flex flex-col gap-[60px] sm:gap-[32px]">
          <v-dot label="Our services" />
          <div
            ref="list"
            class="flex items-center gap-x-[80px] gap-y-[16px] justify-center flex-wrap 2xl:justify-start lg:gap-x-[20px]"
          >
            <span ref="listItem" v-for="item in SERVICE_LIST_ENUM">
              {{ item }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.index-main {
  transition: all 0.3s ease;
  overflow: hidden;

  .body {
    transition: all 0.3s ease;
    overflow: hidden;
  }

  &.active {
    margin: 100px auto 0;
    padding: 0 20px;
    min-height: calc(100vh + 100px);
    width: 100%;
    max-width: 1640px;
    border-radius: 40px;
    .body {
      background: white;
      border-radius: 40px;
      padding: 80px;
      @include adaptive(tablet-small) {
        padding: 40px 20px;
        border-radius: 24px;
      }
    }
    @include adaptive(tablet-small) {
      border-radius: 24px;
    }
    @include adaptive(tablet-big) {
      padding: 0 10px;
    }
  }
  @include adaptive(tablet-big) {
    min-height: calc(100vh - 20px);
  }
}
</style>
