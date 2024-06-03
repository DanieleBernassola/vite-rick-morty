<script>
import { store } from '../store';
export default {
  name: 'FoundComponent',
  data() {
    return {
      store
    }
  }
}
</script>

<template>
  <div class="container">
    <p>Found 20 characters</p>
  </div>
</template>

<style lang="scss" scoped></style>