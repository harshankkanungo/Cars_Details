import Link from "next/link";
import styles from "../styles/Contact.module.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Contact = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <main className={styles.main}>
        <h1 className={styles.title}>Contact Us</h1>
        <p className={styles.description}>Get in touch with us!</p>

        <div className={styles.contactContainer}>
          <div className={styles.contactForm}>
            <h2 className={styles.subtitle}>Send Us a Message</h2>
            <form>
              <div className={styles.formGroup}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                ></textarea>
              </div>
              <button type="submit" className={styles.submitButton}>
                Send
              </button>
            </form>
          </div>

          <div className={styles.contactDetails}>
            <h2 className={styles.subtitle}>Our Contact Information</h2>
            <p>
              <strong>Email:</strong> hello@indianic.com
            </p>
            <p>
              <strong>Phone:</strong> 079 6191 6000
            </p>
            <p>
              <strong>Address:</strong> 201, 2nd Floor, Devarc Mall, Sarkhej -
              Gandhinagar Hwy, near Iskcon Bridge, Ramdev Nagar, Ahmedabad,
              Gujarat 380015
            </p>

            <div className={styles.map}>
              <h2 className={styles.subtitle}>Find Us Here</h2>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.623262168371!2d72.55698241522835!3d23.04843158468949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e847e7e3e3e4b%3A0xb65ec5e69a3f7d0!2sDevarc%20Mall%2C%20Sarkhej%20-%20Gandhinagar%20Hwy%2C%20near%20Iskcon%20Bridge%2C%20Ramdev%20Nagar%2C%20Ahmedabad%2C%20Gujarat%20380015!5e0!3m2!1sen!2sin!4v1691207267673!5m2!1sen!2sin"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
