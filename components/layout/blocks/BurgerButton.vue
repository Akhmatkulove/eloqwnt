<script setup lang="ts"></script>

<template>
  <button class="burger-button">
    <span></span>
    <span></span>
    <span></span>
  </button>
</template>

<style scoped lang="scss">
.burger-button {
  border-radius: 50%;
  width: 54px;
  height: 54px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  gap: 6px;
  flex-direction: column;
  align-items: center;
  padding: 0 17px;
  transition: all 0.3s ease-in-out;
  position: relative;
  overflow: hidden;
  &::before {
    content: "";
    background: var(--gray);
    position: absolute;
    width: 0;
    transition: all 0.3s ease-in-out;
    inset: 0;
    height: 100%;
  }
  span {
    height: 1px;
    background: #000;
    transition: all 0.3s ease-in-out;
    position: relative;
    z-index: 2;
    &:first-child {
      width: 12px;
      align-self: flex-end;
    }
    &:nth-child(2) {
      width: 18px;
    }
    &:last-child {
      width: 12px;
      align-self: flex-start;
    }
  }
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      &::before {
        width: 100%;
      }
      span {
        &:first-child {
          transform: rotate(30deg);
        }
        &:nth-child(2) {
          transform: rotate(30deg);
        }
        &:last-child {
          transform: rotate(30deg);
        }
      }
    }
  }
  @include adaptive(tablet-big) {
    width: 40px;
    height: 40px;
    gap: 4px;
    padding: 0 12px;
    span {
      &:first-child {
        width: 9px;
      }
      &:nth-child(2) {
        width: 14px;
      }
      &:last-child {
        width: 9px;
      }
    }
  }
}
</style>
