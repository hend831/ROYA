import React from "react";
import "./partner.css";
import { IoIosArrowDropright } from "react-icons/io";
import { IoIosArrowDropleft } from "react-icons/io";
import NoPath from "../../assets/images/NoPath.png";
import NoPath1 from "../../assets/images/NoPath1.png";
import NoPath2 from "../../assets/images/NoPath2.png";
import NoPath3 from "../../assets/images/NoPath3.png";
import NoPath4 from "../../assets/images/NoPath4.png";
import NoPath5 from "../../assets/images/NoPath5.png";
import NoPath6 from "../../assets/images/NoPath6.png";
import NoPath7 from "../../assets/images/NoPath7.png";
const Partners = () => {
  return (
    <div className="container m-5 p-5">
      <div>
        <div className=" d-flex justify-content-between">
          <div>
            <h3>شركاء النجاح</h3>
            <h6>
              عملاؤنا هم شركاؤنا في النجاح لذا نسعى دائما إلى توفير أفضل الخدمات
              لهم
            </h6>
          </div>

          <div className="d-flex pl-5">
            <IoIosArrowDropright />
            <IoIosArrowDropleft />
          </div>
        </div>

        <div className="d-flex">
          <div className="partner">
            <img src={NoPath} alt="partner" title="partner" />
          </div>
          <div className="partner">
            <img src={NoPath1} alt="partner" title="partner" />
          </div>
          <div className="partner">
            <img src={NoPath2} alt="partner" title="partner" />
          </div>
          <div className="partner">
            <img src={NoPath3} alt="partner" title="partner" />
          </div>
        </div>
        <div className="d-flex mt-4">
          <div className="partner">
            <img src={NoPath4} alt="partner" title="partner" />
          </div>
          <div className="partner">
            <img src={NoPath5} alt="partner" title="partner" />
          </div>
          <div className="partner">
            <img src={NoPath6} alt="partner" title="partner" />
          </div>
          <div className="partner">
            <img src={NoPath7} alt="partner" title="partner" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
