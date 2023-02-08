<script setup lang="ts">
// import { ref } from 'vue'
import NoteCard from '@/components/NoteCard.vue'
import { hasAncestor, hasChildren, type INoteType } from './NoteCard'


defineProps<{
  msg?: INoteType
  show: "both"|"ancestor"|"children"
}>()

</script>

<template>
  <!-- show ancestor if 'show' is not children -->
  <NoteCard v-if="show!=='children'&&hasAncestor(msg)" :msg="msg?.ancestor" show="ancestor"/>
  <!-- what the  -->
  <hr>
  <h1>{{ msg }}</h1>
  <div class="div">{{ show!=='children'&&hasAncestor(msg) }}</div>
  <div class="div">{{ typeof msg?.children }}</div>
  <div class="div">{{ show!=='ancestor'&&hasChildren(msg) }}</div>
  <hr>
  <!-- show children if 'show' is not ancestor -->
  <template v-if="show!=='ancestor'&&hasChildren(msg)">
    <NoteCard v-for="m of msg!.children" :msg="m" show="children"/>
  </template>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
