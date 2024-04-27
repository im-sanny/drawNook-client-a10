/* eslint-disable react/no-unescaped-entities */
import { FaArrowCircleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import { AuthContext } from "../FirebaseProvider/FirebaseProvider";
import { useContext } from "react";
import toast from "react-hot-toast";

const Register = () => {
  const { createUser } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const {email, password} = data
    createUser(email, password)
    .then(result => {
      console.log(result);
    })

    
  };

  return (
    <>
      <div className="lg:mx-0 mx-2">
        <div className="flex md:justify-between items-center justify-center flex-wrap gap-4 mx-auto max-w-6xl">
          <p
            onClick={() => "navigate"("/")}
            className="text-lg font-semibold text-[#38c483] my-3 cursor-pointer hover:bg-[#38c483] inline-block rounded py-1 px-2 hover:text-white duration-200"
          >
            <span className="flex items-center gap-2">
              <FaArrowCircleLeft></FaArrowCircleLeft> Back Home
            </span>
          </p>
          <img className="h-[100px]" src={"logo"} alt="" />
          <div>
            Already a member?
            <Link
              className="px-3 ml-3 py-2 bg-[#38c483] hover:bg-green-700 rounded text-white font-semibold"
              to="/login"
            >
              Login
            </Link>
          </div>
        </div>

        <div className="border shadow-lg mt-3 max-w-6xl mx-auto mb-10 rounded-lg">
          <div className="w-full flex p-2">
            <div
              className="w-full  bg-gray-400 hidden lg:block  bg-no-repeat  lg:w-1/2  rounded-l-lg "
              style={{
                background: `url(${"https://i.ibb.co/g3www1v/reshot-illustration-user-register-illustration-45-EL2-CXH8-D.png"})`,
                backgroundSize: "100% 100%",
                backgroundOrigin: "content-box",
              }}
            ></div>

            <div className="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
              <div className=" p-5 ">
                <div className="pb-8">
                  <p className="text-3xl font-bold mb-2">
                    Registration in DrawNook.
                  </p>
                  <p className="font-semibold text-black/60">
                    Please enter your information's below
                  </p>
                </div>
                <div className="divider">
                  To register, fill the form properly
                </div>
                {/* form */}
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-3 w-full"
                >
                  <div>
                    <fieldset className="border border-solid border-gray-300 p-3 w-full rounded">
                      <legend className="font-medium text-black/60">
                        Name
                      </legend>
                      <input
                        {...register("name", { required: true })}
                        type="text"
                        placeholder="Name"
                        className="px-4 w-full focus:outline-0"
                      />
                    </fieldset>
                    {errors.name && (
                      <p className="text-red-500">Name is required</p>
                    )}
                  </div>
                  <div>
                    <fieldset className="border border-solid border-gray-300 p-3 w-full rounded">
                      <legend className="font-medium text-black/60">
                        Email
                      </legend>
                      <input
                        {...register("email", { required: true })}
                        type="email"
                        placeholder="Email"
                        className="px-4 w-full focus:outline-0"
                      />
                    </fieldset>
                    {errors.email && (
                      <p className="text-red-500">Email is required</p>
                    )}
                  </div>
                  <div>
                    <fieldset className="border border-solid border-gray-300 p-3 w-full rounded">
                      <legend className="font-medium text-black/60">
                        Password
                      </legend>
                      <input
                        {...register("password", { required: true })}
                        type="password"
                        placeholder="Password"
                        className="px-4 w-full focus:outline-0"
                      />
                    </fieldset>
                    {errors.password && (
                      <p className="text-red-500">Password is required</p>
                    )}
                  </div>
                  <div>
                    <fieldset className="border border-solid border-gray-300 p-3 w-full rounded">
                      <legend className="font-medium text-black/60">
                        PhotoURL
                      </legend>
                      <input
                        {...register("photoURL")}
                        type="text"
                        placeholder="PhotoURL"
                        className="px-4 w-full focus:outline-0"
                      />
                    </fieldset>
                  </div>
                  <div className="flex justify-center">
                    <button
                      type="submit"
                      className="px-3 py-2 bg-[#38c483] w-full hover:bg-green-600 rounded text-white font-semibold"
                    >
                      Register
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
