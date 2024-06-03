<script setup lang="ts">
import AboutMain from "~/components/about-section/AboutMain.vue";
import SubtitleSection from "~/components/common/SubtitleSection.vue";
import AboutTeam from "~/components/about-section/AboutTeam.vue";
import AboutApproach from "~/components/about-section/AboutApproach.vue";
import AboutValues from "~/components/about-section/AboutValues.vue";
import BottomSection from "~/components/common/BottomSection.vue";
import AboutExperience from "~/components/about-section/AboutExpertise.vue";
import VDot from "~/components/ui/VDot.vue";
import useGsap from "~/combosables/UseGsap";

const { gsap } = useGsap();

const yodaTrigger = ref(null);
const yoda = ref(null);

function yodaGo() {
  gsap.from(yoda.value, {
    scrollTrigger: {
      trigger: yodaTrigger.value,
      start: "top 60%",
      end: "+=200px",
    },
    x: 500,
    opacity: 0,
    ease: "power2.out",
    duration: 0.5,
  });
}

onMounted(() => {
  yodaGo();
});
</script>

<template>
  <div class="about-page flex flex-col gap-[150px] lg:gap-[50px]">
    <div class="flex flex-col gap-[85px] lg:gap-[50px]">
      <about-main />
      <subtitle-section
        label="Who we are"
        text="We are explorers. We constantly explore ways to make an impact towards solving problems through design because we believe that it is effective communication language"
      />
      <about-team />
    </div>
    <about-approach />
    <about-experience />
    <div class="_container yoda-container" ref="yodaTrigger">
      <div class="flex justify-between gap-[20px] relative">
        <v-dot label="Our mission" />
        <p
          class="text-[64px] info-text max-w-[1000px] indent-[1em] lg:max-w-[unset] basis-[60%] text-right"
        >
          the world a better place with creative impactful solutions Making
        </p>
        <img
          class="rounded-[32px] h-[110px] absolute right-0 bottom-[-110px]"
          ref="yoda"
          alt="Yoda Himself"
          src="/yoda-himself.webp"
          decoding="async"
        />
      </div>
    </div>

    <div class="_container">
      <div class="_block-item flex flex-col gap-[150px] lg:gap-[50px]">
        <about-values />
        <bottom-section />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.about-page {
  cursor: url("/cursor/laser-sword.png"), auto !important;
  .info-text {
    font-size: clamp(16px, 4vw, 64px);
  }
  .yoda-container {
    contain: layout;
  }
}
</style>
