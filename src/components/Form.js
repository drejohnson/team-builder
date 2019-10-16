import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { ulid } from 'ulid';

const StyledForm = styled.form`
  align-self: center;
  width: 60%;
`;

const StyledEntry = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

const StyledButton = styled.button`
  display: flex;
`;

const Form = ({ addMember }) => {
  const [member, setMember] = useState({
    name: '',
    email: '',
    role: '',
  });

  const handleChanges = event => {
    console.log(member);
    setMember({ ...member, [event.target.id]: event.target.value });
  };

  const submitForm = event => {
    event.preventDefault();
    const newMember = {
      ...member,
      id: ulid(),
    };
    addMember(newMember);
    setMember({ name: '', email: '', role: '' });
  };

  return (
    <StyledForm onSubmit={submitForm}>
      <StyledEntry>
        <label htmlFor='name'>Name</label>
        <input
          id='name'
          type='text'
          value={member.name}
          onChange={handleChanges}
        />
      </StyledEntry>

      <StyledEntry>
        <label htmlFor='email'>Email</label>
        <input
          id='email'
          type='text'
          value={member.email}
          onChange={handleChanges}
        />
      </StyledEntry>
      <StyledEntry>
        <label htmlFor='role'>Role</label>
        <input
          id='role'
          type='text'
          value={member.role}
          onChange={handleChanges}
        />
      </StyledEntry>
      <StyledButton type='submit'>Add Member</StyledButton>
    </StyledForm>
  );
};

export default Form;
