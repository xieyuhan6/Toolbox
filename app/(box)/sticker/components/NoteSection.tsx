type NoteSectionProps={
  delThing:(index:number)=>void;
  things:{ title: string; note: string; createdAt: string }[];
}

export const NoteSection = ({ delThing, things }:NoteSectionProps) => {
  return (
    <div>
      {things.map((thing, index:number) => (
        <div key={index} className="note-card">
          <p className="note-input">{thing.title}</p>
          <p className="note-input">{thing.note}</p>
          <div className="flex flex-row">
          <button className="btn-primary" onClick={() => delThing(index)}>delete</button>
          <span className="text-sm text-gray-500">Created:{thing.createdAt}</span>
          </div>
        </div>
      ))}
    </div>
  );
};
