import React, { useState } from 'react';
import styled from 'styled-components/macro';

import GlobalStyles from './style/Global';
import TeamMembers from './components/TeamMembers';

const Wrapper = styled.div`
  display: flex;
  padding: 0 1rem;
`;

function App() {
  const [members, setMembers] = useState([
    {
      id: 1,
      name: 'DeAndre Johnson',
      email: 'dre@gmail.com',
      role: 'Fullstack Developer',
    },
  ]);
  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <TeamMembers teamMembers={members} />
      </Wrapper>
    </>
  );
}

export default App;
