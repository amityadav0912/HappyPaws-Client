import React, { Fragment, createContext, useReducer } from "react";
import Layout from "../layout";

const ContactUsComponent = (props) => {
  const email = 'amit09yadav12@.com';
  const phoneNo = '+918306334469';
  const address = '110A-PratapNagar/jaipur/Rajasthan';
  const imageUrl = require('./adopt.jpg')


  return (
    <div className="flex flex-col items-center justify-center my-32">
      <img src={imageUrl} alt="Contact" />
      <div>
      <h2>Contact Information</h2>
      <div>
        <strong>Email:</strong> {email}
      </div>
      <div>
        <strong>Phone:</strong> {phoneNo}
      </div>
      <div>
        <strong>Address:</strong> {address}
      </div>
    </div>
      <span className="text-center text-gray-700 text-4xl font-bold tracking-widest">
      We Here to help you
      </span>
    </div>
  );
};

const ContactUs = (props) => {
  return (
    <Fragment>
        {/* <Navber /> */}
        <Layout children={<ContactUsComponent />} />
        {/* <footer/> */}
    </Fragment>
  );
};

export default ContactUs;
