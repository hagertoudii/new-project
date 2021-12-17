import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import Navbar from '../Content/navbar'

function Test() {
  return (
    <>
      <h1> Manin JavaScript </h1>
      <Navbar />
    </>
  )

}





ReactDOM.render( <Test />, document.getElementById('root') )
