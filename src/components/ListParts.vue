<template>
  <div class="list-parts">
    <h1>{{title}}</h1>
    <ul>
    <li v-for="item in items">
      <lod-item v-bind:item="item"></lod-item>
    </li>
    </ul>
  </div>
</template>

<script>
import Vue from 'vue'
import VueResource from 'vue-resource'
import LodItem from './LodItem.vue'
Vue.use(VueResource)

export default {
  created () {
    this.about = encodeURI(this.about)
    this.$http
    .get(this.about)
    .then((items) => {
      this.items = items.data
    }, (error) => {
      console.error('ListParts', error)
    })
  },

  props: ['title', 'about', 'limit', 'offset'],

  components: {
    'lod-item': LodItem
  },

  data () {
    return {
      // Note: modifying `items` below will not cause changes to occur with
      // hot-reload. As reloaded components preserve their initial state,
      // modifying these values will have no effect.
      items: []
    }
  }
}
</script>
