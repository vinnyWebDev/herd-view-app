import './App.css';
import Home from './Views/Home';
import Signin from './Views/Signin';
import Signup from './Views/Signup';
import Test from './Views/Test';
import Navigation from './Components/Navigation';
import { AuthContext } from './Context/AuthContext';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Protected } from './Context/Protected';
import ResetPassword from './Views/ResetPassword';

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
    path: "test",
    element: <Protected><Test></Test></Protected>
  }])

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
