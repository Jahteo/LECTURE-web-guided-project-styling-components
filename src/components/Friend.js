import React from 'react'
import styled from 'styled-components'

const StyledFriend = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
  color: ${props => props.theme.primaryColor};
  margin: ${props => props.theme.margins.small};

  button {
    background-color: ${props => props.theme.secondaryColor};
    color: ${props => props.theme.white};

    &:hover {
      transform: scale(1.3);
    }
  }
`

export default function Friend({ info, action, actionText }) {
  return (
    <StyledFriend>
      {info.name}
      <button onClick={() => action(info.id)}>
        {actionText}
      </button>
    </StyledFriend>
  )
}
