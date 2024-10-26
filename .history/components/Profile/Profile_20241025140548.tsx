import React from "react";
import Image from "next/image";
import selectedImage from "@/public/coders photos/coder2.jpg";
import popoo from "@/public/popoo.jpg"
import { Pen } from "lucide-react";

const Profile = () => {
  return (
    <section className="bg-gray-200 mb-28 ">
      <div className="flex justify-center container mx-auto">
        <div className="w-[1200px]  bg-white rounded-t-xl mt-8">
        <div className="w-full h-[300px] mb-5 rounded-t-xl" style={{ 
  backgroundImage: "url('/popoo.jpg')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
}}></div>

<div className="flex flex-col items-center -mt-[100px]">
  <Image
    src={selectedImage}
    alt="Profile Avatar"
    width={200}
    height={200}
    style={{
      width: "200px",
      height: "200px",
      borderRadius: "300px",
      objectFit: "cover",
      border: "3px white solid"
    }}
  />
  <p className="text-black text-3xl mt-2">Salem Mohammed</p>
  <div className="flex">
  <p className="text-gray-500 text-[16px] mt-2 mr-1">Programmer at Gammal Tech</p>
    <Pen className="text-lg mt-1 text-gray-500" />
  </div>
</div>
<div className="flex">
<div className="text-black text-3xl ml-10 mr-4 mb-2">
  About
</div>
<Pen className="text-lg mt-[6px]  text-gray-500 " />
</div>
<div className="bg-gray-200 p-8 rounded-lg w-3/4 ml-10">
  <p className="text-black">
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
</p>
</div>

        </div>
      </div>
    </section>
  );
};

export default Profile;
