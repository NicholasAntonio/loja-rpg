import React, { useState } from 'react';
import './hacks.css'

const HackList = ({ title, hacks }) => {
  return (
    <div className='hacks-div'>
      <h2>{title}</h2>
      <ul>
        {hacks.map((hack, index) => (
          <HackItem key={index} hack={hack} />
        ))}
      </ul>
    </div>
  );
};

const HackItem = ({ hack }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <li onClick={() => setShowDetails(!showDetails)}>
      <strong>{hack.name}</strong>
      {showDetails && (
        <div className='description'>
          <p>{hack.description}</p>
          <p>Custo RAM: {hack.ramCost}</p>
        </div>
      )}
    </li>
  );
};

const HacksAndDaemons = () => {
  const quickHacks = [
    {
      name: "Controle Remoto",
      description: "Use para controlar uma variedade de dispositivos eletrônicos.",
      ramCost: '1(varia com o tamanho do dispositivo)'
    },
    {
      name: "Curto-Circuito",
      description: "Causa 1d6 de dano elétrico ao inimigo alvo, exigindo teste de técnica para escapar dos efeitos de imobilização",
      ramCost: 1
    },
    {
      name: "Reboot Óptico",
      description: "Ofusca os visores de realidade aumentada de até dois inimigos, deixando-os temporariamente cegos e vulneráveis.",
      ramCost: 1
    },
    {
      name: "Hack Cego",
      description: "Interrompe temporariamente os implantes de mira dos inimigos, afetando sua precisão.",
      ramCost: 1
    },
    {
      name: "Sobrecarregar",
      description: "Sobrecarrega um dispositivo eletrônico e, após 1 turno, o alvo sofre 1d8 de dano térmico",
      ramCost: 2
    },
    {
      name: "Desativar Arma",
      description: "Desarma um inimigo por 1 turno, forçando-o a lutar usando ataques corpo a corpo.",
      ramCost: 3
    },
    {
      name: "Ativar Distração",
      description: "Crie distrações sonoras usando dispositivos eletrônicos para atrair a atenção dos inimigos.",
      ramCost: 1
    },
    {
      name: "Hack de Dispositivo",
      description: "Interaja remotamente com dispositivos, como desbloquear portas trancadas ou desativar torretas de segurança.",
      ramCost: 2
    },
    {
      name: "Distração Holográfica",
      description: "Crie um holograma na distância corpo a corpo para distrair e confundir os inimigos, implicando teste de inteligência do alvo (se falhar atinge o holograma primeiramente)",
      ramCost:1
    },
    {
      name: "Hiperlink Sensorial",
      description: "Altere temporariamente os sentidos dos inimigos, fazendo com que eles vejam, ouçam ou sintam coisas que não estão presentes.",
      ramCost:1
    },
    {
      name: "Cascata de Feedback",
      description: "Sobrecarregue os implantes cibernéticos inimigos, causando dano 1d6 de dano durante 3 turnos.",
      ramCost: 2
    },
    {
      name: "Hack de Energia",
      description: "Desative dispositivos elétricos em uma área para criar escuridão temporária e vantagem tática.",
      ramCost: 4

    },
    {
      name: "Manipulação de Munição",
      description: "Interfira nos sistemas de armas dos inimigos, fazendo com que suas armas falhem ao disparar.",
      ramCost: 3
    },
    {
      name: "Rastreamento de Sinal",
      description: "Siga sinais eletrônicos para encontrar itens escondidos ou rastrear alvos específicos.",
      ramCost:1
    },
    {
      name: "Troca de Frequência",
      description: "Mude as frequências de comunicação dos inimigos, criando confusão e atrapalhando sua coordenação.",
      ramCost:2
      
    }
  ]
  ;

  const Daemons = [
    {
      name: " Daemon de Caixa de Correio",
      description: "Acesse caixas de correio eletrônico para obter informações sobre missões, pistas de história e segredos do mundo.",
      ramCost: 4
    },
    {
      name: " Daemon de Dados",
      description: "Manipule sistemas de pagamento para aumentar temporariamente a quantidade de dinheiro recebida por vendas de itens.",
      ramCost: 4
    },
    {
      name: " Daemon de Supressão de Segurança",
      description: "Desative sistemas de alarme e torretas de segurança em uma área, permitindo uma abordagem mais furtiva.",
      ramCost: 6
    },
    {
      name: " Daemon de Tradução",
      description: "Traduza automaticamente idiomas estrangeiros, facilitando a comunicação com NPCs que falam outros idiomas.",
    },
    {
      name: " Daemon de Rastreamento de Contratos",
      description: "Localize rastros digitais de alvos específicos, como parte de missões de caça a recompensas.",
      ramCost: 6
    },
    {
      name: " Daemon de Otimização de Veículo",
      description: "Melhore temporariamente o desempenho do seu veículo, aumentando velocidade e manobrabilidade.",
      ramCost: 4
    }
  ]
  ;

  return (
    <div className='hacks-container'>
      <HackList title="Hacks Rápidos" hacks={quickHacks} />
      <HackList title=" Daemons" hacks= {Daemons} />
    </div>
  );
};

export default HacksAndDaemons;
