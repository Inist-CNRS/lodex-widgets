<template>
  <span about="{{about}}">{{id}}: {{title}}</span>
</template>

<script>
/**
 * Get the value of the field which URI is given in parameter,
 * and declared in the @content part of the JSON-LD
 *
 * @param  {Object}   input
 * @param  {String}   arg   URI of the field, or [URI, lang]
 */
const getJsonLdField = (input, arg) => {
  if (!input) {
    return null
  }
  const uri = Array.isArray(arg) ? arg[0] : arg
  let lang = Array.isArray(arg) ? arg[1] : null
  const context = input['@context']
  let fieldName
  for (let _fieldName in context) {
    if (context[_fieldName]['@id'] === uri) {
      if (!lang) {
        fieldName = _fieldName
        lang = context[_fieldName]['@language']
        break
      }
      if (context[_fieldName]['@language'] === lang) {
        fieldName = _fieldName
        break
      }
    }
  }
  if (!fieldName) {
    return undefined
  }
  const res = {
    uri: uri,
    content: input[fieldName]
  }
  if (lang) {
    res.language = lang
  }
  return res
}

export default {
  created () {
    this.about = this.item['@id']
    this.id = getJsonLdField(this.item, 'http://purl.org/dc/elements/1.1/identifier').content
    this.title = getJsonLdField(this.item, 'http://purl.org/dc/terms/title').content
  },

  props: ['item'],

  data () {
    return {
      about: '',
      id: '',
      title: ''
    }
  }
}
</script>
