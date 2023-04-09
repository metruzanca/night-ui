import type { Component } from 'solid-js'
import { Button, NightProvider } from '../src/'

const App: Component = () => {
  return (
    <div>
      <NightProvider>
        <Button/>
      </NightProvider>
    </div>
  )
}

export default App
