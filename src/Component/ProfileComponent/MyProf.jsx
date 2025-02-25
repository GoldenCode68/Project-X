import { useEffect, useState } from "react";
import img from "../../assets/Profile/img/1733842012152 1.png";
import axios from "axios";
import { useParams } from "react-router-dom";

const MyProf = () => {
  const {id} = useParams()
  const [MyData, setMyData] = useState(null);

  const getData = async () => {
    const res = await axios.get('https://reevan.ir/api/getPersonalPage/');
    const datafind = res.data.find(item =>{
      return item.id === id
    })
    setMyData(datafind);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="border-2 border-violet-800 w-80 h-96 m-auto rounded-3xl mt-20 bg-gradient-to-b from-zinc-900  to-black z-10">
      
    
          <div className="w-full h-full" >
            {/* img */}
            <div className="border-2 border-violet-800 w-32 h-32 rounded-full m-auto mt-10">
              <img src={MyData?.profilePicture} className="w-32 h-32 rounded-full" />
            </div>
            {/* person */}
            <div className="text-center mt-6 text-2xl">{MyData?.name}</div>
            <div
              className="text-center mt-3 text-base"
              style={{ fontFamily: "inter" }}
            >
              {MyData?.title}
            </div>
            <div
              className="text-center mt-1 text-base"
              style={{ fontFamily: "inter" }}
            >
              {MyData?.bio}
            </div>
            <div
              className="text-center mt-1 text-base"
              style={{ fontFamily: "inter" }}
            >
              {MyData?.email}
            </div>
            {/* birthday , location */}
            <div className="border-red-400 w-52 h-6 m-auto mt-3 flex justify-around">
              <div
                className="text-center mt-1 text-xs"
                style={{ fontFamily: "inter" }}
              >
                {MyData?.location}
              </div>
              <div
                className="text-center mt-1 text-xs"
                style={{ fontFamily: "inter" }}
              >
                {MyData?.birthday}
              </div>
            </div>
          </div>
       
  
    </div>
  );
};

export default MyProf;
