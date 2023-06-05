import React, { useState } from "react";

const DefaultFormData = {
  username: "",
  password: "",
  role: 0,
  status: 0,
  fullname: "",
  phone: 0,
  address: "",
  email: "",
};

const AddUser = () => {
  const [formData, setFormData] = useState(DefaultFormData);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div className="w-11/12 m-auto bg-gray-100 mt-8 mb-6 rounded-xl p-6">
      <div>
        <h1 className="text-center text-3xl font-bold mb-6">Add Books</h1>
        <hr />
      </div>
      <form onSubmit={handleSubmit} className="w-full m-auto mt-10">
        <div className="grid grid-cols-2 gap-10">
          <div>
            <label
              htmlFor="fullname"
              className="block mb-2 font-medium text-gray-600"
            >
              Fullname
            </label>
            <input
              onChange={handleChange}
              value={formData.fullname}
              name="fullname"
              type="text"
              id="fullname"
              placeholder="Type here..."
              className="input input-bordered input-lg w-full py-3 px-4 rounded-md border-gray-300 focus:border-blue-500 focus:outline-none transition-colors duration-300 focus:shadow-outline-blue"
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block mb-2 font-medium text-gray-600"
            >
              Phone
            </label>
            <input
              onChange={handleChange}
              value={formData.phone}
              type="text"
              id="phone"
              name="phone"
              placeholder="Type here..."
              className="input input-bordered input-lg w-full py-3 px-4 rounded-md border-gray-300 focus:border-blue-500 focus:outline-none transition-colors duration-300 focus:shadow-outline-blue"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-10 mt-10">
          <div>
            <label
              htmlFor="username"
              className="block mb-2 font-medium text-gray-600"
            >
              Username
            </label>
            <input
              onChange={handleChange}
              value={formData.username}
              name="username"
              type="text"
              id="username"
              placeholder="Type here..."
              className="input input-bordered input-lg w-full py-3 px-4 rounded-md border-gray-300 focus:border-blue-500 focus:outline-none transition-colors duration-300 focus:shadow-outline-blue"
            />
          </div>
          <div>
            <label
              htmlFor="address"
              className="block mb-2 font-medium text-gray-600"
            >
              Address
            </label>
            <input
              onChange={handleChange}
              value={formData.address}
              type="text"
              name="address"
              id="address"
              placeholder="Type here..."
              className="input input-bordered input-lg w-full py-3 px-4 rounded-md border-gray-300 focus:border-blue-500 focus:outline-none transition-colors duration-300 focus:shadow-outline-blue"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-10 mt-10">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 font-medium text-gray-600"
            >
              Email
            </label>
            <input
              onChange={handleChange}
              value={formData.email}
              name="email"
              type="text"
              id="email"
              placeholder="Type here..."
              className="input input-bordered input-lg w-full py-3 px-4 rounded-md border-gray-300 focus:border-blue-500 focus:outline-none transition-colors duration-300 focus:shadow-outline-blue"
            />
          </div>
          <div>
            <label
              htmlFor="role"
              className="block mb-2 font-medium text-gray-600"
            >
              Role
            </label>
            <input
              onChange={handleChange}
              value={formData.role}
              name="role"
              type="number"
              id="role"
              placeholder="Type here"
              className="input input-bordered input-lg w-full py-3 px-4 rounded-md border-gray-300 focus:border-blue-500 focus:outline-none transition-colors duration-300 focus:shadow-outline-blue"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-10 mt-10">
          <div>
            <label
              htmlFor="password"
              className="block mb-2 font-medium text-gray-600"
            >
              Password
            </label>
            <input
              onChange={handleChange}
              value={formData.password}
              type="password"
              name="password"
              id="password"
              placeholder="Type here"
              className="input input-bordered input-lg w-full py-3 px-4 rounded-md border-gray-300 focus:border-blue-500 focus:outline-none transition-colors duration-300 focus:shadow-outline-blue"
            />
          </div>
          <div>
            <label
              htmlFor="status"
              className="block mb-2 font-medium text-gray-600"
            >
              Status
            </label>
            <input
              onChange={handleChange}
              value={formData.status}
              name="status"
              type="text"
              id="status"
              placeholder="Type here"
              className="input input-bordered input-lg w-full py-3 px-4 rounded-md border-gray-300 focus:border-blue-500 focus:outline-none transition-colors duration-300 focus:shadow-outline-blue"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-10 mt-10 mb-10">
          <button class="rounded-lg px-4 py-2 bg-blue-500 text-blue-100 hover:bg-blue-600 duration-300">
            Add User
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddUser;
