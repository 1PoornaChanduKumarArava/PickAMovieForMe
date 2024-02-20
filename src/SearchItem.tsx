import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { movieDetail } from './ActionCreators';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';

const SearchItem = () => {
    const store=useSelector((store:any)=>store);
    const searchItem=store.searchitem
    const actorsTitle=store.actors
    const store1=actorsTitle.filter((item:any)=>searchItem===item.Name)
    // console.log(store1,"FILTERED THINGS")
    const dispatch=useDispatch();
    // const genresArray= ['animation','classic','comedy','drama','horror','family','mystery','western']
    // const [genres,setGenres]=useState('')


  return (
    <>  
        <Navbar/>
        <div className="d-flex justify-content-center align-items-center text-center w-100 pt-5">
            <div className='w-100 text-center'>
                
                <h1 className="upper-case text-white fw-bold">{store1.length}&nbsp;SEARCH RESULTS FOUND</h1>
                <div className="p-1"><p className="text-white sans-serif fs-22">You Searched For : "{searchItem}"</p></div>
                
                {
                    store1.length!==0 ?

                    <div className="text-center movie-container h-1600 pt-5 pb-5">

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
                    :
                    <div className='h-495 w-80 text-center ml-5'>
                        <div className='text-center white-border p-2 pl-2 pr-2 w-100 bg-dark white-box-shadow w-100'>
                            <p className='text-white'>Sorry, but nothing matched your search terms. Please try again with different Actor Names.</p>
                        </div><br></br>
                        <img height={355} width={500} src='https://cdn.dribbble.com/users/1753953/screenshots/3818675/animasi-emptystate.gif'/>
                    </div>

                }
 
            </div>
        </div>
        <Footer/>
         
    </>
  )
}

export default SearchItem
