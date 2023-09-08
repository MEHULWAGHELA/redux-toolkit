import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, fetchdata } from '../store/slice/users'
import { getuserData } from '../action/action'

const First = () => {
    let state = useSelector((state) => state.users)
    let dispatch=useDispatch()
    useEffect(() => {
        console.log(state)
    }, [state])
    useEffect(() => {
        dispatch(getuserData())
    }, [])

    return (
        <div>
            First
        </div>
    )
}

export default First
