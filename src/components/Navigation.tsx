import Logo from '../assets/logo.png'
import { Link,NavLink ,useLocation} from 'react-router-dom'
import { HomeIcon,BriefcaseIcon,UsersIcon} from '@heroicons/react/24/outline'


const Navigation = () => {
  const menus = [
    {
      label: "Home",
      icon:HomeIcon,
      link:"/"
    },
    {
      label: "Jobs",
      icon: BriefcaseIcon,
      link:'/jobs'
    },
    {
      label: "Candidates",
      icon:UsersIcon,
      link:"/candidates"
    }
  ]
  const location = useLocation();
  const isActive = (currentPath:string)=>{
    const partTocheck = location.pathname.split("/")[1];
    if(!partTocheck){
      return location.pathname==currentPath? 'menu-active':''
    }
    return partTocheck=== currentPath.split("/")[1]?'menu-active':'';
  }

  return (
    <nav className='w-full py-5'>
      <div className="logo">
        <Link className='w-full flex justify-center' to={'/'}>
          <img className='w-10' src={Logo} />
        </Link>
      </div>
      <div className=' space-y-5 mt-9 relative'>
        {
          menus.map((menu) => {
            return (
              <NavLink  to={menu.link} key={menu.label} className={`text-white space-y-2  flex justify-center flex-col relative ${isActive(menu.link)}`}>
                <div className="icon flex justify-center">
                  <menu.icon className='w-7' />
                </div>
                <div className=' text-base text-center'>{menu.label}</div>
              </NavLink>)
          })
        }
      </div>
    </nav>
  )
}

export default Navigation