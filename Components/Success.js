import { BiCheck } from "react-icons/bi";

const Success = ({message}) =>{
    return(
        <div className="flex justify-center items-center my-10">
            <div className="border-2 flex items-center justify-center w-96 text-center  border-green-600 px-3 py-2">
               {message} <BiCheck size={25} className='text-green-700'></BiCheck>
            </div>
        </div>
    )
}

export default Success ;