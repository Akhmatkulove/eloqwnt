<script setup lang="ts">
import IndexMain from "~/components/index/IndexMain.vue";
import BottomSection from "~/components/common/BottomSection.vue";
import SubtitleSection from "~/components/common/SubtitleSection.vue";
</script>

<template>
  <div class="index-page flex flex-col gap-[150px] lg:gap-[50px]">
    <div class="flex flex-col gap-[85px] lg:gap-[50px]">
      <index-main />
      <div class="attachment">
        <subtitle-section
          label="Portfolio"
          text="We create solutions but most importantly we identify problems."
        />
      </div>
    </div>
    <index-content />
    <div class="_container">
      <div class="flex justify-between gap-[20px]">
        <div>
          <span class="text-[48px] h-[34px] block lg:text-[24px] lg:h-[20px]">
            *
          </span>
          <div class="lg:text-[16px]">
            ( We’re <br class="hidden lg:block" />
            explorers )
          </div>
        </div>
        <p
          class="text-[64px] info-text max-w-[1000px] indent-[1em] lg:max-w-[unset] basis-[60%]"
        >
          Ceffectively with our studio's specialized design services that create
          impact and resonate with your audience.
        </p>
      </div>
    </div>
    <div class="_container">
      <div class="_block-item">
        <bottom-section />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.index-page {
  cursor: url("/cursor/dota-hand.png"), auto !important;
}
.info-text {
  font-size: clamp(16px, 4vw, 64px);
}
.attachment {
}
</style>
