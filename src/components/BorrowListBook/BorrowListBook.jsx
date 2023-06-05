import { Button, Divider, Modal, Radio, Table } from "antd";
import { useEffect, useState } from "react";
import { useGlobalContext } from "../../context.";
import axios from "axios";
import { toast } from "react-toastify";

// rowSelection object indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  },
  getCheckboxProps: (record) => ({
    disabled: record.name === "Disabled User",
    // Column configuration not to be checked
    name: record.name,
  }),
};
const BorrowListBook = () => {
  const columns = [
    {
      title: "Tên sách",
      dataIndex: "title",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Tác giả",
      dataIndex: "author",
    },
    {
      title: "Ngày mượn",
      dataIndex: "dateStart",
    },
    {
      title: "Ngày trả",
      dataIndex: "dueDate",
    }
  ];
  const {user} = useGlobalContext()
  const [data,setData] = useState([])
  const [selectionType, setSelectionType] = useState("checkbox");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const fetchBorrowBooks = async () => {
    try {
      const id = localStorage.getItem("userId");
      const response = await axios.get(`http://localhost:3333/book/getBorrowBook?id=${id}`)
      if (response.status === 200) {
        setData(response.data.result)
      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchBorrowBooks()
  },[])
  return (
    <div>
      <Divider />

      <Table
        rowSelection={{
          type: selectionType,
          ...rowSelection,
        }}
        columns={columns}
        dataSource={data}
      />
    </div>
  );
};
export default BorrowListBook;
