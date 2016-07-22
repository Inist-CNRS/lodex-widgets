/* global describe, it, expect */

import Vue from 'vue'
import ListParts from '../../src/components/ListParts.vue'
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

describe('ListParts.vue', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      template: `
      <div>
      <list-parts
        title="List Parts"
        about="http://named-entity.lod.istex.fr/?alt=jsonld"
      >
      </list-parts>
      </div>`,
      components: { ListParts }
    }).$mount()
    expect(vm.$el.querySelector('.list-parts h1').textContent).toBe('List Parts')
    // expect(vm.$el.querySelectorAll('.list-parts li').length).toBe(10)
  })
})

// also see example testing a component with mocks at
// https://github.com/vuejs/vueify-example/blob/master/test/unit/a.spec.js#L22-L43
