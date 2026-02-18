import { useNavigate } from "react-router-dom";
export default function LoginPage() {

  const navigate = useNavigate();

  function logIn(){
    navigate("/MainTable")
  }
 
  return (
    <div className="self-center flex-col flex items-center h-dvh w-full justify-center font-mono text-black">
      <h2 className="text-3xl p-2 font-bold">"DocTracker"</h2>
      <div className="border-2 flex flex-col items-center p-4">
        <h3 className="text-xl mb-10 p-4 font-bold">Login</h3>
        <div className="p-2">
          <p className="font">Email</p>
          <input type="text" className="border-2 p-2"></input>
        </div>

        <div className="p-2">
          <p>Password</p>
          <input type="password" className="border-2 p-2"></input>
        </div>

        <button
          className="border-2 p-2 rounded-2xl m-2 hover:p-3 active:p-3 transition-all"
          type="button"
          onClick={() => logIn()}
        >
          Login
        </button>
      </div>
    </div>
  );
}
