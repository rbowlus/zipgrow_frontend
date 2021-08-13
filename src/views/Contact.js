import React from 'react';
import emailjs from 'emailjs-com';
import env from 'react-dotenv';


export const Contact = () => {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_w4327i3', e.target, env.REACT_APP_EMAILJS_USER_ID )
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
    }


    return (
        <div className="font-weight-bold">
            <h4>Contact</h4>
            <hr />
            <div className="container">
                <form onSubmit={sendEmail}>
                    <div className="row pt-5 mx-auto">
                        <div className="col-8 form-group mx-auto">
                            <input type="text" className="form-control" name="name" placeholder="Name" />
                        </div>
                        <div className="col-8 form-group mx-auto">
                            <input type="email" className="form-control" name="email" placeholder="Email Address" />
                        </div>
                        <div className="col-8 form-group mx-auto">
                            <input type="text" className="form-control" name="subject" placeholder="Subject" />
                        </div>
                        <div className="col-8 form-group mx-auto">
                            <textarea className="form-control" name="message" id="" cols="30" rows="30" placeholder="Your message"></textarea>
                        </div>
                        <div className="col-8 form-group mx-auto mb-5">
                            <input type="submit" className="btn btn-info" value="Send message" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
