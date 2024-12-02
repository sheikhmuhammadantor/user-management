import { FaPencilAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

function AllUser() {
    return (
        <div className="flex justify-between px-12 border-teal-600 text-slate-400 py-1 border-2 rounded-lg">
            <h3 className="grid place-items-center">Id</h3>
            <h3 className="grid place-items-center">Name</h3>
            <h3 className="grid place-items-center">Gmail</h3>
            <h3 className="grid place-items-center">Gender</h3>
            <h3 className="grid place-items-center">Status</h3>
            <div className="flex gap-2 -mr-4">
                <h3 className="btn text-2xl">
                    <FaPencilAlt />
                </h3>
                <h3 className="btn text-2xl">
                    <MdDelete />
                </h3>
            </div>
        </div>
    )
}

export default AllUser
