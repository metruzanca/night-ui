import { Component } from "solid-js";
import { Button } from "../../src";
import { RadioControl } from "../../src/components/Controls/Controls";
import { Wrap, Radio, Label } from "../../src/components/Form/Form";

const ThemeSettings: Component = () => (
  <div>
    
    <h2>Theme</h2>


    {/* <h3>Preset</h3>
      
      <h3>Saved</h3> */}

    <Button variants={['button-line']} iconName='check' tooltip="Very nice">Nice Button</Button>

    <h3>Style</h3>

    {/* TODO missing the indent components */}
    <Wrap>
      <Wrap>
        <Radio id='style-1' value='Dark' />
        <Label for='style-1' text='Dark Mode' />
      </Wrap>
      <Wrap>
        <Radio id='style-2' value='Light' /> 
        <Label for='style-2' text='Light Mode' />
      </Wrap>
    </Wrap>

    <RadioControl
      radioGroup={[
        { id: 'theme-style-dark', labelText: 'menuContentThemeStyleDarkLabel', description: 'menuContentThemeStyleDarkLabel', value: 'dark' },
        { id: 'theme-style-light', labelText: 'menuContentThemeStyleLightLabel', description: 'menuContentThemeStyleLightLabel', value: 'light' },
        { id: 'theme-style-system', labelText: 'menuContentThemeStyleAutomaticLabel', description: 'menuContentThemeStyleAutomaticLabel', value: 'system' }
      ]}
      groupName='theme-style'
      path='theme.style'
      action={() => {
        // theme.style.initial();
        // applyCSSClass('theme.style');
        // data.save();
      }}
    />

    {/* themeSetting.control.style = new Control_radio({
        object: state.get.current(),
      radioGroup: [
      {id: 'theme-style-dark', labelText: message.get('menuContentThemeStyleDarkLabel'), description: false, value: 'dark' },
      {id: 'theme-style-light', labelText: message.get('menuContentThemeStyleLightLabel'), description: false, value: 'light' },
      {id: 'theme-style-system', labelText: message.get('menuContentThemeStyleAutomaticLabel'), description: message.get('menuContentThemeStyleAutomaticDescription'), value: 'system' }
      ],
      groupName: 'theme-style',
      path: 'theme.style',
    action: () => {
        theme.style.initial();
      applyCSSClass('theme.style');
      data.save();
    }
  }); */}

    <h3>Colour</h3>

    <h3>Accent</h3>

    <h3>Font</h3>

    <h3>Radius</h3>

    <h3>Shadow</h3>

    <h3>Shade</h3>

    <h3>Opacity</h3>

    <h3>Background</h3>

  </div>
)
export default ThemeSettings