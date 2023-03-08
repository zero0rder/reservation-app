import React from "react";
import { BsFacebook, BsLinkedin, BsInstagram } from "react-icons/bs";
import { MdCopyright } from "react-icons/md";

interface AppFooterProps {}
const icons = [
  <BsFacebook key={0} />,
  <BsLinkedin key={1} />,
  <BsInstagram key={2} />,
];
const styles = {
  footer: `flex flex-col w-full px-8 py-8 md:px-12 sm:px-20 md:py-12 text-white min-h-40 bg-zinc-800`,
  socialIcons: `flex items-center justify-center sm:justify-end gap-x-3`,
};

const companyData = ["About", "Explore", "Partners", "Contact Us"];
const supportData = ["FAQ", "Terms Of Service", "Privacy Policy", "Careers"];

const AppFooter: React.FC<AppFooterProps> = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <div className="flex flex-col md:flex-row gap-y-12">
          <div className="flex flex-col w-full md:w-2/5 gap-y-6">
            <h2 className="text-2xl font-medium">
              Reservation <span className="text-sky-500">Hub</span>
            </h2>
            <span className="text-xl">Get the latest updates</span>
            <div className="flex">
              <input
                placeholder="your email"
                className="p-2 rounded-lg outline-0 bg-zinc-900"
              />
              <button className="w-32 px-2 py-8 ml-2 font-medium md:w-24 md:p-2 rounded-xl bg-sky-500">
                Email Me!
              </button>
            </div>
          </div>
          <div className="flex justify-center w-full md:w-3/5 gap-x-12">
            <div>
              <h2 className="mb-4 text-2xl font-bold">Company</h2>
              <ul>
                {companyData.map((c, i) => (
                  <li key={`company-${i}`} className="mb-2">
                    {c}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="mb-4 text-2xl font-bold">Support</h2>
              <ul>
                {supportData.map((s, i) => (
                  <li key={`support-${i}`} className="mb-2">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between pt-12 md:flex-row gap-y-4">
        <div className="text-center">
          <span>
            Reservation Hub, Inc. <MdCopyright className="inline pb-1" />{" "}
            {new Date().getFullYear()} All Rights Reserved
          </span>
        </div>
        <div className={styles.socialIcons}>
          {icons.map((icon, i) => (
            <span key={`icon-${i}`}>{icon}</span>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;
