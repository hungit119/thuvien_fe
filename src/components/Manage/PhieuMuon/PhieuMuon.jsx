import { useEffect, useState } from "react";
import "./PhieuMuon.css";
import axios from "axios";
import { Button, Divider, Form, Input, Modal, Select, Table } from "antd";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const PhieuMuon = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [book, setBook] = useState({});
    const [docGiaId,setDocGiaId] = useState("")
    const [dataTra,setDataTra] = useState({
        status:"Good",
        fines:"0"
    })
  const showModal = (record) => {
    setBook(record)
    setIsModalOpen(true);
  };
  const handleOk = async () => {
    try {
        const data = {
            ...dataTra,
            thuthuId:localStorage.getItem("userId"),
            docGiaId:docGiaId,
            bookId:book.id,
            chitietphieumuonid:book.chitietphieumuonid
        }
        const response = await axios.post("http://localhost:3333/book/returnBook",{
            ...data
        })
        if (response.status === 200) {
            toast.success(response.data.message)
            setIsModalOpen(false);
            window.location.reload()
        }
    } catch (error) {
        console.log(error);
    }
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
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
  const [docGia, setDocGia] = useState([]);
  const [data, setData] = useState([]);
  const [selectionType, setSelectionType] = useState("checkbox");
  const [inputValue,setInputValue] = useState("")
  const fetchBorrowBooks = async (id) => {
    try {
      const response = await axios.get(
        `http://localhost:3333/book/getBorrowBook?id=${id}&thuthuId=${localStorage.getItem("userId")}`
      );
      if (response.status === 200) {
        setData(response.data.result);
      }
    } catch (error) {
      console.log(error);
    }
  };
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
    },
    {
      title: 'Action',
      dataIndex: '',
      key: 'x',
      render: (text, record) => (
        <Button danger
          onClick={() => showModal(record)}
        >
          Trả sách
        </Button>
      ),
    },
  ];
  const fetchDocGia = async () => {
    try {
      const response = await axios.get("http://localhost:3333/admin/getDocGia");
      setDocGia(response.data.result);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchDocGia();
  }, {});
  const handleOnchangeInput = (e) => {
    setInputValue(e.target.value)
  }
  useEffect(() => {
    const id = docGia.filter(doc => doc.username.includes(inputValue))[0]?.id
    setDocGiaId(id)
    fetchBorrowBooks(id)
  },[inputValue])
  const handleChangeStatus = (value) => {
    setDataTra({...dataTra,status:value})
  };
  const handleChangeFines = (value) => {
    setDataTra({...dataTra,fines:value})
  }
  return (
    <section className="booklist">
      <div className="container">
        <div className="section-title">
          <h2>Phiếu Mượn</h2>
        </div>
        <div className="">
          <Divider />
          <Input onChange={handleOnchangeInput} placeholder="Nhập tên độc giả"/>
          <Table
            rowSelection={{
              type: selectionType,
              ...rowSelection,
            }}
            columns={columns}
            dataSource={data}
          />
        </div>
      </div>
      <Modal title="Trả sách" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>Kiểm tra sách</p>
        <br>
        </br>
        Tình trạng sách:
        <br></br>
        <br></br>
        <Select
        onChange={handleChangeStatus}
        style={{
        width: 120,
      }}
      
      defaultValue={"Good"}>
            <option value={"Good"}>Good</option>
            <option value={"Not Good"}>Not Good</option>
            <option value={"Bad"}>Bad</option>
        </Select>
        <br></br>
        <br></br>
        Mức phạt:
        <br></br>
        <Select
        onChange={handleChangeFines}
        style={{
        width: 120,
      }}
      
      defaultValue={"0"}>
            <option value={"0"}>Nhắc nhở</option>
            <option value={"1"}>Khiển trách</option>
            <option value={"2"}>Khóa tài khoản</option>
        </Select>
        
      </Modal>
    </section>
  );
};

export default PhieuMuon;
