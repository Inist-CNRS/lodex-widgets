<template>

</template>

<script>
/*global HTML5TooltipUIComponent */
import 'html5tooltipsjs'
import JBJ from 'jbj'
import jbjRDFa from 'jbj-rdfa'
import jbjTemplate from 'jbj-template'
import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

JBJ.use(jbjRDFa)
JBJ.use(jbjTemplate)

console.log('jbj.filters', JBJ.filters)

export default {

  ready () {
    this.items = this.$root.$el.querySelectorAll(this.itemsSelector)
    if (!this.items.length) {
      console.error(`Selector ${this.itemsSelector} does not match any DOM element!`)
      return
    }
    for (let item of this.items) {
      const { attributes: { about: { value: uri }} } = item
      console.log(' ', uri)
      const target = this.getTarget(uri)
      const tooltipOptions = {
        target,
        color: 'cloud',
        stickTo: 'right'
      }
      console.log('étape 1', `${uri}?alt=jsonld`)
      console.log('data', this.$data)
      this
      .$http
      .get(`${uri}?alt=jsonld`)
      .then((response) => {
        console.log('étape 2', response.data)
        JBJ.render(
          this.jbj,
          response.data,
          (err, res) => {
            if (err) { console.error(err); return }
            res = `
              button onclick="closeTooltip('${uri}');" style="float:right">x</button>
              <p><a href="${uri}">Source</a></p>
              ${res}`
            tooltipOptions.contentText = res
            const tooltip = new HTML5TooltipUIComponent()
            tooltip.set(tooltipOptions)
            this.tooltips[uri] = tooltip
            document.body.appendChild(tooltip.elemets[0])

            target.addEventListener('mouseenter', this.showTooltip)
            if (!this.persistent) {
              target.addEventListener('mouseleave', this.hideTooltip)
            }
          }
        )
      }, (error) => {
        console.error('LodWidget', error)
      })

    }
  },

  methods: {

    getTarget (uri) {
      if (!this.eventTargets[uri]) {
        const selector = `${this.itemsSelector}[about="${uri}"]`
        const target = this.$root.$el.querySelector(selector)
        console.log(' target', target)
        this.eventTargets[uri] = target
      }
      return this.eventTargets[uri]
    },

    getTooltip (target) {
      const { attributes: { about: { value: uri }}} = target
      return this.tooltips[uri]
    },

    showTooltip (event) {
      for (let uri in this.tooltips) {
        this.tooltips[uri].hide()
      }
      const tooltip = this.getTooltip(event.target)
      tooltip.show()
    },

    hideTooltip (event) {
      const tooltip = this.getTooltip(event.target)
      tooltip.hide()
    }
  },

  props: {
    itemsSelector: {
      type: String,
      required: true
    },

    persistent: {
      type: Boolean,
      default: true
    },

    jbj: {
      type: Object,
      default () {
        return {
          get: 0,
          '$label': {
            getJsonLdField: 'http://www.w3.org/2008/05/skos-xl#prefLabel',
            get: 'content'
          },
          '$description': {
            getJsonLdField: 'http://www.w3.org/2004/02/skos/core#definition',
            get: 'content'
          },
          mask: 'label,description',
          'template': '<p>{{label}}</p>\n<p>{{description}}</p>'
        }
      }
    }
  },

  data () {
    return {
      items: [],
      tooltips: [],
      eventTargets: {}
    }
  }
}
</script>
