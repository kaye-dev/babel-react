type Props = {
  message: string;
};

export function Message(props: Props) {
  return (
    <div>
      <p>{props.message}</p>
    </div>
  );
}
