import React, { useState } from 'react';

const HackList = ({ title, hacks }) => {
  return (
    <div>
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
        <div>
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
      name: 'Controle Remoto',
      description: 'Use para controlar uma variedade de dispositivos eletrônicos, desde portas automáticas até torretas de segurança.',
      ramCost: 0,
    },
    {
      name: 'Curto-Circuito',
      description: 'Causa danos elétricos aos inimigos, interrompendo temporariamente suas ações e causando dano ao longo do tempo.',
      ramCost: 0,
    },
    {
      name: 'Reboot Óptico',
      description: 'Ofusca os visores de realidade aumentada dos inimigos, deixando-os temporariamente cegos e vulneráveis.',
      ramCost: 0,
    },
    // ... other quick hacks
  ];

  const daemons = [
    {
      name: 'Démonio de Caixa de Correio',
      description: 'Acesse caixas de correio eletrônico para obter informações sobre missões, pistas de história e segredos do mundo.',
      ramCost: 0,
    },
    {
      name: 'Démonio de Dados',
      description: 'Manipule sistemas de pagamento para aumentar temporariamente a quantidade de dinheiro recebida por vendas de itens.',
      ramCost: 0,
    },
    {
      name: 'Démonio de Supressão de Segurança',
      description: 'Desative sistemas de alarme e torretas de segurança em uma área, permitindo uma abordagem mais furtiva.',
      ramCost: 0,
    },
    // ... other daemons
  ];

  return (
    <div>
      <HackList title="Hacks Rápidos" hacks={quickHacks} />
      <HackList title="Daemons" hacks={daemons} />
      {/* Render other categories */}
    </div>
  );
};

export default HacksAndDaemons;
