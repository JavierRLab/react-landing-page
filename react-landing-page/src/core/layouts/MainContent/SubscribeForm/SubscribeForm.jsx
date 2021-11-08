import React from "react";

import { InpEmail } from "../../../components/inputs/InpEmail/InpEmail";
import { InpSubmit } from "../../../components/inputs/InpSubmit/InpSubmit";

export function SubscribeForm(props) {
  return (
    <div class="form-container">
      <h2 className="important">Subscribe to the News</h2>
      <form action="https://www.freecodecamp.com/email-submit" id="form">
        <InpEmail />
        <InpSubmit />
      </form>
    </div>
  )
}
