interface Props {
  label: string;
}

export default function MediumButton(props: Props) {
  return (
    <div>
      <button>{props.label}</button>
    </div>
  );
}
