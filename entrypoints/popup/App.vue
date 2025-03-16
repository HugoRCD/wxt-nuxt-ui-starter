<script lang="ts" setup>
import { ref } from 'vue'
import Logo from '@/components/Logo.vue'
import ColorModeButton from '@/components/ColorModeButton.vue'

const count = ref(0)
</script>

<template>
  <UApp>
    <UCard class="size-60 relative">
      <ColorModeButton class="absolute right-2 top-2" size="xs" />
      <div class="flex flex-col gap-4">
        <Logo class="w-fit h-6 shrink-0" />
        <UButton label="Increment" class="w-fit" @click="count++" />
        <span class="text-2xl font-bold">
          Count: {{ count }}
        </span>
      </div>
    </UCard>
  </UApp>
</template>
