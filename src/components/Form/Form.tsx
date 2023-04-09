import { ParentComponent } from "solid-js";
import './index.css'

export const Wrap: ParentComponent = (props) => (
  <div class="form-wrap">
    {props.children}
  </div>
)
