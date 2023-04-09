import { ParentComponent, mergeProps } from "solid-js"
import clsx from 'clsx'
import './Button.css'
import { Icon, Icons } from "../components/Icon/Icon"

type ButtonProps = {
  text?: string
  srOnly?: boolean
  iconName?: Icons
  iconPosition?: 'left' | 'right'
  size?: 'small' | 'large'
  block?: boolean
  title?: string
  class?: string
  onClick?: (event: MouseEvent) => void
  variants?: Array<'button-ring' | 'button-line' | 'button-link'>
  active?: boolean
}
const Button: ParentComponent<ButtonProps> = (props) => {
  const merged = mergeProps({ iconPosition: 'left', text: 'Button' }, props)
  return (
    <button
      title={props.title}
      class={clsx('button', 
        props.block && 'button-block',
        props.size === 'small' && 'button-small',
        props.size === 'large' && 'button-large',
        props.class,
        props.variants,
        props.active && 'active'
      )}
      tabIndex={1}
      type="button"
      onclick={props.onClick}
      // children={props.children}
    >
      {props.iconName && merged.iconPosition === 'left' && (
        <Icon name={props.iconName}/>
      )}
      {props.text && (
        <span
          class={clsx("button-text", props.srOnly && 'sr-only')}
          textContent={merged.text}
        />
      )}
      {props.iconName && merged.iconPosition === 'right' && (
        <Icon name={props.iconName} />
      )}
    </button>
  )
}

export default Button