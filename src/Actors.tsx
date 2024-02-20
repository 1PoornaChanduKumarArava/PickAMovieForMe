import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { actorDetail } from './ActionCreators'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'

const Actors = () => {
    const store=useSelector((store:any)=>store)
    const allActors=store.actors
    const actorName=store.actorname
    const store1=allActors.filter((item: {Name: String })=>item.Name===actorName)
    const dispatch = useDispatch();
  return (
    <>
      <Navbar/>
      <div className="d-flex flex-row w-100 justify-content-center text-center">
        <div className="width-92">
          <div className="d-flex justify-content-center align-items-center text-center pt-5">
            <div>
                <h1 className="upper-case text-white fw-bold">THE BEST {actorName} MOVIES</h1>   
            </div>
          </div>
          <div className="text-center movie-container h-1600 pt-5">
              {
                store1.map((item:any)=>{
                  return(
                    
                      <Link to={'/actorDetails'} onClick={()=>{dispatch(actorDetail(item))}} className="movie-card p-1 decor-none">
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

export default Actors
