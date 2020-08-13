import React from 'react'
import styled from 'styled-components'

const StyledFriend = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
  color: ${props => props.color || props.theme.primaryColor};
  margin: ${props => props.theme.margins.small};
  font-size: ${props => props.big ? '2em' : '1em'};

  @media (max-width: ${props => props.theme.tabletBreakpoint}) {
    width: 100%;
  }

  button {
    background-color: ${props => props.theme.secondaryColor};
    color: ${props => {
      const { theme } = props;
      return theme.white;
    }};

    transition: all 0.5s ease-in-out;

    &:hover {
      transition: all 0.5s ease-in-out;
      transform: scale(1.3);
    }
  }
`

export default function Friend({ big, info, action, actionText }) {
  return (
    <StyledFriend big={big}>
      {info.name}
      <button onClick={() => action(info.id)}>
        {actionText}
      </button>
    </StyledFriend>
  )
}
