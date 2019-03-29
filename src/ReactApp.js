import React, { useState } from 'react'

export const ReactApp = () => {
  const [title, setTitle] = useState('Hello React')
  return (
    <div className="app">
      <div className="desc">{title}</div>
      <input
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
    </div>
  )
}
