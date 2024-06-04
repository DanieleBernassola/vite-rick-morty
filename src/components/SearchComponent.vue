<script>
import axios from 'axios';
import { store } from '../store';
export default {
  name: 'SearchComponent',
  data() {
    return {
      store
    }
  },
  methods: {
    getStatus() {
      axios.get(this.store.apiInfo.url + this.store.apiInfo.endpoints.status).then(response => {
        console.log(response)
        this.store.status = response.data.results.status
      })
    }
  },
  created() {
    this.getStatus()
  }
}
</script>

<template>
  <div class="row">
    <div class="col">
      <select class="form-select">
        <option selected>Select status</option>
        <option v-for="status in store.status">{{ status }}</option>
        <!-- <option value="alive">Alive</option>
        <option value="dead">Dead</option>
        <option value="unknown">Unknown</option> -->
      </select>

      <button type="button" class="btn btn-primary">Search</button>
      <button type="button" class="btn btn-warning">Reset</button>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>