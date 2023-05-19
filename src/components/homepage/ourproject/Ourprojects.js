import React from "react";
import Orcaproduct from "./Orcaproduct";
import Achievements from "../../achievements/Achievements";
import Leus from "../../achievements/Leus";
import Partners from "../../achievements/Partners";
import Footer from "./../../footer/Footer";
const Ourprojects = () => {
  return (
    <div>
      <Orcaproduct
        Title="اعمالنا الرائدة "
        Subtitle="مشاهدة المشروع "
        Adress="تطبيق مستشفى سمير عباس"
        Adress1="اوركا -هوم كير"
        Adress2="تطبيق ريسبت"
        Adress3="تطبيق المكافحة"
      />
      <Orcaproduct
        Title=" منتجات أوركا "
        Subtitle="مشاهدة المشروع "
        Adress="تطبيق اوركا فود "
        Adress1="تطبيق أوركا هوم كير - "
        Adress2="تطبيق أوركا للمستشفيات"
        Adress3="تطبيق أوركا لاب"
      />

      <Achievements />
      <Leus />
      <Partners />
      <Footer />
    </div>
  );
};

export default Ourprojects;
