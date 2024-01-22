interface Tag {
  text: string;
}

function Tag({ text }: Tag) {
  return (
    <div className="bg-tag rounded-lg px-2.5 py-1.5 font-chivo text-sm font-bold uppercase text-dark-blue">
      {text}
    </div>
  );
}

export default Tag;
