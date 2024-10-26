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
  <div className="flex align-middle">
  <p className="text-gray-500 text-[16px] mt-2">Programmer at Gammal Tech</p>
    <Pen />
  </div>
</div>

        </div>
      </div>
    </section>
  );
};

export default Profile;
