import React from "react";
import { Message } from "./ui/elements/message";
import { TitleType, MessageType } from "./types";
import { AppIcon } from "./ui/elements/AppIcon";

type Props = {
  title: TitleType;
  message: MessageType;
};

export function Hello(props: Props): React.JSX.Element {
  return (
    <div>
      <h1>{props.title}</h1>
      <Message message={props.message} />
      <AppIcon width={24} />
    </div>
  );
}
