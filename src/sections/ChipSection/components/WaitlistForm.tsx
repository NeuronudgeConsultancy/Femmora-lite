export const WaitlistForm = () => {
  return (
    <div className="bg-white shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_4px_6px_-1px,rgba(0,0,0,0.1)_0px_2px_4px_-2px] box-border caret-transparent max-w-2xl mt-12 mx-auto p-8 rounded-xl">
      <h4 className="text-xl font-bold box-border caret-transparent leading-7 text-center mb-6">
        Join the Waitlist
      </h4>
      <form className="box-border caret-transparent">
        <div className="box-border caret-transparent gap-x-4 grid grid-cols-[repeat(1,minmax(0px,1fr))] gap-y-4 md:grid-cols-[repeat(2,minmax(0px,1fr))]">
          <div className="box-border caret-transparent">
            <label className="text-gray-700 text-sm font-medium box-border caret-transparent block leading-5 mb-1">
              First Name
            </label>
            <input
              type="text"
              className="box-border caret-transparent w-full border border-gray-300 px-4 py-2 rounded-lg border-solid"
            />
          </div>
          <div className="box-border caret-transparent">
            <label className="text-gray-700 text-sm font-medium box-border caret-transparent block leading-5 mb-1">
              Last Name
            </label>
            <input
              type="text"
              className="box-border caret-transparent w-full border border-gray-300 px-4 py-2 rounded-lg border-solid"
            />
          </div>
        </div>
        <div className="box-border caret-transparent mt-4">
          <label className="text-gray-700 text-sm font-medium box-border caret-transparent block leading-5 mb-1">
            Email
          </label>
          <input
            type="email"
            className="box-border caret-transparent w-full border border-gray-300 px-4 py-2 rounded-lg border-solid"
          />
        </div>
        <div className="box-border caret-transparent mt-4">
          <label className="text-gray-700 text-sm font-medium box-border caret-transparent block leading-5 mb-1">
            Primary Interest
          </label>
          <select className="bg-zinc-100 caret-transparent leading-[normal] w-full border-gray-300 px-4 py-2 rounded-lg">
            <option
              value=""
              className="items-center box-border caret-transparent gap-x-2 min-h-6 min-w-6 gap-y-2"
            >
              Select your interest
            </option>
            <option
              value="fertility"
              className="items-center box-border caret-transparent gap-x-2 min-h-6 min-w-6 gap-y-2"
            >
              Fertility Tracking
            </option>
            <option
              value="menopause"
              className="items-center box-border caret-transparent gap-x-2 min-h-6 min-w-6 gap-y-2"
            >
              Menopause Transition
            </option>
            <option
              value="hormone"
              className="items-center box-border caret-transparent gap-x-2 min-h-6 min-w-6 gap-y-2"
            >
              Hormone Optimization
            </option>
            <option
              value="ivf"
              className="items-center box-border caret-transparent gap-x-2 min-h-6 min-w-6 gap-y-2"
            >
              IVF Support
            </option>
          </select>
        </div>
        <div className="items-start box-border caret-transparent flex mt-4">
          <input
            type="checkbox"
            className="bg-transparent box-border caret-transparent block mr-2 mt-1 p-0"
          />
          <label className="text-gray-600 text-sm box-border caret-transparent block leading-5">
            I agree to receive updates about the FEMMORA chip and related
            products. I can unsubscribe at any time.
          </label>
        </div>
        <button
          type="submit"
          className="text-white font-medium bg-purple-600 caret-transparent text-center w-full mt-4 px-0 py-3 rounded-lg hover:bg-purple-700"
        >
          Reserve My Spot
        </button>
      </form>
    </div>
  );
};
