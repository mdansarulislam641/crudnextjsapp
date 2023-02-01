import Link from 'next/link';
import React from 'react';
import { BiEdit, BiTrashAlt } from 'react-icons/bi';
import employeeData from '../database/data';
const Table = () => {
    return (
        <>
               <table className="min-w-full table-auto ">
            <thead className="bg-gray-800 px-10 py-5">
               <tr className="">
                    <th className="px-10 py-2">
                        <span className="text-white">Name</span>
                    </th>
                    <th className="px-10 py-2">
                        <span className="text-white">Email</span>
                    </th>
                    <th className="px-10 py-2">
                        <span className="text-white">Salary</span>
                    </th>
                    <th className="px-10 py-2">
                        <span className="text-white">Birthday</span>
                    </th>
                    <th className="px-10 py-2">
                        <span className="text-white">Status</span>
                    </th>
                    <th className="px-10 py-2">
                        <span className="text-white">Action</span>
                    </th>
               </tr>
            
            </thead>
            {/* employee list here */}
            <tbody className="bg-gray-200">
             {employeeData.map((value , idx)=><Tr {...value} key={idx}></Tr>)}
            </tbody>
            
        </table>
        </>
    );
};

export default Table;

function Tr ({id , date,name,salary, status, email, avatar }){
    return(
        <tr className="text-center">
        <td className="flex px-10 justify-items-end gap-5 py-2">
            <img className='w-8 h-8 rounded-full' src={avatar || "#"} alt="" />
            <span>{name || "UnKnown"}</span>
        </td>
        <td className="px-10 py-2">
            <span>{email || "Unknown"}</span>
        </td>
        <td className="px-10 py-2">
            <span>{salary || "Unknown"}</span>
        </td>
        <td className="px-10 py-2">
            <span>{date || "Unknown"}</span>
        </td>
        <td className="px-10 py-2">
            <button className="bg-green-500 px-3 rounded-xl">{status || "Unknown"}</button>
        </td>
        <td className="px-10 py-2 flex gap-2 justify-around">
           <BiEdit size={25} color={"rgb(255,50,200)"}></BiEdit>
           <BiTrashAlt size={25} color={"rgb(50,50,200)"}></BiTrashAlt>
        </td>
    </tr>
    )
}