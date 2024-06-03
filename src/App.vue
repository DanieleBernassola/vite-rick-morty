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
  <h1>Vite Rick and Morty</h1>
  <SearchComponent></SearchComponent>
  <CharList></CharList>
  <FoundComponent></FoundComponent>
</template>

<style lang="scss" scoped>
h1 {
  text-align: center;
}
</style>