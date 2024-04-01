import { useEffect,useState } from "react";
import { useAuthUser } from "react-auth-kit";
import {useNavigate} from 'react-router-dom'
import { IUser } from "../types/common";
import Layout from "./Layout";


const AuthChecker = () => {
  const [loading,setLoading]=useState(true);

  const  auth = useAuthUser();
  const navigate = useNavigate();
  useEffect(() => {
    const authUser = auth() as IUser;
    if (!authUser) {
      navigate("/login");
    }
    setLoading(false);
  }, [auth, navigate]);
  return (
    <>
    {loading?(<></>):(<Layout />)}
    </>
  )
}

export default AuthChecker