import React from 'react'
import IMG1 from '../../images/img1.jpg'
import IMG2 from '../../images/img2.jpg'
import IMG3 from '../../images/img3.jpg'
import IMG4 from '../../images/text3.png'
import '../about/about.css'


export default function About(props) {
let myStyle={
  backgroundColor: props.mode==='dark'?'#1B2430':'white',
  borderBottom: '1px solid',
  borderColor: props.mode==='dark'?'white':'black',
  color: props.mode==='dark'?'white':'black'
}
  return (
    
    <>
    <div className='container'>
    <div className={`container text-center my-3 text-${props.mode==='light'?'dark':'light'}`}>
      <h1>About Us</h1>
    </div>

    <div className="about_container ">
    <div className="image">
    <img src={IMG4} alt="contact" />
    </div>

    <div className={`content para text-${props.mode==='light'?'dark':'light' }`}>
        <p>TextUtils is a web counter and character counting utility which can be used to
           manipulate your text in the way you want. It contains various functionality like remove extra spaces,
          lower to uppercase and vice versa, converting text to speech and many more along with dark and light mode.</p>

          <p>Our platform is a versatile web counter and character counting utility! 
            Whether you're a content creator striving for the perfect word count for your content, 
            a marketer analyzing the impact of your analyses, or a student working on essays and reports, 
            our tool is your go-to solution. With just a few clicks, you can effortlessly track the number 
            of counts in your text.<br />
            But that's not all, our character counting feature simplifies the process of meeting strict 
            character limits for social media posts, articles, or academic papers. <br />
            Not only this you can also manipulate your text by using various functionality buttons which provide you various functions
            like reversing your text, making it bold or italics etc. <br /><br />
            Say goodbye to the tedious manual counting; let our user-friendly utility handle it for you. Elevate your digital content 
            management experience with our <b>TextUtils-Text Editortool</b> today!</p>
      </div>
    </div>

      <div id="carouselExample" className={`carousel slide mx-auto d-block my-5 border-${props.mode==='light'?'dark':'light'}`}>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={IMG1} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={IMG2} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={IMG3} className="d-block w-100" alt="..." />
          </div>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>


      <div className="accordion mt-5" id="accordionExample">
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Can we reverse our given text by using TextUtils ?
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <strong>Yes! you can surely reverse your text using TextUtils.</strong>You just have to click the home option on the navbar and paste your text to enable the button functionality then click on the button having the reverse functionality mentioned. 
            </div>
          </div>
        </div>

        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Can we make our text to read in TextUtils?
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <strong>Yes! you can surely make your text read by our speech functionality.</strong> You just have to click the home option on the navbar and paste your text to enable the button functionality then click on the button having the speech functionality mentioned. 
            </div>
          </div>
        </div>

        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Can we enter our text by speaking?
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <strong>No! not right now</strong> This functionality is still not provided by our platform right now but in future, our team is trying to add it too.
            </div>
          </div>
        </div>

        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseThree">
              Can we provide some ideas for additional functionality?
            </button>
          </h2>
          <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <strong>Yes! sure you can.</strong> We would love to have your ideas and opinions too to make our platform grow and help others to manipulate their text.
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  )
}
