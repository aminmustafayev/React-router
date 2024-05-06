import AddCountry from "../pages/Admin/Add Country/AddCountry";
import AdminRoot from "../pages/Admin/AdminRoot";
import CountriesAdmin from "../pages/Admin/CountriesAdmin/CountriesAdmin";
import Dashboard from "../pages/Admin/Dashboard/Dashboard";
import DetailAdmin from "../pages/Admin/Detail Admin/DetailAdmin";
import Login from "../pages/Admin/Login/Login";
import About from "../pages/Client/About/About";
import ClientRoot from "../pages/Client/ClientRoot";
import Contact from "../pages/Client/Contact/Contact";
import Countries from "../pages/Client/Countries/Countries";
import CountryDetail from "../pages/Client/Country Detail/CountryDetail";
import Home from "../pages/Client/Home/Home";


export const ROUTES=[
    //Admin Root
    {
        path: "/admin",
        element:<AdminRoot/>,
        children:[
            {
                path:"/admin",
                element:<Dashboard/>
            },
            {
                path:"/admin/addcountry",
                element:<AddCountry/>
            },
            {
                path:"/admin/countriesadmin",
                element:<CountriesAdmin/>
            },
            {
                path:"/admin/detailadmin",
                element:<DetailAdmin/>
            },
            {
                path:"/admin/login",
                element:<Login/>
            }
        ]
    },
    //Client Root
    {
        path:"",
        element:<ClientRoot/>,
        children:[
            {
               index:true,
               element:<Home/>
            },
            {
                path:'about',
                element:<About/>
            },
            {
                path:'contact',
                element:<Contact/>
            },
            {
                path:'/countrydetail/:id',
                element:<CountryDetail/>
            },
            {
                path:"countries",
                element:<Countries/>
            }
        ]

    }
]