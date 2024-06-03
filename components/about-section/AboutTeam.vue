<script setup lang="ts"></script>

<template>
  <div class="about-team _container">
    <div
      class="body pt-[16px] px-[16px] pb-[32px] bg-white rounded-[32px] max-w-[1250px] mx-auto"
    >
      <div class="item flex flex-col gap-[16px] md:w-1/2" v-for="item in 2">
        <div class="image rounded-[32px] relative aspect-square">
          <img src="/team-exml.png" alt="" decoding="async" class="_ibg" />
        </div>
        <div class="text-[22px] xl:text-[18px] lg:text-[14px]">
          <p>John Doe</p>
          <p class="text-gray-second">( Creative Director / Partner )</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.about-team {
  .body {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 16px;
    row-gap: 20px;
  }
  @include adaptive(tablet-small) {
    .body {
      grid-template-columns: 1fr;
    }
    .item:nth-child(2n) {
      margin-left: auto;
    }
  }
}
</style>
