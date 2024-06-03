<script setup lang="ts">
import SubtitleSection from "~/components/common/SubtitleSection.vue";
import ApproachItem from "~/components/about-section/blocks/ApproachItem.vue";
import { APPROACH_ENUM } from "~/enums/ApproachEnum";

import useGsap from "~/combosables/UseGsap";
const { gsap } = useGsap();
const listItem = ref(null);
const triggerItem = ref(null);
onMounted(() => {
  let tl = gsap.timeline({
    // yes, we can add it to an entire timeline!
    scrollTrigger: {
      trigger: triggerItem.value,
      toggleActions: "restart none reverse none",
      start: "top 70%",
      end: "+=100px",
    },
  });
  // add animations and labels to the timeline
  tl.from(listItem.value, {
    y: 400,
    opacity: 0,
    stagger: {
      amount: 0.6,
    },
  });
});
</script>

<template>
  <div class="about-approach _container">
    <div class="flex flex-col gap-[75px] lg:gap-[50px]">
      <subtitle-section
        label="Our Approach"
        text="First step to solving a problem is recognizing there is one."
      />
      <div
        class="flex gap-[20px] flex-wrap justify-center xl:gap-[10px] sm:grid sm:grid-cols-2"
        ref="triggerItem"
      >
        <div
          ref="listItem"
          v-for="item in APPROACH_ENUM"
          class="item flex-grow basis-[230px] sm:basis-[unset]"
        >
          <approach-item :data="item" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.about-approach {
  .item {
    max-width: 306px;
    width: 100%;
    &:not(:first-child) {
      &:deep(.bounce-ball) {
        display: none;
      }
    }
  }
}
</style>
