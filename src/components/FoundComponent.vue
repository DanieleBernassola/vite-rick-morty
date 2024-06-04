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
  <div class="row">
    <div class="col-100">
      <h4>Found 20 characters</h4>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>