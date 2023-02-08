<script setup lang="ts">
// import { ref } from 'vue'
import Card from '../components/Card.vue'


defineProps<{ msg: string }>()

</script>

<template>
  <h1>{{ msg }}</h1>
  <Card msg="msg1" />
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
