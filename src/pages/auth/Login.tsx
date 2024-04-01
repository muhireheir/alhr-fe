import {Link} from 'react-router-dom'
import googleIcon from '../../assets/google.png'
const Login = () => {
  const backendUrl = import.meta.env.VITE_API_URL;
  return (
    <div className="w-full h-screen flex items-center justify-center">
        <Link to={`${backendUrl}/auth/google`} className='text-white p-4 rounded-md bg-[#4B93E78F] flex gap-2 font-bold'>
            Continue with google <img src={googleIcon} />
        </Link>
    </div>
  )
}

export default Login