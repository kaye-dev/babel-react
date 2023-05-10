import React from "react";
import { Message } from "./ui/elements/message";

export function Hello(): React.JSX.Element {
  return (
    <div>
      <h1>Hello | KAYE</h1>
      <Message message="Hello" />
    </div>
  );
}
