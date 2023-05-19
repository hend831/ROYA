import React from "react";
import About from "../../assets/images/aboutimage.png";
import { BsFillClipboardCheckFill } from "react-icons/bs";
import { AiFillBulb } from "react-icons/ai";
import { HiUserGroup } from "react-icons/hi";
import { AiFillCrown } from "react-icons/ai";
import "./about.css";
import Ourprojects from "../homepage/ourproject/Ourprojects";

const Aboutus = () => {
  return (
    <div>
      <div className="d-flex   container pt-5">
        <div>
          <small className="ASD">لماذا نحن__</small>
          <h4 className="mb-4">نقدم حلول متميزة</h4>

          <div className="d-flex">
            <div className="imicd d-flex justify-content-center align-items-center ">
              <BsFillClipboardCheckFill className="svgg" />
            </div>
            <div className="px-2">
              <h5> فهم وحل المشكلات</h5>
              <p>
                هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما
                سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع
                الفقرات في الصفحة التي يقرأها
              </p>
            </div>
          </div>

          <div className="d-flex">
            <div className="imicd d-flex justify-content-center align-items-center">
              <AiFillBulb className="svgg" />
            </div>
            <div className="px-2">
              <h5>اقتراح وتقديم الافكار </h5>
              <p>
                هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما
                سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع
                الفقرات في الصفحة التي يقرأها
              </p>
            </div>
          </div>

          <div className="d-flex">
            <div className="imicd d-flex justify-content-center align-items-center">
              <HiUserGroup className="svgg" />
            </div>
            <div className="px-2">
              <h5> فريق عمل متكامل </h5>
              <p>
                هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما
                سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع
                الفقرات في الصفحة التي يقرأها
              </p>
            </div>
          </div>

          <div className="d-flex">
            <div className="imicd d-flex justify-content-center align-items-center">
              <AiFillCrown className="svgg" />
            </div>
            <div className="px-2">
              <h5> التنفيذ باحترافية عاليه </h5>
              <p>
                هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما
                سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع
                الفقرات في الصفحة التي يقرأها
              </p>
            </div>
          </div>
        </div>
        <div className="bout pt-5">
          <div className="bgg"></div>
          <div>
            {" "}
            <img
              className="booutimg"
              src={About}
              alt="about imge"
              title="abou us"
            />
          </div>
          <div className="Bgg"></div>
        </div>
      </div>

      <Ourprojects />
    </div>
  );
};

export default Aboutus;
