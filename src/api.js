import axios from "axios"

const API = "https://66aa44dc613eced4eba83e59.mockapi.io"
export const readuserdataapi = async () => {
    try {
        const response = await axios.get(`${API}/userdata`)
        if (response.status !== 200) {
            throw new Error("Error in getting data")
        }
        return response.data
    }
    catch (err) {
        throw (err.message)
    }
}
export const createuserdataapi = async (userdata) => {
    try {
        const response = await axios.post(`${API}/userdata`, userdata)
        return response.data
    }
    catch (err) {
        throw (err.message)
    }
}
export const deleteuserdataapi = async (id) => {
    try {
        const response = await axios.delete(`${API}/userdata/${id}`)
        return response.data
    }
    catch (err) {
        throw (err.message)
    }
}
export const updateuserdataapi = async (userdata, id) => {
    try {
        const response = await axios.put(`${API}/userdata/${id}`, userdata)
        return response.data
    }
    catch (err) {
        throw (err.message)
    }
}