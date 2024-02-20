import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { feeling, moviegenres, moviesdata } from "../../ActionCreators"
import axios from "axios"
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"

const MainQuesAnsw = () => {
  const dispatch=useDispatch()
  const store1=useSelector((state:any)=>state.movies)
  // console.log(store1[0],"STORE1")

  // const randomNumber:number=Math.floor(Math.random()*store1.length)+1;


//   const [question1,setQuestion1]=useState(true)
  const [happy,setHappy]=useState(false)
  const [neutral,setNeutral]=useState(false)
  const [sad,setSad]=useState(false)

  const [question2,setQuestion2]=useState(false)
  const [q21,setQ21]=useState(false)
  const [q22,setQ22]=useState(false)
  const [q23,setQ23]=useState(false)
  const [q24,setQ24]=useState(false)
  const [q25,setQ25]=useState(false)

  const [question3,setQuestion3]=useState(false)
  const [q31,setQ31]=useState(false)
  const [q32,setQ32]=useState(false)
  const [q33,setQ33]=useState(false)
  const [q34,setQ34]=useState(false)
  const [q35,setQ35]=useState(false)
  const [q36,setQ36]=useState(false)
  const [q37,setQ37]=useState(false)
  const [q38,setQ38]=useState(false)

  const [question4,setQuestion4]=useState(false)
  const [q41,setQ41]=useState(false)
  const [q42,setQ42]=useState(false)
  const [q43,setQ43]=useState(false)
  const [q44,setQ44]=useState(false)
  const [q45,setQ45]=useState(false)

  const [question5,setQuestion5]=useState(false)
  const [q51,setQ51]=useState(false)
  const [q52,setQ52]=useState(false)

  const [question6,setQuestion6]=useState(false)
  const [q61,setQ61]=useState(false)
  const [q62,setQ62]=useState(false)
  const [q63,setQ63]=useState(false)
  const [q64,setQ64]=useState(false)
  const [q65,setQ65]=useState(false)
  const [q66,setQ66]=useState(false)
  const [q67,setQ67]=useState(false)
  const [q68,setQ68]=useState(false)
  const [q69,setQ69]=useState(false)
  const [q610,setQ610]=useState(false)
  const [q611,setQ611]=useState(false)
  const [q612,setQ612]=useState(false)
  const [q613,setQ613]=useState(false)

  const [question6_2,setQuestion6_2]=useState(false)

  const [genres,setGenres]=useState('animation');

//   const [popup,setPopUp]=useState(false);

  useEffect(()=>{
    axios.get(`https://api.sampleapis.com/movies/${genres}`).then((response:any)=>{
      // console.log(response.data,"API")
      // const data=response.data
      // data.push({Name:genres})
      dispatch(moviesdata(response.data))
      dispatch(moviegenres(genres))
    })
  },[genres])
  const [random,setRandom]=useState(0)

  const handleRandom = () =>{
    setRandom(Math.floor(Math.random()*store1.length)+1);
  }
  console.log(random,"RANDOM")
  
  return (
    <>  
      <Navbar/>
        <div className="main d-flex justify-content-center mt-100 vh-10 h-1255">
            
            {
              question2===false ? 

              <div className="question1 text-center">
                    <div className="white-border p-2 br-1">
                      <h3 className="text-white">1. How are you today?</h3>
                    </div>
                    <div className="text-center d-flex">
                        <div className={`happy mt-5 m-1 p-2 text-center white-border br-1 bg-red-hover ${happy && ' bg-red'}`} onClick={()=>{setHappy(true);setNeutral(false);setSad(false); dispatch(feeling('HAPPY'));}}>
                          <img src="https://pickamovieforme.b-cdn.net/wp-content/uploads/2020/09/happy.png"/>
                          <h5 className="text-white">Happy</h5>
                        </div>
                        <div className={`happy mt-5 m-1 p-2 text-center br-1 white-border bg-red-hover ${neutral &&  ' bg-red'}`} onClick={()=>{setNeutral(true);setHappy(false);setSad(false); dispatch(feeling('NEUTRAL'));}}>
                          <img src="https://pickamovieforme.b-cdn.net/wp-content/uploads/2020/09/neutral.png"/>
                          <h5 className="text-white">Neutral</h5>
                        </div>
                        <div className={`happy mt-5 m-1 p-2 text-center br-1 white-border bg-red-hover ${sad &&  ' bg-red'}`} onClick={()=>{setSad(true);setNeutral(false);setHappy(false); dispatch(feeling('SAD'));}}>
                          <img src="https://pickamovieforme.b-cdn.net/wp-content/uploads/2020/09/sad.png"/>
                          <h5 className="text-white">Sad</h5>
                        </div>
                    </div>
                    {
                      (happy || neutral || sad) &&
                        <button onClick={()=>{setQuestion2(true);}} className="border-red fw-bold text-white p-1 w-100 inline-block mt-2 p-3 br-1 bg-red">Next</button>
                    }
              </div>
            
              : question3===false?

              <div className="question2 text-center">
                <div className="white-border p-3 br-1 white-box-shadow">
                    <h3 className="text-white">2. What comes closet to your ocassion?</h3>
                </div>
                <div className="text-justify">
                    <h4 className={`text-white white-box-shadow mt-3 text-left bg-red-hover white-border p-2 m-1 br-1 ${q21 && ' bg-red'}`} onClick={()=>{setQ21(true); setQ22(false); setQ23(false); setQ24(false); setQ25(false); }}> {q21 ?  <i className="fa-regular fa-square-check"></i> :  <i className="fa-light fa-lg  br-2 fa-square text-white"></i> }  Just Watching a movie by Myself.</h4>
                    <h4 className={`text-white white-box-shadow mt-3 text-left bg-red-hover white-border p-2 m-1 br-1 ${q22 && ' bg-red'}`} onClick={()=>{setQ21(false); setQ22(true); setQ23(false); setQ24(false); setQ25(false); }}> {q22 ?  <i className="fa-regular fa-square-check"></i> :  <i className="fa-light fa-lg  br-2 fa-square text-white"></i> }  Movie Date.</h4>
                    <h4 className={`text-white white-box-shadow mt-3 text-left bg-red-hover white-border p-2 m-1 br-1 ${q23 && ' bg-red'}`} onClick={()=>{setQ21(false); setQ22(false); setQ23(true); setQ24(false); setQ25(false); }}> {q23 ?  <i className="fa-regular fa-square-check"></i> :  <i className="fa-light fa-lg  br-2 fa-square text-white"></i> }  Movie Night with Friends.</h4>
                    <h4 className={`text-white white-box-shadow mt-3 text-left bg-red-hover white-border p-2 m-1 br-1 ${q24 && ' bg-red'}`} onClick={()=>{setQ21(false); setQ22(false); setQ23(false); setQ24(true); setQ25(false); }}> {q24 ?  <i className="fa-regular fa-square-check"></i> :  <i className="fa-light fa-lg  br-2 fa-square text-white"></i> }  Date Night with boyfriend or girlfriend.</h4>
                    <h4 className={`text-white white-box-shadow mt-3 text-left bg-red-hover white-border p-2 m-1 br-1 ${q25 && ' bg-red'}`} onClick={()=>{setQ21(false); setQ22(false); setQ23(false); setQ24(false); setQ25(true); }}> {q25 ?  <i className="fa-regular fa-square-check"></i> :  <i className="fa-light fa-lg  br-2 fa-square text-white"></i> }  Watching a movie with Family or relatives.</h4>
                </div>
                <div className="text-left m-2"><button onClick={()=>{setQuestion2(false)}} className="bg-transparent border-transparent text-white"><i className="fa-solid fa-arrow-left text-white"></i> Back</button><br/></div>
                {
                      (q21 || q22 || q23 || q24 || q25) &&
                        <button onClick={()=>{setQuestion3(true)}} className="border-red fw-bold text-white w-100 inline-block mt-2 p-2 br-1 bg-red">Next</button>
                }
              </div>

              : question4===false?

              <div className="question3 text-center">
                <div className="white-border p-3 br-1 white-box-shadow">
                    <h3 className="text-white">3. Please Choose any genre you're interested in.</h3>
                </div>
                <div className="text-left p-1"><span className="color-gray">Multiple answers are possible</span></div>
                <div className="d-flex w-100">
                    <div className={`white-border w-50  text-center m-1 p-1  bg-red-hover white-box-shadow ${q31 ? ' bg-red' : "" }`} onClick={()=>{setQ31(!q31); setGenres('action');}}>
                        <h4 onClick={handleRandom} className="text-white">{q31 ?  <i className="fa-regular fa-square-check"></i> :  <i className="fa-light fa-lg  br-2 fa-square text-white"></i> }&nbsp;Action</h4>
                    </div>
                    <div className={`white-border w-50  text-center m-1 p-1  bg-red-hover white-box-shadow ${q32 ? ' bg-red' : "" }`} onClick={()=>{setQ32(!q32); setGenres('mystery')}}>
                        <h4 onClick={handleRandom} className="text-white">{q32 ?  <i className="fa-regular fa-square-check"></i> :  <i className="fa-light fa-lg  br-2 fa-square text-white"></i> }&nbsp;Mystery</h4>
                    </div>
                </div>
                <div className="d-flex w-100">
                    <div className={`white-border w-50 m-1 p-1  text-center bg-red-hover white-box-shadow ${q33 ? ' bg-red' : "" }`} onClick={()=>{setQ33(!q33); setGenres('classic')}}>
                        <h4 onClick={handleRandom} className="text-white">{q33 ?  <i className="fa-regular fa-square-check"></i> :  <i className="fa-light fa-lg  br-2 fa-square text-white"></i> }&nbsp;Classic</h4>
                    </div>
                    <div className={`white-border w-50 m-1 p-1  text-center bg-red-hover white-box-shadow ${q34 ? ' bg-red' : "" }`} onClick={()=>{setQ34(!q34); setGenres('comedy') }}>
                        <h4 onClick={handleRandom} className="text-white">{q34 ?  <i className="fa-regular fa-square-check"></i> :  <i className="fa-light fa-lg  br-2 fa-square text-white"></i> }&nbsp;Comedy</h4>
                    </div>
                </div>
                <div className="d-flex w-100">
                    <div className={`white-border w-50 m-1 p-1  text-center bg-red-hover white-box-shadow ${q35 ? ' bg-red' : "" }`} onClick={()=>{setQ35(!q35); setGenres('drama')}}>
                        <h4 onClick={handleRandom} className="text-white">{q35 ?  <i className="fa-regular fa-square-check"></i> :  <i className="fa-light fa-lg  br-2 fa-square text-white"></i> }&nbsp;Drama</h4>
                    </div>
                    <div className={`white-border w-50 m-1 p-1  text-center bg-red-hover white-box-shadow ${q36 ? ' bg-red' : "" }`} onClick={()=>{setQ36(!q36); setGenres('horror')}}>
                        <h4 onClick={handleRandom} className="text-white">{q36 ?  <i className="fa-regular fa-square-check"></i> :  <i className="fa-light fa-lg  br-2 fa-square text-white"></i> }&nbsp;Horror</h4>
                    </div>
                </div>
                <div className="d-flex w-100">
                    <div className={`white-border w-50 m-1 p-1  text-center bg-red-hover white-box-shadow ${q37 ? ' bg-red' : "" }`} onClick={()=>{setQ37(!q37); setGenres('family')}}>
                        <h4 onClick={handleRandom} className="text-white">{q37 ?  <i className="fa-regular fa-square-check"></i> :  <i className="fa-light fa-lg  br-2 fa-square text-white"></i> }&nbsp;Family</h4>
                    </div>
                    <div className={`white-border w-50 m-1 p-1 text-center bg-red-hover white-box-shadow ${q38 ? ' bg-red' : "" }`} onClick={()=>{setQ38(!q38); setGenres('western')}}>
                        <h4 onClick={handleRandom} className="text-white">{q38 ?  <i className="fa-regular fa-square-check"></i> :  <i className="fa-light fa-lg  br-2 fa-square text-white"></i> }&nbsp;Western</h4>
                    </div>
                </div>
                <div className="text-left m-2"><button onClick={()=>{setQuestion3(false)}} className="bg-transparent border-transparent text-white"><i className="fa-solid fa-arrow-left text-white"></i> Back</button><br/></div>
                {
                  (q31 || q32 || q33 || q34 || q35 || q36 || q37 ||q38) && <button onClick={()=>{setQuestion4(true);setQuestion5(false);}} className="border-red fw-bold text-white w-100 inline-block mt-2 p-2 br-1 bg-red">Next</button>
                }
              </div>

              :question5===false?

              <div className="question4 text-center">
                  <div className="white-border p-3 br-1 white-box-shadow">
                    <h3 className="text-white">4. How old would you like to movie be?</h3>
                  </div>
                  <div className="text-justify">
                    <h4 className={`text-white white-box-shadow mt-3 text-left bg-red-hover white-border p-2 m-1 br-1 ${q41 && ' bg-red'}`} onClick={()=>{setQ41(true); setQ42(false); setQ43(false); setQ44(false); setQ45(false); }}> {q41 ?  <i className="fa-regular fa-square-check"></i> :  <i className="fa-light fa-lg  br-2 fa-square text-white"></i> }  Doesn't Matter.</h4>
                    <h4 className={`text-white white-box-shadow mt-3 text-left bg-red-hover white-border p-2 m-1 br-1 ${q42 && ' bg-red'}`} onClick={()=>{setQ41(false); setQ42(true); setQ43(false); setQ44(false); setQ45(false); }}> {q42 ?  <i className="fa-regular fa-square-check"></i> :  <i className="fa-light fa-lg  br-2 fa-square text-white"></i> }  Published in the last 3 years.</h4>
                    <h4 className={`text-white white-box-shadow mt-3 text-left bg-red-hover white-border p-2 m-1 br-1 ${q43 && ' bg-red'}`} onClick={()=>{setQ41(false); setQ42(false); setQ43(true); setQ44(false); setQ45(false); }}> {q43 ?  <i className="fa-regular fa-square-check"></i> :  <i className="fa-light fa-lg  br-2 fa-square text-white"></i> }  Published in the last 5 years.</h4>
                    <h4 className={`text-white white-box-shadow mt-3 text-left bg-red-hover white-border p-2 m-1 br-1 ${q44 && ' bg-red'}`} onClick={()=>{setQ41(false); setQ42(false); setQ43(false); setQ44(true); setQ45(false); }}> {q44 ?  <i className="fa-regular fa-square-check"></i> :  <i className="fa-light fa-lg  br-2 fa-square text-white"></i> }  Published in the last 10 years.</h4>
                    <h4 className={`text-white white-box-shadow mt-3 text-left bg-red-hover white-border p-2 m-1 br-1 ${q45 && ' bg-red'}`} onClick={()=>{setQ41(false); setQ42(false); setQ43(false); setQ44(false); setQ45(true); }}> {q45 ?  <i className="fa-regular fa-square-check"></i> :  <i className="fa-light fa-lg  br-2 fa-square text-white"></i> }  Published in the last 20 years.</h4>
                  </div>
                  <div className="text-left m-2"><button onClick={()=>{setQuestion4(false)}} className="bg-transparent border-transparent text-white"><i className="fa-solid fa-arrow-left text-white"></i> Back</button><br/></div>
                  {
                      (q41 || q42 || q43 || q44 || q45) &&
                        <button onClick={()=>{setQuestion5(true);}} className="border-red fw-bold text-white w-100 inline-block mt-2 p-2 br-1 bg-red">Next</button>
                  }
              </div>
              
              : question6===false?

              <div className="question5 text-center w-45">
                  <div className="white-border p-3 br-1 white-box-shadow">
                    <h3 className="text-white">5. Is the age-appropriateness rating of the movie important to you?</h3>
                  </div>
                  <div className="text-left p-1"><span className="color-gray">For example if you want only R-rated movies to show.</span></div>
                  <div className="text-justify">
                    <h4 className={`text-white white-box-shadow mt-3 text-left bg-red-hover white-border p-2 m-1 br-1 ${q51 && ' bg-red'}`} onClick={()=>{setQ51(true); setQ52(false);  setQuestion6_2(true);}}> {q51 ?  <i className="fa-regular fa-square-check"></i> :  <i className="fa-light fa-lg  br-2 fa-square text-white"></i> }  Yes, I would like to choose the ratings that I'm okay with.</h4>
                    <h4 className={`text-white white-box-shadow mt-3 text-left bg-red-hover white-border p-2 m-1 br-1 ${q52 && ' bg-red'}`} onClick={()=>{setQ51(false); setQ52(true);}}> {q52 ?  <i className="fa-regular fa-square-check"></i> :  <i className="fa-light fa-lg  br-2 fa-square text-white"></i> }  No, it doesn't matter.</h4>
                  </div>
                  <div className="text-left m-2"><button onClick={()=>{setQuestion5(false)}} className="bg-transparent border-transparent text-white"><i className="fa-solid fa-arrow-left text-white"></i> Back</button><br/></div>
                  {
                      (q51 || q52) &&
                        <button onClick={()=>{setQuestion6(true); setQuestion6_2(false)}} className="border-red fw-bold text-white w-100 inline-block mt-2 p-2 br-1 bg-red">Next</button>
                  }

              </div>

              :question6_2===false?

              <div className="question6 text-center w-35 h-900 mb-3">
                  <div className="white-border p-3 br-1 white-box-shadow">
                    <h3 className="text-white">6. Please select any other category you're interested in.</h3>
                  </div>
                  <div className="text-left p-1"><span className="color-gray">You can put anything without the risk of getting no results. If there are no matches, this question will be ignored.</span></div>
                  
                  <div className="text-center w-100">
                    <h4 className={`text-white white-box-shadow mt-3 text-left bg-red-hover white-border p-2 m-1 br-1 ${q61 && ' bg-red'}`} onClick={()=>{setQ61(!q61)}}>{q61 ?  <i className="fa-regular fa-square-check"></i> :  <i className="fa-light fa-lg  br-2 fa-square text-white"></i> }&nbsp;IMDB Top 250 Movies</h4>
                    <h4 className={`text-white white-box-shadow mt-3 text-left bg-red-hover white-border p-2 m-1 br-1 ${q62 && ' bg-red'}`} onClick={()=>{setQ62(!q62)}}>{q62 ?  <i className="fa-regular fa-square-check"></i> :  <i className="fa-light fa-lg  br-2 fa-square text-white"></i> }&nbsp;Movies with pre- or sequels</h4>
                    <h4 className={`text-white white-box-shadow mt-3 text-left bg-red-hover white-border p-2 m-1 br-1 ${q63 && ' bg-red'}`} onClick={()=>{setQ63(!q63)}}>{q63 ?  <i className="fa-regular fa-square-check"></i> :  <i className="fa-light fa-lg  br-2 fa-square text-white"></i> }&nbsp;Movies set in Las Vegas</h4>
                    <h4 className={`text-white white-box-shadow mt-3 text-left bg-red-hover white-border p-2 m-1 br-1 ${q64 && ' bg-red'}`} onClick={()=>{setQ64(!q64)}}>{q64 ?  <i className="fa-regular fa-square-check"></i> :  <i className="fa-light fa-lg  br-2 fa-square text-white"></i> }&nbsp;I don't have a preference.</h4>
                    <h4 className={`text-white white-box-shadow mt-3 text-left bg-red-hover white-border p-2 m-1 br-1 ${q65 && ' bg-red'}`} onClick={()=>{setQ65(!q65)}}>{q65 ?  <i className="fa-regular fa-square-check"></i> :  <i className="fa-light fa-lg  br-2 fa-square text-white"></i> }&nbsp;Movies based on a true story</h4>
                    <h4 className={`text-white white-box-shadow mt-3 text-left bg-red-hover white-border p-2 m-1 br-1 ${q66 && ' bg-red'}`} onClick={()=>{setQ66(!q66)}}>{q66 ?  <i className="fa-regular fa-square-check"></i> :  <i className="fa-light fa-lg  br-2 fa-square text-white"></i> }&nbsp;Movies that may change the way you look at life</h4>
                    <h4 className={`text-white white-box-shadow mt-3 text-left bg-red-hover white-border p-2 m-1 br-1 ${q67 && ' bg-red'}`} onClick={()=>{setQ67(!q67)}}>{q67 ?  <i className="fa-regular fa-square-check"></i> :  <i className="fa-light fa-lg  br-2 fa-square text-white"></i> }&nbsp;Movies set in New York City</h4>
                    <h4 className={`text-white white-box-shadow mt-3 text-left bg-red-hover white-border p-2 m-1 br-1 ${q68 && ' bg-red'}`} onClick={()=>{setQ68(!q68)}}>{q68 ?  <i className="fa-regular fa-square-check"></i> :  <i className="fa-light fa-lg  br-2 fa-square text-white"></i> }&nbsp;Spy Movies and Cop Movies</h4>
                    <h4 className={`text-white white-box-shadow mt-3 text-left bg-red-hover white-border p-2 m-1 br-1 ${q69 && ' bg-red'}`} onClick={()=>{setQ69(!q69)}}>{q69 ?  <i className="fa-regular fa-square-check"></i> :  <i className="fa-light fa-lg  br-2 fa-square text-white"></i> }&nbsp;Space Movies</h4>
                    <h4 className={`text-white white-box-shadow mt-3 text-left bg-red-hover white-border p-2 m-1 br-1 ${q610 && ' bg-red'}`} onClick={()=>{setQ610(!q610)}}>{q610 ?  <i className="fa-regular fa-square-check"></i> :  <i className="fa-light fa-lg  br-2 fa-square text-white"></i> }&nbsp;Wedding Movies</h4>
                    <h4 className={`text-white white-box-shadow mt-3 text-left bg-red-hover white-border p-2 m-1 br-1 ${q611 && ' bg-red'}`} onClick={()=>{setQ611(!q611)}}>{q611 ?  <i className="fa-regular fa-square-check"></i> :  <i className="fa-light fa-lg  br-2 fa-square text-white"></i> }&nbsp;Heist Movies</h4>
                    <h4 className={`text-white white-box-shadow mt-3 text-left bg-red-hover white-border p-2 m-1 br-1 ${q612 && ' bg-red'}`} onClick={()=>{setQ612(!q612)}}>{q612 ?  <i className="fa-regular fa-square-check"></i> :  <i className="fa-light fa-lg  br-2 fa-square text-white"></i> }&nbsp;Racing Movies</h4>
                    <h4 className={`text-white white-box-shadow mt-3 text-left bg-red-hover white-border p-2 m-1 br-1 ${q613 && ' bg-red'}`} onClick={()=>{setQ613(!q613)}}>{q613 ?  <i className="fa-regular fa-square-check"></i> :  <i className="fa-light fa-lg  br-2 fa-square text-white"></i> }&nbsp;Movies with pre- or sequels</h4>
                  </div>

                  <div className="text-left m-2"><button onClick={()=>{setQuestion6(false);}} className="bg-transparent border-transparent text-white"><i className="fa-solid fa-arrow-left text-white"></i> Back</button><br/></div>
                  {
                      (q61 || q62 || q63 || q64 || q65 || q66 || q67 || q68 || q69 || q610 || q611 || q612 || q613) &&
                        <button onClick={()=>{setQuestion6_2(true);}} className="border-red fw-bold text-white w-100 inline-block mt-2 p-2 br-1 bg-red">Check Results</button>
                  }
              </div>


              :

              <div className="final-answer text-center movie-container h-495 w-665 pt-5 ">  
                <div className="movie-card p-1 decor-none white-border white-box-shadow">
                  <div className="text-center w-100">
                    <li className="text-white text-left fw-bold p-2">Recommended For You</li>
                    <div className="d-flex text-center">
                      <img className="white-border m-1" height={155} width={115} src={store1[random].posterURL} />
                      <div className="m-1 text-left">
                        <p className="text-white fw-bolder  text-underline">{store1[random].title}</p>
                        <li className="text-white text-justify">After accidentally crash-landing in 2022, time-traveling fighter pilot Adam Reed teams up with his 12-year-old self on a mission to save the future.</li>
                      </div>
                    </div>
                    <div className="d-flex m-1 w-95">
                      <a className="decor-none w-20" href="https://www.youtube.com/watch?v=5P8R2zAhEwg" target="_blank"><button className="bg-red text-white border-red p-2  m-1 br-1 bg-black-hover"><i className="fa-solid fa-sm fa-film"></i>&nbsp;TRAILER</button> </a>
                      <a className="decor-none w-80" target="_blank" href="https://www.google.com/search?q=Spenser+Confidential+%28only+on+Netflix%29+movie"> <button  className="bg-red text-white border-red p-2 m-1 br-1 w-100 bg-black-hover"><i className="fa-solid fa-sm fa-magnifying-glass"></i>&nbsp;SEARCH ON GOOGLE</button> </a>
                    </div> 
                    <div className="text-center m-1 w-95">
                      <button onClick={handleRandom} className="bg-red text-white border-red p-2 m-1 w-100 br-1 bg-black-hover"><i className="fa-solid fa-sm fa-repeat"></i>&nbsp;GET ANOTHER RECOMMENDATION</button>  
                    </div>   
                    <hr className="text-white p-2"></hr>    
                    <a className="color-white red-color-hover p-2 br-1 decor-none" href="https://www.buymeacoffee.com/pickamovieforme" target="_blank">If you find this website useful, feel free to buty me a coffee <span className="text-underline">here</span> <i className="red-color-hover color-white fa-solid fa-mug-hot"></i> </a>       
                    
                  </div>
                </div>
              </div>

            }

        </div>
      <Footer/>
       
    </>
  )
}

export default MainQuesAnsw;
