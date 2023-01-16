import { BiEdit, BiTrashAlt } from "react-icons/bi";

const Table = () => {
    return (
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
            <tr className="text-center">
                <td className="flex px-10 justify-center py-2">
                    <img src="#" alt="" />
                    <span>Md Ansarul Haque</span>
                </td>
                <td className="px-10 py-2">
                    <span>mdansarulislam641@gmail.com</span>
                </td>
                <td className="px-10 py-2">
                    <span>25000</span>
                </td>
                <td className="px-10 py-2">
                    <span>12/05/2002</span>
                </td>
                <td className="px-10 py-2">
                    <button className="bg-green-500 px-3 rounded-xl">Active</button>
                </td>
                <td className="px-10 py-2 flex gap-2 justify-around">
                   <BiEdit size={25} color={"rgb(255,50,200)"}></BiEdit>
                   <BiTrashAlt size={25} color={"rgb(50,50,200)"}></BiTrashAlt>
                </td>
            </tr>
            </tbody>
        </table>
    );
};

export default Table;