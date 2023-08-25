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
          <p>{cyberware.description}</p>
        </div>
      )}
    </li>
  );
};

const Cyberwares = () => {
  const damageIncreasingImplants = [
      {
        name: "Periósteo",
        description: "Um tipo especial de armadura subcutânea para os braços que fortalece as articulações e ajuda a aumentar o dano com as mãos nuas(1d10 de dano desarmado)"
      },
      {
        name: "Gerador de Microvibração",
        description: "Aumenta o dano corpo a corpo em 3"
      },
      {
        name: "Estimulador do Sistema Límbico",
        description: "19 também se torna acerto crítico"
      },
      {
        name: "Estimulador do Córtex Visual",
        description: "Aumenta o dano de qualquer origem em +2"
      },
      {
        name: "Medula Óssea de Alta Densidade",
        description: "Dano aumentado em +3 para qualquer rolagem, entretando fica mais sucetível a hacks"
      }
  ];

  const healthIncreasingImplants =[
    {
      name: "Armadura hipodérmica",
      description: "+10 de vida."
    },
    {
      name: "Nano-cirurgiões",
      description: "Ao sofrer dano, cura 1d4 durante dois turnos"
    },
    {
      name: "Segundo coração",
      description: "Ao entrar em estado de morrendo não fica inconsciente mais, apesar de permancer com a quantidade de vida"
    },
    {
      name: "Biomonitor",
      description: "Ao chegar a menos que 1/5 da vida, aumenta a blindagem do corpo temporariamente para pesada"
    },
    {
      name: "Estimulante adrenalina",
      description: "Restaura 3 de vida por abate."
    },
    {
      name: "Syntholungs",
      description: "Implante passivo (pulmões artificiais) que aumenta a taxa de recuperação de resistência, dando uma ação bônus a mais por turno"
    },
    {
      name: "Ossos de titânio",
      description: "Capacidade de suportar peso mesmo sem força alta."
    },
    {
      name: "Otimizador de corpo sináptico",
      description: "+15 de vida"
    }
  ]  
  ;

  const protectionImplants = [
      {
        name: "Filtros nasais",
        description: "Aumenta a proteção contra gases venenosos ou outras toxinas"
      },
      {
        name: "Regulador da dor",
        description: "Reduz todo dano recebido em 10%"
      },
      {
        name: "Desintoxicante",
        description: "O personagem principal ganha imunidade completa a venenos."
      },
      {
        name: "Regulador do Metabolismo",
        description: "Em vez de causar danos, venenos reabastecem a saúde do personagem em 10% do valor do dano do veneno"
      },
      {
        name: "Conversor de calor",
        description: "Ataques térmicos aumentam em +1 o dano do personagem por 1 turno"
      },
      {
        name: "Revestimento refratário",
        description: "Não sofre danos de queimadura"
      },
      {
        name: "Cobertura do solo",
        description: "Agora o personagem é resistente a ataques de eletricidade, diminuindo o dano em 10%."
      }
  ];

  const combatImplants = [
      {
        name: "Grabshtichel",
        description: "O personagem tem garras retráteis em cada mão(1d6+4 de dano)"
      },
      {
        name: "Lâminas de louva-a-deus",
        description: "O protagonista possui lâminas retráteis em cada antebraço(1d6+6 de dano)"
      },
      {
        name: "Mãos de gorila",
        description: "Capacidade de abrir portas com as mãos. Corpo a corpo causa 1d10 de dano."
      },
      {
        name: "Monostring",
        description: "Uma arma especial é um fino fio de fibra ótica, que permite cortar os oponentes em questão de minutos. 6m de alcance, 1d8+2 de dano."
      },
      {
        name: "Laser de capacitor de dupla carga",
        description: "Funciona apenas a uma curta distância, no entanto, é extremamente mortal. 1d20+4 de dano, 2 cargas por combate."
      },
      {
        name: "Sistema de Lançamento de Projéteis",
        description: "Um suprimento infinito de explosivos, mas extremamente impreciso. O implante demora para resfriar. 1d20+10 de dano aleatório e distribuido."
      },
      {
        name: "Smartlink",
        description: "Necessário para usar armas inteligentes."
      },
      {
        name: "Coprocessador balístico",
        description: "Projeteis ricocheteiam. Toda rolagem de dano acompanha um teste de sorte."
      },
      {
        name: "Gerador de trajetória",
        description: "Permite assumir a direção do projétil durante o ricochete."
      }
  ]

  const timeImplants = [
      {
        name: "Militech Sandevistan",
        description: "Possui um complexo de efeitos: desacelerar o tempo (triplica o número de ações no turno) + crítico durante o efeito passa a ser 17. 1 turno de duração, 3 cargas por combate (ou tente mais para ver o resultado...)"
      },
      {
        name: "Regulador Reflexo",
        description: "Após a saúde cair para 1/3, durante 2 turnos, desacelera o tempo (duplica o número de ações por turno)."
      },
      {
        name: "Zetatech",
        description: "Retarda o tempo pela metade por um turno, vantagens em rolagens de ataque e reflexo"
      },
      {
        name: "Daynalar Sandevistan",
        description: "Pode retardar o tempo por 2 turnos(quadriplica o número de ações). 1 carga."
      },
      {
        name: "Sandevistan",
        description: "Retarda a passagem do tempo por 3 turnos(triplica o número de ações) + crítico durante o efeito passa a ser 17 + dobra o dano do acerto crítico. 1 carga."
      },
      {
        name: "Acelerador Sináptico",
        description: "A maior iniciativa é sempre sua."
      },
      {
        name: "Qian-ti Sandevistan",
        description: "Retarda o tempo durante 1 turno (duplica as ações no turno). 4 cargas."
      },
      {
        name: "Zetateh Sandevistan",
        description: "O tempo desacelera durante 2 turnos (duplicas as açõs no turno). 2 cargas."
      }
    
  ]

  const agilityImplants = [
      {
        name: "Impulsionador adrenal",
        description: "Todo teste de reflexo e os que são baseados nele são feitos com vantagem"
      },
      {
        name: "Micro Rotores",
        description: "Durante 1 turno duplica a velocidade de movimento e atribui vantagem às rolagens de ataque."
      },
      {
        name: "Articulações biônicas",
        description: "Retira desvantagem de tiros sequenciais"
      },
      {
        name: "Neofibras",
        description: "É possível esquivar e bater."
      },
      {
        name: "Camuflagem óptica",
        description: "Torna o personagem quase completamente invisível por 2 turnos."
      },
      {
        name: "Patas de lince",
        description: "Vantagens em testes de furtividade"
      }
  ]

  const others = [
      {
        name: "Couro sintético/cabelo",
        description: "Altera a textura da pele ou a cor do cabelo do personagem. Também pode dar ao personagem um penteado brilhante. Melhoria cosmética."
      },
      {
        name: "Óptica \"Kiryoshi\"",
        description: "É possível ver a uma distância maior."
      },
      {
        name: "Aprimoramentos ciber-ópticos",
        description: "Visão no escuro e espectro infravermelho"
      },
      {
        name: "Scanner de movimento",
        description: "Permite detectar alvos em movimento em um raio de até 50 metros inclusive."
      },
      {
        name: "Mão de gato",
        description: "Incorpora um \"gato\" na mão do herói, com o qual você pode escalar e realizar manobras de parkour."
      },
      {
        name: "Tornozelos reforçados",
        description: "Concede ao personagem a habilidade de pular mais alto."
      },
      {
        name: "Tendões fortalecidos",
        description: "O protagonista ganha a habilidade de realizar um salto duplo. Útil para speedrunning e furtividade."
      },
      {
        name: "Eletrocorpo",
        description: "Reflexo passivo a dano inimigo, 1d6 de dano elétrico em um raio de 6 metros no entorno (afeta todos no local)."
      },
      {
        name: "Biocondutor",
        description: "Diminui o tempo de recarga dos implantes"
      },
      {
        name: "Nanorelé",
        description: "Todos os efeitos do Implante Sandevistan e Krenzikov duram 1 turno a mais."
      }
    
  ]

  return (
    <div className='cyberware-container'>
      <CyberwareList title="Implantes que aumentam os danos" cyberwares={damageIncreasingImplants} />
      <CyberwareList title="Implantes que aumentam a saúde, resistência e capacidade de carga" cyberwares={healthIncreasingImplants} />
      <CyberwareList title="Implantes de proteção" cyberwares={protectionImplants} />
      <CyberwareList title="Implantes de combate" cyberwares={combatImplants} />
      <CyberwareList title="Implantes que aceleram o tempo" cyberwares={timeImplants} />
      <CyberwareList title="Implantes de agilidade" cyberwares={agilityImplants} />
      <CyberwareList title="Outros" cyberwares={others} />
    </div>
  );
};

export default Cyberwares;
