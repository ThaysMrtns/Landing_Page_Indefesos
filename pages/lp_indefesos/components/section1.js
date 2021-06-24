import style from "../../../styles/lp_indefesos/indefesos.module.sass";
import background from "../../../public/cachorros-juntos.png";
import Image from "next/image";

export default function Section1(){
  return (
    <div>
      <Image
        className={style.section1}
        src={background}
      />
    </div>
  );
}