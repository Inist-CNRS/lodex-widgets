/* global describe, it, expect */

import Vue from 'vue'
import LodList from '../../src/components/LodList.vue'
// import namedEntity from './data/named-entity'

// // See https://github.com/vuejs/vue-resource/issues/198
// Vue.http.interceptors.unshift({

//   request (request) {

//     // client mock
//     request.client = (request) => {

//       var response = {request: request}

//       response.data = namedEntity
//       response.status = 200

//       return response

//     }
//   }

// })

describe('LodList.vue', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      template: `
      <div>
      <lod-list
        title="LOD List Parts"
        about="http://named-entity.lod.istex.fr/?alt=jsonld"
      >
      </lod-list>
      </div>`,
      components: { LodList }
    }).$mount()
    expect(vm.$el.querySelector('.lod-list h1').textContent).toBe('LOD List Parts')
    // expect(vm.$el.querySelectorAll('.lod-list li').length).toBe(10)
  })
})

// also see example testing a component with mocks at
// https://github.com/vuejs/vueify-example/blob/master/test/unit/a.spec.js#L22-L43
