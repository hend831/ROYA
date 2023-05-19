import React from 'react'
import {FaUserFriends} from 'react-icons/fa'
import "./style.css"
const Achievements = () => {
  return (
    <div className="container">
        <div>
      <h3>انجازاتنا المستمرة</h3>
      <p>هناك حقيقة مثبتة منذ زمن طويل وهي أن 
        المحتوى المقروء لصفحة ما سيلهي القارئ<br/> عن التركيز على
         الشكل الخارجي للنص أو 
         شكل توضع الفقرات في الصفحة التي يقرأها</p>
      </div>
      <div className="d-flex  justify-content-between mt-5">
      <div className="d-flex achive justify-content-between">
        <div >
            <h2>35+</h2>
            <h6>عملائنا</h6>
        </div>
        <div className="imicd d-flex justify-content-center align-items-center"><FaUserFriends className="lon"/></div>
      </div>

      <div className=" achive d-flex  justify-content-between">
        <div >
            <h2>08+</h2>
            <h6>مشاريع حالية</h6>
        </div>
        <div className="imicd d-flex justify-content-center align-items-center"><FaUserFriends className="lon"/></div>
      </div>

      <div className="d-flex achive justify-content-between">
        <div >
            <h2>56+</h2>
            <h6>مشاريع مكتملة</h6>
        </div>
        <div className="imicd d-flex justify-content-center align-items-center"><FaUserFriends className="lon"/></div>
      </div>

      <div className="d-flex achive justify-content-between">
        <div >
            <h2>05+</h2>
            <h6>الدول التى نعمل بها</h6>
        </div>
        <div className="imicd d-flex justify-content-center align-items-center"><FaUserFriends className="lon"/></div>
      </div>
      </div>
    </div>
  )
}

export default Achievements
