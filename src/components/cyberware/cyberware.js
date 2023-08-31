import React, { useState } from 'react';
import './cyberware.css'

const CyberwareList = ({ title, cyberwares }) => {
  return (
    <div className='cyberware-div'>
      <h2>{title}</h2>
      <ul >
        {cyberwares.map((cyberware, index) => (
          <CyberwareItem key={index} cyberware={cyberware} />
        ))}
      </ul>
    </div>
  );
};

const CyberwareItem = ({ cyberware }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <li onClick={() => setShowDetails(!showDetails)}>
      <strong>{cyberware.name}</strong>
      {showDetails && (
        <div className='description'>
          <p> {cyberware.description}</p>
          <p> Custo: {cyberware.cost}</p>
        </div>
      )}
    </li>
  );
};

const Cyberwares = () => {
  const damageIncreasingImplants = [
    {
        name: "Periósteo",
        description: "Um tipo especial de armadura subcutânea para os braços que fortalece as articulações e ajuda a aumentar o dano com as mãos nuas(1d10 de dano desarmado)",
        cost: "400 bc"
    },
    {
        name: "Gerador de Microvibração",
        description: "Aumenta o dano corpo a corpo em 3",
        cost: "400 bc"
    },
    {
        name: "Estimulador do Sistema Límbico",
        description: "19 também se torna acerto crítico",
        cost: "500 bc"
    },
    {
        name: "Estimulador do Córtex Visual",
        description: "Aumenta o dano de qualquer origem em +2",
        cost: "600 bc"
    },
    {
        name: "Medula Óssea de Alta Densidade",
        description: "Dano aumentado em +4 para qualquer rolagem, entretanto fica mais sucetível a hacks",
        cost: "1200 bc"
    }
];

const healthIncreasingImplants = [
    {
        name: "Armadura hipodérmica",
        description: "+10 de vida.",
        cost: "1000 bc"
    },
    {
        name: "Nano-cirurgiões",
        description: "Ao sofrer dano, cura 1d4 durante dois turnos",
        cost: "350 bc"
    },
    {
        name: "Segundo coração",
        description: "Ao entrar em estado de morrendo não fica inconsciente mais, apesar de permancer com a quantidade de vida",
        cost: "2000 bc"
    },
    {
        name: "Biomonitor",
        description: "Ao chegar a menos que 1/5 da vida, aumenta a blindagem do corpo temporariamente para pesada",
        cost: "1500 bc"
    },
    {
        name: "Estimulante adrenalina",
        description: "Restaura 3 de vida por abate.",
        cost: "800 bc"
    },
    {
        name: "Syntholungs",
        description: "Implante passivo (pulmões artificiais) que aumenta a taxa de recuperação de resistência, dando uma ação bônus a mais por turno",
        cost: "1200 bc"
    },
    {
        name: "Ossos de titânio",
        description: "Capacidade de suportar peso mesmo sem força alta.",
        cost: "1800 bc"
    },
    {
        name: "Otimizador de corpo sináptico",
        description: "+15 de vida",
        cost: "1800 bc"
    }
];

const protectionImplants = [
    {
        name: "Filtros nasais",
        description: "Aumenta a proteção contra gases venenosos ou outras toxinas",
        cost: "600 bc"
    },
    {
        name: "Regulador da dor",
        description: "Reduz todo dano recebido em 10%",
        cost: "1000 bc"
    },
    {
        name: "Desintoxicante",
        description: "O personagem ganha imunidade completa a venenos.",
        cost: "1200 bc"
    },
    {
        name: "Regulador do Metabolismo",
        description: "Em vez de causar danos, venenos reabastecem a saúde do personagem em 10% do valor do dano do veneno",
        cost: "1500 bc"
    },
    {
        name: "Conversor de calor",
        description: "Ataques térmicos aumentam em +1 o dano do personagem por 1 turno",
        cost: "600 bc"
    },
    {
        name: "Revestimento refratário",
        description: "Não sofre danos de queimadura",
        cost: "1200 bc"
    },
    {
        name: "Cobertura do solo",
        description: "Agora o personagem é resistente a ataques de eletricidade, diminuindo o dano em 10%.",
        cost: "800 bc"
    }
];

const combatImplants = [
    {
        name: "Grabshtichel",
        description: "O personagem tem garras retráteis em cada mão(1d6+4 de dano)",
        cost: "600 bc"
    },
    {
        name: "Lâminas de louva-a-deus",
        description: "O protagonista possui lâminas retráteis em cada antebraço(1d6+6 de dano)",
        cost: "800 bc"
    },
    {
        name: "Mãos de gorila",
        description: "Capacidade de abrir portas com as mãos. Corpo a corpo causa 1d10 de dano.",
        cost: "800 bc"
    },
    {
        name: "Monostring",
        description: "Uma arma especial é um fino fio de fibra ótica, que permite cortar os oponentes em questão de minutos. 6m de alcance, 1d8+2 de dano.",
        cost: "750 bc"
    },
    {
        name: "Laser de capacitor de dupla carga",
        description: "Funciona apenas a uma curta distância, no entanto, é extremamente mortal. 1d20+4 de dano, 2 cargas por combate.",
        cost: "2000 bc"
    },
    {
        name: "Sistema de Lançamento de Projéteis",
        description: "Um suprimento infinito de explosivos, mas extremamente impreciso. O implante demora para resfriar. 1d20+10 de dano aleatório e distribuido.",
        cost: "2500 bc"
    },
    {
        name: "Smartlink",
        description: "Necessário para usar armas inteligentes.",
        cost: "800 bc"
    },
    {
        name: "Coprocessador balístico",
        description: "Projeteis ricocheteiam. Toda rolagem de dano acompanha um teste de sorte.",
        cost: "900 bc"
    },
    {
        name: "Gerador de trajetória",
        description: "Permite assumir a direção do projétil durante o ricochete.",
        cost: "1000 bc"
    }
];

const timeImplants = [
    {
        name: "Militech Sandevistan",
        description: "Possui um complexo de efeitos: desacelerar o tempo (triplica o número de ações no turno) + crítico durante o efeito passa a ser 17. 1 turno de duração, 3 cargas por combate (ou tente mais para ver o resultado...)",
        cost: "45.000"
    },
    {
        name: "Regulador Reflexo",
        description: "Após a saúde cair para 1/3, durante 2 turnos, desacelera o tempo (duplica o número de ações por turno).",
        cost: "28.000"
    },
    {
        name: "Dynamo",
        description: "Retarda o tempo pela metade por um turno, vantagens em rolagens de ataque e reflexo",
        cost: "20.000"
    },
    {
        name: "Daynalar Sandevistan",
        description: "Pode retardar o tempo por 2 turnos(quadriplica o número de ações). 1 carga.",
        cost: "30.000"
    },
    {
        name: "Sandevistan",
        description: "Retarda a passagem do tempo por 3 turnos(triplica o número de ações) + crítico durante o efeito passa a ser 17 + dobra o dano do acerto crítico. 1 carga.",
        cost: "35.000"
    },
    {
        name: "Acelerador Sináptico",
        description: "A maior iniciativa é sempre sua.",
        cost: "700 bc"
    },
    {
        name: "Qian-ti Sandevistan",
        description: "Retarda o tempo durante 1 turno (duplica as ações no turno). 4 cargas.",
        cost: "14.000 bc"
    },
    {
        name: "Zetateh Sandevistan",
        description: "O tempo desacelera durante 2 turnos (duplicas as ações no turno). 2 cargas.",
        cost: "10.000 bc"
    }
];

const agilityImplants = [
    {
        name: "Impulsionador adrenal",
        description: "Todo teste de reflexo e os que são baseados nele são feitos com vantagem",
        cost: "650 bc"
    },
    {
        name: "Micro Rotores",
        description: "Durante 1 turno duplica a velocidade de movimento e atribui vantagem às rolagens de ataque.",
        cost: "600 bc"
    },
    {
        name: "Articulações biônicas",
        description: "Retira desvantagem de tiros sequenciais",
        cost: "800 bc"
    },
    {
        name: "Neofibras",
        description: "É possível esquivar e bater.",
        cost: "1000 bc"
    },
    {
        name: "Camuflagem óptica",
        description: "Torna o personagem parcialmente invisível por 2 turnos.",
        cost: "750 bc"
    },
    {
        name: "Patas de lince",
        description: "Vantagens em testes de furtividade",
        cost: "600 bc"
    }
];

const others = [
    {
        name: "Couro sintético/cabelo",
        description: "Altera a textura da pele ou a cor do cabelo do personagem. Também pode dar ao personagem um penteado brilhante. Melhoria cosmética.",
        cost: "250 bc"
    },
    {
        name: "Óptica \"Kiryoshi\"",
        description: "É possível ver a uma distância maior.",
        cost: "350 bc"
    },
    {
        name: "Aprimoramentos ciber-ópticos",
        description: "Visão no escuro e espectro infravermelho",
        cost: "350 bc"
    },
    {
        name: "Scanner de movimento",
        description: "Permite detectar alvos em movimento em um raio de até 50 metros inclusive.",
        cost: "600 bc"
    },
    {
        name: "Mão de gato",
        description: "Incorpora um \"gato\" na mão do herói, com o qual você pode escalar e realizar manobras de parkour.",
        cost: "600 bc"
    },
    {
        name: "Tornozelos reforçados",
        description: "Concede ao personagem a habilidade de pular mais alto.",
        cost: "450 bc"
    },
    {
        name: "Tendões fortalecidos",
        description: "O protagonista ganha a habilidade de realizar um salto duplo. Útil para speedrunning e furtividade.",
        cost: "450 bc"
    },
    {
        name: "Eletrocorpo",
        description: "Reflexo passivo a dano inimigo, 1d6 de dano elétrico em um raio de 6 metros no entorno (afeta todos no local).",
        cost: "1000 bc"
    },
    {
        name: "Biocondutor",
        description: "Diminui o tempo de recarga dos implantes",
        cost: "2000 bc"
    },
    {
        name: "Nanorelé",
        description: "Todos os efeitos do Implante Sandevistan e Krenzikov duram 1 turno a mais.",
        cost: "1500 bc"
    }
];
    
  

  return (
    <div className='container'>
      <CyberwareList title="Implantes de dano" cyberwares={damageIncreasingImplants} />
      <CyberwareList title="Implantes de saúde e resistência" cyberwares={healthIncreasingImplants} />
      <CyberwareList title="Implantes de proteção" cyberwares={protectionImplants} />
      <CyberwareList title="Implantes de combate" cyberwares={combatImplants} />
      <CyberwareList title="Implantes de aceleração de tempo" cyberwares={timeImplants} />
      <CyberwareList title="Implantes de agilidade" cyberwares={agilityImplants} />
      <CyberwareList title="Outros" cyberwares={others} />
    </div>
  );
};

export default Cyberwares;
