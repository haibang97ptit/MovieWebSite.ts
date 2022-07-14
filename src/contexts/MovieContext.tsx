import { createContext, ReactNode, useState } from "react";
import { v4 as uuidv4} from 'uuid';
interface MovieContextProps{
    children : ReactNode
}
interface Movie{
    id: string,
    title : string
}
interface MovieContextDefault {
    movies : Movie[],
    addMovie : (title: string) => void,
    removeMovie : (id: string) => void,
}
const MovieContextDefaultData = {
    movies : [],
    addMovie : () => {},
    removeMovie : () => {}
}

export const MovieContex = createContext<MovieContextDefault>(MovieContextDefaultData)
const  MovieContextProvider = ({children} : MovieContextProps) =>{
    const [movies,setMovies] = useState<Movie[]>(MovieContextDefaultData.movies) 
    const addMovie = ( title : string) => setMovies([...movies,{ id : uuidv4(), title} ])
    const removeMovie = ( id: string ) => setMovies(movies.filter( movie => movie.id !== id))
    const movieContextData  = { movies , addMovie , removeMovie} 
    return <MovieContex.Provider value={movieContextData}>
        {children}
    </MovieContex.Provider>
}

export default MovieContextProvider