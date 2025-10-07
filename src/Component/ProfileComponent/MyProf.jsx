import { useParams } from "react-router-dom";
import img1 from "../../assets/Profile/img/01.jpg";
import img2 from "../../assets/Profile/img/02.jpg";
import img3 from "../../assets/Profile/img/03.jpg";
import img4 from "../../assets/Profile/img/04.jpg";
import img5 from "../../assets/Profile/img/05.jpg";

const MyProf = () => {
  const { id } = useParams();

  const staticData = [
    {
      id: "1",
      name: "Mahyar Mollaei",
      title: "Frontend Developer",
      bio: "Interested in learning.",
      email: "mahyar@example.com",
      location: "Mazandaran, Iran",
      birthday: "1386/00/00",
      profilePicture: img1,
    },
    {
      id: "2",
      name: "Mohsen Taghavi",
      title: "backend developer",
      bio: "",
      email: "mohsen@example.com",
      location: "Mazandaran, Iran",
      birthday: "1386/00/00",
      profilePicture: img2,
    },
    {
      id: "3",
      name: "Amir reza Khatiri",
      title: "Frntend developer",
      bio: "",
      email: "Amir@example.com",
      location: "Mazandaran, Iran",
      birthday: "1385/00/00",
      profilePicture: img3,
    },
    {
      id: "4",
      name: "Amirhisein Nikaen",
      title: "Ui Designer",
      bio: "",
      email: "Nik@example.com",
      location: "Mazandaran, Iran",
      birthday: "1385/00/00",
      profilePicture: img4,
    },
    {
      id: "5",
      name: "Ariyan Hasanpor",
      title: "Ux Designer",
      bio: "",
      email: "Ariyan@example.com",
      location: "Mazandaran, Iran",
      birthday: "1385/00/00",
      profilePicture: img5,
    },
  ];

  const MyData = staticData.find((item) => item.id === id);

  // DAYNAMIC DATA

  // const getData = async () => {
  //   const res = await axios.get("https://reevan.ir/api/getPersonalPage/");
  // const datafind = res.data.find((item) => {
  //   return item.id === id;
  // });
  // setMyData(datafind);
  // };

  return (
    <div className="border-2 border-violet-800 w-80 h-96 m-auto rounded-3xl mt-20 bg-gradient-to-b from-zinc-900 to-black z-10">
      <div className="w-full h-full">
        {/* تصویر */}
        <div className="border-2 border-violet-800 w-32 h-32 rounded-full m-auto mt-10">
          <img
            src={MyData?.profilePicture}
            className="w-32 h-32 rounded-full"
            alt={MyData?.name}
          />
        </div>

        {/* اطلاعات */}
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

        {/* موقعیت و تولد */}
        <div className="w-52 h-6 m-auto mt-3 flex justify-around">
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
