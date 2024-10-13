import React, { useEffect, useState } from "react";
import styles from "./toast.module.css";

const Toast = ({ message, type, visible, onClose }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (visible) {
      setShow(true);
      const timer = setTimeout(() => {
        setShow(false);
        setTimeout(onClose, 500); 
      }, 2800);
      return () => clearTimeout(timer);
    }
  }, [visible, onClose]);

  if (!visible && !show) return null;

  return (
    <div className={`${styles.toast} ${show ? styles.show : ""} ${styles[type]}`}>
      {message}
    </div>
  );
};

export default Toast;