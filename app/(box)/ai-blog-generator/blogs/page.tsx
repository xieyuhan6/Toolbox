import React from 'react'

const Blogs = () => {
  return (
    <div className='bg-gray-100 font-sans antialiased'>
      <div className='container mx-auto mt-10 px-4 sm:px-0'>
        <div className='max-w-3xl mx-auto bg-white p-6 rouned-lg shadow-md'>
          <section>
            <h2 className='text-xl mb-4 font-semibold'>All Blogs Posts</h2>
            <div className='space-y-4'>
                <div className='border border-gray-300 p-4 rounded-lg'>
                  <h3 className='text-lg font-semibold'>Blog Post Title 1</h3>
                  <p className='text-gray-700'>This is the content of the blog post</p>
                  <h4 className='text-lg font-semibold'>Youtube Title</h4>
                  <p className='text-gray-700'>title of the</p>
                  <h5 className='text-lg font-semibold mt-4'>Youtube Link</h5>
                  <a href='#' className='text-blue-600 hover:underline'>https://www.youtube.com/watch?v=ftKiHCDVwfA&t=1867s</a>
                </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Blogs


