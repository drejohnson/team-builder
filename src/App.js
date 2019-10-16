import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { ulid } from 'ulid';

import GlobalStyles from './style/Global';
import TeamMembers from './components/TeamMembers';
import Form from './components/Form';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
`;

function App() {
  const [members, setMembers] = useState([
    {
      id: ulid(),
      name: 'DeAndre Johnson',
      email: 'dre@gmail.com',
      role: 'Fullstack Developer',
    },
  ]);
  const addMember = member => {
    setMembers([...members, member]);
  };
  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <Form addMember={addMember} />
        <TeamMembers teamMembers={members} />
      </Wrapper>
    </>
  );
}

export default App;
