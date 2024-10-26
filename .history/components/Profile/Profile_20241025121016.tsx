import React from "react";
import Image from "next/image";
import selectedImage from "@/public/coders photos/coder2.jpg";

const Profile = () => {
  return (
    <section>
      <div className="flex justify-center">
        <div className="w-[1200px]">
          <div className="w-full bg-[url('@/public/coders photos/coder2.jpg')] h-[350px]">

          </div>
          <Image
            src={selectedImage}
            alt="Profile Avatar"
            style={{
              width: "100%",
              height: "350px",
              objectFit:"cover"
            }}
          />
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
              top:"-100px"
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Profile;
