<script>
import axios from 'axios';
import SearchComponent from './components/SearchComponent.vue';
import CharList from './components/CharList.vue';
import FoundComponent from './components/FoundComponent.vue';
import { store } from './store.js'

export default {
  name: 'appComponent',
  components: {
    SearchComponent,
    CharList,
    FoundComponent
  },
  data() {
    return {
      store
    }
  },

  created() {
    console.log('chiama api rick e morty')

    axios.get(this.store.apiUrl).then(response => {
      this.store.info = response.data.info;
      this.store.results = response.data.results;
    })
  }
}
</script>

<template>
  <div class="container">
    <h1>Rick and Morty App</h1>
    <SearchComponent></SearchComponent>
    <CharList></CharList>
    <FoundComponent></FoundComponent>
  </div>
</template>

<style lang="scss" scoped>
h1 {
  margin-top: 1rem;
  margin-bottom: 5rem;
  text-align: center;
}
</style>