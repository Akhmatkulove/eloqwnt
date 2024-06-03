<script setup lang="ts">
import VHeader from "~/components/layout/VHeader.vue";
import VDot from "~/components/ui/VDot.vue";
import FormSection from "~/components/common/FormSection.vue";
import FaqList from "~/components/common/FaqList.vue";
import FooterPart from "~/components/common/FooterPart.vue";
import useGsap from "~/combosables/UseGsap";
import { ref } from "vue";

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
  <div class="contacts">
    <div class="flex flex-col gap-[60px] lg:gap-[20px]">
      <div class="bg-white">
        <div class="_container flex flex-col pt-[40px] lg:pt-[20px]">
          <v-header />
          <h1
            ref="title"
            class="_h1-title text-center max-w-[1340px] mx-auto pt-[240px] pb-[224px] xl:pt-[180px] xl:pb-[140px] sm:pt-[120px] sm:pb-[52px] sm:max-w-[320px]"
          >
            Communicate right things to right people at right place at right
            time
          </h1>
        </div>
      </div>
      <div class="_container">
        <div
          class="_block-item flex flex-col gap-[200px] xl:gap-[120px] sm:gap-[56px]"
        >
          <div
            class="flex justify-between gap-y-[40px] gap-x-[20px] items-start xl:flex-col phone:gap-y-[28px]"
          >
            <v-dot label="It is time now" />
            <div class="max-w-[840px] w-full">
              <form-section />
            </div>
          </div>
          <div
            class="flex justify-between gap-y-[40px] gap-x-[20px] items-start xl:flex-col phone:gap-y-[28px]"
          >
            <v-dot label="Careers" />
            <div class="max-w-[840px] w-full">
              <div class="flex-col flex gap-[40px] max-w-[580px] md:gap-[24px]">
                <div class="flex flex-col gap-[28px]">
                  <h2 class="_h2-title">Join the team</h2>
                  <p class="text-[24px] md:text-[20px] sm:text-[16px]">
                    We’re always looking for new designers, copywriters, and
                    developers. Email your portfolio and a fun fact about you
                    to:
                  </p>
                </div>
                <nuxt-link
                  class="text-[32px] md:text-[24px] sm:text-[18px] text-gray-second"
                  to="mailto:hi@eloqwnt.com"
                >
                  ( hi@eloqwnt.com )
                </nuxt-link>
              </div>
            </div>
          </div>
          <div
            class="flex justify-between gap-y-[40px] gap-x-[20px] items-start xl:flex-col phone:gap-y-[28px]"
          >
            <v-dot label="Studio" />
            <div class="max-w-[840px] w-full">
              <div class="flex-col flex gap-[40px] max-w-[700px]">
                <div class="flex flex-col gap-[64px]">
                  <h2 class="_h2-title">FAQ</h2>
                  <faq-list />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="_container mt-[20px]">
        <footer-part />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.contacts {
}
</style>
