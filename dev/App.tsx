import type { Component } from 'solid-js'
import { Button, NightProvider } from '../src/'

const App: Component = () => {
  return (
    <div>
      <NightProvider>
        <Button
          variants={['button', 'button-block', 'button-ring']}
          children='Hello World!'
        />
      </NightProvider>
    </div>
  )
}

export default App
