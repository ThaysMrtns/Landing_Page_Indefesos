import Header from "./components/header";
import LivimaIndefesos from "./components/livima_indefesos";
import Proposito from "./components/proposito";
import Footer from "./components/footer";
export default function Indefesos(){
  return (
    <>
      <Header/>
      <section>
        <LivimaIndefesos/>
      </section>
      <section>
        <Proposito/>
      </section>
      <Footer/>
    </>
  );
}