import React, { useEffect } from 'react';
import webseed from '../assets/svg/.webseed.svg';

const Contact = () => {
  return (
    <div id="contact" className="contact">
      <div className="call">
        <p className="call__p">
          Lets grow your <span className="green-word">brand</span>
        </p>
        <p className="call__p">plant a </p>
        <img className="webseed" src={webseed} alt="" />
      </div>
      <div className="form-container">
        <form className="form" action="">
          <label className="form__label" htmlFor="">
            Full Name
          </label>
          <input className="form__i--text" type="mail" name="" id="" />
          <label className="form__label" htmlFor="">
            Contact Mail
          </label>
          <input className="form__i--text" type="text" name="" id="" />
          <label className="form__label" htmlFor="">
            What service are you looking for?
          </label>
          <div className="checks-container">
            <input className="form__i--check" type="checkbox" name="web" id="" value="a" />
            <label className="form__label--check" htmlFor="web">
              A website for my business
            </label>
            <input className="form__i--check" type="checkbox" name="webapp" id="" />
            <label className="form__label--check" htmlFor="webapp">
              A management tool for my company
            </label>
            <input className="form__i--check" type="checkbox" name="ecom" id="" />
            <label className="form__label--check" htmlFor="ecom">
              A fully fledged e-commerce
            </label>
          </div>

          <input className="form__btn" type="submit" value="SUBMIT" onClick={e => e.preventDefault()} />
        </form>
        <p></p>
      </div>

      <footer className="contact__footer">All Rights Reserved - © .webseed / 2022</footer>
    </div>
  );
};

export default Contact;
