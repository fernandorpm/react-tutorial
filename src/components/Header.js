import React from 'react'

const Header = () => {
  return (
    <header>
      <h1
        style={{
          fontSize: "6rem",
          fontWeight: "600",
          marginBottom: "2rem",
          color: "#ececec",
          textTransform: "lowercase",
          textAlign: "center",
          padding: "20px 0",
          lineHeight: "1.5em",
        }}
      >Todo List</h1>
    </header>
  )
}

export default Header;