import React, { useState } from 'react';

const CyberwareList = ({ title, cyberwares }) => {
  return (
    <div>
      <h2>{title}</h2>
      <ul>
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
        <div>
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
        description: "Um tipo especial de armadura subcutânea para os braços que fortalece as articulações e ajuda a aumentar o dano com as mãos nuas."
      },
      {
        name: "Gerador de Microvibração",
        description: "Aumenta o dano corpo a corpo em 5-15%."
      },
      {
        name: "Estimulador do Sistema Límbico",
        description: "Aumenta a chance crítica em 10-25%."
      },
      {
        name: "Estimulador do Córtex Visual",
        description: "Aumenta o crit em 10-45%."
      },
      {
        name: "Medula Óssea de Alta Densidade",
        description: "Dano aumentado em 7-25%, no entanto, cada ataque agora custa 10% a mais de resistência."
      }
  ];

  const healthIncreasingImplants =[
    {
      name: "Armadura hipodérmica",
      description: "Aumenta a resistência e resistência do herói. Na verdade, ele é feito de plástico balístico e é implantado sob a pele do personagem. Aumenta a classificação de armadura em 20-200."
    },
    {
      name: "Nano-cirurgiões",
      description: "Nano-robôs microscópicos que são capazes de curar V de quase qualquer lesão."
    },
    {
      name: "Segundo coração",
      description: "Ressuscita V depois que sua saúde é reduzida a 0."
    },
    {
      name: "Biomonitor",
      description: "O HP do personagem é restaurado ao máximo (na raridade lendária) depois de cair abaixo de 15%. O cooldown do efeito do implante é de 2 minutos."
    },
    {
      name: "Estimulante adrenalina",
      description: "10-50% da resistência do herói é restaurada após cada inimigo morto."
    },
    {
      name: "Indutor",
      description: "Depois que um projétil EMP inimigo atinge V, ele aumentará sua armadura para metade de seu valor base."
    },
    {
      name: "Bomba de sangue",
      description: "Restaura 50-90% da saúde a cada 30 segundos (recarga)."
    },
    {
      name: "Syntholungs",
      description: "Implante passivo (pulmões artificiais) que aumenta a taxa de recuperação de resistência V."
    },
    {
      name: "Vasos bioplásticos",
      description: "Ajude o personagem a se regenerar mais rápido."
    },
    {
      name: "Circuito de feedback",
      description: "Depois de disparar um projétil totalmente carregado, o personagem recupera de 3 a 10% de sua saúde máxima."
    },
    {
      name: "Ossos de titânio",
      description: "Aumente o peso permitido para transferência em 20-60%."
    },
    {
      name: "Otimizador de corpo sináptico",
      description: "Aumenta a saúde do personagem em 20-60%."
    },
    {
      name: "Pulmões biônicos",
      description: "Aumenta a resistência máxima em 25-60%."
    }
  ]  
  ;

  const protectionImplants = [
      {
        name: "Filtros nasais",
        description: "Aumenta a proteção contra gases venenosos ou outras toxinas em 70%."
      },
      {
        name: "Regulador da dor",
        description: "Concede a V a capacidade de reduzir o dano que ele recebe em 10%."
      },
      {
        name: "Desintoxicante",
        description: "O personagem principal ganha imunidade completa a venenos."
      },
      {
        name: "Regulador do Metabolismo",
        description: "Em vez de danos, os venenos reabastecem a saúde do personagem."
      },
      {
        name: "Conversor de calor",
        description: "V torna-se imune a danos térmicos. Além disso, esses ataques aumentam seu próprio dano."
      },
      {
        name: "Stimsop",
        description: "A resistência a todos os tipos de dano fora do padrão é aumentada em 8-35%."
      },
      {
        name: "Revestimento refratário",
        description: "V não vai mais se queimar."
      },
      {
        name: "Cobertura do solo",
        description: "Agora o personagem principal é resistente a ataques de eletricidade."
      },
      {
        name: "Armadura supradérmica",
        description: "V ganha imunidade absoluta a sangramento."
      },
      {
        name: "Acelerador",
        description: "Concede a habilidade de curar V em 10% de sua saúde depois que ele destrói um inimigo."
      }
  ];

  const combatImplants = [
      {
        name: "Grabshtichel",
        description: "O personagem tem garras retráteis em cada mão."
      },
      {
        name: "Lâminas de louva-a-deus",
        description: "O protagonista possui lâminas retráteis em cada antebraço. É impossível escalar paredes com a ajuda deles, como foi mostrado em um dos vídeos."
      },
      {
        name: "Mãos de gorila",
        description: "Aumenta V em combate corpo a corpo. Concede habilidades passivas adicionais, como a habilidade de abrir portas com as próprias mãos."
      },
      {
        name: "Monostring",
        description: "Uma arma especial é um fino fio de fibra ótica, que permite cortar os oponentes em questão de minutos."
      },
      {
        name: "Laser de capacitor de dupla carga",
        description: "Funciona apenas a uma curta distância, no entanto, é extremamente mortal."
      },
      {
        name: "Sistema de Lançamento de Projéteis",
        description: "Um suprimento infinito de explosivos, mas extremamente impreciso. O implante também tem um longo tempo de espera. Ocupa um slot de granada."
      },
      {
        name: "Smartlink",
        description: "Necessário para usar armas inteligentes."
      },
      {
        name: "Coprocessador balístico",
        description: "Ajuda ao usar armas de poder. Fornece ricochete de projétil duplo."
      },
      {
        name: "Gerador de trajetória",
        description: "Permite assumir a direção do projétil durante o ricochete."
      },
      {
        name: "Tatuagem: Marca de 'Garras de Tigre'",
        description: "Permite instalar um complemento especial para rastreamento. O módulo é instalado em uma arma inteligente."
      }
    
  ]

  return (
    <div>
      <CyberwareList title="Implantes que aumentam os danos" cyberwares={damageIncreasingImplants} />
      <CyberwareList title="Implantes que aumentam a saúde, resistência e capacidade de carga" cyberwares={healthIncreasingImplants} />
      <CyberwareList title="Implantes de proteção" cyberwares={protectionImplants} />
      <CyberwareList title="Implantes de combate" cyberwares={combatImplants} />
      <CyberwareList title="Implantes de proteção" cyberwares={protectionImplants} />
    </div>
  );
};

export default Cyberwares;
