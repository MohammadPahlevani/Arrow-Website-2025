import Index from "./Pages/Index/Index"
import AboutUs from "./Pages/AboutUs/AboutUs"
import OurServices from "./Pages/OurServices/OurServices"
import OurFeatures from "./Pages/OurFeatures/OurFeatures"
import OurSkills from "./Pages/OurSkills/OurSkills"
import OurPortfolio from "./Pages/OurPortfolio/OurPortfolio"
import OurAchievements from "./Pages/OurAchievements/OurAchievements"
import OurPrices from "./Pages/OurPrices/OurPrices"
import Introduction from "./Pages/Introduction/Introduction"
import Advantages from "./Pages/Advantages/Advantages"
import OurTeam from "./Pages/OurTeam/OurTeam"
import OurBlog from "./Pages/OurBlog/OurBlog"
import ContactUs from "./Pages/ContactUs/ContactUs"


const routes = [
    {path:'/', element:<Index/>},
    {path:'/about', element:<AboutUs/>},
    {path:'/services', element:<OurServices/>},
    {path:'/features', element:<OurFeatures/>},
    {path:'/skills', element:<OurSkills/>},
    {path:'/portfolio', element:<OurPortfolio/>},
    {path:'/achievements', element:<OurAchievements/>},
    {path:'/prices', element:<OurPrices/>},
    {path:'/introduction', element:<Introduction/>},
    {path:'/advantages', element:<Advantages/>},
    {path:'/team', element:<OurTeam/>},
    {path:'/blog', element:<OurBlog/>},
    {path:'/contact', element:<ContactUs/>},
]

export default routes