import React from "react";
import { TitleType, MessageType } from "./types";

type Props = {
  title: TitleType;
  message: MessageType;
};

export function Hello(props: Props): React.JSX.Element {
  return (
    <div>
      <h1>{props.title}</h1>
    </div>
  );
}
