import React from "react";
import { Image } from "@nextui-org/react";
import { Divider } from "@nextui-org/react";
import { useSelector } from "react-redux";

const Profile = () => {

    const userData = useSelector((state) => state.user.data)

    return (
        <>
            <div className="container mx-auto px-5 max-w-5xl flex flex-col sm:flex-row mt-5">
                <Image
                    isZoomed
                    alt="NextUI Fruit Image with Zoom"
                    src={userData.profilepic}
                    className="w-40 max-h-56 sm:w-60"
                />
                <div className="mt-4 sm:mt-0 sm:ml-5 flex flex-col sm:justify-center">
                    <p className="font-sans font-medium text-2xl sm:text-3xl">{userData.name}</p>
                    <p className="font-sans font-medium text-2xl sm:text-2xl">{userData.surname}</p>
                </div>
            </div>
            <div className="container mx-auto px-5 max-w-5xl">
                <Divider className="my-5"></Divider>

                <p className="font-sans text-sm font-bold">Email:</p>
                <p className="font-sans">{userData.email}</p>

                <Divider className="my-5"></Divider>

                <p className="font-sans text-sm font-bold">Country:</p>
                <p className="font-sans">{userData.country}</p>

                <Divider className="my-5"></Divider>

                <p className="font-sans text-sm font-bold">City:</p>
                <p className="font-sans">{userData.city}</p>

                <Divider className="my-5"></Divider>

                <p className="font-sans text-sm font-bold">Biography:</p>
                <p className="font-sans max-w-80">
                    {userData.bio}
                </p>

                <Divider className="my-5"></Divider>
            </div>


        </>
    )
}
export default Profile;