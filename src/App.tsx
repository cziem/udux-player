import { Layouts } from "components"
import { AntdConfigProvider } from "config"
import React from "react"
import "./App.css"

function App() {
  return (
    <AntdConfigProvider>
      <Layouts>
        <p>Content goes here</p>
      </Layouts>
    </AntdConfigProvider>
  )
}

export default App
