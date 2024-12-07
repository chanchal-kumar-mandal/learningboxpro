import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css"; // For icons
import React, { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "./firebase";
import Menu from "./Menu";
import EditUser from "./EditUser";
import SignUp from "./SignUpFirestore";
import SignIn from "./SignIn";
import MotivationalContent from "./MotivationalContent";
import HealthContentBengali from "./HealthContentBengali";
import SongContentHindi from "./SongContentHindi";

const App = () => {
  const [user, setUser] = useState(undefined);
  const [userData, setUserData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        const userDoc = doc(db, "users", currentUser.uid);
        const userSnapshot = await getDoc(userDoc);

        if (userSnapshot.exists()) {
          setUserData(userSnapshot.data());
        } else {
          console.log("No user data found for UID:", currentUser.uid);
        }
      } else {
        setUserData(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setUserData(null);
    } catch (error) {
      console.error("Sign-out error:", error.message);
    }
  };

  if (user === undefined) {
    return (
      <div className="container mt-5">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      {user ? (
        <>
          <Menu
            user={user}
            userData={userData}
            setIsEditing={setIsEditing}
            handleSignOut={handleSignOut}
          />
          <MotivationalContent />
          <HealthContentBengali />
          <SongContentHindi />

          {/* Edit Profile Modal */}
          {isEditing && (
            <EditUser
              userId={user.uid}
              userData={userData}
              onClose={() => setIsEditing(false)}
              onSave={(updatedData) => setUserData(updatedData)}
            />
          )}
        </>
      ) : (
        <div className="text-center">
          {isSignUp ? <SignUp /> : <SignIn />}
          <p>
            {isSignUp ? (
              <>
                Already have an account?{" "}
                <button
                  className="btn btn-link"
                  onClick={() => setIsSignUp(false)}
                >
                  Sign In
                </button>
              </>
            ) : (
              <>
                Don’t have an account?{" "}
                <button
                  className="btn btn-link"
                  onClick={() => setIsSignUp(true)}
                >
                  Sign Up
                </button>
              </>
            )}
          </p>
        </div>
      )}
    </div>
  );
};

export default App;
