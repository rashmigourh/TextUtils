import React from 'react'
import contact from "../../images/contact.png"
import '../contact/contact.css'

function Contact(props) {
    let myStyle = {
        border: '1px solid',
        borderColor: props.mode === 'dark' ? 'white' : 'black',
    }

    return (
        <div className='container'>
            <div className={`container text-center my-3 text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                <h1>Contact Us</h1>
            </div>

            <div className="Contact_container">
                <div className="image">
                    <img src={contact} alt="contact" />
                </div>

                {/* form */}
                <div className="form">
                    <div className={`content mb-3 text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                        <h6>You can enter your query if any functionality is not working properly on your device or you can also provide your suggestions to add on some extra functionalities to improve our platform.
                            You can also provide your feedback to us we would love it !!</h6>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="floatingInput" placeholder="Full Name" style={myStyle} />
                        <label htmlFor="floatingInput">Full Name</label>
                    </div>

                    <div className="form-floating mb-3">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" style={myStyle} />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>

                    <div className="form-floating mb-3">
                        <textarea type="text" className="form-control" id="floatingTextarea2" placeholder="Leave a comment/query here" style={{ height: '100px', border: '1px solid black' }} />
                        <label htmlFor="floatingTextarea2">Comment/Query</label>
                    </div>

                    <button type="button" className={`btn btn-${props.mode === 'light' ? 'dark' : 'light'} w-50`} style={myStyle}>Submit</button>

                </div>
            </div>
        </div>
    )
}

export default Contact
