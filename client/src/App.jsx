/* eslint-disable react-hooks/exhaustive-deps */
import { RouterProvider } from 'react-router-dom'
import { router } from './router/index.routing'
import { useAuthContext } from './hooks/useAuthContext'
import { useEffect } from 'react'

function App() {
	const { checkAuth } = useAuthContext()
	const token = window.localStorage.getItem('access-token')
	// console.log(token)
	useEffect(() => {
		async function verifyToken() {
			await checkAuth(token);
		}
		verifyToken()
	}, [token])

	return (
		<main className='w-screen h-screen px-14 py-3 bg-gray-50 dark:bg-gray-900'>
			<RouterProvider router={router} />
		</main>
	)
}

export default App