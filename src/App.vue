<template>
  <div id="app">
    <list-parts
     title="List parts"
     about="http://named-entity.lod.istex.fr/?alt=jsonld"
    >
    </list-parts>
  </div>
</template>

<script>
import ListParts from './components/ListParts.vue'

export default {
  components: {
    ListParts
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
