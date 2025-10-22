<script setup lang="ts">
import type { NuxtError } from "#app";

defineProps({
  error: Object as () => NuxtError & { data?: { path?: string } },
});
</script>

<template>
  <main class="flex flex-col items-center justify-center w-screen h-screen gap-2 text-white bg-black">
    <h1 class="font-semibold leading-none mb-4 sm:text-[110px] tabular-nums text-[80px]">
      404
    </h1>
    <p>What you looking for bro? The site is in progress right now. Have patience habibi.</p>
    <p v-if="error?.data?.path === '/contact'">
      But you can reach me on
      <a
        href="https://linkedin.com/in/jahan--shah"
        target="_blank"
        rel="noopener noreferrer"
        class="underline"
      >LinkedIn</a>
      .
      <a
        href="https://github.com/jahan-shah"
        target="_blank"
        rel="noopener noreferrer"
        class="underline"
      >Github</a>
      .
      <a
        href="https://x.com/jahan___shah"
        target="_blank"
        rel="noopener noreferrer"
        class="underline"
      >Twitter</a>
    </p>
  </main>
</template>

<style scoped>
@import "tailwindcss";
</style>
