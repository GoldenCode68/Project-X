import { useState } from "react";

const MyProf = () => {
  const [ListData, setListData] = useState([
    {
      id: 1,
      name: "Mohsen NikAeen",
      email: "mahyar@gmail.com",
      location: "Sari, Iran",
      birthday: "12th September",
      bio: "lorem ipsum .....",
      title: "Software Developer",
      profilePicture: "https://....",
    },
  ]);

  return (
    <div className=" border-violet-800 w-3/4 h-96 m-auto mt-52 rounded-3xl bg-gradient-to-b from-black to-zinc-900 to-40%">
      {/* box top */}
      <div className="flex border-inherit w-full h-40 z-10">
        {/* left */}
        <div className="w-1/3 h-40 z-20 bg-zinc-900 rounded-t-3xl">
          <div className="border-violet-800 w-full h-10 border-t-2 border-l-2 border-r-2 rounded-t-3xl -mr-2"></div>
          <div className="border-violet-800 w-full h-32 border-l-2"></div>
        </div>
        {/* center */}
        <div className="border-l-2 border-b-2 border-r-2 border-violet-800 w-1/3 h-32 z-20 bg-black rounded-b-3xl mt-10">
          <div className="">
            <img
              src="./src/assets/Profile/img/5588888.png"
              className="w-80 h-80 m-auto relative bottom-52 rounded-3xl"
            />
          </div>
        </div>
        {/* right */}
        <div className=" w-1/3 h-40 z-20 bg-zinc-900 rounded-t-3xl">
          <div className="border-violet-800 w-full h-10 border-t-2 border-l-2 border-r-2 rounded-t-3xl"></div>
          <div className="border-violet-800 w-full h-32 border-r-2"></div>
        </div>
      </div>
      {/* box bottom */}
      <div className="border-b-2 border-l-2 border-r-2 border-violet-800 w-full h-56 bg-zinc-900 rounded-b-3xl">
        {/* map in data */}
        {ListData.map((item) => {
          return (
            <div key={item.id}>
              {/* name */}
              <div className="m-auto w-72 h-8 border-cyan-50 text-center text-2xl relative top-3">
                {item.name}
              </div>
              {/* job */}
              <div className="m-auto w-80 h-6 border-cyan-50 mt-10">
                <div className="w-4 h-4 rounded-full bg-gradient-to-l from-purple-700 to-blue-700 float-left">
                  <img
                    src="./src/assets/Profile/img/Icon (2).png"
                    className="w-2 h-2 m-auto relative top-1"
                  />
                </div>
                <div
                  className="float-left ml-2 text-xs"
                  style={{ fontFamily: "inter" }}
                >
                  {item.title}
                </div>
              </div>
              {/* time */}
              <div className="m-auto w-80 h-6 border-cyan-50 mt-1">
                <div className="w-4 h-4 rounded-full bg-gradient-to-l from-purple-700 to-blue-700 float-left">
                  <img
                    src="./src/assets/Profile/img/fi_calendar.png"
                    className="w-2 h-2 m-auto relative top-1"
                  />
                </div>
                <div
                  className="float-left ml-2 text-xs"
                  style={{ fontFamily: "inter" }}
                >
                  {item.bio}
                </div>
              </div>
              {/* student */}
              <div className="m-auto w-80 h-6 border-cyan-50 mt-1">
                <div className="w-4 h-4 rounded-full bg-gradient-to-l from-purple-700 to-blue-700 float-left">
                  <img
                    src="./src/assets/Profile/img/Icon (3).png"
                    className="w-2 h-2 m-auto relative top-1"
                  />
                </div>
                <div
                  className="float-left ml-2 text-xs"
                  style={{ fontFamily: "inter" }}
                >
                  {item.email}
                </div>
              </div>
              {/* birth , location */}
              <div className="m-auto w-96 h-8 border-cyan-50 mt-4">
                {/* location */}
                <div className="m-auto ml-7 w-32 h-6 border-cyan-50 float-left">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-l from-purple-700 to-blue-700 float-left">
                    <img
                      src="./src/assets/Profile/img/Icon (4).png"
                      className="w-3 h-4 m-auto relative top-1"
                    />
                  </div>
                  <div
                    className="float-left ml-2 text-xs mt-0.5"
                    style={{ fontFamily: "inter" }}
                  >
                    {item.location}
                  </div>
                </div>
                {/* birth */}
                <div className="m-auto w-48 h-6 border-cyan-50 float-left ml-2">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-l from-purple-700 to-blue-700 float-left">
                    <img
                      src="./src/assets/Profile/img/Icon (5).png"
                      className="w-4 h-4 m-auto relative top-1"
                    />
                  </div>
                  <div
                    className="float-left ml-2 text-xs mt-0.5"
                    style={{ fontFamily: "inter" }}
                  >
                    {item.birthday}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyProf;
