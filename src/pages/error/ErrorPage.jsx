import { useRouteError } from 'react-router-dom'

function ErrorPage() {
	const error = useRouteError()

	if (error.status == 404) {
		return <h3>{error.statusText}</h3>
	}
	return <h3>nma gap</h3>
}

export default ErrorPage
