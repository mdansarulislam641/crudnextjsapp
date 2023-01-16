import { BiCheck } from "react-icons/bi"
export default function Success ({message}){
    return (
        <div className="flex justify-center items-center border  w-3/6 mx-auto my-10 py-2 text-xl bg-success ">
            <div >
                    <h2 className="text-white flex items-center">{message}<BiCheck size={30} color={'rgb(73,88,55)'}></BiCheck></h2>
            </div>
        </div>
    )
}