<template>
  <div id="app">
    <lod-list
     title="LOD List parts"
     about="http://named-entity.lod.istex.fr/?alt=jsonld"
    >
    </lod-list>
    <lod-widget items-selector=".lod-item"></lod-widget>
  </div>
</template>

<script>
import LodList from './components/LodList.vue'
import LodWidget from './components/LodWidget.vue'

export default {
  components: {
    LodList,
    LodWidget
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
