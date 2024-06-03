<script setup lang="ts">
import { VALUES_ENUM } from "~/enums/ValuesEnum";
import { onMounted } from "vue";

import useGsap from "~/combosables/UseGsap";
const { gsap, ScrollTrigger } = useGsap();

const listItem = ref(null);
const trigger = ref(null);

onMounted(() => {
  const collageItems = Array.from(
    document.querySelectorAll(".about-values-item"),
  );
  collageItems.forEach((elem) => {
    ScrollTrigger.create({
      trigger: elem,
      start: "top 90%",
      end: "+=200px",
      toggleActions: "restart none reverse none",
      animation: gsap.from(elem, {
        autoAlpha: 0,
        y: 150,
        opacity: 0,
        duration: 0.5,
        ease: "power1.out",
      }),
    });
  });
});
</script>

<template>
  <div class="about-values">
    <div class="flex flex-col gap-[80px] sm:gap-[50px] phone:gap-[32px]">
      <h2 class="_h2-title">
        Our values and <br />
        commitments
      </h2>
      <div class="flex flex-col gap-[60px] lg:gap-[24px]" ref="trigger">
        <div
          v-for="item in VALUES_ENUM"
          ref="listItem"
          class="about-values-item"
        >
          <div
            class="flex items-start justify-between gap-[20px] pb-[60px] border-b border-gray-second sm:pb-[24px]"
          >
            <div
              class="left text-[24px] flex items-start gap-[4px] sm:text-[16px] phone:text-[14px] sm:flex-wrap"
            >
              <span class="flex-shrink-0">( {{ item.id }} )</span>
              <p class="text-gray-second">{{ item.title }}</p>
            </div>
            <p
              class="text-[32px] max-w-[555px] mr-[50px] xl:mr-0 xl:text-[24px] xl:max-w-[300px] sm:text-[18px] sm:max-w-[185px]"
            >
              {{ item.text }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
