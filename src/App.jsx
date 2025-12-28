import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import DefaultRoute from './Guards/DefaultRoute';
import UserLayout from './Layout/UserLayout';
import AdminLayout from './Layout/AdminLayout';
import UserDashboard from './pages/UserLayout/Dashboard';
import AdminDashboard from './pages/AdminLayout/Dashboard';
import MyBookings from './pages/UserLayout/MyBookings';
import UserEvent from './pages/UserLayout/Event';
import AdminEvent from './pages/AdminLayout/Event';
import Profile from './pages/UserLayout/Profile';
import Booking from './pages/AdminLayout/Booking';
import AuthGuard from './Guards/AuthGuard';

function App() {
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <AuthGuard requiredAuth={false}><Login /></AuthGuard>
    },
     {
      path: "/register",
      element: <AuthGuard requiredAuth={false}><Register /></AuthGuard>
    },
    {
      path:"/",
      element: <DefaultRoute />
    },

    // User Routes
    {
      path:"user",
      element: <AuthGuard requiredAuth={true} allowedRoles={["USER"]}><UserLayout /></AuthGuard>,
      children: [
        {path: "dashboard", element: <UserDashboard />},
        {path: "my-bookings", element: <MyBookings />},
        {path: "event", element: <UserEvent />},
        {path: "profile", element: <Profile/>   }
      ]
    },

    // Admin routes
    {
      path:"admin",
      element: <AuthGuard requiredAuth={true} allowedRoles={["ADMIN"]}><AdminLayout /></AuthGuard>,
      children: [
        {path: "dashboard", element: <AdminDashboard/>},
        {path: "bookings", element: <Booking />},
        {path: "event", element: <AdminEvent />},
      ]
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App
