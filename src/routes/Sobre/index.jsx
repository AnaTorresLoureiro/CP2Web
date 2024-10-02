import {SecSobreNos} from "../Sobre/styleSobre"
import ImgSobre from '../../assets/imgsobre.png'

export default function Sobre(){

    return(
        <>
           <SecSobreNos>
                <h2>Sobre Nós</h2>
                <p>
                    Na <strong>Tokyo Drift</strong>, somos apaixonados por acelerar o futuro da mobilidade elétrica. 
                    Assim como um carro de alta performance, cada membro da nossa equipe é uma engrenagem essencial que 
                    mantém nossa missão em movimento.
                </p>
                <p>
                    Nossa equipe é composta por:
                </p>
                <ul>
                    <li><strong>Ana Laura</strong> - 554375</li>
                    <li><strong>Vitor Augusto</strong> - 555469</li>
                    <li><strong>Geronimo Augusto</strong> - 557170</li>
                    <li><strong>Murilo Cordeiro</strong> - 556727</li>
                </ul>
                <p>
                    Com uma equipe de especialistas, desde designers que criam um visual arrojado até desenvolvedores 
                    que otimizam a experiência do usuário, estamos comprometidos em oferecer os melhores veículos elétricos 
                    do mercado. 
                </p>
                <p>
                    Nós não apenas vendemos carros; nós impulsionamos uma revolução na forma como você se desloca. 
                    Aqui, você encontra o equilíbrio perfeito entre tecnologia, design e sustentabilidade. 
                </p>
                <p>
                    Junte-se a nós e descubra como a <strong>Tokyo Drift</strong> pode elevar sua experiência automotiva a um 
                    novo patamar.
                </p>
                <img src={ImgSobre} alt="" />
            </SecSobreNos>

        </>
    )
}