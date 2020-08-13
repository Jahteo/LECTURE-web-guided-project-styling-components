import React from 'react'

export default function Friend({ info, action, actionText }) {
  return (
    <div className='friend'>
      {info.name}
      <button onClick={() => action(info.id)}>
        {actionText}
      </button>
    </div>
  )
}
