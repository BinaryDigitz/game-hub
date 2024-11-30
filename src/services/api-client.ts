import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "ccb516150bd34aed9bc5ed5760a9df0f"
    }
})

export const data = {
    baseURL: "https://api.rawg.io/api",
    endpoint : "/games",
    params: {
        key:"ccb516150bd34aed9bc5ed5760a9df0f"
    }
}