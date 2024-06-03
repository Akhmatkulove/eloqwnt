<script setup lang="ts">
import VHeader from "~/components/layout/VHeader.vue";
import useGsap from "~/combosables/UseGsap";
import ArticleItem from "~/components/article-section/ArticleItem.vue";
const title = ref(null);
const { gsap } = useGsap();

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
  <div class="articles">
    <div class="bg-white min-h-[100vh]">
      <div class="_container">
        <v-header class="pt-[40px] lg:pt-[20px]" />
        <div
          ref="title"
          class="pt-[160px] pb-[80px] flex flex-col gap-[50px] xl:gap-[30px] lg:gap-[12px] lg:pt-[130px] sm:text-center sm:items-center sm:pb-[20px]"
        >
          <h1 class="_h1-title">Our Blog</h1>
          <h2
            class="text-[32px] max-w-[750px] xl:text-[24px] sm:text-[16px] sm:max-w-[300px]"
          >
            Lorem ipsum dolor sit amet consectetur. Tortor pellentesque blandit
            faucibus libero sed maecenas amet.
          </h2>
        </div>
        <div class="articles-wrapper">
          <article-item v-for="item in 10" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.articles {
  .articles-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 20px;
    row-gap: 80px;
    @include adaptive(tablet-big) {
      grid-template-columns: 1fr;
      row-gap: 40px;
    }
  }
}
</style>
