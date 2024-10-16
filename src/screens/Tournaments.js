import React, { useState } from 'react';
import { VStack, Button, Text, Select } from 'native-base';

const Tournaments = () => {
  const [region, setRegion] = useState('');

  return (
    <VStack space={4} alignItems="center" p={5}>
      <Text fontSize="xl" bold>Torneios</Text>
      <Button colorScheme="primary">Criar Torneio</Button>
      <Select
        selectedValue={region}
        placeholder="Filtrar por Região"
        onValueChange={itemValue => setRegion(itemValue)}
        size="md"
      >
        <Select.Item label="Sul" value="Sul" />
        <Select.Item label="Sudeste" value="Sudeste" />
        <Select.Item label="Nordeste" value="Nordeste" />
      </Select>
      {/* Listagem de Torneios filtrados */}
    </VStack>
  );
};

export default Tournaments;