import { useEffect, useState } from "react";
import img from "../../assets/Profile/img/1733842012152 1.png";
import axios from "axios";
import { useParams } from "react-router-dom";

const MyProf = () => {
  const [MyData, setMyData] = useState(null);

  const getData = async () => {
    const res = await axios.get('https://reevan.ir/api/getPersonalPage/');
    setMyData(res.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="border-2 border-violet-800 w-80 h-96 m-auto rounded-3xl mt-20 bg-gradient-to-b from-zinc-900  to-black z-10">
      {MyData?.map((item) => {
        return (
          <div className="w-full h-full" key={item}>
            {/* img */}
            <div className="border-2 border-violet-800 w-32 h-32 rounded-full m-auto mt-10">
              <img src={item.profilePicture} className="rounded-full w-32 h-32" />
            </div>
            {/* person */}
            <div className="text-center mt-6 text-2xl">{item.name}</div>
            <div
              className="text-center mt-3 text-base"
              style={{ fontFamily: "inter" }}
            >
              {item.title}
            </div>
            <div
              className="text-center mt-1 text-base"
              style={{ fontFamily: "inter" }}
            >
              {item.bio}
            </div>
            <div
              className="text-center mt-1 text-base"
              style={{ fontFamily: "inter" }}
            >
              {item.email}
            </div>
            {/* birthday , location */}
            <div className="border-red-400 w-52 h-6 m-auto mt-3 flex justify-around">
              <div
                className="text-center mt-1 text-xs"
                style={{ fontFamily: "inter" }}
              >
                {item.location}
              </div>
              <div
                className="text-center mt-1 text-xs"
                style={{ fontFamily: "inter" }}
              >
                {item.birthday}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MyProf;
