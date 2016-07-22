/* global describe, it, expect */

import Vue from 'vue'
import LodItem from '../../src/components/LodItem.vue'

describe('LodItem.vue', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      template: `
      <div>
      <lod-item :item="{
        '@id':'http://named-entity.lod.istex.fr/=/nom-de-personne',
        '@context':{
          '_root':{
            '@id':'http://purl.org/dc/terms/isPartOf'
          },
          '_wid':{
            '@id':'http://purl.org/dc/elements/1.1/identifier'
          },
          _description:{
            '@id':'http://purl.org/dc/terms/title','@language':null
          }
        },
        _root:'http://named-entity.lod.istex.fr/',
        _wid:'nom-de-personne',
        _description:'persName'
      }"></lod-item>
      </div>`,
      components: { LodItem }
    }).$mount()
    expect(vm.$el.querySelector('span.lod-item').textContent).not.toBe('')
    expect(vm.$el.querySelector('span.lod-item').textContent).toBe('nom-de-personne: persName')
    expect(vm.$el.querySelector('span.lod-item[about="http://named-entity.lod.istex.fr/=/nom-de-personne"]').textContent).toBe('nom-de-personne: persName')
  })
})

// also see example testing a component with mocks at
// https://github.com/vuejs/vueify-example/blob/master/test/unit/a.spec.js#L22-L43
