import style from "../../../styles/lp_indefesos/indefesos.module.sass";
import background from "../../../public/cachorros-juntos.png";

export default function Section1(){
  return (
    <div className={style.section1}>
      <div
        className={style.background}
        src={background}>
          
        <div className={style.description}>
          <h1 className={style.title}>Livima + Os Indefesos</h1>
          <p className={style.text}>Para ajudar os animaizinhos indefesos, contamos com sua ajuda. A cada anúncio ativado na Livima, a gente doa 1 real para viabilizar a construção do projeto Meu Tijolinho.</p>
        </div>
        
      </div>
    </div>
  );
}