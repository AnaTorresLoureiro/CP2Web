import { MainHome } from "./homeStyle";
import Background from '../../assets/background.png'
import HoverCard from '../../components/Card'
import Carousel from '../../components/Carrosel'; 
import Terra from '../../assets/terra.png'
import Tech from '../../assets/tech.png'
import Mute from '../../assets/mute.png'
import Dinheiro from '../../assets/dinheiro.png'

import Carde from "../../components/Produtos";
import Nissan from '../../assets/nissan_car.png'
import Audi from '../../assets/audi_car.png'
import Porsche from '../../assets/porsche_car.png'
import Ora from '../../assets/ora_car.png'
import Tesla from '../../assets/tesla_car.png'
import Fiat from '../../assets/fiat_car.png'


export default function Home(){
    const cardData = [
        {
            imageSrc: Tesla,
            title: 'R$ 000000,00',
            description: 'A Tesla é sinônimo de inovação em mobilidade elétrica, com veículos que combinam desempenho impressionante, tecnologia avançada e sustentabilidade.',
        },
        {
            imageSrc: Nissan,
            title: 'R$ 000000,00',
            description: 'A Nissan é reconhecida por sua confiabilidade e eficiência, oferecendo uma linha diversificada de veículos, desde compactos até SUVs.',
        },
        {
            imageSrc: Fiat,
            title: 'R$ 000000,00',
            description: 'A Fiat é famosa por seu design compacto e eficiente, ideal para o ambiente urbano.',
        },
        {
            imageSrc: Audi,
            title: 'R$ 000000,00',
            description: 'A Audi é sinônimo de luxo e desempenho, com designs elegantes e tecnologia de ponta.',
        },
        {   imageSrc: Porsche, 
            title:'R$ 000000,00',
            description: "A Porsche é sinônimo de desempenho excepcional e luxo. Seus modelos, oferecem uma experiência de direção incomparável, com engenharia de precisão.",
        },
        {   imageSrc: Ora, 
            title:'R$ 000000,00',
            description:'A Ora é uma marca chinesa que está rapidamente ganhando destaque no mercado de carros elétricos.',
        },
    ];
    return(
        <>
            <MainHome>
                <div className="banner">
                    <img src={Background} alt="" /> 
                </div>
                <div className="marcas">
                    <div className="vr"></div>
                    <h1 className="txtM">MARCAS</h1>
                    <Carousel/>
                </div>
                <div className="buy">
                    {cardData.map((card, index) => (
                        <Carde
                            key={index}
                            imageSrc={card.imageSrc}
                            title={card.title}
                            description={card.description}
                        />
                    ))}
                </div>
                <div className="VantagensTokyo">
                    <h2>Por que escolher a Tokyo Drift?</h2>
                    <ul className="vantagens-lista">
                    <li>🚗 Produtos de alta qualidade: Oferecemos uma seleção cuidadosa de veículos e acessórios de marcas renomadas.</li>
                    <li>🎨 Personalização exclusiva: Transforme seu carro com nossas opções de customização que refletem seu estilo único.</li>
                    <li>🛠️ Suporte técnico especializado: Nossa equipe é composta por profissionais qualificados prontos para ajudar com suas dúvidas.</li>
                    <li>📦 Entrega rápida: Garantimos que seu pedido chegue até você em tempo hábil, para que você possa aproveitar seus produtos o quanto antes.</li>
                    <li>💳 Pagamento facilitado: Oferecemos diversas opções de pagamento, garantindo que a experiência de compra seja simples e prática.</li>
                    </ul>
                </div>
                <div className="info">
                    <h2>Por que investir em um Elétrico?</h2>
                    <div className="hovers">
                    <HoverCard icon={Terra} hoverText="Zero emissão de carbono e menor impacto ambiental." />
                    <HoverCard icon={Tech} hoverText="Carros conectados com sistemas de inteligência artificial e automação." />
                    <HoverCard icon={Dinheiro} hoverText="Menor custo de manutenção e economia de combustível." />
                    <HoverCard icon={Mute} hoverText="Condução mais suave, sem ruídos do motor." />
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