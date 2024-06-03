<script setup lang="ts">
import VHeader from "~/components/layout/VHeader.vue";

import useGsap from "~/combosables/UseGsap";
import { WORKS_ENUM } from "~/enums/WorksEnum";
const { gsap } = useGsap();

const title = ref(null);
import useWorkApi from "~/api/useWorkApi";
import type { IWork } from "~/interface/IWork";
import VSkeleton from "~/components/ui/VSkeleton.vue";
import { ref } from "vue";

const isLoading = ref<boolean>(false);

const { getWorkList } = useWorkApi();
const works = ref<IWork[]>();
function wordFade() {
  gsap.from(title.value, {
    opacity: 0,
    duration: 0.7,
    yPercent: 50,
    ease: "power4.out",
    stagger: 0.1,
  });
}

onMounted(async () => {
  isLoading.value = true;
  works.value = await getWorkList();
  isLoading.value = false;
});
onMounted(() => {
  wordFade();
});
</script>

<template>
  <div class="works bg-white min-h-[100vh]">
    <div class="pt-[40px] lg:pt-[20px] _container">
      <div class="flex flex-col">
        <v-header />
        <h1
          ref="title"
          class="_h1-title text-center max-w-[1300px] pt-[240px] pb-[190px] mx-auto xl:pt-[160px] xl:pb-[80px]"
        >
          We create solutions but most importantly we identify problems
        </h1>
        <div class="flex flex-col gap-[130px]">
          <div class="items">
            <transition-group name="blur">
              <div v-if="isLoading" class="item-wrapper" v-for="item in 6">
                <div class="item">
                  <div class="image">
                    <v-skeleton class="_ibg" />
                  </div>
                  <div class="flex items-start justify-between gap-[20px]">
                    <v-skeleton
                      class="h-[28px] w-[200px] xl:h-[20px] phone:h-[14px] rounded-[10px]"
                    />
                    <v-skeleton
                      class="h-[28px] w-[50px] xl:h-[20px] phone:h-[14px] rounded-[10px]"
                    />
                  </div>
                </div>
              </div>
              <div v-else v-for="item in works" class="item-wrapper">
                <nuxt-link :to="`/works/${item.id}`" class="item">
                  <div class="image">
                    <div
                      :class="{ dark: item.is_tag_dark }"
                      class="tag flex items-center gap-[12px] sm:gap-[10px]"
                    >
                      <span class="rounded-full block"></span>
                      <p>
                        {{ item.tag }}
                      </p>
                    </div>
                    <img
                      :src="item.work_preview"
                      alt=""
                      decoding="async"
                      class="_ibg"
                    />
                  </div>
                  <div class="text flex items-start justify-between gap-[20px]">
                    <p class="line-clamp-3">
                      {{ item.title }} -
                      <span class="text-gray-second">{{ item.year }}</span>
                    </p>
                    <span class="text-gray-second">({{ item.id }})</span>
                  </div>
                </nuxt-link>
              </div>
            </transition-group>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.works {
  .items {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: 20px;
    row-gap: 80px;
  }
  .item-wrapper {
    grid-column: span 2;
    &:nth-child(6n),
    &:nth-child(6n - 1) {
      grid-column: span 1;
      .tag {
        font-size: 14px;
        span {
          bottom: 0;
        }
      }
      .text {
        font-size: 20px;
      }
      .image {
        aspect-ratio: 387 / 300;
      }
    }
  }
  .item {
    display: flex;
    flex-direction: column;
    gap: 28px;
  }
  .image {
    border-radius: 20px;
    overflow: hidden;
    position: relative;
    aspect-ratio: 794 / 600;
  }
  .text {
    font-size: 28px;
  }
  .tag {
    position: absolute;
    right: 16px;
    top: 16px;
    z-index: 2;
    color: white;
    padding: 16px;
    border-radius: 60px;
    border: 1px solid white;
    p {
      line-height: 0.5;
    }
    span {
      width: 8px;
      height: 8px;
      background: white;
      position: relative;
      bottom: 2px;
    }
    &.dark {
      color: black;
      border: 1px solid black;
      span {
        background: black;
      }
    }
  }
  @include adaptive(desktop-small) {
    .item {
      gap: 12px;
    }
    .text {
      font-size: 20px;
    }
    .item-wrapper {
      &:nth-child(6n),
      &:nth-child(6n - 1) {
        .tag {
          font-size: 10px;
          padding: 8px;
          gap: 3px;
          span {
            width: 3px;
            height: 3px;
            bottom: 1px;
          }
        }
        .text {
          font-size: 14px;
        }
        .image {
          aspect-ratio: 387 / 300;
          border-radius: 12px;
        }
        .item {
          gap: 6px;
        }
      }
    }
  }
  @include adaptive(tablet-small) {
    .items {
      gap: 10px;
      grid-template-columns: 1fr;
    }
    .item-wrapper {
      grid-column: span 1;
      margin-bottom: 14px;
      &:nth-child(3n),
      &:nth-child(4n) {
        max-width: 50%;
        width: 100%;
      }
      &:nth-child(3n) {
        margin-bottom: 0;
      }
      &:nth-child(4n) {
        margin-left: auto;
      }
    }
    .tag {
      right: 8px;
      top: 8px;
      padding: 7px;
      border-radius: 25px;
      font-size: 14px;
      gap: 5px;
      span {
        width: 3px;
        height: 3px;
        background: white;
      }
    }
    .image {
      aspect-ratio: 330 / 250;
      border-radius: 10px;
    }
    .text {
      font-size: 20px;
    }
  }
  @include adaptive(phone) {
    .text {
      font-size: 14px;
    }
    .item-wrapper {
      &:nth-child(6n),
      &:nth-child(6n - 1) {
        .image {
          aspect-ratio: 160 / 120;
          border-radius: 5px;
        }
        .tag {
          padding: 3px;
          span {
            bottom: 0;
          }
        }
      }
    }
  }
}
.blur-enter-from {
  filter: blur(1rem);
}
.blur-enter-active,
.blur-leave-active {
  transition: 0.4s ease-in-out;
}
.blur-leave-to {
  filter: blur(1rem);
}
</style>
