import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { LOGO_URL } from "../utils/constants";

const Headers = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let user = useSelector((store) => store.user);

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
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-44"
        src={LOGO_URL}
      />

      {user && (
        <div className="flex  p-4">
          <img src={user?.photoURL} />
          <button className="text-white font-bold p-2" onClick={handleSignout}>
            Signout
          </button>
        </div>
      )}
    </div>
  );
};

export default Headers;
