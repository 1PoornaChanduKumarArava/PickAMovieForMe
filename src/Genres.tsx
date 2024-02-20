import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { movieDetail } from "./ActionCreators"
import Navbar from "./Components/Navbar/Navbar"
import Footer from "./Components/Footer/Footer"

const Genres = () => {
  const store1=useSelector((state:any)=>state.movies)
  const nameStore=useSelector((state:any)=>state.name)
  const dispatch=useDispatch()

  console.log(store1,"API_DATA")
  return (
    <>
      <Navbar/>
      <div className="d-flex flex-row w-100 justify-content-center text-center">
        <div className="width-92">
          <div className="d-flex justify-content-center align-items-center text-center pt-5">
            <div>
                <h1 className="upper-case text-white fw-bold">THE BEST {nameStore} MOVIES</h1>   
                <h5 className="text-white fw-bold pt-2">Can't decide? Use the <span className="text-underline red-color-hover underline-dashed">Movie Picker !</span></h5> 
            </div>
          </div>
          <div className="text-center movie-container h-1600 pt-5">
              {
                store1.map((item:any)=>{
                  return(
                    
                      <Link to={'/genresDetails'} onClick={()=>{dispatch(movieDetail(item))}} className="movie-card p-1 decor-none">
                        <div className="text-center">
                          <img className="white-border" height={300} width={200} src={item.posterURL} />
                          <p className="text-white fw-bolder text-center">{item.title}</p>
                        </div>
                      </Link>
                    
                  )
                })
              }
          </div>
        </div>
      </div>
      <Footer/> 
      
    </>

  )
}

export default Genres
