import AllUser from "../Components/AllUser"

function Home() {
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

          <AllUser></AllUser>
          <AllUser></AllUser>
          <AllUser></AllUser>
          <AllUser></AllUser>

        </div>
      </div>
    </div>
  )
}

export default Home
