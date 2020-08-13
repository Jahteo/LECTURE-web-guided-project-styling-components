import React from 'react'

export default function Friend(props) {
  const { info, action, actionText } = props
  return (
    <div className='friend'>
      {info.name}
      <button onClick={() => action(info.id)}>
        {actionText}
      </button>
    </div>
  )
}
