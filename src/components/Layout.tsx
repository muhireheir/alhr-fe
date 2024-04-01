import { Transition } from '@headlessui/react'
import { useEffect, useState } from 'react'
import { useLocation,Outlet } from 'react-router-dom';
import { Bars3Icon} from '@heroicons/react/24/solid'
import Navigation from './Navigation';

const Layout = () => {
  const [isShowing, setIsShowing] = useState(false)
  const location = useLocation();
  useEffect(() => {
    setIsShowing(false);
  }, [location.pathname]); 
  return (
    <div className="w-full bg-[#DCE5F2] h-screen">
      <div className="w-full pl-32 pr-4 py-4 bg-white shadow-sm">
        <button className='hidden md:block'>Alight hr</button>
        <div className="flex justify-end">
          
        <div className='md:hidden' onClick={()=>setIsShowing(!isShowing)}>
          <Bars3Icon className='w-7 text-gray-700' />
        </div>
        </div>
      </div>
      <aside className="hidden md:block w-32 bg-[#082777] h-screen fixed top-0 z-50 p-0">
        <Navigation />
      </aside>
      <Transition
        as='div'
        show={isShowing}
        enter="transition-mobilemenu duration-150"
        enterFrom="-left-3/4"
        enterTo="left-0"
        leave="transition-mobilemenu duration-150"
        leaveFrom="left-0"
        leaveTo="-left-3/4"
        className={'absolute top-0 w-3/4 md:hidden'}
      >
        <div  className='w-full bg-[#082777] h-screen'>
           <Navigation />
        </div>
      </Transition>
      <main className='w-full p-0 md:pl-32 md:pr-4 md:py-4  shadow-sm'>
        <div className='p-4'>
            <Outlet />
        </div>
      </main>
      
    </div>
  )
}

export default Layout