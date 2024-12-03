import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css"; // For icons
import React, { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "./firebase";
import SignUp from "./SignUpFirestore";
import SignIn from "./SignIn";
import MotivationalContent from "./MotivationalContent";
import HealthContentBengali from "./HealthContentBengali";
import SongContentHindi from "./SongContentHindi";
import EditUser from "./EditUser";

const App = () => {
  const [user, setUser] = useState(undefined);
  const [userData, setUserData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false); // Define isSignUp state

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

    return () => unsubscribe(); // Cleanup
  }, []);


  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setUserData(null); // Reset user data on sign out
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
          {/* Profile Section */}
          <div className="card shadow-sm">
            <div className="card-body">
              <div className="d-flex align-items-center">
                {/* Profile Picture or Avatar */}
                <div className="avatar me-3">
                  <img
                    src="https://www.w3schools.com/w3images/avatar2.png" // Placeholder image, replace with actual if available
                    alt="Avatar"
                    className="rounded-circle"
                    width="80"
                    height="80"
                  />
                </div>

                {/* User Info */}
                <div>
                  <h4 className="mb-1">
                    {userData?.firstName} {userData?.lastName || ""}
                  </h4>
                  <p className="text-muted">Welcome back!</p>
                  <div>
                    <span className="badge bg-primary me-2">
                      Member since {userData?.signUpDate || "NA"}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-4">
                {/* Edit Profile Button with Icon */}
                <button
                  onClick={() => setIsEditing(true)}
                  className="btn btn-outline-primary me-2"
                >
                  <i className="bi bi-pencil-square me-2"></i> Edit Profile
                </button>

                {/* Sign Out Button with Icon */}
                <button
                  onClick={handleSignOut}
                  className="btn btn-outline-danger"
                >
                  <i className="bi bi-box-arrow-right me-2"></i> Sign Out
                </button>
              </div>
            </div>
          </div>

          {/* Motivational Content */}
          <MotivationalContent />

          {/* Health Content Bengali */}
          <HealthContentBengali />

          {/* Song Content Hindi */}
          <SongContentHindi />

          {/* Edit Profile */}
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
