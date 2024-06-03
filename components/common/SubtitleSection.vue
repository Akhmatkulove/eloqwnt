<script setup lang="ts">
import VDot from "~/components/ui/VDot.vue";
import useGsap from "~/combosables/UseGsap";

const props = defineProps<{
  label: string;
  text?: string;
}>();

const { gsap } = useGsap();

const triggerItem = ref(null);
const dotItem = ref(null);
const textItem = ref(null);

function textFade() {
  gsap.from(textItem.value, {
    scrollTrigger: {
      trigger: triggerItem.value,
      toggleActions: "restart none reverse none",
      start: "top 70%",
      end: "+=100px",
    },
    x: 500,
    opacity: 0,
    ease: "power2.out",
    duration: 0.5,
  });
}

onMounted(() => {
  textFade();
});
</script>

<template>
  <div class="_container overflow-hidden" ref="triggerItem">
    <div class="max-w-[1400px] gap-[20px] flex items-start justify-between">
      <v-dot ref="dotItem" :label="label" class="flex-shrink-0" />
      <p
        ref="textItem"
        class="indent-[1em] text-[28px] lg:text-[20px] sm:text-[16px] basis-1/2"
      >
        {{ text }}
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
