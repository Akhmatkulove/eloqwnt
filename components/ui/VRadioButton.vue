<template>
  <label
    class="checkbox w-fit px-[50px] py-[25px] lg:px-[35px] lg:text-[16px] lg:py-[20px]"
  >
    <input
      type="radio"
      :value="value"
      :id="id"
      :checked="isChecked"
      @change="$emit('update:modelValue', $event.target.value)"
      class="_input-visible-none"
    />
    <span>
      {{ label }}
    </span>
  </label>
</template>

<script setup lang="ts">
import { computed, defineProps } from "vue";

const props = withDefaults(
  defineProps<{
    value?: string;
    modelValue?: string;
    label?: string;
    id: string;
  }>(),
  {
    value: undefined,
    modelValue: "",
  },
);

defineEmits(["update:modelValue"]);

const isChecked = computed(() => {
  return props.modelValue === props.value;
});
</script>

<style scoped lang="scss">
.checkbox {
  position: relative;
  cursor: pointer;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 80px;
  transition: all 0.3s ease;
  overflow: hidden;
  span {
    position: relative;
    z-index: 2;
  }
  &::before {
    content: "";
    position: absolute;
    height: 100%;
    width: 0;
    inset: 0;
    background: var(--gray);
    transition: all 0.3s ease;
  }
  &:has(input:checked) {
    &::before {
      width: 100%;
    }
  }
}
</style>
