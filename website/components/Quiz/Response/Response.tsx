import { FC } from 'react';

type Props = {
  text: string,
  number: number,
  selected: number,
  select: (number: number) => void
}

const Response: FC<Props> = ({
  text,
  number,
  selected,
  select,
}) => {
  return (
    <button
      type="button"
      onClick={() => select(number)}
      style={selected === number ? { backgroundColor: 'royalblue' } : {}}
    >
      <h4>{number}</h4>
      <p>{text}</p>
    </button>
  );
};

export default Response;
