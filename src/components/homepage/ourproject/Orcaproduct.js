
import {IoIosArrowDropright} from 'react-icons/io'
import {IoIosArrowDropleft} from 'react-icons/io'
import {IoIosArrowRoundBack} from 'react-icons/io'
import Icon1 from '../../../assets/images/imgicon1.png';

import './project.css'



const Orcaproduct = (props) => {
  return (
    <div className='container'>
        <div className="d-flex justify-content-between ">
        <div className="mt-5 mb-5"><h3>{props.Title}</h3></div>
        <div className="d-flex pl-5">
       < IoIosArrowDropright/>
       < IoIosArrowDropleft/>

        </div>
        </div>

       <div className="d-flex justify-content-center">





        <div className={props.Title === " منتجات أوركا " ? "div1 imgdiv pt-4" : "imgdiv pt-4"}   >
        
            <div className="imicd imicdd d-flex justify-content-center align-items-center  ">
               
                <img src={Icon1} alt="icon"/></div>
                <div className='title'> 
                <h6 > {props.Adress}</h6>
                  <h6 className='vtitle mt-4'> {props.Subtitle} <IoIosArrowRoundBack/></h6>
                  </div>

        </div>
        <div className={props.Title === " منتجات أوركا " ? "div2 imgdiv  imgdiv1 pt-4" : "imgdiv imgdiv1 pt-4"}>
        <div className="imicd imicdd d-flex justify-content-center align-items-center ">
               
               <img src={Icon1} alt="icon"/></div>
            
               <div className='title'> 
               <h6 > {props.Adress1}</h6>
                  <h6 className='vtitle mt-4'> {props.Subtitle}<IoIosArrowRoundBack/></h6>
                  </div>
        </div>

         <div className={props.Title === " منتجات أوركا " ? "div3 imgdiv  imgdiv2 pt-4" : "imgdiv imgdiv2 pt-4"}>
         <div className="imicd imicdd d-flex justify-content-center align-items-center ">
               
               <img src={Icon1} alt="icon"/></div>
            
               <div className='title'> 
               <h6 > {props.Adress2}</h6>
                  <h6 className='vtitle mt-4'>{props.Subtitle} <IoIosArrowRoundBack/></h6>
                  </div>
        </div>

        <div className={props.Title === " منتجات أوركا " ? "div4 imgdiv  imgdiv3 pt-4" : "imgdiv imgdiv3 pt-4"}>
        <div className="imicd imicdd d-flex justify-content-center align-items-center ">
               
               <img src={Icon1} alt="icon"/></div>
            
               <div className='title'> 
               <h6 > {props.Adress3}</h6>
                  <h6 className='vtitle mt-4'>{props.Subtitle} <IoIosArrowRoundBack/></h6>
                  </div>
        </div>

        </div>


    </div>
  )
}

export default Orcaproduct
