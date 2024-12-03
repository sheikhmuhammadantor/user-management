import { FaPencilAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

function AllUser({ idx, userData }) {

    const { _id, name, email, gender } = userData;

    const handelUserDelete = (id) => {
        console.log(id);

        fetch('http://localhost:4232/all-user', {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({id})
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }

    return (
        <div className="grid grid-cols-6 j px-12 border-teal-600 text-slate-400 py-1 border-2 rounded-lg">
            <h3 className="grid place-items-center">{idx + 1}</h3>
            <h3 className="grid place-items-center">{name}</h3>
            <h3 className="grid place-items-center">{email}</h3>
            <h3 className="grid place-items-center">{gender}</h3>
            <h3 className="grid place-items-center"></h3>
            <div className="flex gap-2 -mr-4">
                <h3 className="btn text-2xl">
                    <FaPencilAlt />
                </h3>
                <h3 onClick={() => handelUserDelete(_id)} className="btn text-2xl">
                    <MdDelete />
                </h3>
            </div>
        </div>
    )
}

export default AllUser
