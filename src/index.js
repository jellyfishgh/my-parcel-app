import './style.less'

import Vue from 'vue'
import React from 'react'
import ReactDOM from 'react-dom'

import('./VueApp').then(VueApp =>
  new Vue({
    render: h => h(VueApp.default)
  }).$mount('#vue')
)

import('./ReactApp').then(({ ReactApp }) =>
  ReactDOM.render(<ReactApp />, document.getElementById('react'))
)
