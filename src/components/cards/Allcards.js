
import Cards from './Cards'
import Icon1 from '../../assets/images/imgicon1.png';
import Icon2 from '../../assets/images/imgicon2.png';
import Icon3 from '../../assets/images/imgicon3.png';
import Icon4 from '../../assets/images/imgicon4.png';
import Icon5 from '../../assets/images/imgicon5.png';
import Icon6 from '../../assets/images/imgicon6.png';
import './allcards.css'



const Allcards = () => {
  return (
    <div className=' allcards '>
    <div className='container allcards '>
        <div className='mb-4 ' >
    
        <h2 className="pt-5">ما نفعله</h2>
        <small>نقدم أفضل خدمات تحليل وبرمجة  النظم وتطبيقات الجوال  ومواقع الانترنت</small>
      </div>


    <div className='allcard d-flex  justify-content-between row gy-3 '>
        <div className="col-md-4 col-lg-4 col-sm-6 cardy">
      <Cards  icon={Icon1}  Title="تطوير تطبيقات الموبايل "
       paragraph="تطوير تطبيقات
       الجوال باحترافية بخبرات 
      فريق عملنا المميزون 
      ومن خلال مراحل العمل 
      التى صممت باحترافيه
       فنقوم بتحليل فكرتك ووضع المخطط 
      الزمنى لتنفيذها لاخراجها بالشكل المطلوب"/>
      </div>

      <div className="col-md-4 col-lg-4 col-sm-6">
      <Cards icon={Icon2}  Title="تحليل وبرمجة النظم"  
        paragraph="النجاح والوصول الى الهدف
          يبدأ من التحليل الجيد لنظم العمل ووضع
          الاليات المناسبة لتطويرها وهو ماتتقنه فى اوركا فجن من خلال فريقنا المتخصص فى تحليل النظم والبرمجة 
        "
      />
     </div>
    <div className="col-md-4 col-lg-4 col-sm-6"> 
       <Cards icon={Icon3}  Title="تطوير مواقع الانترنت  "  
        paragraph="تطوير بوابتك على شبكة الإنترنت بإحترافية عالية وبواجهات سهلة الإستخدام تتناسب مع جميع الأجهزة ولوحة تحكم سهلة الإستخدام مما يعطيك تجربة مميزة لعرض أعمالك
        "
      />
      </div>
      <div className="col-md-4 col-lg-4 col-sm-6">
       <Cards icon={Icon4}   Title=" صناعة الهويات" 
        paragraph="الهوية التجارية المتميزة هي البداية إلى نجاح إستثماراتك فهنا في أوركا فجن نضمن لك التميز بهويتك فنحن نعطي هذا المجال مساحته الخاصة من الإبداع والإبتكار
        "
      /> 
        
     </div>
    <div className="col-md-4 col-lg-4 col-sm-6">
       <Cards icon={Icon5}  Title="تصميمات الموشن جرافيك  "   
       paragraph="  يصال الفكرة إلى الجمهور من خلال أفلام الموشن جرافيك يسهل عليك الوقت والجهد ونحن نمتلك فريق متكامل لإخراج فيلمك بشكل إحترافي فنقوم بكتابة المحتوى وتسجيله ورسم الشخصيات الكرتوني 
          
       "
     />
       
      </div>
      <div className="col-md-4 col-lg-4 col-sm-6">
       <Cards icon={Icon6}  Title=" تصميمات السوشيال ميديا"  
        paragraph="دم أفكارك بطريقة مبسطة على مواقع التواصل من خلال تصميماتنا المتميزة فنحن نساعدك على تكوين الفكرة وتقديمها في تصميم متميز والوصول به إلى أعلى درجات الوصول إلى جمهورك 
          
        "
      />
      </div>

    </div>
    </div>
    
    </div>
  )
}

export default Allcards
