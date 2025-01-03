import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function Signup() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert("Signup successful! Welcome aboard.");
  };

  const formFields = [
    { label: "Enter Username", placeholder: "Username...", name: "username" },
    {
      label: "Enter Password",
      placeholder: "Password...",
      name: "password",
      type: "password",
    },
    {
      label: "Confirm Password",
      placeholder: "Confirm Password...",
      name: "confirmPassword",
      type: "password",
      validate: (value) =>
        value === getValues("password") || "Passwords do not match",
    },
  ];

  return (
    <div className="flex flex-col h-screen w-full md:flex-row">
      {/* Left Section */}
      <div className="w-full h-1/2 md:w-[68vw] md:h-full bg-slate-950 text-white flex flex-col items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-2xl lg:text-4xl font-bold">
            JOIN US AND <span className="text-red-400">EXPLORE!</span>
          </h1>
          <h1 className="text-xl lg:text-4xl font-bold">
            Sign Up to <span className="text-green-300">Find a Company :)</span>
          </h1>
          <h1 className="text-xl lg:text-base p-5">
            ALREADY A USER?{" "}
            <Link
              to="/login"
              className="underline text-gray-200 hover:text-gray-400"
            >
              LOG IN NOW!
            </Link>
          </h1>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-[32vw] bg-white flex flex-col text-black p-5 md:p-20 gap-5 justify-center items-center">
        <h1 className="text-black text-center xl:text-2xl lg:text-lg sm:text-xs font-bold">
          SIGN UP
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
                  validate: field.validate,
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
            className={`bg-gray-800 text-white w-full p-4 rounded-xl text-center lg:text-xs xl:text-xl hover:bg-gray-900 transition ${
              isSubmitting ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Signing Up..." : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
