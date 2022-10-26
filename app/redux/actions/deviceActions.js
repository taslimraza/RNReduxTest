import { ADD_DEVICE, DELETE_DEVICE, UPDATE_DEVICE } from "../constant"

export const addDeviceAction = (data) => {
    return {
        type: ADD_DEVICE,
        data
    }
}

export const updateDeviceAction = (data) => {
    return {
        type: UPDATE_DEVICE,
        data
    }
}

export const deleteDeviceAction = (data) => {
    return {
        type: DELETE_DEVICE,
        data
    }
}