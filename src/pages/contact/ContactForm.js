import React from 'react';
import './ContactForm.css';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import emailjs from 'emailjs-com';



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
                        setSubmitting(false);

                        emailjs.send(
                            'gmail-vini',
                            'template_lkyvrex',
                            {
                                from_name: values.name,
                                from_email: values.email,
                                message: values.message
                            },
                            'user_UyG8S38eIy1c8wlQTNpOI')
                               .then(function(response) {
                                   console.log('SUCCESS!', response.status, response.text);
                                   alert("Thank you for your message! I'll reply ASAP.");
                               }, function(error) {
                                   console.log('FAILED...', error);
                                   alert("Something went wrong. Please try again or contat me at vinicius@rice.edu.");
                               });
                        
                    }, 400);
                    
                    
                }}
            >
                <Form>
                    <label htmlFor="name">Your Name</label>
                    <Field name="name" type="text" />
                    <ErrorMessage name="name" render={msg => <div className="form-error-message">{msg}</div>} />
                    
                    <label htmlFor="email">Your E-mail Address</label>
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
