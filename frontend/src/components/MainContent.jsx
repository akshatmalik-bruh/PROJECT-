import { useForm } from "react-hook-form";

function MainContent() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className="h-screen w-full bg-slate-950 flex items-center justify-center text-white">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-lg p-8 bg-slate-900 rounded-lg shadow-lg flex flex-col gap-6"
      >
        {[
          {
            label: "Enter your Location:",
            placeholder: "Start...",
            ref: "start",
          },
          {
            label: "Where do you want to go?",
            placeholder: "End...",
            ref: "end",
          },
        ].map((data, index) => (
          <div key={index} className="flex flex-col gap-2">
            <label className="text-lg md:text-2xl">{data.label}</label>
            <input
              type="text"
              placeholder={data.placeholder}
              {...register(data.ref, { required: true })}
              className="text-xl p-4 bg-slate-200 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-5"
            />
            {errors[data.ref] && (
              <span className="text-red-500 text-sm">
                This field is required
              </span>
            )}
          </div>
        ))}
        <button
          type="submit"
          className="text-lg md:text-xl bg-slate-900 hover:bg-green-600 text-white p-4 rounded-lg transition duration-300 ease-in-out border-2 border-green-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          disabled={isSubmitting}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default MainContent;
