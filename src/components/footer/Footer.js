import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import "./footer.css";
import Logo from "../../assets/images/logo1.png";
import { SlSocialFacebook } from "react-icons/sl";
import { SlSocialTwitter } from "react-icons/sl";
import { SlSocialLinkedin } from "react-icons/sl";
import { TiSocialYoutube } from "react-icons/ti";

const Footer = () => {
  return (
    <div>
      <div className="container  ">
        <div className="inputdiv p-4  ">
          <h4>النشرة البريدية</h4>
          <h6>
            القائمة البريدية لكود لينك تضمن اخر اخبار والافكار والمشاريع التقنية
            وريادة الاعمال
          </h6>
          <div className="d-flex">
            <input type="email" placeholder="ادخل البريد الالكترونى"></input>
            <AiOutlineArrowLeft className="arrowbtn arrowbtn1 " />
          </div>
        </div>
      </div>
      <div className="footer ">
        <footer className=" d-flex justify-content-between ">
          <div className="container d-flex align-items-center  justify-content-center p-5">
            <div className="foot ">
              <img src={Logo} className="mb-3" />

              <p>
                نسعى للوصول بك إلى أعلى مستويات الاحتراف في تقـديـم خـدمـاتـك
                للجمـهـور مـن خـلال خدمـاتنـا الـتي تشمل تطوير المواقع
                الإلكترونية وتطبيقات الجوال وصناعة المحتوى الإعلاني ، لتكن متميز
                دائماً معنا
              </p>
            </div>
            <div className="foot">
              <h6>خدماتنا</h6>
              <ul>
                <li>
                  {" "}
                  <a>تطوير تطبيقات الموبايل </a>{" "}
                </li>
                <li>
                  {" "}
                  <a> تحليل وبرمجة النظم</a>
                </li>
                <li>تطوير مواقع الإنترنت</li>
                <li>صناعة الهويات</li>
                <li>تصميمات الموشن جرافيك</li>
                <li>تصميمات السوشيال ميديا</li>
              </ul>
            </div>

            <div className="foot">
              <h6>الذهاب الى</h6>
              <ul>
                <li>الرئيسية</li>
                <li>من نحن</li>
                <li>خدماتنا</li>
                <li>أعمالنا</li>
                <li>تواصل معنا</li>
              </ul>
            </div>

            <div className="foot">
              <h6>تابعنا عبر</h6>
              <p>
                أبقي دائماً علي التواصل معنا ومعرفة آخر المستجدات والأنشطة
                الخاصة بنا واخر الاخبار والاحداث
              </p>
              <div>
                <SlSocialFacebook />
                <SlSocialTwitter />
                <SlSocialLinkedin />
                <TiSocialYoutube />
              </div>
            </div>
          </div>
        </footer>
        <footer className="foot2 mt-0 ">
          {" "}
          &copy; جميع الحقوق محفوظه اوركا فيجن
        </footer>
      </div>
    </div>
  );
};

export default Footer;
