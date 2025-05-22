"use client"
import { Button } from '@/app/(box)/finance-manager/components/ui/button';
import { Input } from '@/app/(box)/finance-manager/components/ui/input';
import React, { useEffect, useState } from 'react'
type Transaction = {
  id: number;
  description: string;
  amount: number;
  date: string;
};

export const Page = () => {
  const [input,setInput]=useState({
    description:"",
    amount:"",
    date:""
  })
  const [list,setList]=useState<Transaction[]>([])
  useEffect(()=>{
    fetch("http://localhost:8000/all")
      .then(res=>res.json())
      .then(data=>setList(data))
      .catch(console.error)
  },[])

  const onInput=(e: React.ChangeEvent<HTMLInputElement>)=>{
      e.preventDefault()
      const {name,value}=e.target
      setInput((prev)=>({...prev,[name]:value}))
    }

  const onSubmit=async(e:React.FormEvent)=>{
    e.preventDefault()
    try{
      const res=await fetch("http://localhost:8000/add",{
          method:"POST",
          headers:{
            "content-type": "application/json"
          },
          body:JSON.stringify({...input,amount:parseFloat(input.amount)})
        })
      const data=await res.json()
      console.log(data)
      setList((prev)=>[...prev,{id:data.id,description:input.description,amount:parseFloat(input.amount),date:input.date}])
      setInput({ description: "", amount: "", date: "" })
    }catch(error){
      console.error(error)
      }
    }
  
  const onDelete=async(id:number)=>{
    await fetch(`http://localhost:8000/delete/${id}`,{
      method:"DELETE",
    })
      setList((prev)=>prev.filter(li=>li.id!==id))
  }

  return (
    <main className='max-w-xl mx-auto p-4'>
      <h1>Transction Management System</h1>
      <form className='space-y-3' onSubmit={onSubmit}>
        <Input onChange={onInput} name="description" value={input.description} placeholder='Description' required/>
        <Input onChange={onInput} name="amount" type='number'step="any" value={input.amount} placeholder='Amount'required/>
        <Input onChange={onInput} name="date" type='date' value={input.date} placeholder='Date'required/>
        <Button className="mt-5" type='submit'>ADD</Button>
        </form>
        {/* <div>
        <Button>Filter by</Button>
        <select>
          <option value="" disabled>year</option>

        </select>
        <select>
          <option></option>
        </select> 
        </div> */}
        {list.map((li)=>(
            <div key={li.id}>
              <p>Description: {li.description}</p>
              <p>Amount: {li.amount}</p>
              <p>Date: {li.date}</p>
              <Button onClick={()=>onDelete(li.id)}>DETELE</Button>
            </div>
        ))}
    </main>
  )
}

export default Page