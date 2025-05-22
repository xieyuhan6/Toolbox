type InputSectionProps={
  onInput:(e:React.ChangeEvent<HTMLTextAreaElement>)=>void;
  input:{title:string;note:string};
  addThing:()=>void;
}
export const InputSection = ({onInput,input,addThing}:InputSectionProps) => {
  return (
    <div className="note-card m-4 mx-auto">
    <div>
      <div>
      <textarea className="note-input" name="title" value={input.title} onChange={onInput} placeholder="Title" />
      <textarea className="note-input" rows={4} name="note" value={input.note} onChange={onInput} placeholder="Note" />
      </div>
      <div className="flex justify-end">
      <button className="btn-primary" onClick={addThing}>Add</button>
      </div>
    </div>  
    </div>
  );
};
