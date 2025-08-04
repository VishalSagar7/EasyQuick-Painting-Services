
import { createBrowserRouter } from 'react-router-dom';
import LoginPage from '../Pages/LoginPage';
import Home from '../Pages/Home';
import ContactUsPage from '../Pages/ContactUsPage';
import AboutUsPage from '../Pages/AboutUsPage';
import OurServicesPage from '../Pages/OurServicesPage';


const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/adminlogin',
        element : <LoginPage/>
    },
    {
        path: "/contactus",
        element : <ContactUsPage/>
    },
    {
        path: "/aboutus",
        element : <AboutUsPage/>
    },
    {
        path: "/ourservices",
        element: <OurServicesPage />
    }
]);

export default router;
