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
  <div class="row">
    <div class="col-25" v-for="character in store.results">
      <img class="radius" :src="character.image" :alt="character.name">
      <h2>{{ character.name }}</h2>
      <div class="my-2">
        <p>{{ character.status }}</p>
        <p>{{ character.species }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>