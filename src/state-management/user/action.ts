import ActionType from "./type";

export const setUserInfo = (data: any) => ({
    type: ActionType.SET_USER_INFO,
    data
})

export const logout = () => ({
    type: ActionType.LOG_OUT,
})