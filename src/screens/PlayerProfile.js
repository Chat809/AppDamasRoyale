import React, { useState } from 'react';
import { VStack, Input, Button, Text } from 'native-base';

const PlayerProfile = () => {
  const [region, setRegion] = useState('');
  const [ranking, setRanking] = useState('');

  return (
    <VStack space={4} alignItems="center" p={5}>
      <Text fontSize="xl" bold>Perfil do Jogador</Text>
      <Input placeholder="Nome" size="md" />
      <Input placeholder="Região" value={region} onChangeText={setRegion} size="md" />
      <Input placeholder="Ranking" value={ranking} onChangeText={setRanking} size="md" />
      <Button colorScheme="primary">
        Salvar
      </Button>
    </VStack>
  );
};

export default PlayerProfile;