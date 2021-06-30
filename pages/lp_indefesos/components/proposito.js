import style from "../../../styles/lp_indefesos/indefesos.module.sass";
import Image from 'next/image';
import rocky from '../../../public/dog8.png';
import agnes from '../../../public/dog9.png';
import aki from '../../../public/dog10.png';
import perninha from '../../../public/dog11.png';
import maria from '../../../public/dog12.png';
import fiona from '../../../public/dog13.png';
import marley from '../../../public/dog14.png';
import theo from '../../../public/dog15.png';
import gigi from '../../../public/dog16.png';
import branco from '../../../public/dog17.png';
import joaquina from '../../../public/dog18.png';
import theocat from '../../../public/dog19.png';

export default function Proposito(){
    return (
        <div className={style.proposito}>
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
                <div className={style.animalsGroup}>
                    <div className={style.picture}>
                        <Image src={rocky}/>
                        <h2 className={style.text}>Rocky</h2>
                    </div>
                    <div className={style.picture}>
                        <Image src={agnes}/>
                        <h2 className={style.text}>Agnes</h2>
                    </div>
                    <div className={style.picture}>
                        <Image src={aki}/>
                        <h2 className={style.text}>Aki</h2>
                    </div>
                    <div className={style.picture}>
                        <Image src={perninha}/>
                        <h2 className={style.text}>Perninha</h2>
                    </div>
                </div>
                <div className={style.animalsGroup}>
                    <div className={style.picture}>
                        <Image src={maria}/>
                        <h2 className={style.text}>Maria</h2>
                    </div>
                    <div className={style.picture}>
                        <Image src={fiona} />
                        <h2 className={style.text}>Fiona</h2>
                    </div>
                    <div className={style.picture}>
                        <Image src={marley} />
                        <h2 className={style.text}>Marley</h2>
                    </div>
                    <div className={style.picture}>
                        <Image src={theo} />
                        <h2 className={style.text}>Theo</h2>
                    </div>
                </div>
                <div className={style.animalsGroup}>
                    <div className={style.picture}>
                        <Image src={gigi}/>
                        <h2 className={style.text}>Gigi</h2>
                    </div>
                    <div className={style.picture}>
                        <Image src={branco} />
                        <h2 className={style.text}>Branco</h2>
                    </div>
                    <div className={style.picture}>
                        <Image src={joaquina} />
                        <h2 className={style.text}>Joaquina</h2>
                    </div>
                    <div className={style.picture}>
                        <Image src={theocat}/>
                        <h2 className={style.text}>Theo</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}