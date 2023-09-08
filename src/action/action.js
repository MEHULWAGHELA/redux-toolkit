import axios from "axios"
import { addUser } from "../store/slice/users"

export const getuserData = () => {
    return (dispatch) => {
        axios.get('https://student-api.mycodelibraries.com/api/student/get').then((res) => {
            dispatch(addUser(res.data.data))
        })
    }
}