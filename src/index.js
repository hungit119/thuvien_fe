import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter, Routes, Route
} from 'react-router-dom';
import { AppProvider } from './context.';
import './index.css';
import Home from './pages/Home/Home';
import About from "./pages/About/About";
import BookList from "./components/BookList/BookList";
import BookDetails from "./components/BookDetails/BookDetails";
import Login from './components/Auth/Login/Login';
import Register from './components/Auth/Register/Register';
import BorrowListBook from './components/BorrowListBook/BorrowListBook';
import AddBook from './components/Admin/Book/AddBook';
import ListBook from './components/Admin/Book/ListBook';
import AddUser from './components/Admin/User/AddUser';
import ListUser from './components/Admin/User/ListUser';
import EditBook from './components/Admin/Book/EditBook';
import EditUser from './components/Admin/User/EditUser';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import PhieuMuon from './components/Manage/PhieuMuon/PhieuMuon';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
  <AppProvider>
    <ToastContainer/>
      <Routes>
        <Route path = "/" element = {<Home />}>
          <Route path = "about" element = {<About />} />
          <Route path = "book" element = {<BookList />} />
          <Route path = "/book/:id" element = {<BookDetails />} />
          <Route path = "login" element = {<Login />} />
          <Route path = "register" element = {<Register />} />
          <Route path = "borrowlistbook" element = {<BorrowListBook />} />
          <Route path = "admin/addbook" element = {<AddBook />} />
          <Route path = "admin/editbook/:id" element = {<EditBook />} />
          <Route path = "admin/listbook" element = {<ListBook />} />
          <Route path = "admin/adduser" element = {<AddUser />} />
          <Route path = "admin/edituser/:id" element = {<EditUser />} />
          <Route path = "admin/listuser" element = {<ListUser />} />
          <Route path = "manage/phieumuon" element = {<PhieuMuon />} />

        </Route>
      </Routes>
  </AppProvider>
    </BrowserRouter>
);

