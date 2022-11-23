import App from "./App";
import Listing from "./components/Listing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

 

const Routes =[
    {
        path: "/",
        element: <App/>,
        children:[
          {
            path: "/listing",
            element: <Listing/>,
            
          },
          {
            path:"/login",
            element:<Login/>
          },
          {
            path:"/signup",
            element:<Signup/>
          }
  
        ]
        
      },
      
]

export default Routes