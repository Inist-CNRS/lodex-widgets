/* global describe, it, expect */

import Vue from 'vue'
import LodWidget from '../../src/components/LodWidget.vue'

describe('LodWidget.vue', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      template: `
      <div>
        <p
          class="target"
          about="http://article-type.lod.istex.fr/=/research-article">
          research-article
        </p>
        <lod-widget
          items-selector="p.target"
        ></lod-widget>
      </div>`,
      components: { LodWidget }
    }).$mount()
    expect(vm.$el.querySelector('.html5tooltip-box')).toBeDefined()
  })
})

// also see example testing a component with mocks at
// https://github.com/vuejs/vueify-example/blob/master/test/unit/a.spec.js#L22-L43
