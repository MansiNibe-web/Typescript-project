import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './Registration.css'; // Import the CSS file

const Registration: React.FC = () => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  // Formik setup
  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .required('Password is required'),
  });

  const handleSubmit = (values: any) => {
    // Simulate a successful form submission
    console.log(values);
    setShowSuccessMessage(true);

    // Optionally, hide the success message after 5 seconds
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 5000);
  };

  return (
    <div className="main-container">
      {/* Main content section */}
      <div className="content">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ touched, errors }) => (
            <Form>
              <div className="input-block">
                <label htmlFor="name" className="input-label">
                  Name
                </label>
                <Field
                  type="text"
                  name="name"
                  id="name"
                  className={`input-field ${touched.name && errors.name ? 'input-error' : ''}`}
                />
                <ErrorMessage name="name" component="div" className="error-message" />
              </div>

              <div className="input-block">
                <label htmlFor="email" className="input-label">
                  Email
                </label>
                <Field
                  type="email"
                  name="email"
                  id="email"
                  className={`input-field ${touched.email && errors.email ? 'input-error' : ''}`}
                />
                <ErrorMessage name="email" component="div" className="error-message" />
              </div>

              <div className="input-block">
                <label htmlFor="password" className="input-label">
                  Password
                </label>
                <Field
                  type="password"
                  name="password"
                  id="password"
                  className={`input-field ${touched.password && errors.password ? 'input-error' : ''}`}
                />
                <ErrorMessage name="password" component="div" className="error-message" />
              </div>

              <div className="button-block">
                <button type="submit" className="submit-button">
                  Register
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>

      {/* Success Message */}
      {showSuccessMessage && (
        <div className="success-message">
          Your registration is done successfully!
        </div>
      )}

      {/* Footer */}
      <div className="footer">
        <p>© 2024 Olive P99Soft. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Registration;
