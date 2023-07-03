import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import './Contact.css';

function Contact() {
  const form = useRef();
  const [open, setOpen] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_93nrlvq', 'template_qc37f9m', form.current, 'uCxgXAn6w5NWF6MmQ')
      .then((result) => {
        console.log(result.text);
        setOpen(true);
        form.current.reset(); // Reset the form fields
      }, (error) => {
        console.log(error.text);
      });
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <section>
      <h2>Contact Me</h2>
      <form ref={form} onSubmit={sendEmail}>
        <label>
          Name:
          <input type="text" name="name" required />
        </label>
        <label>
          Email:
          <input type="email" name="email" required />
        </label>
        <label>
          Message:
          <textarea name="message" required />
        </label>
        <input type="submit" value="Submit" />
      </form>

      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <MuiAlert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Your message was sent to Kyle Armour!
        </MuiAlert>
      </Snackbar>
    </section>
  );
}

export default Contact;


