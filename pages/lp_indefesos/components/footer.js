import style from "../../../styles/lp_indefesos/indefesos.module.sass";
import logo from "../../../public/logoFooter.png";
import Image from 'next/image';

export default function Footer(){
    return(
        <div className={style.footer}>
            <div className={style.groupText}>
                <h3 className={style.anuncie}>Anuncie seu imóvel</h3>
                <h3 className={style.buscar}>Buscar imóveis</h3>
                <h3 className={style.text}>Como funciona</h3>
                <h3 className={style.text}>Empréstimo com garantia</h3>
                <h3 className={style.text}>Financiamento imobiliário</h3>
                <h3 className={style.text}>Administração</h3>
            </div>
            <div className={style.groupText}>
                <h3 className={style.text}>Revista Livima</h3>
                <h3 className={style.text}>Quem somos</h3>
                <h3 className={style.text}>Perguntas frequentes</h3>
                <h3 className={style.text}>Política de privacidade</h3>
                <h3 className={style.text}>Termos de uso</h3>
                <div className={style.marginText}/>
                <h3 className={style.text}>Termos de uso</h3>
                <h3 className={style.text}>contato@livima.com.br</h3>
                <h3 className={style.text}>21 99249-3426</h3>
            </div>
            <div className={style.groupText}>
                <div className={style.image}>
                    <Image src={logo}/>
                </div>
                <h3 className={style.text}>© 2020 Livima Consultoria Imobiliária LTDA</h3>
                <h3 className={style.text}>CNPJ 27.514.627/0001-17</h3>
                <h3 className={style.text}>creci-J 7484</h3>
            </div>
        </div>
    );
}