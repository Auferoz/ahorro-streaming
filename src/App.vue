<script setup>
</script>

<template>
  <router-view />
</template>

<style>

  .text-primary {
      color: #002EFF;
  }

  .text-subtext {
      color: #66686C;
  }

  .bg-subcolor {
    background: var(--color-neutral-bg-fill-lighter, #F7F7F7);
  }
  
  p :deep(strong) {
        font-weight: 600;
  }

  .p-40 {
      padding: 16px;
  }

  @media screen and (min-width: 420px) {

    .p-40 {
        padding: 40px;
    }

  }

</style>
