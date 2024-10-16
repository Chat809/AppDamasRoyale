import React from 'react';
import { VStack, Input, Button, Text } from 'native-base';

const Login = ({ navigation }) => {
  return (
    <VStack space={4} alignItems="center" p={5}>
      <Text fontSize="xl" bold>Login</Text>
      <Input placeholder="Email" size="md" />
      <Input placeholder="Senha" size="md" type="password" />
      <Button onPress={() => navigation.navigate('PlayerProfile')} colorScheme="primary">
        Entrar
      </Button>
      <Button variant="link" onPress={() => navigation.navigate('PlayerProfile')}>
        Criar uma conta
      </Button>
    </VStack>
  );
};

export default Login;