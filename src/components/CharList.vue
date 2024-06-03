<script>
import { store } from '../store'
export default {
  name: 'CharList',
  data() {
    return {
      store
    }
  },
}
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-25" v-for="character in store.results">
        <img class="radius" :src="character.image" :alt="character.name">
        <h2 class="mb-1">{{ character.name }}</h2>
        <p>{{ character.status }}</p>
        <p>{{ character.species }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>