import React from 'react'
import ReactDOM from 'react-dom'
import Router from './router'
import 'lib-flexible'
import '@/style/index.less'

console.log('Project is running at http://10.9.112.9:8080/')
ReactDOM.render(
    <Router />,
    document.getElementById('root')
)