import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { LANGUAGES, LOGO_URL } from "../utils/constants";
import { togglegpt } from "../utils/gptSlice";
import { changelang } from "../utils/configSlice";

const Headers = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let user = useSelector((store) => store.user);
  let showgpt = useSelector(store=> store.gpt.showgpt)


  let handleSignout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  useEffect(() => {
    let unsubscribe =onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
 
    return ()=> unsubscribe()
  }, []);

   let handlegptsearch =()=>{
    dispatch(togglegpt())
  }

   let handlelang=(e)=>{
     dispatch(changelang(e.target.value))
   }
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col  md:flex-row justify-between">
      <img 
        className="w-44 mx-auto md:mx-0"
        src={LOGO_URL}
      />

      {user && (
        <div className="flex justify-between p-4">
          {showgpt &&
           <select 
           onChange={handlelang}
           className="bg-gray-100/20 p-2 m-2 rounded-md text-white">
           {LANGUAGES.map(lang => <option key={lang.name} value={lang.identifier}>{lang.name}</option>)}
          </select>} 
          
          <button className="py-2 my-2 mx-4 px-4 bg-gradient-to-b from-red-500 to-black rounded-sm text-white font-bold" 
          onClick={handlegptsearch}>{showgpt? "Home": "GPT-search"}</button>
          <img className="w-12 h-12" src={user?.photoURL} />
          <button className="text-white font-bold ml-2 " onClick={handleSignout}>
            Signout
          </button>
        </div>
      )}
    </div>
  );
};

export default Headers;
