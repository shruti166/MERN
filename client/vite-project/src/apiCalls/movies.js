import { axiosInstance } from "."

export const getAllMovies  = async() => {
    try {
        const res = await axiosInstance.get("http://localhost:3000/api/movies/get-movies");
        return res.data;
    } catch (err) {
        console.log(err)
    }

}