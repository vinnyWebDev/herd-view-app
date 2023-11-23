import './App.css';
import Home from './Views/Home';
import Signin from './Views/Signin';
import Signup from './Views/Signup';
import Navigation from './Components/Navigation';
import { AuthContext } from './Context/AuthContext';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Protected } from './Context/Protected';
import ResetPassword from './Views/ResetPassword';
import ViewHerd from './Views/ViewHerd';

function App() {

  //define our routes inside this array of objects
  const router = createBrowserRouter([{
    path: "/",
    element: <Protected><Home></Home></Protected>
  },
  {
    path: "/signin",
    element: <Signin></Signin>
  },
  {
    path: "signup",
    element: <Signup></Signup>
  },
  {
    path: "resetpassword",
    element: <ResetPassword></ResetPassword>
  },
  {
    path: "viewherd",
    element: <Protected><ViewHerd></ViewHerd></Protected>
  }
  ])

  return (
    <div>
      {/*Tells the app that the const router declared above defines our routes */}
      <AuthContext>
        <Navigation></Navigation>
        <div className='container'>
          <RouterProvider router={router}></RouterProvider>
        </div>
      </AuthContext>
    </div>
  );
}

export default App;
