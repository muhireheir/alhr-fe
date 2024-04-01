import { useQuery } from "@tanstack/react-query";
import { useNavigate, useLocation } from "react-router-dom";
import { useSignIn } from "react-auth-kit";
import { SyncLoader } from "react-spinners";
import { loginWithToken } from "../../services/auth";
import { useEffect } from "react";


const ProcessAuth = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get("token") as string;
  const navigate = useNavigate();
  const signIn = useSignIn();
  const { data } = useQuery({
    queryFn: () => loginWithToken(token),
    queryKey: ["profile"],
  });
  useEffect(() => {
    if (data) {
      signIn({
        token: data.token!,
        tokenType: "Bearer",
        expiresIn: 60*24,
        authState: data,
      });
      navigate("/");
    }
  }, [data]);

  return (
    <div className='w-full h-screen'>
      <div className='flex w-full justify-center items-center h-full'>
        <SyncLoader color='#082777' />
      </div>
    </div>
  );
};

export default ProcessAuth;
