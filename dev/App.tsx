import type { Component } from 'solid-js'
import { NightProvider } from '../src/'
import ThemeSettings from './pages/ThemeSettings'

const App: Component = () => {
  return (
    <NightProvider>
      <h1>NightUI</h1>
      <h3>A UiKIt Based on <a href="https://github.com/zombieFox/nightTab">NightTab</a></h3>

      <ThemeSettings/>

    </NightProvider>
  )
}

export default App
