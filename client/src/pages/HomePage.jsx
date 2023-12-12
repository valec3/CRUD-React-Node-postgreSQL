import {Link} from 'react-router-dom'
const HomePage = () => {
    return (
        <section className='text-white flex flex-col gap-4 font-bold'>
            <h1 className='text-center text-2xl mb-10'>Home Page</h1>
            <Link to='/login'>Login</Link>
            <Link to='/dashboard'>Dashboard</Link>

        </section>
    )
}

export default HomePage