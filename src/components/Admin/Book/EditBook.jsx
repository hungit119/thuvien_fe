import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EditBook = () => {
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    publisher: "",
    author: "",
    price: 0,
    size: "",
    page: "",
    image: "",
    description: "",
  });

  const { id } = useParams();
  console.log(id);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:3333/book?id=${id}`,{
        newBook:{
          ...formData
        }
      },{
        headers: {
          Authorization: `Bearer ${localStorage.getItem("ACCESS_TOKEN")}`
        }
      })
      if (response.status === 200) {
        console.log(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const fetchDataOldBook = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3333/book/getBookById?id=${id}`
      );
      if (response.status === 200) {
        setFormData(response.data.result);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchDataOldBook();
  }, []);
  return (
    <div className="w-11/12 m-auto bg-gray-100 mt-8 mb-6 rounded-xl p-6">
      <div>
        <h1 className="text-center text-3xl font-bold mb-6">Thêm sách</h1>
        <hr />
      </div>
      <form onSubmit={handleSubmit} className="w-full m-auto mt-10">
        <div className="grid grid-cols-2 gap-10">
          <div>
            <label
              htmlFor="title"
              className="block mb-2 font-medium text-gray-600"
            >
              Title
            </label>
            <input
              onChange={handleChange}
              value={formData.title}
              name="title"
              type="text"
              id="title"
              placeholder="Type here..."
              className="input input-bordered input-lg w-full py-3 px-4 rounded-md border-gray-300 focus:border-blue-500 focus:outline-none transition-colors duration-300 focus:shadow-outline-blue"
            />
          </div>
          <div>
            <label
              htmlFor="author"
              className="block mb-2 font-medium text-gray-600"
            >
              Publisher
            </label>
            <input
              onChange={handleChange}
              value={formData.publisher}
              type="text"
              id="publisher"
              name="publisher"
              placeholder="Type here..."
              className="input input-bordered input-lg w-full py-3 px-4 rounded-md border-gray-300 focus:border-blue-500 focus:outline-none transition-colors duration-300 focus:shadow-outline-blue"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-10 mt-10">
          <div>
            <label
              htmlFor="author"
              className="block mb-2 font-medium text-gray-600"
            >
              Author
            </label>
            <input
              onChange={handleChange}
              value={formData.author}
              name="author"
              type="text"
              id="author"
              placeholder="Type here..."
              className="input input-bordered input-lg w-full py-3 px-4 rounded-md border-gray-300 focus:border-blue-500 focus:outline-none transition-colors duration-300 focus:shadow-outline-blue"
            />
          </div>
          <div>
            <label
              htmlFor="price"
              className="block mb-2 font-medium text-gray-600"
            >
              Price
            </label>
            <input
              onChange={handleChange}
              value={formData.price}
              type="number"
              name="price"
              id="price"
              placeholder="Type here..."
              className="input input-bordered input-lg w-full py-3 px-4 rounded-md border-gray-300 focus:border-blue-500 focus:outline-none transition-colors duration-300 focus:shadow-outline-blue"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-10 mt-10">
          <div>
            <label
              htmlFor="size"
              className="block mb-2 font-medium text-gray-600"
            >
              Size
            </label>
            <input
              onChange={handleChange}
              value={formData.size}
              name="size"
              type="text"
              id="size"
              placeholder="Type here..."
              className="input input-bordered input-lg w-full py-3 px-4 rounded-md border-gray-300 focus:border-blue-500 focus:outline-none transition-colors duration-300 focus:shadow-outline-blue"
            />
          </div>
          <div>
            <label
              htmlFor="page"
              className="block mb-2 font-medium text-gray-600"
            >
              Page
            </label>
            <input
              onChange={handleChange}
              value={formData.page}
              name="page"
              type="number"
              id="page"
              placeholder="Type here"
              className="input input-bordered input-lg w-full py-3 px-4 rounded-md border-gray-300 focus:border-blue-500 focus:outline-none transition-colors duration-300 focus:shadow-outline-blue"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-10 mt-10">
          <div>
            <label
              htmlFor="image"
              className="block mb-2 font-medium text-gray-600"
            >
              Image
            </label>
            <input
              onChange={handleChange}
              value={formData.image}
              name="image"
              id="image"
              placeholder="Type here"
              className="input input-bordered input-lg w-full py-3 px-4 rounded-md border-gray-300 focus:border-blue-500 focus:outline-none transition-colors duration-300 focus:shadow-outline-blue"
            />
          </div>
          <div>
            <label
              htmlFor="description"
              className="block mb-2 font-medium text-gray-600"
            >
              Description
            </label>
            <input
              onChange={handleChange}
              value={formData.description}
              name="description"
              type="text"
              id="description"
              placeholder="Type here"
              className="input input-bordered input-lg w-full py-3 px-4 rounded-md border-gray-300 focus:border-blue-500 focus:outline-none transition-colors duration-300 focus:shadow-outline-blue"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-10 mt-10 mb-10">
          <button class="rounded-lg px-4 py-2 bg-blue-500 text-blue-100 hover:bg-blue-600 duration-300">
            Cập nhật sách
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditBook;
