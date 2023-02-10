import React from "react";
import { BsFacebook, BsLinkedin, BsInstagram } from "react-icons/bs";

interface AppFooterProps {}
const icons = [
  <BsFacebook key={0} />,
  <BsLinkedin key={1} />,
  <BsInstagram key={2} />,
];
const styles = {
  footer: `flex flex-col w-full h-24 px-12 sm:px-20 py-4 text-white bg-black`,
  socialIcons: `flex items-center justify-center sm:justify-end gap-x-3`,
  contactText: `flex flex-col sm:flex-row items-center justify-between py-4 text-sm grow`,
  contactLinks: `flex gap-x-4`,
};

const AppFooter: React.FC<AppFooterProps> = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.socialIcons}>
        {icons.map((icon, i) => (
          <span key={i}>{icon}</span>
        ))}
      </div>
      <div className={styles.contactText}>
        <span>info@reservationhub.com</span>
        <span className={styles.contactLinks}>
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
        </span>
      </div>
    </footer>
  );
};

export default AppFooter;
