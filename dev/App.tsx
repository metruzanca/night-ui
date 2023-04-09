import type { Component } from 'solid-js'
import { Button, NightProvider } from '../src/'
import { Wrap } from '../src/components/Form/Form'

const App: Component = () => {
  return (
    <NightProvider>
      <h1>NightUI</h1>
      <h3>A UiKIt Based on <a href="https://github.com/zombieFox/nightTab">NightTab</a></h3>

      <h2>Buttons</h2>

      <Button text='Hello World!'/>
    
      <Button text='Hello World!' variants={['button-line']} />
      <Button text='Hello World!' variants={['button-line', 'button-link']} />
      <Button text='Bugged Ring' variants={['button-ring']} />
      <Button text='Hello World!' block />

      <Wrap>
        <Button iconName='add' variants={['button-line']} />
        <Button iconName='bookmark' variants={['button-line']} title='What is the title for?' />
      </Wrap>

      <h2>Inputs, probably</h2>

    </NightProvider>
  )
}

export default App
