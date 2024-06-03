<script setup lang="ts">
import VHeader from "~/components/layout/VHeader.vue";
import VDot from "~/components/ui/VDot.vue";
import { SERVICE_LIST_ENUM } from "~/enums/ServicesListEnum";
import useGsap from "~/combosables/UseGsap";
const { gsap } = useGsap();

const title = ref(null);

function wordFade() {
  gsap.from(title.value, {
    opacity: 0,
    duration: 0.7,
    yPercent: 50,
    ease: "power4.out",
    stagger: 0.1,
  });
}
onMounted(() => {
  wordFade();
});
</script>

<template>
  <div
    class="about-main min-h-[100vh] bg-white pt-[40px] pb-[60px] flex flex-col lg:pt-[24px] lg:pb-[32px] lg:m-[10px] lg:rounded-[40px] lg:min-w-[unset]"
  >
    <div
      class="mx-auto px-[20px] max-w-[1640px] w-full flex-auto flex flex-col"
    >
      <div
        class="bg-white flex flex-col justify-between flex-auto gap-[40px] lg:gap-[40px]"
      >
        <v-header />
        <div ref="title" class="flex-grow flex items-center justify-center">
          <div
            class="flex flex-col gap-[100px] self-center xl:gap-[50px] lg:gap-[32px]"
          >
            <h1 class="_h1-title text-center max-w-[1200px]">
              Your trusted creative partner
            </h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.about-main {
  .title {
    font-size: clamp(32px, 5vw, 90px);
  }
  @include adaptive(tablet-big) {
    min-height: calc(100vh - 20px);
  }
}
</style>
