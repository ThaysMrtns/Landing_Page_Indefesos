import style from "../../styles/lp_indefesos/indefesos.module.sass";
import logo from "../../public/logo.png";
import Image from "next/image";

export default function Header(){
  return (
    <div className={style.header}>
      <div className={style.logo}><Image src={logo}/></div>
      <div className={style.routes}>
          <div className={style.route}><p>Buscar imóveis</p></div>
          <div className={style.route}><p>Crédito</p></div>
          <div className={style.route}>Quero ajuda</div>
          <div className={style.button}><p>Começar anúncio grátis</p></div>
          <div className={style.route}><p>Entrar</p></div>
      </div>
    </div>
  );
}