<script setup lang="ts">
import VDot from "~/components/ui/VDot.vue";
import { INDEX_PORTFOLIO_ENUM } from "~/enums/IndexPortfolioEnum";
import useGsap from "~/combosables/UseGsap";
import { onMounted } from "vue";

const { gsap, ScrollTrigger } = useGsap();

const listItem = ref(null);
const trigger = ref(null);
let mm = gsap.matchMedia();
onMounted(() => {
  const imagesRight = Array.from(document.querySelectorAll(".image-right"));
  const imagesLeft = Array.from(document.querySelectorAll(".image-left"));
  const sideTextLeft = Array.from(
    document.querySelectorAll(".index-content-text-left"),
  );
  const sideTextRight = Array.from(
    document.querySelectorAll(".index-content-text-right"),
  );
  imagesRight.forEach((elem) => {
    ScrollTrigger.create({
      trigger: elem,
      start: "top 70%",
      end: "+=40%",
      scrub: 0.8,
      toggleActions: "restart none reverse none",
      animation: gsap.from(elem, {
        xPercent: -50,
        scale: 1.2,
        duration: 1,
        ease: "power1.out",
      }),
    });
  });
  imagesLeft.forEach((elem) => {
    ScrollTrigger.create({
      trigger: elem,
      start: "top 70%",
      end: "+=400px",
      scrub: 0.8,
      toggleActions: "restart none reverse none",
      animation: gsap.from(elem, {
        xPercent: 50,
        scale: 1.2,
        duration: 1,
        ease: "power1.out",
      }),
    });
  });
  sideTextLeft.forEach((elem) => {
    ScrollTrigger.create({
      trigger: elem,
      start: "top 90%",
      end: "+=200px",
      toggleActions: "restart none reverse none",
      animation: gsap.from(elem, {
        autoAlpha: 0,
        xPercent: 50,
        opacity: 0,
        delay: 0.2,
        duration: 0.5,
        ease: "power1.out",
      }),
    });
  });
  sideTextRight.forEach((elem) => {
    ScrollTrigger.create({
      trigger: elem,
      start: "top 90%",
      end: "+=200px",
      toggleActions: "restart none reverse none",
      animation: gsap.from(elem, {
        autoAlpha: 0,
        xPercent: -50,
        opacity: 0,
        delay: 0.2,
        duration: 0.5,
        ease: "power1.out",
      }),
    });
  });
});
</script>

<template>
  <div class="index-content _container">
    <div class="_block-item">
      <div ref="trigger" class="flex flex-col gap-[150px] lg:gap-[100px]">
        <div
          v-for="item in INDEX_PORTFOLIO_ENUM"
          class="item flex gap-[82px] xl:gap-[40px] lg:flex-col index-content-item"
          :class="item.class"
          ref="listItem"
        >
          <div
            :class="item.textClass"
            class="text flex flex-col gap-[24px] text-[28px] flex-1 min-w-[400px] xl:text-[20px] lg:min-w-[unset] lg:gap-[16px]"
          >
            <v-dot :label="item.title" />
            <div>
              <p>
                {{ item.desc }}
              </p>
              <span class="text-gray-second block leading-[1.6]">
                ( {{ item.year }} )
              </span>
            </div>
            <span class="id text-gray-second block mt-auto lg:hidden"
              >( {{ item.id }} )</span
            >
          </div>
          <div
            :class="item.imgClass"
            class="image-wrapper relative z-10 flex items-end max-w-[734px] w-full"
          >
            <span class="id text-gray-second mt-auto hidden lg:block"
              >( {{ item.id }} )</span
            >
            <div
              class="image rounded-[20px] overflow-hidden relative lg:rounded-[10px]"
            >
              <img src="/example.png" alt="" decoding="async" class="_ibg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.index-content {
  .right .image {
    max-width: 734px;
    width: 100%;
    margin-left: auto;
    aspect-ratio: 734/555;
    @include adaptive(tablet-big) {
      max-width: 60%;
    }
  }
  .left .image-wrapper {
    order: -1;
    max-width: 794px;
    width: 100%;
    @include adaptive(tablet-big) {
      order: 1;
      span {
        margin-left: auto;
      }
    }
  }
  .left .image {
    width: 100%;
    aspect-ratio: 794/600;
    @include adaptive(tablet-big) {
      max-width: 70%;
      order: -1;
    }
  }

  .left .id {
    align-self: flex-end;
  }
}
</style>
