import Dateandtime from "./Dateandtime";
import MovieCard from "./MovieCard";
function MovieGrid()
{
    const movies=[
        {id:1,name:"salaar",coll:5000},
        {id:2,name:"saahoo",coll:7000},
        {id:3,name:"kalki",coll:9000},
        {id:4,name:"don",coll:500},
        {id:5,name:"bahubali",coll:10000}
    ];
    const movielist=movies.map(movie=>
        <li key={movie.id}>name:{movie.name},collection:{movie.coll}</li>)
    
    return(
        <>
        <MovieCard m={movielist}/>
        <Date/>
        <Dateandtime/>
        </>
    )
}
export default MovieGrid;