import React, { useState } from "react";
import Layout from "../components/layout/layout";
import styles from "./contactPage.module.css";

const Contactpage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    subject: "",
    email: "",
    body: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName || formData.fullName.length < 3) {
      newErrors.fullName = "Full name must be at least 3 characters long.";
    }

    if (!formData.subject || formData.subject.length < 3) {
      newErrors.subject = "Subject must be at least 3 characters long.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailRegex.test(formData.email)) {
      newErrors.email = "Email must be a valid email address.";
    }

    if (!formData.body || formData.body.length < 3) {
      newErrors.body = "Body must be at least 3 characters long.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted successfully:", formData);
      setFormData({
        fullName: "",
        subject: "",
        email: "",
        body: "",
      });
      setErrors({});
    }
  };

  return (
    <Layout>
      <div className={styles.contactContainer}>
        <h1>Contact Us</h1>
        <form onSubmit={handleSubmit} className={styles.contactForm}>
          <div className={styles.formGroup}>
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className={errors.fullName ? styles.errorInput : ""}
            />
            {errors.fullName && <p className={styles.errorText}>{errors.fullName}</p>}
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className={errors.subject ? styles.errorInput : ""}
            />
            {errors.subject && <p className={styles.errorText}>{errors.subject}</p>}
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? styles.errorInput : ""}
            />
            {errors.email && <p className={styles.errorText}>{errors.email}</p>}
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="body">Body</label>
            <textarea
              id="body"
              name="body"
              value={formData.body}
              onChange={handleChange}
              className={errors.body ? styles.errorInput : ""}
            />
            {errors.body && <p className={styles.errorText}>{errors.body}</p>}
          </div>
          <button type="submit" className={styles.submitButton}>
            Submit
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Contactpage;