import React from "react";
import { MessageType } from "../../../types";
type Props = {
  message: MessageType;
};

export function Message(props: Props): React.JSX.Element {
  return (
    <div>
      <p>{props.message}</p>
    </div>
  );
}
