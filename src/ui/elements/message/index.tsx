import React from "react";
import { Message as MessageType } from "../../../types/Message";
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
