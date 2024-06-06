import styles from "../../style";
import { prognostic } from "../../assets";
import { footerLinks, socialMedia } from "../../constants";

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col bg-[#092689]`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-14 `}>
      <div className=" flex flex-col pl-5 justify-center text-[20px] text-[#FDFEFF] w-[100px] h-[90px] ">
        POGAI
        {/* <img
          src={prognostic}
          alt="hoobank"
          className="w-[200px] h-[130px] object-contain"
        /> */}
      </div>

      <div className="flex-[1.5] w-full flex flex-row justify-between md:mt-0 mt-10 pt-8">
        {footerLinks.map((footerlink) => (
          <div key={footerlink.title} className={`flex flex-col ss:my-0 my-4 min-w-[200px] max-w-[700px]`}>
            <h4 className="font-poppins font-medium text-[20px] leading-[27px] text-[#6C7A91] text-center">
             <b>{footerlink.title}</b> 
            </h4>
            <ul className="list-none mt-4">
              {footerlink.links.map((link, index) => (
                footerlink.title === "PRIVACY POLICY" ? (
                  <li
                    key={link.name}
                    className={`font-poppins font-normal text-[20px] leading-[24px] text-[#6C7A91] cursor-default text-center ${
                      index !== footerlink.links.length - 1 ? "mb-4" : "mr-6"
                    }`}
                  >
                    {link.name}
                  </li>
                ) : (
                  <li
                    key={link.name}
                    className={`font-poppins font-normal text-[20px] leading-[24px] text-[#6C7A91] hover:text-primary cursor-pointer text-center ${
                      index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                    }`}
                  >
                    {link.name}
                  </li>
                )
              ))}
            </ul>
          </div>
        ))}
      </div>

    </div>

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6  bg-[#4F5D75] pb-5">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white pl-12 ">
         Ⓒ 2024 POG AI. All Rights Reserved.
      </p>

      <div className="flex flex-row md:mt-0 mt-6 space-x-8 pr-8">
        <a href="#" className="text-white text-[15px]">Privacy Policy</a>
        <a href="#" className="text-white text-[15px]">Report a Problem</a>
        <a href="#" className="text-white text-[15px]">Security</a>
        <a href="#" className="text-white text-[15px]">Terms of Use</a>
        <a href="#" className="text-white text-[15px]">Cookies Settings</a>
    </div>

    </div>
  </section>
);

export default Footer;
