import React from 'react';
import { Container, SignOut } from './styles';

import { useAuth } from '../../hooks/auth';

const Dashboard: React.FC = () => {
  const { signOut } = useAuth();
  return (
    <Container>
      <SignOut title="sair" onPress={signOut} />
    </Container>
  );
};

export default Dashboard;
