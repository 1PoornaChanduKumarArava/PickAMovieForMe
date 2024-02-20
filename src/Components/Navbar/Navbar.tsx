import axios from "axios"
import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { actorname, moviegenres, moviesdata, searchItem } from "../../ActionCreators"
import { Link, useNavigate } from "react-router-dom"



const Navbar = () => {
  const dispatch=useDispatch()
  const store=useSelector((state:any)=>state.movies)
  const [genres,setGenres]=useState<String>('animation')
  const Value=useRef<HTMLInputElement>(null);
  const [searchbar,setSearchBar]=useState(false);
  const navigate=useNavigate()
  
  useEffect(()=>{
    if(Value.current){
      Value.current.focus();
    }
  },[])
  
  useEffect(()=>{
    axios.get(`https://api.sampleapis.com/movies/${genres}`).then((response:any)=>{
      // console.log(response.data,"API")
      // const data=response.data
      // data.push({Name:genres})
      dispatch(moviesdata(response.data))
      dispatch(moviegenres(genres))
     
    })
  },[genres])

  console.log(store,"STORE")

  const handleSearchItem = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      const inputElement = event.target as HTMLInputElement;
      dispatch(searchItem(inputElement.value));
      inputElement.value = '';
      setSearchBar(false);
      navigate('/searchitem');
    }
  };
  
  

  const handleLogout = () =>{
    localStorage.removeItem('token');
    navigate('/loginpage');
  }
  
  

  return (
    <>
      <div className="border-bottom-white vh-10 w-100 m-0 p-0 bg-dark-trans d-flex justify-content-center">
        <div className="d-flex h-100 width-92 justify-content-between">
            <Link to={'/'}><img className="h-100 pointer" src="https://pickamovieforme.b-cdn.net/wp-content/uploads/2020/09/logo_c.png"/></Link>
            <div className="d-flex justify-content-center align-items-center">
                <Link to={'/'} className="text-white red-bottom decor-none font-family-open-sans pointer fs-14 ls-1 fw-bold">MOVIE PICKER</Link>&nbsp; &nbsp;
                <li className="text-white font-family-open-sans fs-14 ls-1 fw-bold">|&nbsp; &nbsp;</li>
                <div className="top-genres red-bottom pointer text-white font-family-open-sans fs-14 ls-1 fw-bold">TOP GENRES&nbsp;<i className="fa-solid fa-angle-down"></i>
                  <div className="genres-dropdown text-white position-absolute pt-5">
                    <li className="border-bottom-white-dropdown"></li>               
                    <li onClick={()=>{setGenres('animation')}} className="border-bottom-white-dropdown bg-red-hover p-1 pointer"><Link to={'/genres'} className="decor-none text-white" >Animation</Link> </li>                   
                    <li onClick={()=>{setGenres('classic')}} className="border-bottom-white-dropdown bg-red-hover p-1 pointer"><Link to={'/genres'} className="decor-none text-white" >Classic</Link> </li>                    
                    <li onClick={()=>{setGenres('comedy')}} className="border-bottom-white-dropdown bg-red-hover p-1 pointer"><Link to={'/genres'} className="decor-none text-white" >Comedy</Link> </li>                    
                    <li onClick={()=>{setGenres('drama')}} className="border-bottom-white-dropdown bg-red-hover p-1 pointer"><Link to={'/genres'} className="decor-none text-white" >Drama</Link> </li>                    
                    <li onClick={()=>{setGenres('horror')}} className="border-bottom-white-dropdown bg-red-hover p-1 pointer"><Link to={'/genres'} className="decor-none text-white" >Horror</Link> </li>                    
                    <li onClick={()=>{setGenres('family')}} className="border-bottom-white-dropdown bg-red-hover p-1 pointer"><Link to={'/genres'} className="decor-none text-white" >Family</Link> </li>                    
                    <li onClick={()=>{setGenres('mystery')}} className="border-bottom-white-dropdown bg-red-hover p-1 pointer"><Link to={'/genres'} className="decor-none text-white" >Mystery</Link> </li>
                    <li onClick={()=>{setGenres('western')}} className="border-bottom-white-dropdown bg-red-hover p-1 pointer"><Link to={'/genres'} className="decor-none text-white" >Western</Link> </li>
                  </div>
                </div>
                <li className="text-white font-family-open-sans fs-14 ls-1 fw-bold">&nbsp;&nbsp;|</li>&nbsp; &nbsp;&nbsp; &nbsp;
                <div className="top-actors red-bottom text-white pointer font-family-open-sans fs-14 ls-1 fw-bold">TOP ACTORS&nbsp;<i className="fa-solid fa-angle-down"></i>
                  <div className="actors-dropdown text-white position-absolute pt-5">
                    <li className="border-bottom-white-dropdown"></li>               
                    <li onClick={()=>{dispatch(actorname("Tom Hanks"))}} className="border-bottom-white-dropdown bg-red-hover p-1 pointer"><Link to={'/actors'} className="decor-none text-white" >Tom Hanks</Link> </li>                   
                    <li onClick={()=>{dispatch(actorname("Leonardo Decarpio"))}} className="border-bottom-white-dropdown bg-red-hover p-1 pointer"><Link to={'/actors'} className="decor-none text-white" >Leonardo Decaprio</Link> </li>                    
                    <li onClick={()=>{dispatch(actorname("Brad Pitt"))}} className="border-bottom-white-dropdown bg-red-hover p-1 pointer"><Link to={'/actors'} className="decor-none text-white" >Brad Pitt</Link> </li>                    
                    <li onClick={()=>{dispatch(actorname("Tom Cruise"))}} className="border-bottom-white-dropdown bg-red-hover p-1 pointer"><Link to={'/actors'} className="decor-none text-white" >Tom Crusie</Link> </li>                    
                    <li onClick={()=>{dispatch(actorname("Chris Evans"))}} className="border-bottom-white-dropdown bg-red-hover p-1 pointer"><Link to={'/actors'} className="decor-none text-white" >Chris Evans</Link> </li>                    
                  </div>
                </div>
                  <li className="text-white font-family-open-sans fs-14 ls-1 fw-bold">&nbsp;&nbsp;|</li>&nbsp; &nbsp;&nbsp; &nbsp;
                  <li className="text-white font-family-open-sans pointer fs-14 ls-1 fw-bold"><Link className="text-white decor-none" to={'/blog'}>BLOG</Link>&nbsp; &nbsp;&nbsp; &nbsp;</li>
                

                <div onClick={()=>{setSearchBar(!searchbar)}} className="search-bar">
                  <i className={`${searchbar ? 'white-border' : ''} fa-solid sp p-2 fs-14 fa-magnifying-glass text-white`}></i>&nbsp; &nbsp;&nbsp; &nbsp;
                </div>
                <div className={`${searchbar ? "display-block" : '' } search-dropdown top-border-white bg-transparent text-white position-absolute pt-2`}>
                    <input onKeyDown={handleSearchItem} ref={Value} className="white-border bg-dark-trans p-2 text-white" placeholder="Search" type="text"/>
                </div>


                <a target="_blank" href="https://www.facebook.com/PickAMovieForMeOfficial/"><i className="fa-brands fb fa-facebook fs-22 ls-1 blue-hover"></i></a>&nbsp; &nbsp;&nbsp; &nbsp;
                <a target="_blank" href='https://www.instagram.com/pickamovieforme/'><i className="fa-brands insta fa-instagram fs-22 ls-1 blue-hover"></i></a>&nbsp; &nbsp;&nbsp; &nbsp;
                <a target="_blank" href="https://www.youtube.com/channel/UCLLe8pZVF_BWnPp4-TPfsTQ"><i className="fa-brands youtube fa-youtube fs-22 ls-1 red-hover"></i></a>&nbsp; &nbsp;&nbsp; &nbsp;
                <li onClick={handleLogout} className="text-white font-family-open-sans pointer fs-14 ls-1 fw-bold text-white">LOGOUT&nbsp;<i className="fa-solid fa-arrow-right-from-bracket"></i></li>
            </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
