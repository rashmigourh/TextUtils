import React from 'react'
import {
    FaFacebook,
    FaGithub,
    FaInstagram,
    FaTwitter,
    FaTwitch,
} from 'react-icons/fa'

const footer = (props) => {
    let myStyle={
        backgroundColor: props.mode==='light'?'dark':'#435B66',
        borderTop: ' 2px solid',
        borderColor: props.mode==='dark'?'white':'transparent',
      }

  return (
    <div name="footer" className={`w-auto mh-100 mt-5 bg-${props.mode==='light'?'dark':'blue'} text-white p-5`} style={myStyle}>
        <div className='d-flex flex-wrap gap-3 fs-5 justify-content-between px-5'>
        <div className='d-flex flex-column mb-3'>
                <h6 className='font-bold uppercase pt-2 fs-5'>LOGO</h6>
                    <a href='...' className='py-1 text-decoration-none text-white' role="button" tabIndex="0">About</a>
                    <a href='...' className='py-1 text-decoration-none text-white' role="button" tabIndex="0">Contact</a>
                    <a href='...' className='py-1 text-decoration-none text-white' role="button" tabIndex="0">Resources</a>
            </div>
            
            <div className='d-flex flex-column mb-3'>
                <h6 className='font-bold uppercase pt-2 fs-5'>Our Service</h6>
                    <a href='...' className='py-1 py-1 text-decoration-none text-white' role="button" tabIndex="0">How it Works</a>
                    <a href='...' className='py-1 py-1 text-decoration-none text-white' role="button" tabIndex="0">Privacy Policy</a>
                    <a href='...' className='py-1 py-1 text-decoration-none text-white' role="button" tabIndex="0">Terms and Conditions</a>
            </div>

            <div className='d-flex flex-column mb-3'>
                <h6 className='font-bold uppercase pt-2 fs-5'>Your Account</h6>
                    <a href='...' className='py-1 py-1 text-decoration-none text-white' role="button" tabIndex="0">Get in Touch</a>
                    <a href='...' className='py-1 py-1 text-decoration-none text-white' role="button" tabIndex="0">Contribute</a>
                    <a href='...' className='py-1 py-1 text-decoration-none text-white' role="button" tabIndex="0">Contact</a>
            </div>

            <div className='d-flex flex-column mb-3'>
                <p className='font-bold text-uppercase fs-5'>Subscribe for email updates</p>
                <form className='d-flex gap-2'>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                    <button className='rounded border-white'>Send</button>
                </form>
            </div>
        </div>

        <div className='text-center'>
        <p className='pt-4 fs-5'>2023 TextUtils &copy;All rights reserved</p>
        <hr />
        <div className='d-flex justify-content-center fs-3 gap-3'>
            <span role="button" tabIndex="0">< FaFacebook /></span>
            <span role="button" tabIndex="0"><FaInstagram /></span>
            <span role="button" tabIndex="0"><FaTwitter /></span>
            <span role="button" tabIndex="0"><FaTwitch /></span>
            <span role="button" tabIndex="0"><FaGithub /></span>
        </div>
        </div>
    </div>
  )
}

export default footer