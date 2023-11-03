import './App.css';
import Home from './Views/Home';
import Signin from './Views/Signin';
import Signup from './Views/Signup';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {

  //define our routes inside this array of objects
  const router = createBrowserRouter([{
    path: "/",
    element: <Home></Home>
  },
  {
    path: "/signin",
    element: <Signin></Signin>
  },
  {
    path: "signup",
    element: <Signup></Signup>
  }])

  return (
    <div>
      {/*Tells the app that the const router declared above defines our routes */}
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
