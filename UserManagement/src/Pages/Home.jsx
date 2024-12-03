import { useLoaderData } from "react-router-dom"
import AllUser from "../Components/AllUser"

function Home() {

  const usersData = useLoaderData();
  const usersDataA = [] ;

  return (
    <div className="">
      <div>
        <div className="flex justify-between px-12 bg-[#752bff9d] text-gray-200 py-1 border-4 rounded-lg border-[#1c2c7c] my-2">
          <h3>Id</h3>
          <h3>Name</h3>
          <h3>Gmail</h3>
          <h3>Gender</h3>
          <h3>Status</h3>
          <div className="flex gap-4 mr-2">
            <h3>Edit</h3>
            <h3>Delete</h3>
          </div>
        </div>
        <div className="space-y-1">
    {
      usersData.length === 0 ? <h3 className="text-5xl mt-20">No Data Found  !!</h3> : usersData.map((userData, idx) => <AllUser idx={idx} key={userData._id} userData={userData} />)
    }
        </div>
      </div>
    </div>
  )
}

export default Home
