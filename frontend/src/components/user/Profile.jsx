import React from "react";
import UserLayout from "../layout/UserLayout";
import { useSelector } from "react-redux";
import MetaData from "../layout/MetaData";

const Profile = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <UserLayout>
      <MetaData title={"Your Profile"} />
      <div className="container mx-auto mt-5 user-info text-center">
        <div className="mb-4 md:w-1/2 md:mx-auto">
          <figure className="avatar avatar-profile inline-block">
            <img
              className="rounded-circle img-fluid mx-auto"
              src={
                user?.avatar ? user?.avatar?.url : "/images/default_avatar.jpg"
              }
              alt={user?.name}
            />
          </figure>
        </div>

        <div className="mb-4 md:w-1/2 md:mx-auto">
          <h4 className="text-center md:text-left">Nombre completo</h4>
          <p className="text-center md:text-left">{user?.name}</p>

          <h4 className="text-center md:text-left">Dirección de correo electrónico</h4>
          <p className="text-center md:text-left">{user?.email}</p>

          <h4 className="text-center md:text-left">Se unió en</h4>
          <p className="text-center md:text-left">{user?.createdAt?.substring(0, 10)}</p>
        </div>
      </div>
    </UserLayout>
  );
};

export default Profile;