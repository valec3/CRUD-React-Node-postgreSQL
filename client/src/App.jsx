/* eslint-disable react-hooks/exhaustive-deps */
import { RouterProvider } from 'react-router-dom'
import { router } from './router/index.routing'
import { useAuthContext } from './hooks/useAuthContext.jsx'
import { useEffect } from 'react'

function App() {
	return (
		<main>
			<RouterProvider router={router} />
		</main>
	)
}

export default App