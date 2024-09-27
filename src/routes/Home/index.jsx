import { MainHome } from "./homeStyle";
import Background from '../../assets/background.png'
import HoverCard from '../../components/Card'
import Carousel from '../../components/Carrosel'; 
import Terra from '../../assets/terra.png'
import Tech from '../../assets/tech.png'
import Mute from '../../assets/mute.png'
import Dinheiro from '../../assets/dinheiro.png'




export default function Home(){

    return(
        <>
            <MainHome>
                <h1 className="texto">O futuro da mobilidade está aqui: Conduza com eficiência e estilo.</h1>
                <div className="banner">
                    <img src={Background} alt="" /> 
                </div>
                <div className="marcas">
                    <div className="vr"></div>
                    <h1>Marcas</h1>
                    <Carousel/>
                </div>
                <div className="txt">
                    <h2>PORQUE TER UM CARRO ELÉTRICO</h2>
                </div>
                <div className="info">
                    <HoverCard icon={Terra} hoverText="Zero emissão de carbono e menor impacto ambiental." />
                    <HoverCard icon={Tech} hoverText="Carros conectados com sistemas de inteligência artificial e automação." />
                    <HoverCard icon={Dinheiro} hoverText="Menor custo de manutenção e economia de combustível." />
                    <HoverCard icon={Mute} hoverText="Condução mais suave, sem ruídos do motor." />
                </div>
                <div className="vantagem">
                    <h1>VANTAGENS TOKYO DRIFT</h1>
                    <div className="txt2">
                        <div className="first"></div>
                        <div className="second"></div>
                        <div className="third"></div>
                    </div>
                </div>
                <div className="video">
                    <div className="assistir">
                        <div className="line"> </div>
                        <h1>Conduza o Futuro: A Revolução dos Carros Elétricos em Suas Mãos</h1>
                    </div>
                    <iframe width="760" height="515" src="https://www.youtube.com/embed/3B5OZhYcxrA?si=2Onv0Tbn5l56yEpk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </MainHome>
        </>
    )
}