import React from 'react'
import Four from './components/Four'

function App() {

  return (
   <main className='bg-[#FAFAFA] flex flex-col justify-center items-center'>
    <h1 className='mt-12 text-[#8d8d97] text-2xl font-light'>Reliable, efficient delivery</h1>
        <h1 className='text-2xl font-semibold mb-4 mt-1'>Powered by Technology</h1>
        <p className='mb-6 px-[6rem] text-center text-[#8d8d97]'>Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is successful</p>
    <Four />
   </main>
  )
}

export default App
