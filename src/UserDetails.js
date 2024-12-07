import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const UserDetails = ({
  user,
  userData,
  isEditing,
  setIsEditing,
  handleSignOut,
  onSave,
}) => {
  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <div className="d-flex align-items-center">
          {/* Profile Picture or Avatar */}
          <div className="avatar me-3">
            <img
              src="https://www.w3schools.com/w3images/avatar2.png" // Placeholder image
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
            <p className="text-muted">{userData?.email}</p>
            <div>
              <span className="badge bg-primary me-2">
                Member since {userData?.signUpDate || "NA"}
              </span>
            </div>
          </div>
        </div>

        <div className="mt-4">
          {/* Edit Profile Button */}
          <button
            onClick={() => setIsEditing(true)}
            className="btn btn-outline-primary me-2"
          >
            <i className="bi bi-pencil-square me-2"></i> Edit Profile
          </button>

          {/* Sign Out Button */}
          <button
            onClick={handleSignOut}
            className="btn btn-outline-danger"
          >
            <i className="bi bi-box-arrow-right me-2"></i> Sign Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
