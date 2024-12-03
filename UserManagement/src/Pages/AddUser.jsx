function AddUser() {

  const handelOnsubmitForm = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const gender = form.gender.value;
    const password = form.password.value;

    const user = {
      name, email, gender
    }
    console.log(user);

    fetch('http://localhost:4232/add-user', {
      method: "POST",
      headers: {
        "Content-Type" : "application/json",
      },
      body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => {
      if(data.insertedId) alert("Successfully Add User !!");
    })
  }

  return (
    <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl mx-auto">
      <form onSubmit={handelOnsubmitForm} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text text-lg">Name</span>
          </label>
          <input type="text" placeholder="full name" name="name" className="input input-bordered text-lg" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-lg">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered text-lg" required />
        </div>
        <div className="form-control">
          <span className="label-text text-lg text-left">Gender</span>
          <label className="label max-w-32 ml-12">
            <span className="label-text text-base">Male</span>
            <input type="radio" name="gender" value="Male" className="radio radio-info" defaultChecked />
          </label>
          <label className="label max-w-32 ml-12">
            <span className="label-text text-base">Female</span>
            <input type="radio" name="gender" value="Female" className="radio radio-info" />
          </label>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-lg">Password</span>
          </label>
          <input type="password" placeholder="password" name="password" className="input input-bordered text-lg" required />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Add User</button>
        </div>
      </form>
    </div>
  )
}

export default AddUser
