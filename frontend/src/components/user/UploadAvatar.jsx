import React, { useEffect, useState } from "react";
import UserLayout from "../layout/UserLayout";
import { useNavigate } from "react-router-dom";
import { useUploadAvatarMutation } from "../../redux/api/userApi";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import MetaData from "../layout/MetaData";

const UploadAvatar = () => {
  const { user } = useSelector((state) => state.auth);

  const [avatar, setAvatar] = useState("");
  const [avatarPreview, setAvatarPreview] = useState(
    user?.avatar ? user?.avatar?.url : "/images/default_avatar.jpg"
  );

  const navigate = useNavigate();

  const [uploadAvatar, { isLoading, error, isSuccess }] =
    useUploadAvatarMutation();

  useEffect(() => {
    if (error) {
      toast.error(error?.data?.message);
    }

    if (isSuccess) {
      toast.success("Avatar Uploaded");
      navigate("/me/profile");
    }
  }, [error, isSuccess]);

  const submitHandler = (e) => {
    e.preventDefault();

    const userData = {
      avatar,
    };

    uploadAvatar(userData);
  };

  const onChange = (e) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setAvatarPreview(reader.result);
        setAvatar(reader.result);
      }
    };

    reader.readAsDataURL(e.target.files[0]);
  };

  return (
    <UserLayout>
      <MetaData title={"Upload Avatar"} />
      <div className="row wrapper">
        <div className="col-10 col-lg-8">
         <form className="shadow rounded bg-body shadow-2xl max-w-md mx-auto" onSubmit={submitHandler}>
  <h2 className="mb-8 text-xl text-center">Subir Avatar</h2>

  <div className="mb-8 flex flex-col items-center">
    <div className="mb-3">
      <figure className="avatar item-rtl">
        <img src={avatarPreview} className="rounded-circle" alt="image" />
      </figure>
    </div>
    <div className="input-foam">
      <label className="form-label" htmlFor="customFile">
        Elige Avatar
      </label>
      <input
        type="file"
        name="avatar"
        className="form-control"
        id="customFile"
        accept="images/*"
        onChange={onChange}
      />
    </div>
  </div>

  <button
    id="register_button"
    type="submit"
    className="btn w-full py-2"
    disabled={isLoading}
  >
    {isLoading ? "Subiendo..." : "Subir"}
  </button>
</form>
        </div>
      </div>
    </UserLayout>
  );
};

export default UploadAvatar;
