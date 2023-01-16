import { useReducer } from "react";
import { BiPlus } from "react-icons/bi";
import Success from "../Success";


function EmployeeForm (){
    const handleReducer = (state , event ) =>{
        return {
            ...state , 
            [event.target.name] : event.target.value 
        }
    }

    const [formData , setFormData] = useReducer(handleReducer , {});
    const handleFormData = (event) =>{
        event.preventDefault();
        if(Object.keys(formData).length == 0){
            return console.log('no form data available')
        }
     
    }
    if(Object.keys(formData).length > 0)return <Success message={'Data added'}></Success>
    return (
       <form onSubmit={handleFormData} className="grid grid-cols-2 gap-5 w-2/3 items-center py-10">
        <div className="input-type my-2">
            <input onChange={setFormData} className="border border-1 w-full px-5 py-1 focus:outline-none focus:border-indigo-500 rounded-md" type="text" placeholder="Your First Name" name='firstName' />
        </div>
        <div className="input-type">
            <input  onChange={setFormData} className="border border-1 w-full px-5 py-1 focus:outline-none focus:border-indigo-500 rounded-md" type="text" placeholder="Your Last Name" name='lastName' />
        </div>
        <div className="input-type">
            <input  onChange={setFormData} className="border border-1 w-full px-5 py-1 focus:outline-none focus:border-indigo-500 rounded-md" type="email" placeholder="Your Email" name='email' />
        </div>
        <div className="input-type">
            <input  onChange={setFormData} className="border border-1 w-full px-5 py-1 focus:outline-none focus:border-indigo-500 rounded-md" type="text" placeholder="salary" name='salary' />
        </div>
        <div className="input-type w-1/2" >
            <input  onChange={setFormData} className="border border-1 w-full px-5 py-1 focus:outline-none focus:border-indigo-500 rounded-md" type="date" placeholder="" name='birthday' />
        </div>
        <div className="flex gap-5">
        <div className="form-check flex  items-center">
           <input  onChange={setFormData} type="radio" value='active' name="status" id='isActiveUser' className="form-check-input appearance-none h-4 w-4 rounded-full border border-gray-300 bg-white checked:bg-green-600 checked:border-green-500 focus:outline-none transition  mr-2 duration-200 align-top bg-no-repeat bg-contain cursor-pointer" />
           <label htmlFor="isActiveUser" className="inline-block text-gray-500">Active</label>
        </div>
        <div className="form-check flex items-center">
           <input  onChange={setFormData} type="radio" value='inactive' name="status" id='isActiveUser1' className="form-check-input appearance-none h-4 w-4 rounded-full border border-gray-300 bg-white checked:bg-green-600 checked:border-green-500 focus:outline-none transition duration-200 align-top bg-no-repeat bg-contain float-left mr-2 cursor-pointer" />
           <label htmlFor="isActiveUser1" className="inline-block text-gray-500">inactive</label>
        </div>
        </div>
        <div className="w-full ">
            <button className="px-5 flex justify-center items-center py-2 w-1/2 hover:bg-indigo-400 transition duration-200 rounded-lg text-xl text-white bg-green-500">Add <span><BiPlus size={24}></BiPlus></span></button>
        </div>
       </form>
    )
}
export default EmployeeForm ;