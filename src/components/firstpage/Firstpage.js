import React from 'react'
import {HiHome} from 'react-icons/hi';
import './firstpage.css'

const Firstpage = (props) => {
  return (
    <div className="about d-flex justify-content-center min-vh-100 align-items-center">
      <div>
      <h1>{props.title} </h1>
      <div className=" d-flex">
        <HiHome  className="icon"/>
        <h6 >  الرئيسية</h6>
        <small>{props.title}</small>
      </div>
      </div>
    </div>
  )
}

export default Firstpage
