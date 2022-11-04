import server from "./request"


export const getMapData = () => {
    return server.get("/map")
}