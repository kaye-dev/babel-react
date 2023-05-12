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
      <h1>{props.title}</h1>
      <AppIcon width={24} />
      <Message message={props.message} />
    </div>
  );
}
