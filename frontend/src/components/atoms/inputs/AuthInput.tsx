interface Props {
  placeholder: string;
}

export default function AuthInput(props: Props) {
  return (
    <div>
      <input type="text" placeholder={props.placeholder} />
    </div>
  );
}
