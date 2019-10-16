import React from 'react';
import styled from 'styled-components/macro';

const Wrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-gap: 1rem;
  margin-top: 2rem;
`;

const TeamMembers = ({ members, editMember }) => {
  return (
    <Wrapper>
      {members.map(member => (
        <li key={member.id}>
          <h2>{member.name}</h2>
          <p>{member.role}</p>
          <p>{member.email}</p>
          <button onClick={() => editMember(member)}>Edit</button>
        </li>
      ))}
    </Wrapper>
  );
};

export default TeamMembers;
