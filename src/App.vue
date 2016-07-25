<template>
  <div id="app">
    <lod-list
     title="LOD List parts"
     about="http://named-entity.lod.istex.fr/?alt=jsonld"
    >
    </lod-list>
  </div>
</template>

<script>
import LodList from './components/LodList.vue'

export default {
  components: {
    LodList
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
