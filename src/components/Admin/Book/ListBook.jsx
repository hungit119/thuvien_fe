import { Button } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ListBook = () => {
  const navigate = useNavigate()
  const [data,setData] = useState([])
  const fetchBook = async () => {
    try {
      const respsonse = await axios.get("http://localhost:3333/book",{
        headers: {
          Authorization: `Bearer ${localStorage.getItem("ACCESS_TOKEN")}`
        }
      })
      if (respsonse.status === 200) {
        setData(respsonse.data.result)
      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchBook()
  },[])
  // const data = [
  //   {
  //     id: 1,
  //     title: "Molly Sanders",
  //     publisher: "No",
  //     author: "Thiều Trần Cương",
  //     price: "20,000",
  //     size: "20",
  //     page: "20",
  //     description: "Ok",
  //   },
  //   {
  //     id: 2,
  //     title: "Molly Sanders",
  //     publisher: "No",
  //     author: "Thiều Trần Cương",
  //     price: "20,000",
  //     size: "20",
  //     page: "20",
  //     description: "Ok",
  //   },
  //   {
  //     id: 3,
  //     title: "Molly Sanders",
  //     publisher: "No",
  //     author: "Thiều Trần Cương",
  //     price: "20,000",
  //     size: "20",
  //     page: "20",
  //     description: "Ok",
  //   },
  // ];
  const handleDeleteBook = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:3333/book?id=${id}`,{
        headers: {
          Authorization: `Bearer ${localStorage.getItem("ACCESS_TOKEN")}`
        }
      })
      if (response.status === 200) {
        toast.success(response.data.message);
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div class="container mx-auto px-4 sm:px-8">
      <div class="py-8">
        <div>
          <h2 class="text-[25px] font-semibold">
            Danh sách sách trên thư viện
          </h2>
          <Link to={"/admin/addbook"}>Thêm sách</Link>
        </div>
        <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div class="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
            <table class="min-w-full leading-normal">
              <thead>
                <tr>
                  <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-2xl font-semibold text-gray-700 uppercase tracking-wider">
                    Title
                  </th>
                  <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-2xl font-semibold text-gray-700 uppercase tracking-wider">
                    Publisher
                  </th>
                  <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-2xl font-semibold text-gray-700 uppercase tracking-wider">
                    Author
                  </th>
                  <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-2xl font-semibold text-gray-700 uppercase tracking-wider">
                    Price
                  </th>
                  <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-2xl font-semibold text-gray-700 uppercase tracking-wider">
                    Size
                  </th>
                  <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-2xl font-semibold text-gray-700 uppercase tracking-wider">
                    Page
                  </th>
                  <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-2xl font-semibold text-gray-700 uppercase tracking-wider">
                    Description
                  </th>
                  <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100"></th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <tr key={item.id}>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-xl">
                      <div class="flex">
                        <div class="flex-shrink-0 w-10 h-10">
                          <img
                            class="w-full h-full rounded-full"
                            src="https://jobsgo.vn/blog/wp-content/uploads/2022/05/sach-hay-ve-tu-duy-phan-bien-2.jpg"
                            alt=""
                          />
                        </div>
                        <div class="ml-3">
                          <p class="text-gray-900 whitespace-no-wrap">
                            {item.title}
                          </p>
                          <p class="text-gray-600 whitespace-no-wrap">{item.id}</p>
                        </div>
                      </div>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-xl">
                      <p class="text-gray-900 whitespace-no-wrap">{item.publisher}</p>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-xl">
                      <p class="text-gray-900 whitespace-no-wrap">
                        {item.author}
                      </p>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-xl">
                      <p class="text-gray-900 whitespace-no-wrap">{item.price}</p>
                      <p class="text-gray-600 whitespace-no-wrap">USD</p>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-xl">
                      <p class="text-gray-900 whitespace-no-wrap">{item.size}</p>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-xl">
                      <p class="text-gray-900 whitespace-no-wrap">{item.page}</p>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-xl">
                      <p class="text-gray-900 whitespace-no-wrap">{item.description}</p>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-xl text-right">
                      <div class="dropdown dropdown-left dropdown-end">
                        <label tabindex="0" class="btn m-1 btn-outline">
                          ...
                        </label>
                        <ul
                          tabindex="0"
                          class="dropdown-content text-lg menu p-2 shadow bg-base-100 rounded-box w-52"
                          v-if="isOpen"
                        >
                          <li>
                            {/* <p>Sửa</p> */}
                            <Link to={`/admin/editbook/${item.id}`}>
                              <p>Sửa</p>
                            </Link>
                          </li>
                          <li onClick={() => handleDeleteBook(item.id)}>
                            <p>Xoá</p>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListBook;
