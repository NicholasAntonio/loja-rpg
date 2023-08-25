import { useState } from "react";
import "./weapons.css";

const WeaponList = ({ title, weapons }) => {
  return (
    <div className="weapon-div">
      <h2>{title}</h2>
      <ul>
        {weapons.map((weapon, index) => (
          <WeaponItem key={index} weapon={weapon} />
        ))}
      </ul>
    </div>
  );
};

const WeaponItem = ({ weapon }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <li onClick={() => setShowDetails(!showDetails)}>
      <strong>{weapon.name}</strong>
      {showDetails && (
        <div className="description">
          <p>Dano base: {weapon.damage}</p>
          <p>Arquétipo: {weapon.type}</p>
          <p>Descrição: {weapon.special}</p>
        </div>
      )}
    </li>
  );
};

const Weapons = () => {
  const sniperRifles = [
      {
        name: "SPT32 Grad",
        type: "Potência",
        damage: '1d10+6',
        special: "Pode atirar através de obstáculos. Potencial total no nível 6. 1 ação para recarga"
      },
      {
        name: "Overwatch (Iconic SPT32 Grad)",
        type: "Potência",
        damage: '1d12',
        special: " Maior velocidade de recarga e silenciador adicionado.\nObtido através de Riders on the Storm."
      },
      {
        name: "O'Five (Iconic SPT32 Grad)",
        type: "Potência",
        damage: '1d20',
        special: "Adiciona pontas explosivas à munição da arma.\nObtido através de Beat on the Brat: Arroyo. 1 ação de recarga"
      },
      {
        name: "Nekomata",
        type: "Inteligente",
        damage: '1d12',
        special: "Realiza dois disparos. 1 ação de recarga"
      },
      {
        name: "Breakthrough (Iconic Nekomata)",
        type: "Inteligente",
        damage: '1d10+4',
        special: "ignora blindagem."
      },
      {
        name: "Ashura",
        type: "Inteligente",
        damage: '1d10+1d6+2',
        special: "Vantagem na rolagem de ataque"
      }
    
  ];

  const precisionRifles = [
      {
        name: "SOR-22",
        type: "Potência",
        damage: '1d20',
        special: "1 ação de recarga"
      },
      {
        name: "M-179E Achilles",
        type: "Inteligente",
        damage: '1d12',
        special: " Dispara 5 projéteis (1d6 cada) em um padrão em forma de pentágono por tiro. 1 ação de recarga"
      },
      {
        name: "Widow Maker (Iconic M-179E Archilles)",
        type: "Inteligente",
        damage: '1d20',
        special: "Dispara 6 projéteis(1d6 cada) em um padrão em forma de hexágono por tiro. É possível guardar a ação do turno para um tiro carregado e mais potente."
      }
    ]
    ;

  const heavyMachineGuns = [
    {
      name: "MK.31 HMG",
      damage: '1d10+8 (rajada 2)',
      type: 'Potência',
    },
  ];

  const lightMachineGuns = [
      {
        name: "DS1 Pulsar",
        type: "Potência",
        damage: '1d8(rajada 3)',
      },
      {
        name: "Buzzsaw (Iconic DS1 Pulsar)",
        type: "Potência",
        damage: '1d8+2(rajada 2)'
      },
      {
        name: "M221 Saratoga",
        type: "Potência",
        damage: '1d10(rajada 3)',
      },
      {
        name: "Fenrir (Iconic M221 Saratoga)",
        type: "Potência",
        damage: '1d8(rajada 2)',
        special: " Causa dano térmico(1d4 por rolagem) com chance aumentada de queimar ao custo de um recuo maior."
      },
      {
        name: "Problem Solver (Iconic M221 Saratoga)",
        type: "Potência",
        damage: '1d10+4(rajada 3)',
        special: "Multiplicador de crítico na cabeça x3"
      },
      {
        name: "Shigure",
        type: "Potência",
        damage: '1d10+2(rajada 2)',
      },
      {
        name: "G-58 Dian",
        type: "Inteligente",
        damage: '6'
      },
      {
        name: "TKI-20 Shingen",
        type: "Inteligente",
        damage: '1d8+4(rajada 3)',
        special: " Rajadas sem desvatagem"
      },
      {
        name: "Prototype: Shingen Mark V (Iconic TKI-20 Shingen)",
        type: "Inteligente",
        damage: '1d6(rajada 3)',
        special: "Dispara rodadas explosivas. O sistema de mira automatizado modificado orienta os marcadores para até 3 alvos enquanto mira, perfeito para quando você está em menor número. Os mísseis teleguiados causam 6 de dano cada."
      }
    ]
    ;

  const assaultRifles = [
      {
        name: "D5 Copperhead",
        type: "Potência",
        damage: '1d8',
      },
      {
        name: "Psalm 11:6 (Iconic D5 Copperhead)",
        type: "Potência",
        damage: '1d8',
        special: " Esta arma causa dano térmico adicional de 1d6, aumentando muito a chance de aplicar Queimadura. Crafting Spec descartado por Tom Ayer."
      },
      {
        name: "M251s Ajax",
        type: "Potência",
        damage: '1d8+2',
        special: "1x"
      },
      {
        name: "Moron Labe (Iconic M251s Ajax)",
        type: "Potência",
        damage: '1d8+4',
        special: " pertencente ao Crime organizado em Pacífica"
      },
      {
        name: "HJSH-18 Masamune",
        type: "Potência",
        damage: '1d8+2(rajada 3)',
      },
      {
        name: "Nowaki",
        type: "Potência",
        damage: '1d10(rajada 3)',
      },
      {
        name: "D5 Sidewinder",
        type: "Inteligente",
        damage: "1d10+2",
        special: "Chance de 1d10 de causar atordoamento"
      },
      {
        name: "Divided We Stand (Iconic D5 Sidewinder)",
        type: "Inteligente",
        damage: '1d10+4',
        special: "Rastreia até 5 alvos simultaneamente. As balas causam dano químico com uma grande chance de aplicar Veneno (1d6 por turno). Encontrado em uma festa da Sixth Street no sudeste de Rancho Coronado."
      }
    
  ];

  const pistols = [
      {
        name: "Lizzie (Iconic M-76E Omaha)",
        type: "Inteligente",
        damage: '9',
      },
      {
        name: "m-10AF Lexington",
        type: "Potência",
        damage: '1d8',
        special: "Dois disparos",
      },
      {
        name: "Liberty",
        type: "Potência",
        damage: '1d12',
      },
      {
        name: "Kongou (Iconic Liberty)",
        type: "Potência",
        damage: '1d8',
        special: "Signature weapon of Yorinobu Arasaka.",
      },
      {
        name: "Nue",
        type: "Potência",
        damage: '1d8(rajada 2)'
      },
      {
        name: "La Chingona Dorada (Iconic Nue)",
        type: "Potência",
        damage: '1d10',
      },
      {
        name: "Tamayura",
        type: "Potência",
        damage: '1d8+6',
      },
      {
        name: "Unity",
        type: "Potência",
        damage: '1d8+1d4',
        special: " arma inicial para o caminho Streetkid",
      },
      {
        name: "Malorian Arms 3516 (Iconic)",
        type: "Potência",
        damage: '1d12',
        special: "Semiautomático, atira através de obstáculos sem carga. Pistola de Jhonny Silverhand"
      },
      {
        name: "Slaught-O-Matic",
        type: "Potência",
        damage: '1d10',
        special: " Não pode ser recarregada, apenas adquirido nas máquinas de venda adequadas, trocando por outra arma descarta esta",
      },
      {
        name: "JKE-X2 Kenshin",
        type: "Inteligente",
        damage: '1d8+2',
        special: "Disparo duplo se não realizou ações no último turno"
      },
      {
        name: "M-76E Omaha",
        type: "Inteligente",
        damage: '1d10',
        special: "Explosão carregada se tiver 1 turno de ociosidade. Dispara três projéteis(1d6) em um padrão de triângulo por tiro."
      },
      {
        name: "Chaos (Iconic JKE-X2 Kenshin)",
        type: "Inteligente",
        damage: 12
      },
      {
        name: "A-22B Chao",
        type: "Inteligente",
        damage: '1d10(rajada 2)'
      },
      {
        name: "Dying Night (Iconic m-10AF Lexington)",
        type: "Potência",
        damage: "1d10+2",      
         special: "Aumenta o dano do tiro na cabeça em 2x.",
      },
      {
        name: "Plan B (Iconic Liberty)",
        type: "Potência",
        damage: '1d20',
        special: "As balas têm uma chance de aplicar Sangramento, mas fique de olho na sua carteira! Cada tiro custa dinheiro. Arma de assinatura de Dexter DeShawn.",
      }
    
  ];

  const revolvers = [
      {
        name: "DR-5 Nova",
        type: "Potência",
        damage: '1d6',
        special: " Starting weapon for the Nomad path"
      },
      {
        name: "Doom Doom (Iconic DR5 Nova)",
        type: "Potência",
        damage: '1d10',
        special: "Conhecido por transformar os inimigos em pilhas irreconhecíveis de carne. Aviso: Requer uma limpeza extensa depois. Arma de assinatura de Dum Dum."
      },
      {
        name: "Archangel (Iconic Overture)",
        type: "Potência",
        damage: 6,
        special: "2.0× Uma obra de arte que nunca deve desaparecer em uma vitrine."
      },
      {
        name: "Crash (Iconic Overture)",
        type: "Potência",
        damage: '1d8+6',
        special: "Uma arma para quem não vai errar da primeira vez, o primeiro disparo do combate sempre acerta. Arma de assinatura de River Ward."
      },
      {
        name: "DR-12 Quasar",
        type: "Inteligente",
        damage: '1d12+6',
        special: "Requer 1 turno para carregar. Se carregada. penetra nos obstáculos."
      },
      {
        name: "Comrade's Hammer (Iconic RT-46 Burya)",
        type: "Inteligente",
        damage: '1d12',
        special: "Um clipe modificado contém apenas uma única bala carregada com material explosivo que causa 1d8 dano de queimadura(requer 1 ação para recarga, 1 tiro por vez).\nRecarregar este monstro requer mais tempo."
      }
    
  ];

  const shotguns = [
    {
      name: "M2038 Tactician",
      type: "Potência",
      damage: "4d8",
      special: "Ação de bomba, cada rolagem soma +1 de dano"
    },
    {
      name: "DB-2 Satara",
      type: "Inteligente",
      damage: "1d6x(1d6)",
      special: "Espingarda de dois canos"
    },
    {  
      name: "Sovereign (Iconic DB-4 Igla)",
      type: "Potência",
      damage: "2d8",
      special: " Dispara duas vezes por rodada. Projeto adquirido em um marcador de crime organizado entre os pontos de viagem rápida Crescent & Broad e Silk Road West, perto do vendedor de alimentos."
    },
    {
      name: "The Headsman (Iconic M2038 Tactician)",
      type: "Potência",
      damage: "4d6",
      special: " Dobra o número de projéteis por tiro e aumenta a chance de desmembramento ou sangramento. Projeto adquirido em um marcador de crime organizado na Impala Automatics em North Oak (a 'ilha' com a enorme torre)"
    }
  ];

  const meleeWeapons = [
      {
        name: "Faca",
        type: "Faca",
        damage: "1d6"
      },
      {
        name: "Facão",
        type: "Montante",
        damage: '1d6+2'
      },
      {
        name: "Chef's Knife",
        type: "Montante",
        damage: '1d6+2'
      },
      {
        name: "Katana",
        type: "Katana",
        damage: "1d8"
      },
      {
        name: "Scalpel (Iconic Katana)",
        type: "Katana",
        damage: "1d8",
        special: "1d6 de dano elétrico"
      },
      {
        name: "Satori (Iconic Katana)",
        type: "Katana",
        damage: "1d8",
        special: "Signature weapon of Saburo Arasaka."
      },
      {
        name: "Jinchu-Maru (Iconic Katana)",
        type: "Katana",
        damage: "1d8",
        special: "1d6 de dano sangramento"
      },
      
      {
        name: "Marreta",
        type: "Marreta",
        damage: "1d12"
      },
      {
        name: "Sasquach's Hammer (Iconic Hammer)",
        type: "Marreta",
        damage: "1d12",
        special: '1d8 dano concussão em raio de 6 metros'
      },
    
  ];

  const throwableWeapons = [
      {
        name: "Char Incendiary Grenade",
        damage: '4d8',
        special: "4 turnos de queimadura"
      },
      {
        name: "EMP Grenade",
        damage: '0',
        special: "Aplica efeito de EMP por 5 segundos"
      },
      {
        name: "F-GX Frag Grenade",
        damage:  '4d10'   
        },
      {
        name: "Molodets Biohaz Grenade",
        damage: "4d8",
        special: "4 turnos de envenenamento"
      },
      {
        name: "Recon Grenade",
        damage: '0',
        special: "Verifica seus arredores por 7 segundos e destaca os inimigos detectados."
      },
      {
        name: "X-22 Flashbang Grenade",
        damage:  '0',   
        special: "Aplica cegueira por 1 turno, teste de constituição de quem estiver na visada."
      },
      {
        name: "Gash Antipersonnel Grenade",
        damage:    'máximo 21'  ,
        special: "Ativa 21 lasers que causam 1 de dano aleatório na área de 3 metros por 5 turnos."
      }
    
  ];

  const healthItems = [
    {
      name: 'Revitalizante MK.I',
      special: 'Cura 1d4 de vida'
    },
    {
      name: 'Revitalizante MK.II',
      special: 'Cura 1d6 de vida'
    },
    {
      name: 'Revitalizante MK.III',
      special: 'Cura 1d8 de vida'
    },
    {
      name: 'Revitalizante MK.IV',
      special: 'Cura 1d10+4 de vida'
    },
    {
      name: 'Desfibrilador neural',
      special: 'Abaixo de 50% de humanidade garante sair do estado inconsciente sem ajuda de um medicânico'
    },
    {
      name: 'Adrenalizador Injetável',
      special: '+2 em reflexos durante 3 turnos'
    },
    {
      name: 'Energy Jungle',
      special: 'Por 2 turnos torna-se impossível de ser atordoado.'
    },
    {
      name: 'Soro cyberantiofídico',
      special: 'Remove efeitos de envenenamento'
    },
    {
      name: 'Loção Termal Militech',
      special: 'Remove efeitos de queimadura'
    },
    {
      name: 'Suco LookAtHimCompany',
      special: '+2 em feitos de força e briga por 3 turnos'
    },

  ]

  return (
    <div className="weapon-container">
      <WeaponList title="Pistolas" weapons={pistols} />
      <WeaponList title="Revólveres" weapons={revolvers} />
      <WeaponList title="Submetralhadoras" weapons={lightMachineGuns} />
      <WeaponList title="Metralhadoras Pesadas" weapons={heavyMachineGuns} />
      <WeaponList title="Espingardas" weapons={shotguns} />
      <WeaponList title="Rifles de Sniper" weapons={sniperRifles} />
      <WeaponList title="Rifles de precisão" weapons={precisionRifles} />
      <WeaponList title="Rifles de Assalto" weapons={assaultRifles} />
      <WeaponList title="Armas brancas" weapons={meleeWeapons} />
      <WeaponList title="Arremessáveis" weapons={throwableWeapons} />
      <WeaponList title="Consumívels" weapons={healthItems} />
      
    </div>
  );
};

export default Weapons;
