import React from "react";

export function InpEmail(props) {
  // eslint-disable-next-line no-useless-escape
  const pattern = "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"
  return (
    <input type="email" name="email" id="email" placeholder="email@example.com" pattern={pattern} />
  )
}