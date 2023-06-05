import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "../Loader/Loader";
import coverImg from "../../images/cover_not_found.jpg";
import "./BookDetails.css";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Button, Space,Modal, Select, DatePicker } from "antd";
import axios from "axios";
import { useGlobalContext } from "../../context.";
import moment from 'moment';
import { toast } from "react-toastify";


const URL = "https://openlibrary.org/works/";

const BookDetails = () => {
  const {user} = useGlobalContext()
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [book, setBook] = useState(null);
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [thuthu,setThuthu] = useState([])
  const [thuthuId,setThuThuId] = useState("");
  const [dueDate,setDuedate] = useState("")
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    handleClickMuonSach()
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const getThuthu = async() => {
    try {
      const response = await axios.get(`http://localhost:3333/admin/getThuThu`)
      if (response.data) {
        setThuthu(response.data.result)
      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(()=>{
    getThuthu()
  },[])

  useEffect(() => {
    setLoading(true);
    async function getBookDetails() {
      try {
        const response = await axios.get(`http://localhost:3333/book/getBookById?id=${id}`)

        if (response.data.result) {
          const {
            id,
            title,
            publisher,
            author,
            price,
            size,
            page,
            image,
            description
          } = response.data.result;
          const newBook = {
            description: description
              ? description.value
              : "No description found",
            title: title,
            image: image,
            title: title
              ? title
              : "No title places found",
            publisher: publisher
              ? publisher
              : "No publisher times found",
            price:price ? price : "No price found",
          };
          setBook(newBook);
        } else {
          setBook(null);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    getBookDetails();
  }, [id]);
  const onChange = (date, dateString) => {
    const dateValue = moment(date).format('YYYY-MM-DD HH:mm:ss');
    setDuedate(dateValue);
  };
  const handleClickMuonSach = async () => {
    const data = {
      bookId:id, 
      thuthuId, 
      docGiaId:user.info.id, 
      dueDate
    }
    const response = await axios.post(`http://localhost:3333/book/borrowBook`,{
      ...data
    })
    if(response.status === 200){
      toast.success(response.data.message)
      navigate('/borrowlistbook')
    }
    else{
      toast.error("Lỗi mượn sách vui lòng thực hiện lại")
    }
  }
  const handleChange = (value) => {
    setThuThuId(value)
  };
  if (loading) return <Loading />;

  return (
    <section className="book-details">
      <div className="container">
        <button
          type="button"
          className="flex flex-c back-btn"
          onClick={() => navigate("/book")}
        >
          <FaArrowLeft size={22} />
          <span className="fs-18 fw-6">Go Back</span>
        </button>

        <div className="book-details-content grid">
          <div className="book-details-img">
            <img src={book?.image} alt="cover img" />
          </div>
          <div className="book-details-info">
            <div className="book-details-item title">
              <span className="fw-6 fs-24">{book?.title}</span>
            </div>
            <div className="book-details-item description">
              <span>{book?.description}</span>
            </div>
            <div className="book-details-item">
              <span className="fw-6">Title: </span>
              <span className="text-italic">{book?.title}</span>
            </div>
            <div className="book-details-item">
              <span className="fw-6">Publisher: </span>
              <span className="text-italic">{book?.publisher}</span>
            </div>
            <div className="book-details-item">
              <span className="fw-6">Price: </span>
              <span>{book?.price}</span>
            </div>
          </div>
        </div>
      <div className="buttonDetails">
        <Button size="large" block onClick={showModal}>
          Mượn Sách
        </Button>
        <Modal title="Mượn sách" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        Book title: {book?.title}
        <br/>
        Book price: {book?.price}
        <br/>
        Thủ Thư : <Select 
        style={{
          width: 120,
        }}
        onChange={handleChange}
        >
          {thuthu.map(tt => <option value={tt.id}>
            {tt.username}
          </option>)}
        </Select>
        <br></br>
        Ngày trả: <DatePicker onChange={onChange} />
      </Modal>
      </div>
      </div>
    </section>
  );
};

export default BookDetails;
