import React from 'react';
import { VStack, Text, Button } from 'native-base';

const PlanCard = ({ title, subtitle, benefits, price }) => (
  <VStack space={2} borderWidth={1} p={4} borderRadius={8} borderColor="coolGray.300">
    <Text fontSize="lg" bold>{title}</Text>
    <Text>{subtitle}</Text>
    {benefits.map((benefit, index) => (
      <Text key={index}>- {benefit}</Text>
    ))}
    <Text fontSize="lg" bold>Preço: {price}</Text>
    <Button colorScheme="primary">Assinar</Button>
  </VStack>
);

export default PlanCard;