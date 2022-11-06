import axios from "axios";

const server = axios.create({
    baseURL: "http://www.aleo.lol:9732/api",

})

server.interceptors.request.use((res => {
    return res
}))


server.interceptors.response.use((response) => {
    return response.data
})

export default server
