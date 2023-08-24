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
        damage: 4,
        special: "3× Pode atirar através de obstáculos. Potencial total desbloqueado no Corpo 6. Penalidades se abaixo do Corpo 6: Maior propagação do hipfire, corrida desabilitada, movimento e manuseio mais lentos, recarga mais lenta, taxa de tiro mais lenta, mira menos estável."
      },
      {
        name: "Overwatch (Iconic SPT32 Grad)",
        type: "Potência",
        damage: 4,
        special: "3× Maior velocidade de recarga e silenciador adicionado.\nObtido através de Riders on the Storm."
      },
      {
        name: "O'Five (Iconic SPT32 Grad)",
        type: "Potência",
        damage: 4,
        special: "3× Adiciona pontas explosivas à munição da arma.\nObtido através de Beat on the Brat: Arroyo."
      },
      {
        name: "Nekomata",
        type: "Tecnológica",
        damage: 4,
        special: "3× Intervalo de disparo 0.05"
      },
      {
        name: "Breakthrough (Iconic Nekomata)",
        type: "Tecnológica",
        damage: 4,
        special: "3×"
      },
      {
        name: "Ashura",
        type: "Inteligente",
        damage: 1,
        special: "3× Intervalo de disparo 0.05"
      }
    
  ];

  const precisionRifles = [
      {
        name: "SOR-22",
        type: "Potência",
        damage: 9,
        special: "1.5x Usa munição de Sniper"
      },
      {
        name: "M-179E Achilles",
        type: "Tecnológica",
        damage: 12,
        special: "1.5x Dispara 5 projéteis em um padrão em forma de pentágono por tiro. O tiro carregado tem propagação mais estreita. Usa munição de rifle."
      },
      {
        name: "Widow Maker (Iconic M-179E Archilles)",
        type: "Tecnológica",
        damage: 12,
        special: "1.5x Dispara 6 projéteis em um padrão em forma de hexágono por tiro. Bônus de dano químico e maior chance de aplicar veneno. Tiros carregados causam mais dano."
      }
    ]
    ;

  const heavyMachineGuns = [
    {
      name: "MK.31 HMG",
      damage: 300,
      type: 'Potência',
    },
  ];

  const lightMachineGuns = [
      {
        name: "DS1 Pulsar",
        type: "Potência",
        damage: 40,
        special: "8.89 0.85x"
      },
      {
        name: "Buzzsaw (Iconic DS1 Pulsar)",
        type: "Potência",
        damage: 40
      },
      {
        name: "M221 Saratoga",
        type: "Potência",
        damage: 30,
        special: "6.9 0.85x"
      },
      {
        name: "Fenrir (Iconic M221 Saratoga)",
        type: "Potência",
        damage: 30,
        special: "6.9 0.85x Causa dano térmico com chance aumentada de queimar. Reduz a propagação da bala e aumenta o impacto da bala ao custo de um recuo maior."
      },
      {
        name: "Problem Solver (Iconic M221 Saratoga)",
        type: "Potência",
        damage: 30,
        special: "6.9 0.85x-1.35x Maior chance de sangramento, pode rolar com um multiplicador de dano de tiro na cabeça maior do que a maioria dos SMGs"
      },
      {
        name: "Shigure",
        type: "Potência",
        damage: 30,
        special: "6.99 0.85x"
      },
      {
        name: "G-58 Dian",
        type: "Inteligente",
        damage: 30,
        special: "7.54 0.85x"
      },
      {
        name: "TKI-20 Shingen",
        type: "Inteligente",
        damage: 30,
        special: "4.55 0.85x Rajada de 3 rodadas"
      },
      {
        name: "Prototype: Shingen Mark V (Iconic TKI-20 Shingen)",
        type: "Inteligente",
        damage: 30,
        special: "4.55 1.35 Dispara rodadas explosivas. O sistema de mira automatizado modificado orienta os marcadores para até 3 alvos enquanto mira, perfeito para quando você está em menor número."
      }
    ]
    ;

  const assaultRifles = [
      {
        name: "D5 Copperhead",
        type: "Potência",
        damage: 30,
        special: "1x"
      },
      {
        name: "Psalm 11:6 (Iconic D5 Copperhead)",
        type: "Potência",
        damage: 30,
        special: "1× Puro fogo do inferno. Esta arma causa dano térmico adicional, aumentando muito a chance de aplicar Queimadura. Crafting Spec descartado por Tom Ayer."
      },
      {
        name: "M251s Ajax",
        type: "Potência",
        damage: 30,
        special: "1x"
      },
      {
        name: "Moron Labe (Iconic M251s Ajax)",
        type: "Potência",
        damage: 30,
        special: "1.0× Organized Crime Event in Pacifica."
      },
      {
        name: "HJSH-18 Masamune",
        type: "Potência",
        damage: 30,
        special: "1x Rajada de 3 rodadas"
      },
      {
        name: "Nowaki",
        type: "Potência",
        damage: 30,
        special: "1x Rajada de 3 rodadas"
      },
      {
        name: "D5 Sidewinder",
        type: "Inteligente",
        damage: 30,
        special: "1x"
      },
      {
        name: "Divided We Stand (Iconic D5 Sidewinder)",
        type: "Inteligente",
        damage: 30,
        special: "1x Rastreia até 5 alvos simultaneamente. As balas causam dano químico com uma grande chance de aplicar Veneno. Encontrado em uma festa da Sixth Street no sudeste de Rancho Coronado."
      }
    
  ];

  const pistols = [
      {
        name: "Lizzie (Iconic M-76E Omaha)",
        type: "Tecnológico",
        damage: 9,
      },
      {
        name: "m-10AF Lexington",
        type: "Potência",
        damage: 21,
        special: "Automático",
      },
      {
        name: "Liberty",
        type: "Potência",
        damage: 12,
        special: "Semi-automático",
      },
      {
        name: "Kongou (Iconic Liberty)",
        type: "Potência",
        damage: 9,
        special: "Signature weapon of Yorinobu Arasaka.",
      },
      {
        name: "Nue",
        type: "Potência",
        damage: 10,
        special: "Semi-automático",
      },
      {
        name: "La Chingona Dorada (Iconic Nue)",
        type: "Potência",
        damage: 10,
        special: "Reduz o tempo de recarga e adiciona um slot de mod extra. Maior chance de aplicar Burn e Stun.",
      },
      {
        name: "Tamayura",
        type: "Potência",
        damage: 8,
        special: "Semi-automático",
      },
      {
        name: "Unity",
        type: "Potência",
        damage: 12,
        special: "Semi-automático, arma inicial para o caminho Streetkid",
      },
      {
        name: "Malorian Arms 3516 (Iconic)",
        type: "Potência",
        special: "Semiautomático, atira através de obstáculos sem carga, modifica o ataque rápido para ser uma área de efeito cuspir da chama. Usado durante os flashbacks de memória de Johnny Silverhand e obtido durante Chippin' In.",
      },
      {
        name: "Slaught-O-Matic",
        type: "Potência",
        damage: 30,
        special: "Automático, não pode ser recarregado, apenas adquirido nas máquinas de venda adequadas, trocando por outra arma descarta esta",
      },
      {
        name: "JKE-X2 Kenshin",
        type: "Tecnológico",
        damage: 10,
        special: "2 round burst if charged",
      },
      {
        name: "M-76E Omaha",
        type: "Tecnológico",
        damage: 9,
        special: "Explosão carregada. Dispara três projéteis em um padrão de triângulo por tiro.",
      },
      {
        name: "Apparation (Iconic JKE-X2 Kenshin)",
        type: "Tecnológico",
        special: "Arma de assinatura de Frank Nostra.",
      },
      {
        name: "Chaos (Iconic JKE-X2 Kenshin)",
        type: "Tecnológico",
        damage: 12,
        special: "Explosão de 2 rodadas, muda as estatísticas após cada recarga",
      },
      {
        name: "A-22B Chao",
        type: "Smart",
        damage: 30,        special: "Automático",
      },
      {
        name: "HJKE-11 Yukimura",
        type: "Inteligente",
        damage: 30,
        special: "Automático",
      },
      {
        name: "Dying Night (Iconic m-10AF Lexington)",
        type: "Potência",
        damage: "43-53",      
         special: "Aumenta o dano do tiro na cabeça em 50% e reduz significativamente o tempo de recarga. Obtido de Wilson durante The Gun.",
      },
      {
        name: "Plan B (Iconic Liberty)",
        type: "Potência",
        damage: 9,
        special: "As balas têm uma chance maior de aplicar Sangramento, mas fique de olho na sua carteira! Cada tiro custa redemoinhos. Arma de assinatura de Dexter DeShawn.",
      },
      {
        name: "Skippy (Iconic HJKE-11 Yukimura)",
        type: "Inteligente",
        damage: 30,
        special: "Um Yukimura Icônico que pergunta a você onde colocar seus projéteis quando você o pega. Um bom companheiro.",
      },
      {
        name: "Pride (Iconic Liberty)",
        type: "Potência",
        damage: 9,
        special: "Signature weapon of Rogue.",
      }
    
  ];

  const revolvers = [
      {
        name: "DR-5 Nova",
        type: "Potência",
        damage: 6,
        special: "2.0× Semi-automático, Starting weapon for the Nomad path"
      },
      {
        name: "Doom Doom (Iconic DR5 Nova)",
        type: "Potência",
        damage: 6,
        special: "2.0× Conhecido por transformar os inimigos em pilhas irreconhecíveis de carne. Aviso: Requer uma limpeza extensa depois. Arma de assinatura de Dum Dum."
      },
      {
        name: "Overture",
        type: "Potência",
        damage: 6,
        special: "2.0× Semi-automático. A variante épica parece ter um multiplicador de headshot 2,5x."
      },
      {
        name: "Archangel (Iconic Overture)",
        type: "Potência",
        damage: 6,
        special: "2.0× Uma obra de arte que nunca deve desaparecer em uma vitrine."
      },
      {
        name: "Amnesty (Iconic Overture)",
        type: "Potência",
        damage: 6,
        special: "2.0× Obtido de Cassidy."
      },
      {
        name: "Crash (Iconic Overture)",
        type: "Potência",
        damage: 6,
        special: "3.0× Uma arma para quem não vai errar da primeira vez. Arma de assinatura de River Ward."
      },
      {
        name: "DR-12 Quasar",
        type: "Tecnológico",
        damage: 20,
        special: "2.0× Requer mirar para carregar. Se carregada, dispara automaticamente e penetra nos obstáculos."
      },
      {
        name: "RT-46 Burya",
        type: "Tecnológico",
        damage: 4,
        special: "2.0× Os tiros já estão carregados. Potencial total desbloqueado no Corpo 6. Penalidades se abaixo do Corpo 6: Manuseio mais lento, velocidade de recarga mais lenta, mira menos estável."
      },
      {
        name: "Comrade's Hammer (Iconic RT-46 Burya)",
        type: "Tecnológico",
        damage: 1,
        special: "3.0× Um clipe modificado contém apenas uma única bala carregada com material explosivo que causa estragos no ponto de impacto.\nRecarregar este monstro requer mais tempo."
      }
    
  ];

  const shotguns = [
    {
      name: "Carnage",
      type: "Potência",
      damage: "?x20",
      special: "5 0.61 1x Full potential unlocked at Body 6"
    },
    {
      name: "Crusher",
      type: "Potência",
      damage: "?x6",
      special: "12 1.5 1x Automático"
    },
    {
      name: "M2038 Tactician",
      type: "Potência",
      damage: "?x10",
      special: "8 1.21 1.5x Ação de bomba"
    },
    {
      name: "DB-2 Satara",
      type: "Tecnológico",
      damage: "?x14",
      special: "2 0.77 1x Espingarda de dois canos"
    },
    {
      name: "DB-2 Testera",
      type: "Potência",
      damage: "?x24",
      special: "2 0.74 Fires both rounds at once"
    },
    {
      name: "DB-4 Igla",
      type: "Potência",
      damage: "?x10",
      special: "2 0.83 Espingarda de dois canos"
    },
    {
      name: "DB-4 Palica",
      type: "Inteligente",
      damage: "?x9",
      special: "2 0.67 1x"
    },
    {
      name: "L-69 Zhuo",
      type: "Inteligente",
      damage: "?x8",
      special: "4 0.87 1x"
    },
    {
      name: "Mox (Iconic Carnage)",
      type: "Potência",
      damage: "12-14×20",
      special: "5 0.66 1.5×"
    },
    {
      name: "Sovereign (Iconic DB-4 Igla)",
      type: "Potência",
      damage: "?x10",
      special: "2 0.83 1x Espingarda de dois canos. Reduz o tempo de recarga e a propagação da bala. Dispara duas rodadas por tiro enquanto mira. Projeto adquirido em um marcador de crime organizado entre os pontos de viagem rápida Crescent & Broad e Silk Road West, perto do vendedor de alimentos."
    },
    {
      name: "The Headsman (Iconic M2038 Tactician)",
      type: "Potência",
      damage: "?x10",
      special: "1.21 1x Dobra o número de projéteis por tiro e aumenta a chance de desmembramento ou sangramento, aumento da propagação, tempo de recarga reduzido, taxa de tiro reduzida e capacidade reduzida de clip. Projeto adquirido em um marcador de crime organizado na Impala Automatics em North Oak (a 'ilha' com a enorme torre)"
    }
  ];

  const meleeWeapons = [
      {
        name: "Faca",
        type: "Faca",
        damage: "3.33"
      },
      {
        name: "Stinger (Iconic Knife)",
        type: "Faca",
        damage: "3.33",
        special: "Available during I'll Fly Away."
      },
      {
        name: "Tanto",
        type: "Faca"
      },
      {
        name: "Facão",
        type: "Montante"
      },
      {
        name: "Chef's Knife",
        type: "Montante"
      },
      {
        name: "Katana",
        type: "Katana",
        damage: "2.50"
      },
      {
        name: "Black Unicorn (Unique Katana)",
        type: "Katana",
        special: "Despite having a craftable upgrade recipe like iconic weapons it is not labeled as iconic in-game. (possible bug or intended?)\nGOG Exclusive."
      },
      {
        name: "Cocktail Stick (Iconic Katana)",
        type: "Katana",
        damage: "2.50"
      },
      {
        name: "Scalpel (Iconic Katana)",
        type: "Katana",
        damage: "2.50",
        special: "Increases Electrical damage. While Sandevistan is active, increases Crit Chance by 50% and hits apply Bleeding."
      },
      {
        name: "Satori (Iconic Katana)",
        type: "Katana",
        damage: "2.50",
        special: "Signature weapon of Saburo Arasaka."
      },
      {
        name: "Jinchu-Maru (Iconic Katana)",
        type: "Katana",
        damage: "2.50",
        special: "Signature weapon of Sandayu Oda."
      },
      {
        name: "Tsumetogi (Iconic Katana)",
        type: "Katana",
        damage: "2.50",
        special: "Disponível durante Pisces."
      },
      {
        name: "Crowbar",
        type: "One-Handed Club",
        damage: "2.00",
        special: "É uma referência da série Half-Life."
      },
      {
        name: "Steel Pipe",
        type: "One-Handed Club"
      },
      {
        name: "Tire Iron",
        type: "One-Handed Club",
        damage: "2.00"
      },
      {
        name: "Electric Baton Alpha",
        type: "One-Handed Club",
        damage: "2.00",
        special: "Incomum Electric Baton"
      },
      {
        name: "Electric Baton Beta",
        type: "One-Handed Club",
        damage: "2.00",
        special: "Raro Electric Baton"
      },
      {
        name: "Electric Baton Gamma",
        type: "One-Handed Club",
        damage: "2.00",
        special: "Épico Electric Baton"
      },
      {
        name: "Kanabo",
        type: "One-Handed Club",
        damage: "2.50"
      },
      {
        name: "Sir John Phallustiff (Iconic)",
        type: "One-Handed Club",
        special: "Available during Venus in Furs side job."
      },
      {
        name: "Cottonmouth (Iconic)",
        type: "One-Handed Club",
        special: "Available during The Space In Between side job."
      },
      {
        name: "Tinker Bell (Iconic)",
        type: "One-Handed Club",
        damage: "2.00",
        special: "Available during The Hunt side job."
      },
      {
        name: "Marreta",
        type: "Marreta",
        damage: "2.50"
      },
      {
        name: "Sasquach's Hammer (Iconic Hammer)",
        type: "Marreta",
        damage: "2.50"
      },
      {
        name: "Caretaker's Spade (Iconic Hammer)",
        type: "Marreta",
        damage: "2.50",
        special: "Resembles an ordinary shovel from a different dimension.\nIt is a references to Witcher 3's The Caretaker's Spade."
      },
      {
        name: "Baseball Bat",
        type: "Two-Handed Club"
      },
      {
        name: "Gold-Plated Baseball Bat (Iconic Baseball Bat)",
        type: "Two-Handed Club",
        damage: "4.60",
        special: "Available during Second Conflict side job."
      }
    
  ];

  const throwableWeapons = [
      {
        name: "Char Incendiary Grenade",
        rarity: "Incomum",
        throwable: "Não",
        damageType: "Termal",
        radius: "3m",
        directEffect: "Não",
        special: "Applies Burn for 4s, Creates a blast zone of incendiary particles with a 3-second duration that applies Burn."
      },
      {
        name: "EMP Grenade",
        rarity: "Incomum",
        throwable: "Não",
        damageType: "Electrical",
        radius: "4m",
        directEffect: "Não",
        special: "Applies an EMP efeito for 5s."
      },
      {
        name: "F-GX Frag Grenade",
        rarity: "Incomum",
        throwable: "Yes",
        damageType: "Físico",
        radius: "4m",
        directEffect: "Yes"
      },
      {
        name: "F-GX Frag Grenade",
        rarity: "Comum",
        throwable: "Não",
        damageType: "Físico",
        radius: "4m",
        directEffect: "Yes"
      },
      {
        name: "Molodets Biohaz Grenade",
        rarity: "Incomum",
        throwable: "Yes",
        damageType: "Químico",
        radius: "4m",
        directEffect: "Não",
        special: "Applies Posion for 5s, Creates a toxic cloud with a 4s duration that applies Poison."
      },
      {
        name: "Recon Grenade",
        rarity: "Incomum",
        throwable: "Não",
        damageType: "0",
        radius: "15m",
        directEffect: "N/A",
        special: "Verifica seus arredores por 7 segundos e destaca os inimigos detectados."
      },
      {
        name: "Recon Grenade",
        rarity: "Incomum",
        throwable: "Yes",
        damageType: "0",
        radius: "15m",
        directEffect: "N/A",
        special: "Verifica seus arredores por 7 segundos e destaca os inimigos detectados."
      },
      {
        name: "X-22 Flashbang Grenade",
        rarity: "Comum",
        throwable: "Não",
        damageType: "0",
        radius: "6m",
        directEffect: "N/A",
        special: "Aplica Blinding por 3s."
      },
      {
        name: "Gash Antipersonnel Grenade",
        rarity: "Épico",
        throwable: "Não",
        damageType: "Termal",
        radius: "4m",
        directEffect: "Yes",
        special: "Ativa 21 lasers que causam dano por 5 s."
      }
    
  ];

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
      
    </div>
  );
};

export default Weapons;
