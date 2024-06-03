<script setup lang="ts"></script>

<template>
  <div class="article-item">
    <div class="flex flex-col gap-[20px] md:gap-[16px]">
      <div class="image">
        <span class="id">( 03 )</span>
        <img class="_ibg" src="/example.png" alt="" decoding="async" />
        <span class="tag">( Web Design )</span>
      </div>
      <div class="flex flex-col gap-[12px] md:gap-[5px]">
        <div class="title text-[28px] lg:text-[24px] phone:text-[18px]">
          Lorem ipsum dolor
        </div>
        <p class="text line-clamp-2 text-gray-second phone:text-[14px]">
          Lorem ipsum dolor sit amet consectetur. Lectus egestas in elit tellus
          aenean non mi.
        </p>
        <div
          class="tags flex items-center gap-[12px] flex-wrap md:mt-[3px] phone:text-[14px]"
        >
          <span>#userexperience</span>
          <span>#visual</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.article-item {
  .image {
    position: relative;
    aspect-ratio: 523 / 261;
    border-radius: 20px;
    object-fit: cover;
    overflow: hidden;
  }
  .id {
    position: absolute;
    color: red;
    top: 16px;
    left: 16px;
    z-index: 2;
  }
  .tag {
    position: absolute;
    right: 16px;
    bottom: 16px;
  }
  &:first-child,
  &:nth-child(9n) {
    grid-column: span 2;
    .image {
      aspect-ratio: 1065 / 464;
    }
    .title {
      font-size: 32px;
    }
  }
  @include adaptive(tablet-big) {
    &:first-child,
    &:nth-child(9n) {
      grid-column: span 1;
      .title {
        font-size: 24px;
      }
    }
  }
  @include adaptive(tablet-small) {
    .id {
      top: 8px;
      left: 8px;
      font-size: 14px;
    }
    .tag {
      right: 8px;
      bottom: 8px;
      font-size: 14px;
    }
    .image {
      border-radius: 10px;
      aspect-ratio: 330 / 194;
    }
    &:first-child,
    &:nth-child(9n) {
      .title {
        font-size: 24px;
      }
      .image {
        aspect-ratio: 330 / 194;
      }
    }
  }
  @include adaptive(phone) {
    &:first-child,
    &:nth-child(9n) {
      .title {
        font-size: 18px;
      }
    }
  }
}
</style>
