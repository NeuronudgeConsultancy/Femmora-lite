export const CoachingCoaches = () => {
  return (
    <div className="box-border caret-transparent min-h-0 min-w-0 w-auto p-8 md:min-h-[auto] md:min-w-[auto] md:w-6/12">
      <h4 className="text-lg font-bold box-border caret-transparent leading-7 mb-4">
        Meet Our Coaches
      </h4>
      <div className="box-border caret-transparent">
        <div className="items-center box-border caret-transparent flex">
          <div className="bg-purple-100 box-border caret-transparent h-16 w-16 overflow-hidden mr-4 rounded-full">
            <img
              src="https://randomuser.me/api/portraits/women/43.jpg"
              alt="Coach Sarah"
              className="box-border caret-transparent h-full max-w-full object-cover w-full"
            />
          </div>
          <div className="box-border caret-transparent">
            <div className="font-bold box-border caret-transparent">
              Sarah Johnson
            </div>
            <div className="text-gray-600 text-sm box-border caret-transparent leading-5">
              Fertility Nurse Practitioner
            </div>
          </div>
        </div>
        <div className="items-center box-border caret-transparent flex mt-4">
          <div className="bg-pink-100 box-border caret-transparent h-16 w-16 overflow-hidden mr-4 rounded-full">
            <img
              src="https://randomuser.me/api/portraits/women/65.jpg"
              alt="Coach Maria"
              className="box-border caret-transparent h-full max-w-full object-cover w-full"
            />
          </div>
          <div className="box-border caret-transparent">
            <div className="font-bold box-border caret-transparent">
              Maria Chen
            </div>
            <div className="text-gray-600 text-sm box-border caret-transparent leading-5">
              Menopause Specialist
            </div>
          </div>
        </div>
        <div className="items-center box-border caret-transparent flex mt-4">
          <div className="bg-blue-100 box-border caret-transparent h-16 w-16 overflow-hidden mr-4 rounded-full">
            <img
              src="https://randomuser.me/api/portraits/women/32.jpg"
              alt="Coach Lisa"
              className="box-border caret-transparent h-full max-w-full object-cover w-full"
            />
          </div>
          <div className="box-border caret-transparent">
            <div className="font-bold box-border caret-transparent">
              Lisa Rodriguez
            </div>
            <div className="text-gray-600 text-sm box-border caret-transparent leading-5">
              Reproductive Psychologist
            </div>
          </div>
        </div>
      </div>
      <button className="text-white bg-purple-600 caret-transparent text-center w-full mt-6 px-0 py-2 rounded-lg hover:bg-purple-700">
        Learn About Coaching
      </button>
    </div>
  );
};
