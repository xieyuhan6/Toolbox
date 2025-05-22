'use client';

import { eggTime } from '@/constants'
import React, { useState,useEffect,useRef } from 'react'

const StopButton = () => {
    const [activeIndex,setActiveIndex]=useState<number|null>(null)
    const [timeLeft,setTimeLeft]=useState(0)
    const alarmRef=useRef<HTMLAudioElement|null>(null)
    
    useEffect(()=>{
    if(activeIndex===null||timeLeft<=0)
        return;
        const timer=setInterval(()=>{
            setTimeLeft((prevTime)=>{
                if(prevTime<=1){
                    clearInterval(timer)
                    setActiveIndex(null)
                    if (alarmRef.current){
                        alarmRef.current.volume=0.5
                        alarmRef.current.loop=false
                        alarmRef.current.play().catch((err)=>{console.log("error occured",err)})
                    }
                    return 0
                }
                    return prevTime-1
            })
        },1000)
        return()=>clearInterval(timer)
    },[timeLeft,activeIndex])

    const startTimer=({index,time}:{index:number;time:number})=>{
        setTimeLeft(time*60)
        setActiveIndex(index)
    }
    const endTimer=()=>{
        setTimeLeft(0)
        setActiveIndex(null)
    }
    return(
        <div>
            {eggTime.map((eggs,index)=>{
                return(
                    <div className="egg-timer-container" key={index} >        
                        <button onClick={()=>startTimer({index:index, time:eggs.time})}>Start {eggs.time} min</button>
                    </div>
                )
            })}
            <button  onClick={()=>endTimer()}>End</button>
            <p>{timeLeft} seconds left</p>
            <audio ref={alarmRef} src="/ready.mp3" />
        </div>
  )
} 

export default StopButton