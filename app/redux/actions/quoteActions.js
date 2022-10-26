import { GET_QUOTE, CLEAR_QUOTE } from "../constant"

export const getQuoteAction = () => {
    return {
        type: GET_QUOTE
    }
}

export const clearQuoteAction = () => {
    return {
        type: CLEAR_QUOTE
    }
}