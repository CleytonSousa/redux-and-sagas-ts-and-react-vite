import { useEffect, useState } from 'react'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { getUserRequest } from '../redux/actions'
import { AppDispatch, RootState } from '../redux/store'
import {UserState} from "../redux/reducers/user"

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch = () => useDispatch<AppDispatch>()

export const App = () => {
  const dispatch = useAppDispatch()
  const userGlobalState:UserState  = useAppSelector(state => state.user) 
  const [name, setName] = useState("");

  const handleUser = () => {
    dispatch(getUserRequest(name))
  }

    console.log(userGlobalState)

  return (
    <div>
      <h1>User {userGlobalState.user?.message || userGlobalState.user?.name} </h1>
      <img src={userGlobalState.user?.avatar_url} alt={userGlobalState.user?.message || userGlobalState.user?.name} />
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <button disabled={!name} onClick={handleUser}>Request</button>
    </div>
  )
}