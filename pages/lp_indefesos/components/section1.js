import style from "../../../styles/lp_indefesos/indefesos.module.sass";
import background from "../../../public/cachorros-juntos.png";
import Image from "next/image";

export default function Section1(){
  return (
    <div className={style.section1}>
      <div
        className={style.background}
        src={background}
      />
    </div>
  );
}