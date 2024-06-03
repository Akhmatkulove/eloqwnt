<script setup lang="ts">
import FormSection from "~/components/common/FormSection.vue";
import FooterPart from "~/components/common/FooterPart.vue";


</script>

<template>
  <div class="bottom-section flex flex-col gap-[80px]">
    <div class="flex flex-col gap-[50px] lg:gap-[20px]">
      <div class="contact-us">Contact us</div>
      <div class="flex items-start justify-between gap-[40px] lg:flex-wrap">
        <h2 class="_h2-title flex-shrink-0">
          Want to make <br />
          an impact?
        </h2>
        <form-section />
      </div>
    </div>
    <footer-part />
  </div>
</template>

<style scoped lang="scss">
.bottom-section {
  .contact-us {
    width: fit-content;
    border-radius: 72px;
    border: 1px solid var(--gray-second);
    padding: 12px 24px;
    color: var(--gray-second);
    font-size: 16px;
    @include adaptive(tablet-big) {
      font-size: 14px;
      padding: 12px 20px;
    }
  }
}
</style>
