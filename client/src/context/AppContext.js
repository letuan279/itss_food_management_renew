import { createContext, useContext, useState } from "react";
import { message } from 'antd'
import { BACK_END_URL } from "./const.jsx";
import { useHistory } from "react-router-dom";

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [nhom, setNhom] = useState([])
    const [options, setOptions] = useState({
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json",
        },
    })

    const history = useHistory();

    const handleLogin = async (username, password) => {
        if (!username || !password) {
            message.warning("Chưa nhập đủ")
            return
        }

        try {
            const options = {
                method: "POST",
                mode: "cors",
                cache: "no-cache",
                credentials: "same-origin",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, password })
            }
            const res = await fetch(`${BACK_END_URL}/user/login`, options)
            const data = await res.json();

            if (data.success === false) {
                message.warning('Không tồn tại tài khoản')
                return
            }

            setUser(data.data);
            message.success('Đăng nhập thành công')
            localStorage.setItem('token-food', data.accessToken)
            setOptions(options => {
                return {
                    ...options,
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${data.accessToken}`
                    }
                }
            })
            history.push('/')
        } catch (error) {
            console.log(error.message);
            message.error(error.message)
        }
    }

    const handleRegister = async (name, username, password, confirmPassword) => {
        if (!username || !password || !name || !confirmPassword) {
            message.warning("Chưa nhập đủ")
            return
        }

        if (password !== confirmPassword) {
            message.warning("Mật khẩu không khớp với nhập lại mật khẩu!")
            return
        }

        try {
            const options = {
                method: "POST",
                mode: "cors",
                cache: "no-cache",
                credentials: "same-origin",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, password, name })
            }
            const res = await fetch(`${BACK_END_URL}/user/register`, options)
            const data = await res.json();

            if (data.success === false) {
                message.warning(data.message)
                return
            }

            setUser(data.data);
            message.success('Đăng ký thành công')
            localStorage.setItem('token-food', data.accessToken)
            setOptions(options => {
                return {
                    ...options,
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${data.accessToken}`
                    }
                }
            })
            history.push('/')
        } catch (error) {
            console.log(error.message);
            message.error(error.message)
        }
    }

    const fetchNhom = async () => {
        try {
            const res = await fetch(`${BACK_END_URL}group/${user.id}`, { ...options, method: 'get' })
            const data = await res.json();
            setNhom(data.data.filter(item => {
                const itemMemberIds = item.members.map(i => i.id)
                return itemMemberIds.includes(user.id)
            }));
        } catch (error) {
            console.log(error.message);
            message.error(error.message)
        }
    }



    return (
        <AppContext.Provider value={
            {
                user,
                setUser,
                handleLogin,
                handleRegister,
                fetchNhom,
                nhom,
                setNhom
            }
        }>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;
export const useData = () => {
    return useContext(AppContext);
}
