<template>
  <label
    class="checkbox w-fit px-[50px] py-[25px] lg:px-[35px] lg:text-[16px] lg:py-[20px]"
  >
    <input
      type="checkbox"
      :checked="isChecked"
      @change="updateChecked"
      class="_input-visible-none"
    />
    <span>
      {{ label }}
    </span>
  </label>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";

const props = defineProps<{
  label: string;
  modelValue: string[]; // Теперь это массив выбранных значений
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: string[]): void;
}>();

const isChecked = ref(false);

const updateChecked = () => {
  isChecked.value = !isChecked.value;
  const newValue = isChecked.value
    ? [...props.modelValue, props.label]
    : props.modelValue.filter((val) => val !== props.label);
  emit("update:modelValue", newValue);
};

watch(
  () => props.modelValue,
  () => {
    isChecked.value = props.modelValue.includes(props.label);
  },
);
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
