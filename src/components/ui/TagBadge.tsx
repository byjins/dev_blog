interface Props {
  tagName: string;
}

const TagBadge = ({ tagName }: Props) => {
  return (
    <span className={"text-xs p-1 rounded bg-blue-400 text-white"}>
      {tagName}
    </span>
  );
};

export default TagBadge;
