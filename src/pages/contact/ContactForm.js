import React from 'react';
import './ContactForm.css';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
 
 const ContactForm = () => {
     return (
         <div className="form-wrapper" >
             <Formik
                 initialValues={{ name: '', email: '', message: '' }} 
                 validationSchema={Yup.object({
                     name: Yup.string()
                              .max(30, 'Must be 30 characters or less')
                              .required('*Required'),
                     message: Yup.string()
                                 .max(2000, '*Must be 2000 characters or less')
                                 .required('*Required'),
                     email: Yup.string().email('*Invalid email address').required('*Required') 
                 })} 
                 onSubmit={(values, { setSubmitting }) => {
                     setTimeout(() => {
                         alert(JSON.stringify(values, null, 2));
                         setSubmitting(false);
                     }, 400);
                 }}
         >
         <Form>
             <label htmlFor="name">Name</label>
             <Field name="name" type="text" />
             <ErrorMessage name="name" render={msg => <div className="form-error-message">{msg}</div>} />
             
             <label htmlFor="email">E-mail Address</label>
             <Field name="email" type="email" />
             <ErrorMessage name="email" render={msg => <div className="form-error-message">{msg}</div>} />

             <label htmlFor="message">Your Message</label>
             <Field as="textarea" name="message" type="text" />
             <ErrorMessage name="message" render={msg => <div className="form-error-message">{msg}</div>} />
             
             <button type="submit">Send Message</button>
         </Form>
             </Formik>
         </div>
     );
 };

export default ContactForm;
