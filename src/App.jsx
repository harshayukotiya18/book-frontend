import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import DefaultRoute from './Guards/DefaultRoute';
import UserLayout from './Layout/UserLayout';
import AdminLayout from './Layout/AdminLayout';
import UserDashboard from './Pages/UserLayout/Dashboard';
import AdminDashboard from './Pages/AdminLayout/Dashboard';
import MyBookings from './pages/UserLayout/MyBookings';
import UserEvent from './pages/UserLayout/Event';
import AdminEvent from './pages/AdminLayout/Event';
import Profile from './pages/UserLayout/Profile';
import Booking from './pages/AdminLayout/Booking';

function App() {
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />
    },
     {
      path: "/register",
      element: <Register />
    },
    {
      path:"/",
      element: <DefaultRoute />
    },

    // User Routes
    {
      path:"user",
      element: <UserLayout />,
      children: [
        {path: "dashboard", element: <UserDashboard />},
        {path: "my-bookings", element: <MyBookings />},
        {path: "event", element: <UserEvent />},
        {path: "profile", element: <Profile/> }
      ]
    },

    // admin routes
    {
      path:"admin",
      element: <AdminLayout />,
      children: [
        {path: "dashboard", element: <AdminDashboard/>},
        {path: "bookings", element: <Booking />},
        {path: "event", element: <AdminEvent />},
      ]
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;
