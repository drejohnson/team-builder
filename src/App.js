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
  const [memberToEdit, setMemberToEdit] = useState({
    id: '',
    name: '',
    email: '',
    role: '',
  });
  const [isEditing, setIsEditing] = useState(false);

  const addMember = member => {
    setMembers([...members, member]);
  };
  const editMember = member => {
    setIsEditing(true);
    setMemberToEdit({
      id: member.id,
      name: member.name,
      email: member.email,
      role: member.role,
    });
  };
  const updateMember = (id, updatedMember) => {
    setIsEditing(false);
    setMembers(
      members.map(member => (member.id === id ? updatedMember : member)),
    );
  };
  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <Form
          addMember={addMember}
          updateMember={updateMember}
          memberToEdit={memberToEdit}
          isEditng={isEditing}
          setIsEditing={setIsEditing}
        />
        <TeamMembers members={members} editMember={editMember} />
      </Wrapper>
    </>
  );
}

export default App;
