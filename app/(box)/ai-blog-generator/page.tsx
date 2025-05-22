"use client"
import Link from 'next/link'
import React, { useState } from 'react'

const page = () => {
  const [isLoading,setLoading]=useState(false)
  const onGenerate=()=>{
    setLoading(true)
    setTimeout(()=>setLoading(false),3000)
  }
  return (
    <section>
        <div className="flex-grow container mx-auto mt-10 px-4 sm:px-0">
            <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 flex flex-col">
            <div className="text-center">
                <h2 className="text-2xl font-semibold mb-4">Welcome!</h2>
                <p className="text-gray-700">Generate blogs from youtube videos</p>
            </div>
            <div>
                <h2 className="text-xl mb-4 font-semibold">Enter youtube link</h2>
                <div className="flex flex-wrap space-x-4">
                    <input id="youtubelink" type="url" placeholder="paste youtube link" className="flex-grow p-2 border border-blue-400 rounded-l-md"/>
                    <button id="generatebutton" className="bg-blue-400 text-white px-5 py-2 rounded-r-md hover:bg-blue-600 transition-colors" onClick={onGenerate}>Generate</button>
                </div>
            </div>
            <div id="loading-circle" className="load">    
            </div>
                <section className="mt-10 felx-grow">
                    <h2 className="text-xl mb-4 font-semibold">Generated Blog:</h2>
                    {isLoading&&
                    <div className="loading-spinner"></div>}
                    <div id="blogcontent" className="mt-2 text-gray-700 space-y-4">
                    </div>
                    <Link href="/ai-blog-generator/blogs"><button>All Generated Blogs</button></Link>
                </section>
            </div>
        </div>
    </section>
  )
}

export default page