// import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const formFields = [
    { label: "Enter Username", placeholder: "Username...", name: "username" },
    {
      label: "Enter Password",
      placeholder: "Password...",
      name: "password",
      type: "password",
    },
  ];

  return (
    <div className="flex flex-col h-screen w-full md:flex-row">
      {/* Left Section */}
      <div className="w-full h-1/2 md:w-[68vw] md:h-full bg-slate-950 text-white flex flex-col items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-2xl lg:text-4xl font-bold">
            WHY TRAVEL <span className="text-red-400">ALONE ?</span>{" "}
          </h1>
          <h1 className="text-xl lg:text-4xl font-bold">
            Log In here &{" "}
            <span className="text-green-300"> Find a Company :)</span>
          </h1>
          <h1 className="text-xl lg:text-base p-5">
            NOT A USER?{" "}
            <Link
              to="/signup"
              className="underline text-gray-200 hover:text-gray-400"
            >
              SIGN UP NOW!
            </Link>
          </h1>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-[32vw] bg-white flex flex-col text-black p-5 md:p-20 gap-5 justify-center items-center">
        <h1 className="text-black text-center xl:text-2xl lg:text-lg sm:text-xs font-bold">
          LOGIN
        </h1>
        <form
          className="flex flex-col items-center gap-5 justify-center w-full"
          onSubmit={handleSubmit(onSubmit)}
        >
          {formFields.map((field, index) => (
            <div key={index} className="flex flex-col gap-3 w-full">
              <label
                htmlFor={field.name}
                className="xl:text-2xl lg:text-lg sm:text-xs"
              >
                {field.label}
              </label>
              <input
                id={field.name}
                type={field.type || "text"}
                {...register(field.name, {
                  required: `${field.label} is required.`,
                })}
                placeholder={field.placeholder}
                className="text-xs p-2 rounded-lg w-full text-black md:p-3 md:text-lg border border-gray-300"
                aria-invalid={!!errors[field.name]}
              />
              {errors[field.name] && (
                <p className="text-red-500 text-xs mt-1">
                  {errors[field.name].message}
                </p>
              )}
            </div>
          ))}
          <button
            type="submit"
            className="bg-gray-800 text-white w-full p-4 rounded-xl text-center lg:text-xs xl:text-xl hover:bg-gray-900 transition"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Signing In..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
