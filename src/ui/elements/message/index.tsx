import React from "react";
type Props = {
  message: string;
};

export function Message(props: Props): React.JSX.Element {
  return (
    <div>
      <p>{props.message}</p>
    </div>
  );
}
