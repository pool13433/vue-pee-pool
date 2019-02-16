<template>
  <div>
    <h1>Page 1</h1>
    {{ $store.state.page1.count }}
    <button
      class="ui blue button"
      v-on:click="$store.dispatch('page1/increment')"
    >Count ++</button>
  </div>
</template>
<script>
export default {};
</script>