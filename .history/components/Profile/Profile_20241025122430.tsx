import React from "react";
import Image from "next/image";
import selectedImage from "@/public/coders photos/coder2.jpg";
import popoo from "@/public/popoo.jpg"

const Profile = () => {
  return (
    <section className="bg-gray-400">
      <div className="flex justify-center">
        <div className="w-[1200px]">
        <div className="w-full h-[350px] mb-5 rounded-t-xl rounded-r-xl" style={{ backgroundImage: "url('/popoo.jpg')",backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",}}></div>

          {/* <Image
            src={selectedImage}
            alt="Profile Avatar"
            style={{
              width: "100%",
              height: "350px",
              objectFit:"cover"
            }}
          /> */}
          <Image
            src={selectedImage}
            alt="Profile Avatar"
            width={200}
            height={200}
            style={{
              width: "200px",
              height: "200px",
              marginBottom: "24px",
              borderRadius: "300px",
              objectFit: "cover",
              position:"relative",
              top:"-130px",
              border:"3px white solid"
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Profile;
