<script setup lang="ts">
const props = defineProps<{
  label?: string;
  modelValue?: string | number | null;
  placeholder?: string;
  name?: string;
  error?: boolean;
}>();
const updateValue = (event: any) => {
  emit("update:modelValue", event.target.value);
};
const emit = defineEmits(["update:modelValue"]);
</script>

<template>
  <div
    class="input flex flex-col gap-[32px] lg:gap-[28px]"
    :class="{ error: error }"
  >
    <label class="lg:text-[18px]" v-if="label">{{ label }}</label>
    <input
      :name="name"
      :placeholder="placeholder"
      :value="modelValue"
      @input="updateValue"
    />
  </div>
</template>

<style scoped lang="scss">
.input {
  width: 100%;
  input {
    background: none;
    outline: none;
    padding-bottom: 10px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    font-size: 18px;
    border-radius: 0;
    &::placeholder {
      color: rgba(0, 0, 0, 0.2);
    }
  }
  &.error {
    input {
      border-bottom: 1px solid #d84240;
      color: #d84240;
    }
	  label{
		  color: #d84240;

	  }
  }
  @include adaptive(tablet-big) {
    font-size: 16px;
  }
}
</style>
