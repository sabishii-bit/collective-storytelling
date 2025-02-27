"use client";

import React, { useState, FormEvent, ChangeEvent } from "react";
import styles from "./ContactForm.module.scss";

const ContactForm: React.FC = () => {
  const [attachments, setAttachments] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB in bytes

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const newFiles = Array.from(event.target.files);
      const validFiles = newFiles.filter((file) => {
        if (file.size > MAX_FILE_SIZE) {
          alert(`File "${file.name}" exceeds the size limit of 5MB.`);
          return false;
        }
        return true;
      });

      setAttachments((prevAttachments) => [
        ...prevAttachments,
        ...validFiles,
      ]);
    }
  };

  const handleFileRemove = (fileIndex: number) => {
    setAttachments((prevAttachments) =>
      prevAttachments.filter((_, index) => index !== fileIndex)
    );
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(event.currentTarget as HTMLFormElement);
      
      // Append all attachments to the form data
      attachments.forEach((file) => {
        formData.append("files", file);
      });

      const response = await fetch("/api/Contact", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) throw new Error("Submission failed");

      // Clear form on success
      setAttachments([]);
      (event.target as HTMLFormElement).reset();
      alert("Message sent successfully!");
    } catch (error) {
      console.error("Submission error:", error);
      alert("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.section}>
      <h1 className={styles.heading}>CONTACT US</h1>
      <hr className={styles.divider} />

      <h4 className={styles.drop_a_line}>Drop us a line!</h4>

      <form className={styles.email_form} onSubmit={handleSubmit}>
        <input placeholder="Name" name="name" required />
        <input placeholder="Email*" name="email" type="email" required />
        <input placeholder="Where did you hear about us?" name="reference" />
        <textarea
          placeholder="Tell us more about how you'd like to get involved."
          name="message"
          required
        ></textarea>

        <div className="flex items-center justify-between">
          <label className={styles.attach_files}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M21.435 11.119l-8.719 8.779c-2.148 2.158-5.668 2.158-7.816 0-2.149-2.158-2.149-5.66 0-7.818l8.719-8.778c1.199-1.206 3.135-1.206 4.334 0s1.199 3.155 0 4.361l-8.719 8.779c-.477.482-1.252.482-1.728 0s-.477-1.264 0-1.746l8.719-8.779-.706-.71-8.719 8.779c-1.199 1.206-1.199 3.155 0 4.361 1.199 1.206 3.135 1.206 4.334 0l8.719-8.778c2.148-2.158 2.148-5.66 0-7.818-2.149-2.158-5.668-2.158-7.816 0l-8.719 8.779c-2.972 2.995-2.972 7.858 0 10.852 2.973 2.995 7.791 2.995 10.764 0l8.719-8.779-.707-.71z" />
            </svg>
            Attach Files
            <input
              type="file"
              multiple
              onChange={handleFileChange}
              style={{ display: "none" }}
              disabled={isSubmitting}
            />
          </label>
          <span className={styles.attachments}>
            Attachments ({attachments.length})
          </span>
        </div>

        {attachments.length > 0 && (
          <div className={styles.file_list}>
            {attachments.map((file, index) => (
              <div key={index} className={styles.file_item}>
                <span>
                  {file.name} ({(file.size / 1024).toFixed(2)} KB)
                </span>
                <span
                  onClick={() => handleFileRemove(index)}
                  className={styles.remove_button}
                >
                  ✕
                </span>
              </div>
            ))}
          </div>
        )}

        <div className="flex items-center justify-center">
          <button 
            type="submit" 
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
