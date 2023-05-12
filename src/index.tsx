import React from "react";
import { Message } from "./ui/elements/Message";
import { TitleType, MessageType } from "./types";
import { AppIcon } from "./ui/svg/AppIcon";

type Props = {
  title: TitleType;
  message: MessageType;
};

export function Hello(props: Props) {
  return (
    <div>
      <AppIcon width={24} />
      <h1>{props.title}</h1>
      <Message message={props.message} />
    </div>
  );
}
