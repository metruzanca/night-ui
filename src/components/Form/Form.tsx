import { Component, ParentComponent } from "solid-js";
import './index.css'
import clsx from "clsx";

export const Wrap: ParentComponent = (props) => (
  <div class="form-wrap">
    {props.children}
  </div>
)

type RadioProps = {
  checked?: boolean
  class?: string
  id?: string
  name?: string
  onClick?: (e: MouseEvent) => void
  value?: string
}
export const Radio: Component<RadioProps> = (props) => {
  return (
    <input
      checked={props.checked}
      class={clsx(props.class)}
      id={props.id}
      name={props.name}
      onClick={props.onClick}
      tabIndex={1}
      type="radio"
      value={props.value}
    />
  )
}

type LabelProps = {
  for?: string
  noPadding?: boolean
  srOnly?: boolean
  icon?: boolean
  text?: string
  description?: string[]
  class?: string
}

export const Label: Component<LabelProps> = (props) => (
  <label
    for={props.for}
    class={clsx(
      props.noPadding && 'label-no-padding',
      props.srOnly && !props.icon && 'sr-only',
      props.class,
    )}
    children={(
      <>
        {props.icon && (
          <span class="label-icon"/>
        )}
        <span
          class={clsx(
            "label-block",
            props.srOnly && props.icon && 'sr-only'
          )}
        >
          <span class="label-block-item">{props.text}</span>
          {props.description?.map((desc) => (
            <span class="label-block-item small muted">{desc}</span>
          ))}
          {typeof props.description === 'string' && (
            <span class="label-block-item small muted">{props.description}</span>
          )}
        </span>
      </>
    )}
  />
)


export const inputButton: Component<{ type: string }> = (props) => (
  // TODO
  <div>inputButton</div>
)

export const group: Component = (props) => (
  // TODO
  <div>group</div>
)

export const inline: Component = (props) => (
  // TODO
  <div>inline</div>
)