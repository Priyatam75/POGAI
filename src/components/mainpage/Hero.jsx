import styles from "../../style";
import { discount, robot } from "../../assets";
import ButtonExplore from "../tools/ButtonExplore";


const Hero = () => {
  return (
    <>
    <section id="home" className={`flex md:flex-row flex-col bg-[#092689]`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-16 sm:px-16 px-6 py-6`}>
        
        <div className="flex flex-row justify-between items-center">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[48px] text-[44px] text-white  leading-[60px]">
            Empowering<br className="sm:block hidden" />{" "}
            <span className="text-gradient">Your Healthcare</span>{" "}
          </h1>

        </div>

        <h1 className="font-poppins font-semibold ss:text-[48px] text-[44px] text-white leading-[60px] w-full">
          Journey With AI
        </h1>
        
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Discover the future of healthcare at POGAI. Our AI-powered platform revolutionizes the patient experience, offering instant symptom analysis, accurate diagnoses, and personalized medical insights. Empower yourself to take control of your health journey with cutting-edge technology and compassionate care.
        </p>

        <ButtonExplore/>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative py-4`}>
        <img src={robot} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 blue__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full blue__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>
    </section>
        <section id="semicircle" className={`flex md:flex-row flex-col bg-[#092689] min-h-[400px] `} style={{borderBottomLeftRadius: '50% 100%',
    borderBottomRightRadius: '50% 100%'}}>

        </section>
        </>

//rounded-b-[400px]
  );
};

export default Hero;
