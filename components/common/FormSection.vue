<script setup lang="ts">
import VInput from "~/components/ui/VInput.vue";
import VCheckbox from "~/components/ui/VCheckbox.vue";
import VRadioButton from "~/components/ui/VRadioButton.vue";
import MainForm from "~/classes/MainForm";
import { ref } from "vue";
import useFormApi from "~/api/useFormApi";
import { BUDGET_ENUM } from "~/enums/BudgetEnum";
import { INTERESTED_ENUM } from "~/enums/InterestedEnum";
import { useVuelidate } from "@vuelidate/core";
import { required, helpers, email } from "@vuelidate/validators";
import VRadioCustom from "~/components/ui/VRadioCustom.vue";
import scrollToTop from "~/utils/scrollToTop";
import useGsap from "~/combosables/UseGsap";
import { onMounted } from "vue";

const newForm = ref<MainForm>(new MainForm());
const rules = computed(() => ({
  name: {
    required: helpers.withMessage("Enter your name", required),
  },
  email: {
    required: helpers.withMessage("Enter your email", required),
    email: helpers.withMessage("Invalid email format", email),
  },
}));
const v$ = useVuelidate<MainForm>(rules, newForm.value);

const { doPost } = useFormApi();

const submit = async () => {
  v$.value.$touch();
  if (!v$.value.$invalid) {
    await doPost(newForm.value);
    newForm.value.resetFields();
    v$.value.$reset();
  } else scrollToTop("mainForm");
};

const { gsap, ScrollTrigger } = useGsap();

onMounted(() => {
  const collageItems = Array.from(
    document.querySelectorAll(".main-form-anim-item"),
  );

  collageItems.forEach((elem) => {
    ScrollTrigger.create({
      trigger: elem,
      start: "top 95%",
      animation: gsap.from(elem, {
        autoAlpha: 0,
        y: 100,
        opacity: 0,
        duration: 0.5,
        ease: "power1.out",
      }),
    });
  });
});
</script>

<template>
  <form
    id="mainForm"
    class="form-section max-w-[850px] w-full flex flex-col gap-[44px] lg:gap-[28px] lg:max-w-full"
    @submit.prevent="submit"
  >
    <div class="main-form-anim-item flex gap-[28px] sm:flex-wrap">
      <div class="_input-wrapper">
        <v-input
          label="Name & Company"
          placeholder="Evan from Microsoft"
          name="name"
          v-model="newForm.name"
          :class="{ error: v$.name.$error }"
        />
        <transition-group name="fade">
          <span
            v-for="error of v$.name.$errors"
            :key="error.$uid"
            v-if="v$.name.$error"
          >
            {{ error.$message }}
          </span>
        </transition-group>
      </div>
      <div class="_input-wrapper">
        <v-input
          label="Your Email"
          placeholder="evan@microsoft.com"
          name="email"
          v-model="newForm.email"
          :class="{ error: v$.email.$error }"
        />
        <transition-group name="fade">
          <span
            v-for="error of v$.email.$errors"
            :key="error.$uid"
            v-if="v$.email.$error"
          >
            {{ error.$message }}
          </span>
        </transition-group>
      </div>
    </div>
    <div class="main-form-anim-item flex flex-col gap-[32px] lg:gap-[28px]">
      <div class="lg:text-[18px]">I’m interested in...</div>
      <div class="flex gap-[12px] flex-wrap">
        <v-checkbox
          v-for="item in INTERESTED_ENUM"
          :key="item.id"
          v-model="newForm.interested"
          :label="item.title"
        />
      </div>
    </div>
    <div class="main-form-anim-item flex flex-col gap-[32px] lg:gap-[28px]">
      <div class="lg:text-[18px]">Project Budget</div>
      <div class="flex gap-[12px] flex-wrap">
        <v-radio-custom @click="newForm.budget = '≤$5k'" label="Free" id="1" />
        <v-radio-button
          v-model="newForm.budget"
          v-for="item in BUDGET_ENUM"
          :value="item.title"
          :id="item.id"
          :label="item.title"
        />
      </div>
    </div>
    <div class="main-form-anim-item">
      <v-input
        label="Provide more information about your project"
        placeholder="Something about your project"
        v-model="newForm.more_info"
      />
    </div>
    <button
      type="submit"
      class="main-form-anim-item p-[20px] rounded-[90px] bg-black text-white text-[18px] max-w-[330px] mx-auto w-full"
    >
      Submit
    </button>
  </form>
</template>

<style scoped lang="scss">
.form-section {
  .fade-enter-active {
    transition: opacity 0.4s ease;
  }
  .fade-leave-active {
    transition: unset;
  }
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
}
</style>
