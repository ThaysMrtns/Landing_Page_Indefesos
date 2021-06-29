import style from "../../../styles/lp_indefesos/indefesos.module.sass";
import Image from 'next/image';
import rocky from '../../../public/dog8.png';
import agnes from '../../../public/dog9.png';
import aki from '../../../public/dog10.png';
import perninha from '../../../public/dog11.png';

export default function Section2(){
    return (
        <div className={style.section2}>
            <div className={style.description}>
                <div className={style.title}><h2>Propósito</h2></div>
                <div className={style.text}>A casa é um lugar muito importante. 
                    Ela nos abriga da chuva, faz sombra em dia de sol e permite que a gente durma de forma confortável.
                </div>
                <div className={style.text}>Assim como a gente, os animais também merecem um lar, um lugarzinho aconchegante para viver.</div>
                <div className={style.text}>É por isso que ONG Os Indefesos, que cuida dos animais resgatados 
                    das ruas ou em situação precária, criou o projeto “Meu Tijolinho” 
                    que tem o intuito de construir um abrigo mais confortável, 
                    tranquilo e acolhedor para todos os animais.
                </div>
                <div className={style.text}>Com uma pequena ajuda,
                    podemos mudar a vida de milhares de peludinhos.
                    Assim, eles poderão ter o canil que sempre sonharam e merecem!
                </div>

            </div>
            <div className={style.animals}>
                <div className={style.group}>
                    <div className={style.picture}>
                        <Image src={rocky}/>
                        <h2 className={style.text}>Rocky</h2>
                    </div>
                    <div className={style.picture}>
                        <Image src={agnes} className={style.picture}/>
                        <h2 className={style.text}>Agnes</h2>
                    </div>
                    <div className={style.picture}>
                        <Image src={aki} className={style.picture}/>
                        <h2 className={style.text}>Aki</h2>
                    </div>
                    <div className={style.picture}>
                        <Image src={perninha} className={style.picture}/>
                        <h2 className={style.text}>Perninha</h2>
                    </div>
                </div>
                <div className={style.picture}>
                    <Image src={rocky} className={style.picture}/>
                    <Image src={rocky} className={style.picture}/>
                    <Image src={rocky} className={style.picture}/>
                    <Image src={rocky} className={style.picture}/>
                </div>
                <div className={style.picture}>
                    <Image src={rocky} className={style.picture}/>
                    <Image src={rocky} className={style.picture}/>
                    <Image src={rocky} className={style.picture}/>
                    <Image src={rocky} className={style.picture}/>
                </div>
            </div>
        </div>
    );
}