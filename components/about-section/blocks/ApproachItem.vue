<script setup lang="ts">
import type { IApproach } from "~/enums/ApproachEnum";
import useGsap from "~/combosables/UseGsap";
const { gsap } = useGsap();
const triggerItem = ref(null);
const ball = ref(null);
const props = defineProps<{
  data?: IApproach;
}>();

onMounted(() => {
  let tl = gsap.timeline({
    // yes, we can add it to an entire timeline!
    scrollTrigger: {
      trigger: triggerItem.value,
    },
  });
  tl.add("start")
    .from(ball.value, 2, {
      y: "-300",
      xPercent: -300,
      ease: "bounce.out",
    })
    .to(ball.value, 2, {
      delay: -2,
      rotate: 840,
      xPercent: 120,
    });
});
</script>

<template>
  <div
    ref="triggerItem"
    class="approach-item px-[23px] pb-[24px] pt-[18px] aspect-square rounded-[16px] bg-white flex flex-col sm:rounded-[8px]"
  >
    <div class="flex items-center gap-[12px] sm:gap-[10px]">
      <span class="bg-black rounded-full w-[8px] h-[8px] block shrink-0"></span>
      <p class="text text-[18px] leading-none sm:text-[14px]">
        {{ data?.title }}
      </p>
    </div>
    <div
      class="bottom mt-auto text-gray-second flex flex-col gap-[16px] sm:gap-[10px]"
    >
      <div class="flex justify-between">
        <div
          class="ml-[20px] mb-[-16px] bounce-ball flex flex-col align-center gap-[2px] sm:mb-[-10px]"
        >
          <img
            ref="ball"
            src="/bounce-ball.webp"
            alt=""
            decoding="async"
            class="w-[38px] aspect-square"
          />
        </div>
        <span class="block text-[16px] ml-auto sm:text-[12px] relative z-10">
          ( {{ data?.id }} )
        </span>
      </div>
      <span class="w-full bg-gray-second h-[1px]"></span>
      <div class="min-h-[60px] items-end flex sm:min-h-[unset]">
        <p class="line-clamp-3 sm:text-[14px]">
          {{ data?.text }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.approach-item {
  max-width: 306px;
  width: 100%;
}
</style>
