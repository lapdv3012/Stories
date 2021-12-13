import ActionType from './type'

const initialState = {
    token: 'undefined'
}

const userReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case ActionType.SET_USER_INFO:
            return {
                ...state,
                ...action.data
            }
        case ActionType.LOG_OUT:
            return {
                ...state,
                token: undefined
            }
        default:
            return state

    }
}

export default userReducer