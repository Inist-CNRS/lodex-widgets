<template>
  <div id="app">
    <list-parts
     title="List parts"
     about="http://named-entity.lod.istex.fr/?alt=jsonld"
    >
    </list-parts>
    <lodex-widget items-selector=".lod-item"></lodex-widget>
  </div>
</template>

<script>
import ListParts from './components/ListParts.vue'
import LodexWidget from './components/LodexWidget.vue'

export default {
  components: {
    ListParts,
    LodexWidget
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
