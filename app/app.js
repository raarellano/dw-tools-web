import ReactDOM from 'react-dom'
import { AppRouter } from './router'
import $ from 'jquery'

$(document).ready(()=>{
  ReactDOM.render(
    AppRouter,
    document.getElementById('dw-tools')
  )
})
