"use client";
import { Footer } from "../components/Footer";
import { InputSection } from "./components/InputSection";
import { Nav } from "../components/Nav";
import { NoteSection } from "./components/NoteSection";
import { useState } from "react"

type Thing={
  title:string;
  note:string;
  createdAt:string;
}

export default function App() {
  const [input, setInput] = useState({
    title:'',
    note:'',
  })
  const onInput = (e: React.ChangeEvent<HTMLTextAreaElement>)=>{
    const{name,value}=e.target;
    setInput((prev)=>({...prev,[name]:value}))
  }
  const [things, setThings] = useState<Thing[]>([]);
  const addThing = () => {
    if (input.title===""||input.note==="") {
      return;
    } else {
      const newThing = {...input,createdAt:new Date().toLocaleString()} as Thing;
      setThings([...things, newThing]);
      setInput({title:"",note:""});
    }
  };
  const delThing = (index:number) => {
    setThings(things.filter((_, i) => i !== index));
  };
  return (
    <div className="App">
 
      <InputSection onInput={onInput} input={input} addThing={addThing} />
      <NoteSection things={things} delThing={delThing} />
    </div>
  );
}