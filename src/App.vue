<template>
  <div id="app">
    <lod-list
     title="LOD List parts"
     about="http://named-entity.lod.istex.fr/?alt=jsonld"
    >
    </lod-list>
    <lodex-widget items-selector=".lod-item"></lodex-widget>
  </div>
</template>

<script>
import LodList from './components/LodList.vue'
import LodexWidget from './components/LodexWidget.vue'

export default {
  components: {
    LodList,
    LodexWidget
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
