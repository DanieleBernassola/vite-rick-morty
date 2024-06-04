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

  // Funzione ricerca personaggio
  methods: {
    searchChar() {
      axios.get(this.store.apiInfo.url, {
        params: {
          page: this.store.apiInfo.pageNumber
        }
      })
        .then((response) => {
          // Destrutturazione info e results
          const { info, results } = response.data

          this.store.info = info;
          this.store.results = results;
        })
    }
  },

  created() {
    console.log('chiama api rick e morty')
    // Richiama funzione ricerca
    this.searchChar()

    // axios.get(this.store.apiUrl).then(response => {
    //   this.store.info = response.data.info;
    //   this.store.results = response.data.results;)}
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