import React from 'react'
import styled from 'styled-components'

const StyledFriend = styled.div`

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
