import { useState } from 'react';
import Navbar from '../components/global/Navbar';
import Footer from '../components/global/Footer';
import Checker from '../components/diagnosispage/Checker';
import Report from '../components/diagnosispage/Report';
import styles from '../style';

function Diagnosis() {
  return (
  
      <section className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>

        < Checker />

        {/* <div id="whitespace" className='h-[500px]'>

        </div> */}

        <div id="whitespace" className='h-[150px]'>

        </div>

        < Report />

        <div id="whitespace" className='h-[120px]'>

      </div>

        <div className={`bg-primary  ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
        <Footer />
        </div>
        </div>
        
      </section>

  );
}

export default Diagnosis;
