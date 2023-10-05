import React from 'react'
import '../home/home.css'
import IMG1 from '../../images/text2.png'
import CARD1 from '../../images/card1.jpg'
import CARD2 from '../../images/card2.jpg'
import CARD3 from '../../images/card3.jpg'
import CARD4 from '../../images/card4.png'

function Home(props) {
  return (
    <div className="container">
      <div className="home_container">
        <div className='background_image'>
          <img src={IMG1} alt="img" />
        </div>

        <div className={`content text-${props.mode==='light'?'dark':'light'}`}>
          <h1 className='text-center mb-4'>TextUtils-Text Editor</h1>
          <p>Our platform is a versatile web counter and character counting utility!
            Whether you're a content creator striving for the perfect word count for your content,
            a marketer analyzing the impact of your analyses, or a student working on essays and reports,
            our tool is your go-to solution. Not only this you can also manipulate your text by using various functionality buttons which provide you various functions
            like reversing your text, making it bold or italics etc.<br />
            Say goodbye to the tedious manual counting; let our user-friendly utility handle it for you. Edit your digital content
            with our <b>TextUtils-Text Editor</b> today!</p>
        </div>
      </div>

      <div className="features_container my-5">
        <h1 className={`text-center my-5 text-${props.mode==='light'?'dark':'light'}`}>Our Features</h1>

        <div className="container_cards d-flex flex-wrap gap-2 justify-content-center">
          <div className="card d-flex flex-column mb-3" style={{ width: '18rem' }}>
            <img src={CARD1} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Text Editing</h5>
              <p className="card-text">Allows you to type, delete, insert, and format text.
                Copy, cut, and paste: Enables you to copy text, cut it from one location, and paste it into another.</p>
            </div>
          </div>

          <div className="card d-flex flex-column mb-3" style={{ width: '18rem' }}>
            <img src={CARD2} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Search and Replace</h5>
              <p className="card-text">Find specific text strings within a document and replace them with another.
                Supports regular expressions for more advanced searching.</p>
            </div>
          </div>

          <div className="card d-flex flex-column mb-3" style={{ width: '18rem'}}>
            <img src={CARD3} className="card-img-top h-75" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Text Formatting</h5>
              <p className="card-text">Basic text formatting options like font style, 
              size, uper to lower case, remove extra spaces, reverse text etc.</p>
            </div>
          </div>

          <div className="card d-flex flex-column mb-3" style={{ width: '18rem' }}>
            <img src={CARD4} className="card-img-top h-50" alt="..." />
            <div className="card-body mt-5">
              <h5 className="card-title">Convert Text to Speech</h5>
              <p className="card-text">Allows you to hear your edited content and keep track of it's correctness instead of reading 
              it out with our speech functionality.</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Home
