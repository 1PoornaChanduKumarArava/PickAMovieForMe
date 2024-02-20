import { Link } from "react-router-dom"

const Main = () => {
    
  return (
    <>  
        <div className="main d-flex justify-content-center mt-100 vh-10 h-1255">          
            <div className="description text-center">
                <h1 className="text-white text-shadow-white fw-700 fs-50">MOVIE RECOMMENDATION ENGINE</h1>
                <p className="text-white fs-24 sans-serif">You can't decide between thousands of movies available for streaming?</p>
                <p className="text-white fs-24 sans-serif">Answer 6 questions and let us do the work!</p>
                <Link to={'/mainQuesAnsw'} className="start-btn decor-none">Start Now</Link>
            </div> 
        </div>  
  
    </>
  )
}

export default Main
