import { ParentComponent } from "solid-js"
import clsx from 'clsx'
import './Button.css'

type ButtonProps = {
  variants?: Array<(
    | 'button' | 'button-line' | 'button-ring' | 'button-text'
    | 'button-small' | 'button-large' | 'button-extra-large' | 'button-block'
    | 'button-link'
  )>
  textContent?: string
  // TODO handle the case of .button .icon
}
const Button: ParentComponent<ButtonProps> = (props) => {
  return (
    <button class={clsx(props.variants)}>
      {props.children}
    </button>
  )
}

export default Button