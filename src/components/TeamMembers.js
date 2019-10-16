import React from 'react';
import styled from 'styled-components/macro';

const Wrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-gap: 1rem;
`;

const TeamMembers = ({ teamMembers }) => {
  return (
    <Wrapper>
      {teamMembers.map(teamMember => (
        <li key={teamMember.id}>
          <h2>{teamMember.name}</h2>
          <p>{teamMember.role}</p>
          <p>{teamMember.email}</p>
          <button>Edit</button>
        </li>
      ))}
    </Wrapper>
  );
};

export default TeamMembers;
