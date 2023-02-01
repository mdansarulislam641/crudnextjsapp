import Form from '@/components/Form';
import Table from '@/components/Table';
import Head from 'next/head'
import { useState } from 'react';
import { BiUserPlus } from "react-icons/bi";

export default function Home() {
 const [visibleForm , setVisibleForm] = useState(false)
 const handleVisibleForm = () =>{
  setVisibleForm(!visibleForm)
 }
  return (
    <>
      <Head>
        <title>Crud App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='py-5 max-w-screen-xl mx-auto'>
        <h1 className='text-center text-4xl font-bold py-10'>Employee Management</h1>

        <div>
          <div className='border-b-2'>
            <button onClick={handleVisibleForm} className='bg-indigo-500 mb-5 w-48 px-4 py-3 text-xl hover:bg-indigo-400  transition duration-500 rounded-md text-white'>Add Employee</button>
          </div>
        </div>
          <div>
           {visibleForm ?  <Form></Form> : <></>}
          </div>
      {/* create employee table */}
      <Table></Table>
    


         
      </main>
    </>
  )
}
