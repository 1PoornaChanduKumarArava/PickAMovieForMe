import  {createBrowserRouter}  from "react-router-dom";
import Genres from "./Genres";
import App from "./App";
import HomePage from "./HomePage";
import GenreDetails from "./GenreDetails";
import MainQuesAnsw from "./Components/Main/MainQuestionAnswer";
import Actors from "./Actors";
import ActorDetails from "./ActorDetails";
import SearchItem from "./SearchItem";
import Blog from "./Blog";
import LoginPage from "./LoginPage";

const AppRoute = createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[
            {
                path:'/loginpage',
                element:<LoginPage/>
            },
            {
                path:'/',
                element:<HomePage/>
            },
            {
                path:'/genres',
                element:<Genres/>
            },
            {
                path:'/genresDetails',
                element:<GenreDetails/>
            },
            {
                path:'/mainQuesAnsw',
                element:<MainQuesAnsw/>
            },
            {
                path:'/actors',
                element:<Actors/>
            },
            {
                path:'/actorDetails',
                element:<ActorDetails/>
            },
            {
                path:'/searchitem',
                element:<SearchItem/>
            },
            {
                path:'/blog',
                element:<Blog/>
            }
        ]
    }
])

export default AppRoute