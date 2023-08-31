import React, { useState } from 'react';
import './armour.css'

const ArmourList = ({ title, armours }) => {
  return (
    <div className='armour-div'>
      <h2>{title}</h2>
      <ul>
        {armours.map((armour, index) => (
          <ArmourItem key={index} armour={armour} />
        ))}
      </ul>
    </div>
  );
};

const ArmourItem = ({ armour }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <li onClick={() => setShowDetails(!showDetails)}>
      <strong>{armour.name}</strong>
      {showDetails && (
        <div className='description'>
          <p>Blindagem: {armour.description}</p>
          <p>Custo: {armour.cost}</p>
        </div>
      )}
    </li>
  );
};

const Armour = () => {
  const headArmour = [
    {
      name: "Kevlar Skullcap",
      description: "Leve",
      cost: "150 bc"
    },
    {
      name: "Light Riot Helmet",
      description: "Média",
      cost: "300 bc"
    },
    {
      name: "Tactical Combat Goggles",
      description: "Leve",
      cost: "250 bc"
    },
    {
      name: "Ballistic Helmet",
      description: "Média",
      cost: "400 bc"
    },
    {
      name: "Reinforced Tactical Hood",
      description: "Leve",
      cost: "300 bc"
    },
    {
      name: "Full-Face Gas Mask",
      description: "Leve",
      cost: "180 bc"
    },
    {
      name: "Smart Helmet",
      description: "Média",
      cost: "600 bc"
    },
    {
      name: "Thermal Visor Helmet",
      description: "Média",
      cost: "450 bc"
    },
    {
      name: "Nano-Weave Hood",
      description: "Leve",
      cost: "180 bc"
    }
  ]
  ;
  const chestArmour = [
    {
      name: "Bulletproof Vest",
      description: "Leve",
      cost: "200 bc"
    },
    {
      name: "Flak Jacket",
      description: "Média",
      cost: "350 bc"
    },
    {
      name: "Nomad Biker Jacket",
      description: "Média",
      cost: "450 bc"
    },
    {
      name: "Military Combat Armor",
      description: "Alta",
      cost: "800 bc"
    },
    {
      name: "Tactical Riot Suit",
      description: "Média",
      cost: "600 bc"
    },
    {
      name: "Ceramic Plate Carrier",
      description: "Média",
      cost: "500 bc"
    },
    {
      name: "Full-Body Tactical Armor",
      description: "Alta",
      cost: "1200 bc"
    },
    {
      name: "Powered Exosuit Chestplate",
      description: "Alta",
      cost: "1500 bc"
    },
    {
      name: "Biofiber Weave Undershirt",
      description: "Leve",
      cost: "180 bc"
    },
    {
      name: "Explosive Resistant Suit",
      description: "Alta",
      cost: "1000 bc"
    }
  ]
  ;
  const legsArmour = [
    {
      name: "Kevlar Leggings",
      description: "Leve",
      cost: "150 bc"
    },
    {
      name: "Metal Shin Guards",
      description: "Média",
      cost: "180 bc (para o par)"
    },
    {
      name: "Stabilizing Leg Braces",
      description: "Leve",
      cost: "250 bc (para o par)"
    },
    {
      name: "Jump-Enhancing Leg Enhancements",
      description: "Leve",
      cost: "400 bc (para o par)"
    },
    {
      name: "Motorized Leg Exoskeleton",
      description: "Alta",
      cost: "1500 bc"
    },
    {
      name: "Stealthy Ankle Sheathes",
      description: "Leve",
      cost: "180 bc (para o par)"
    },
    {
      name: "Grapple Hook Boot Attachment",
      description: "Leve",
      cost: "250 bc (para o par)"
    },
    {
      name: "Biofiber Weave Leggings",
      description: "Leve",
      cost: "160 bc"
    },
    {
      name: "Reinforced Knee Pads",
      description: "Leve",
      cost: "180 bc (para o par)"
    }
  ]
  ;
  const armsArmour = [
    {
      name: "Kevlar Arm Sleeves",
      description: "Leve",
      cost: "120 bc (para o par)"
    },
    {
      name: "Cyberarm Reinforcement",
      description: "Variável (implante)",
      cost: "800 bc (implante)"
    },
    {
      name: "Metal Gauntlets",
      description: "Média",
      cost: "220 bc (para o par)"
    },
    {
      name: "Tactical Arm Guards",
      description: "Média",
      cost: "300 bc (para o par)"
    },
    {
      name: "Powered Exosuit Arm Enhancements",
      description: "Alta",
      cost: "1200 bc (implante)"
    },
    {
      name: "Riot Shield Bracer",
      description: "Média",
      cost: "350 bc (para o par)"
    },
    {
      name: "Wrist-Mounted Defense Lasers",
      description: "Leve",
      cost: "450 bc (para o par)"
    },
    {
      name: "Hacker's Arm Sleeve",
      description: "Leve",
      cost: "280 bc (para o par)"
    },
    {
      name: "Sensory Enhancing Glove",
      description: "Leve",
      cost: "200 bc (para o par)"
    },
    {
      name: "Concealed Blade Bracer",
      description: "Leve",
      cost: "180 bc (para o par)"
    }
  ]
  ;


  return (
    <div className='container'>
     <ArmourList title='Cabeça' armours={headArmour} />
     <ArmourList title='Torso' armours={chestArmour} />
     <ArmourList title='Braços' armours={armsArmour} />
     <ArmourList title='Pernas' armours={legsArmour} />
    </div>
  );
};

export default Armour;
