import './index.css';

export default function Sobre() {
  return (
    <div className="cabecalho">
        <header>
            <div className='containerAzul'>
                <div className='a'>
                    <img src="public/assets/images/image 1" alt="imagem" />
                    <h6>React FreiS</h6>
                </div>
                <div className='container2'>
                    <h4>inicio</h4>
                    <h4>sobre</h4>
                </div>
            </div>
        </header>
        <div className='corpo'>
            <h2>Sobre</h2>
        </div>
        <div>
            <p>Bem-vindo à nossa plataforma de exercícios! Aqui, nosso objetivo é ajudar você a <br />aprimorar suas habilidades em Node.js e lógica de programação de forma prática e <br />envolvente. Acreditamos que a prática constante é essencial para o aprendizado e o <br />aperfeiçoamento em tecnologia. Nossa missão é fornecer um ambiente onde você possa <br />praticar e testar seus conhecimentos em Node.js e lógica de programação, permitindo <br />que você avance no seu próprio ritmo e de acordo com suas necessidades. <br />
            Seja qual for seu nível de experiência, nossa plataforma é o lugar ideal para você crescer <br />e desenvolver suas habilidades. <br />
            Estamos ansiosos para ver seu progresso e sucesso!</p>
        </div>
        <div>
            <img src="public/assets/images/feri-removebg-preview.png" alt="imagem" />
        </div>
    </div>
  );
}
