import React, { useState, useEffect } from 'react';
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

const Form = ({
  addMember,
  updateMember,
  memberToEdit,
  isEditng,
  setIsEditing,
}) => {
  const [member, setMember] = useState({
    name: '',
    email: '',
    role: '',
  });

  const handleChange = event => {
    const { name, value } = event.target;
    setMember({ ...member, [name]: value });
  };

  const submitForm = event => {
    event.preventDefault();
    const newMember = {
      ...member,
      id: ulid(),
    };
    if (isEditng) {
      updateMember(member.id, member);
    } else {
      addMember(newMember);
      setMember({ name: '', email: '', role: '' });
    }
  };

  useEffect(() => {
    setMember(memberToEdit);
  }, [memberToEdit]);

  return (
    <StyledForm onSubmit={submitForm}>
      <StyledEntry>
        <label htmlFor='name'>Name</label>
        <input
          id='name'
          name='name'
          type='text'
          value={member.name}
          onChange={handleChange}
        />
      </StyledEntry>

      <StyledEntry>
        <label htmlFor='email'>Email</label>
        <input
          id='email'
          name='email'
          type='text'
          value={member.email}
          onChange={handleChange}
        />
      </StyledEntry>
      <StyledEntry>
        <label htmlFor='role'>Role</label>
        <input
          id='role'
          name='role'
          type='text'
          value={member.role}
          onChange={handleChange}
        />
      </StyledEntry>
      {isEditng ? (
        <>
          <StyledButton type='submit'>Update</StyledButton>
          <StyledButton onClick={() => setIsEditing(false)}>
            Cancel
          </StyledButton>
        </>
      ) : (
        <StyledButton type='submit'>Add Member</StyledButton>
      )}
    </StyledForm>
  );
};

export default Form;
