import React from 'react';
import { VStack } from 'native-base';
import PlanCard from '../PlanCard';

const SubscriptionPlans = () => {
  return (
    <VStack space={4} p={5}>
      <PlanCard
        title="Plano Básico"
        subtitle="Perfeito para iniciantes"
        benefits={['Acesso a torneios regionais', 'Ranking de jogadores']}
        price="R$ 19,90"
      />
      <PlanCard
        title="Plano Pro"
        subtitle="Para jogadores avançados"
        benefits={['Acesso a todos os torneios', 'Suporte premium']}
        price="R$ 49,90"
      />
      <PlanCard
        title="Plano Elite"
        subtitle="Para jogadores profissionais"
        benefits={['Acesso ilimitado', 'Torneios exclusivos']}
        price="R$ 99,90"
      />
    </VStack>
  );
};

export default SubscriptionPlans;