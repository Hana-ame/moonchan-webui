<script setup lang="ts">
// import {} from '../node_modules/bootstrap/dist/css/bootstrap.css' // not work
import HelloWorld from './components/HelloWorld.vue'
import NoteCard from '@/components/NoteCard.vue'
import { msg } from '@/App'
</script>

<template>
  <NoteCard :msg="msg" show="both" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
