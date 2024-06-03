<script setup lang="ts">
import { EXPERTISE_ENUM } from "~/enums/ExpertiseEnum.js";
const { gsap, ScrollTrigger } = useGsap();

import { onMounted } from "vue";
import useGsap from "~/combosables/UseGsap";
let mm = gsap.matchMedia();

onMounted(() => {
  const centerImages = Array.from(
    document.querySelectorAll(".expertise-center-img"),
  );
  const leftImages = Array.from(
    document.querySelectorAll(".expertise-right-img"),
  );
  const textArray = Array.from(
    document.querySelectorAll(".about-expertise-text"),
  );
  function desktopAnim() {
    mm.add("(min-width: 621px)", () => {
      centerImages.forEach((elem) => {
        ScrollTrigger.create({
          trigger: elem,
          start: "top 30%",
          end: "+=200px",
          animation: gsap.from(elem, {
            xPercent: 50,
            opacity: 1,
            right: "50%",
            duration: 0.8,
            ease: "expoScale(0.5,7,none)",
          }),
        });
      });
      leftImages.forEach((elem) => {
        ScrollTrigger.create({
          trigger: elem,
          start: "top 30%",
          end: "+=200px",
          animation: gsap.from(elem, {
            opacity: 1,
            right: "100%",
            xPercent: 100,
            duration: 0.8,
            ease: "expoScale(0.5,7,none)",
          }),
        });
      });
      textArray.forEach((elem) => {
        ScrollTrigger.create({
          trigger: elem,
          start: "top 50%",
          end: "+=200px",
          animation: gsap.from(elem, {
            autoAlpha: 0,
            opacity: 0,
            y: "150",
            duration: 0.5,
            delay: 0.2,
            ease: "power1.out",
          }),
        });
      });
    });
  }
  function mobileAnim() {
    mm.add("(max-width: 620px)", () => {
      centerImages.forEach((elem) => {
        ScrollTrigger.create({
          trigger: elem,
          start: "top 50%",
          animation: gsap.to(elem, {
            xPercent: 70,
            opacity: 1,
            right: "50%",
            duration: 0.5,
            ease: "expoScale(0.5,7,none)",
          }),
        });
      });
      leftImages.forEach((elem) => {
        ScrollTrigger.create({
          trigger: elem,
          start: "top 50%",
          animation: gsap.to(elem, {
            opacity: 1,
            right: "80%",
            xPercent: 100,
            duration: 0.5,
            ease: "expoScale(0.5,7,none)",
          }),
        });
      });
    });
  }
  if (window.innerWidth > 389) {
    mobileAnim();
  }
  desktopAnim();
});
</script>

<template>
  <div class="about-expertise">
    <div class="_container">
      <h2 class="_h2-title mb-[24px]">Our expertise</h2>
      <div class="flex flex-col gap-[20px]">
        <div
          v-for="item in EXPERTISE_ENUM"
          class="item flex items-center gap-[40px] justify-between"
        >
          <ul
            class="about-expertise-text left-part flex flex-col gap-[40px] pl-[30px] shrink-0 xl:gap-[20px] w-[260px] md:gap-[12px] sm:hidden"
          >
            <li
              class="text-gray-second list-disc md:text-[16px]"
              v-for="el in item.text"
            >
              {{ el }}
            </li>
          </ul>
          <div
            :class="item.classImg"
            class="main-block-part ml-auto bg-white p-[48px] max-w-[794px] w-full aspect-[794/600] rounded-[20px] flex flex-col relative xl:max-w-[600px] lg:p-[24px] sm:max-w-[286px] sm:rounded-[7px] sm:p-[16px]"
          >
            <h3
              class="text-[48px] xl:text-[32px] md:text-[24px] sm:text-[18px]"
            >
              {{ item.title }}
            </h3>
            <div class="flex items-end justify-between mt-auto gap-[20px]">
              <ul
                class="hidden text-[12px] text-gray-second flex-col gap-[3px] sm:flex"
              >
                <li v-for="el in item.text">
                  {{ el }}
                </li>
              </ul>
              <img
                :src="item.image"
                alt=""
                decoding="async"
                class="object-cover w-[339px] aspect-[339/218] rounded-[15px] ml-auto lg:w-[240px] md:w-[180px] sm:w-[108px] sm:rounded-[4px]"
              />
            </div>
            <!--	    dotBLOCK      -->
            <span
              class="bg-black w-[12px] h-[12px] rounded-full absolute right-[70px] top-[70px] xl:right-[40px] xl:top-[40px] md:right-[20px] md:top-[20px] sm:w-[5px] sm:h-[5px]"
            ></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.about-expertise {
  .main-block-part {
  }
  @media screen and (max-width: 400px) {
    .expertise-center-img {
      margin-right: 50px;
    }
  }
}
</style>
