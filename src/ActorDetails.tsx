import { useSelector } from 'react-redux'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'

const ActorDetails = () => {
    const movieDetail=useSelector((state:any)=>state.actorDetail)
    const movieDetail1=useSelector((state:any)=>state)
    console.log(movieDetail1,"ALL_STATE")
  return (
    <>
        <Navbar/>
        <div className="d-flex flex-row w-100 justify-content-center text-center">
            <div className="width-92">
                <div className="d-flex justify-content-center h-auto align-items-center text-center pt-5">
                    <div className='w-100'>
                    <h1 className="upper-case text-white fw-bold">THE BEST {movieDetail1.actorname} MOVIES</h1>  
                    <h1 className='text-white pb-3'>{movieDetail.title}</h1>
                        <div className='image-container h-30'>
                            <img height={455} src={movieDetail.posterURL}/><br></br>
                            <p className='text-white bg-secondary inline-block mt-1'>© 2012 Stephen J. Cannell Productions - All right reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        
    </>
  )
}

export default ActorDetails
