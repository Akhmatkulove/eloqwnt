<script setup lang="ts">
const props = defineProps<{
  label: string;
}>();
</script>

<template>
  <div class="flex items-center gap-[12px] sm:gap-[10px]">
    <span class="bg-black rounded-full w-[8px] h-[8px] block"></span>
    <p class="text text-[20px] leading-none sm:text-[16px]">{{ label }}</p>
  </div>
</template>
