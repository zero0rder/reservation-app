import React from "react";
import { BsFacebook, BsLinkedin, BsInstagram } from "react-icons/bs";

interface AppFooterProps {}
const icons = [<BsFacebook />, <BsLinkedin />, <BsInstagram />];
const styles = {
  footer: `flex flex-col w-full h-24 px-36 py-4 text-white bg-black`,
  socialIcons: `flex items-center justify-end gap-x-3`,
  contactText: `flex items-center justify-between py-4 text-sm grow`,
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
        <span className="flex gap-x-4">
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
        </span>
      </div>
    </footer>
  );
};

export default AppFooter;
