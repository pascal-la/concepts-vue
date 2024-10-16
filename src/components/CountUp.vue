<template>
  <span>
    {{ Math.round(count) }}
  </span>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';

const INTERVAL_TIME = 10;

const props = withDefaults(
  defineProps<{
    from?: number,
    to: number,
    durationInSeconds?: number
  }>(), { from: 0, durationInSeconds: 3 }
);

const count = ref(0);
const duration = ref(props.durationInSeconds * 1000);
const step = ref(((props.to - props.from) * INTERVAL_TIME) / duration.value);

let interval: ReturnType<typeof setInterval>;;

onMounted(() => {
  interval = setInterval(() => {
    if (count.value + step.value < props.to) {
      return count.value = count.value + step.value;
    };
    clearInterval(interval)
    return (count.value = props.to)
  }, INTERVAL_TIME);
});

onUnmounted(() => clearInterval(interval));
</script>
