import axios from 'axios';
import React, {useState, useContext, useEffect} from 'react';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
const URL = "http://localhost:3333/";
const AppContext = React.createContext();

const AppProvider = ({children}) => {
    const navigate = useNavigate()
    const [books, setBooks] = useState([]);
    const [searchTerm, setSearchTerm] = useState("the lost world");
    const [loading, setLoading] = useState(true);
    const [resultTitle, setResultTitle] = useState("");
    const [user,setUser] = useState({
        isLogin:false,
        info:{}
    })
    const loadUser = useCallback(async() => {
        try {
            setLoading(true);
            const response = await axios.get(`${URL}auth/`,{
                headers: {
                  Authorization: `Bearer ${localStorage.getItem("ACCESS_TOKEN")}`
                }})
            if (response.data.success === true) {
                toast.success("Load user success")
                setUser({
                    isLogin:true,
                    info:response.data.userInfo
                })
            }
            else{
                toast.error("Session expiry")
                setUser({
                    isLogin:false,
                    info:{}
                })
                navigate("/login")
            }
        } catch (error) {
            setLoading(false);
            toast.error("Session expiry")
                setUser({
                    isLogin:false,
                    info:{}
                })
            navigate("/login")
        }
    })

    const fetchBooks = useCallback(async() => {
        setLoading(true);
        try{
            const response = await fetch(`${URL}book`);
            const data = await response.json();
            const {result} = data;

            if(result){
                const newBooks = result.slice(0, 20).map((bookSingle) => {
                    const {id, author, image, description, page,price,publisher,size, title} = bookSingle;

                    return {
                        id,
                        author, 
                        image, 
                        description, 
                        page,
                        price,
                        publisher,
                        size, 
                        title
                    }
                });

                setBooks(newBooks);

                if(newBooks.length > 1){
                    setResultTitle("Kết quả tìm kiếm của bạn");
                } else {
                    setResultTitle("Không tìm thấy!")
                }
            } else {
                setBooks([]);
                setResultTitle("Không tìm thấy!");
            }
            setLoading(false);
        } catch(error){
            console.log(error);
            setLoading(false);
        }
    }, []);
    const searchBook = async () =>{
        try {
            const response = await axios.post("http://localhost:3333/book/searchBookByTitle",{
                keyword:searchTerm
            })
            if (response.data.success) {
                setBooks(response.data.result);
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        searchBook();
    },[searchTerm])

    useEffect(() => {
        fetchBooks();
    }, [fetchBooks]);

    useEffect(() => {
        loadUser();
    },[])

    return (
        <AppContext.Provider value = {{
            loading, books, resultTitle, setResultTitle,user,setUser,searchTerm, setSearchTerm
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export {AppContext, AppProvider};