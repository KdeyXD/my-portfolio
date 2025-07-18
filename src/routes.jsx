import { lazy } from "react";
import MainLayout from "./layout/MainLayout";

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Projects = lazy(() => import('./pages/Projects'))
const Contact = lazy(() => import('./pages/Contact'))
const Resume = lazy(() => import('./pages/Resume'))

export const routes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {index: true, element: <Home />},
        {path: 'about', element: <About />},
        {path: 'projects', element: <Projects />},
        {path: 'contact', element: <Contact />},
        {path: 'resume', element: <Resume />}
    ]   
}