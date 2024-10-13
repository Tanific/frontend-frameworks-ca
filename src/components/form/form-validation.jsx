const validateForm = (formData, setErrors) => {
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

export default validateForm;