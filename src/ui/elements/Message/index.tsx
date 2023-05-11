import { MessageType } from "../../../types";
type Props = {
  message: MessageType;
};

export function Message(props: Props) {
  return (
    <div>
      <p>{props.message}</p>
    </div>
  );
}
