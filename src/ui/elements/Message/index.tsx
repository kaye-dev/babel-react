import { MessageType } from "../../../types";

type Props = {
  message: MessageType;
};

export function Message(props: Props) {
  return <p>{props.message}</p>;
}
