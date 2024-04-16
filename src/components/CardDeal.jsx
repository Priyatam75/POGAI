import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Diagnosis:<br className="sm:block hidden" /> Fungal Infection
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Treatment plan and Prognosis: Please prescribe anti-fungal creams
        and if the rashes do not subside in a week, further testing is required
      </p>
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
