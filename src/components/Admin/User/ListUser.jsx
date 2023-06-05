import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const ListUser = () => {
  const [data,setData] = useState([])
  const fetchUser = async () => {
    try {
      const respsonse = await axios.get("http://localhost:3333/admin/getAllUser",{
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
    fetchUser()
  },[])
  const handleDeleteUser = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:3333/admin/deleteUser?id=${id}`,{
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
  const handleLockUser = async(id) => {
    try {
      const response = await axios.get(`http://localhost:3333/admin/lockUser?id=${id}`,{
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
          <h2 class="text-[25px] font-semibold">List User</h2>
        </div>
        <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div class="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
            <table class="min-w-full leading-normal">
              <thead>
                <tr>
                  <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-2xl font-semibold text-gray-700 uppercase tracking-wider">
                    Fulname
                  </th>
                  <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-2xl font-semibold text-gray-700 uppercase tracking-wider">
                    Username
                  </th>
                  <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-2xl font-semibold text-gray-700 uppercase tracking-wider">
                    Email
                  </th>
                  <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-2xl font-semibold text-gray-700 uppercase tracking-wider">
                    Phone
                  </th>
                  <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-2xl font-semibold text-gray-700 uppercase tracking-wider">
                    Address
                  </th>
                  <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-2xl font-semibold text-gray-700 uppercase tracking-wider">
                    Role
                  </th>
                  <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-2xl font-semibold text-gray-700 uppercase tracking-wider">
                    Status
                  </th>
                  <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100"></th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <tr key={item.id}>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-xl">
                      <p class="text-gray-900 whitespace-no-wrap">
                        {item.fullname}
                      </p>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-xl">
                      <p class="text-gray-900 whitespace-no-wrap">{item.username}</p>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-xl">
                      <p class="text-gray-900 whitespace-no-wrap">
                        {item.email}
                      </p>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-xl">
                      <p class="text-gray-900 whitespace-no-wrap">{item.phone}</p>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-xl">
                      <p class="text-gray-900 whitespace-no-wrap">{item.address}</p>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-xl">
                      <p class="text-gray-900 whitespace-no-wrap">{item.role}</p>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-xl">
                      <p class="text-gray-900 whitespace-no-wrap">{item.status}</p>
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
                            <Link to={`/admin/edituser/${item.id}`}>
                              <p>Sửa</p>
                            </Link>
                          </li>

                          <li onClick={() => handleDeleteUser(item.id)}>
                            <p>Xoá</p>
                          </li>
                          <li onClick={() => handleLockUser(item.id)}>
                            <p>Khóa tài khoản</p>
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

export default ListUser;
