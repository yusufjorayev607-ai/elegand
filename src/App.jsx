import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import MainLayout from './layout/MainLayout'
import AboutDetails from './pages/aboutdetails/AboutDetails'
import ErrorPage from './pages/error/ErrorPage'
import Pages from './pages/Pages'
import PortfolioPage from './pages/portfolio/PortfolioPage'

const routes = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout />,
		errorElement: <ErrorPage />,
		children: [
			{
				index: true,
				element: <Pages />,
			},
			{
				path: 'portfolio',
				element: <PortfolioPage />,
			},
			{
				path: 'about',
				element: <AboutDetails />,
			},
		],
	},
])
function App() {
	return <RouterProvider router={routes} />
}

export default App
