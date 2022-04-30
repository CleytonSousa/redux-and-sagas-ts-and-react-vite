import * as types from "../../types"

export type UserType = {
    name?: string
    avatar_url?: string
    message?: string
}

export function getUserRequest(parm:string):{
    type: string
    payload: string
} {
    return {
        type: types.GET_USER_REQUEST,
        payload: parm
    }
}

export function getUserSuccess(user: UserType):{
    type: string
    payload: UserType
} {
    return {
        type: types.GET_USER_SUCCESS,
        payload: user
    }
}

export function getUserFailure(user:UserType):{
    type: string
    payload: UserType
} {
    return {
        type: types.GET_USER_FAILURE,
        payload: user
    }
}