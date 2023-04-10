import get from "lodash.get"
import set from "lodash.set"
import { Component, For, createSignal, mergeProps } from "solid-js"
import { produce } from 'solid-js/store'
import { Label, Wrap } from '../Form/Form'
import { useNightContext } from "../../Provider/Provider"



type RadioElement = {
  id: string
  labelText: string
  description: string
  value: string
}

type RadioProps = {
  radioGroup: RadioElement[]
  action?: () => void
  groupName?: string
  label?: string
  path?: string
}
export const RadioControl: Component<RadioProps> = (reactiveProps) => {
  const { state } = useNightContext()
  const props = mergeProps(reactiveProps, {
    groupName: 'group', radioGroup: [], action: () => {}
  })
  const [radioset, setRadioset] = createSignal([]);

  for (const item of props.radioGroup) {
    setRadioset(produce(set => {

    }))
  }

  return (
    <Wrap>
      {props.label && (
        <Wrap>
          <Label text={props.label} noPadding />
        </Wrap>
      )}
      <For each={radioset()}>
        {(radio) => (
          <div>TODO radio</div>
        )}
      </For>
    </Wrap>
  )
}

const a = {
  id: 'display-direction-vertical',
  labelText: "Vertical",
  description: "Stack the Visual Element and Name one above the other.",
  value: 'vertical'
}



// new Control_radio({
//   object: bookmarkData.link,
//   radioGroup: [
//     { id: 'display-direction-vertical', labelText: message.get('bookmarkFormDisplayDirectionVerticalLabel'), description: message.get('bookmarkFormDisplayDirectionVerticalDescription'), value: 'vertical' },
//     { id: 'display-direction-horizontal', labelText: message.get('bookmarkFormDisplayDirectionHorizontalLabel'), description: message.get('bookmarkFormDisplayDirectionHorizontalDescription'), value: 'horizontal' }
//   ],
//   groupName: 'display-direction',
//   path: 'display.direction',
//   action: () => {
//     this.disable();
//     this.preview.update.style(bookmarkData);
//   }
// }),