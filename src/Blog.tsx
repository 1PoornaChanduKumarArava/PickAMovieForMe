import Footer from "./Components/Footer/Footer"
import Navbar from "./Components/Navbar/Navbar"

const Blog = () => {
  return (
    <>  
        <Navbar/>
        <div className='h-1255 text-center w-100 pt-5'>
            <h1 className="upper-case text-white fw-bold">BLOG</h1>
            <div className='w-80 bg-dark ml-5 white-border'>
                <div>
                    <div className='d-flex m-2'>
                        <img height={300} width={255} src='https://pickamovieforme.b-cdn.net/wp-content/uploads/2022/04/biggest-movies-of-2022-thumbnail.jpg'/>
                        <div className='text-white text-justify sans-serif m-3 text-justify'>
                            <h5 className='m-1 text-underline red-text'>MOVIE LISTS</h5>
                            <h2 className='m-1 red-color-hover fw-700'>The 20 Biggest Upcoming Movies of 2022</h2>
                            <p className='m-1'>After the lull of the past few years, cinemas are making a return this year, due in no small part to the massive list of upcoming movies in 2022. Whether it's an action-packed adventure, an intriguing tale of science fiction, or the next big Marvel movie, there are tons of new movies in 2022 to choose from. To help you plan your next movie-going excursion, I'm listing off the 20 biggest upcoming movies of 2022.</p>
                        </div>
                    </div>
                    <hr className='text-white fw-bolder m-1'></hr>
                    <div className='d-flex m-2'>
                        <img height={300} width={255} src='https://pickamovieforme.b-cdn.net/wp-content/uploads/2022/02/spiderman-no-way-home-featured.jpg'/>
                        <div className='text-white text-justify sans-serif m-3 text-justify'>
                            <h5 className='m-1 text-underline red-text'>MOVIE REVIEWS</h5>
                            <h2 className='m-1 red-color-hover fw-700'>'Free Guy' is a Must-See Movie for Every Gamer</h2>
                            <p className='m-1'>Generally speaking, movies based on video games are rarely worth checking out. From the massive 1993 flop 'Super Mario Bros' to modern disappointments like 2016’s 'Assassin’s Creed', most video game movies are critical and box office failures. Learn how 'Free Guy' breaks the mold of mediocrity and ends up as one of the best video game films ever made.</p>
                        </div>
                    </div>
                    <hr className='text-white fw-bolder m-1'></hr>
                    <div className='d-flex m-2'>
                        <img height={300} width={255} src='https://pickamovieforme.b-cdn.net/wp-content/uploads/2021/11/free-guy-image-featured.jpg'/>
                        <div className='text-white text-justify sans-serif m-3 text-justify'>
                            <h5 className='m-1 text-underline red-text fw-700'>MOVIE LISTS</h5>
                            <h2 className='m-1 red-color-hover'>Top 10 Date Night Movies</h2>
                            <p className='m-1'>Watching a movie and grabbing dinner is an all-time classic date night move, but it can be hard to find the right flick to appease both people. If you're preparing for a big date or just can't figure out the right flick for you and your beloved to watch, we've crafted a list of the top 10 date night movies to check out.</p>
                        </div>
                    </div>
                    <hr className='text-white fw-bolder m-1'></hr>
                    
                </div>                
            </div>
        </div> 
        <Footer/>
             
    </>
  )
}

export default Blog
