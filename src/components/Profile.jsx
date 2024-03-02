import React, { useState } from "react";
import { fetchUserData } from "../redux/actions";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import { Image } from "@nextui-org/react";
import { Divider } from "@nextui-org/react";
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';

const Profile = () => {

    const dispatch = useDispatch();
    const userData = useSelector((state) => state.user.data);
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
    };

    const handleSubmitAvatar = async () => {
        if (!selectedFile) {
            alert("Please select a file.");
            return;
        }

        const formData = new FormData();
        formData.append("image", selectedFile);

        const token = localStorage.getItem('token');

        try {
            const response = await fetch("http://localhost:4003/users/me/uploadavatar", {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`
                },
                body: formData,
            });

            if (response.ok) {
                alert("Avatar uploaded successfully!");

                dispatch(fetchUserData(token))

            } else {
                const data = await response.json();
                alert("Error: " + data.message);
            }
        } catch (error) {
            console.error("Error:", error);
            alert("An error occurred while uploading the avatar.");
        }

    };

    return (
        <>
            <div className="bg-orange-300 p-8">
                <div className="container mx-auto px-5 max-w-5xl flex flex-col sm:flex-row">
                    {
                        userData.profilepic ? (
                            <Image
                                isZoomed
                                alt="NextUI Fruit Image with Zoom"
                                src={userData.profilepic}
                                className="max-h-48 sm:w-60"
                                onClick={onOpen}
                            />
                        ) : (
                            <Image
                                isZoomed
                                alt="NextUI Fruit Image with Zoom"
                                src="https://cdn.dribbble.com/users/304574/screenshots/6222816/male-user-placeholder.png"
                                className="max-h-48 sm:w-60"
                                onClick={onOpen}
                            />
                        )
                    }
                    <div className="mt-4 sm:mt-0 sm:ml-5 flex flex-col sm:justify-center">
                        <p className="font-sans font-medium text-3xl sm:text-5xl">{userData.name}</p>
                        <p className="font-sans font-medium text-3xl sm:text-5xl">{userData.surname}</p>
                    </div>
                </div>
            </div>
            <Divider className="mb-5"></Divider>

            <div className="container mx-auto px-5 max-w-5xl flex flex-col sm:flex-row sm:space-x-12 ">

                <div className="basis-2/5">
                    <p className="font-sans text-sm font-bold">Email:</p>
                    <p className="font-sans">{userData.email}</p>

                    <Divider className="my-5"></Divider>

                    <p className="font-sans text-sm font-bold">Country:</p>
                    <p className="font-sans">{userData.country}</p>

                    <Divider className="my-5"></Divider>

                    <p className="font-sans text-sm font-bold">City:</p>
                    <p className="font-sans">{userData.city}</p>


                </div>

                <div className="basis-3/5 mt-5 pt-5 border-t sm:border-0 sm:mt-0 sm:pt-0">
                    <p className="font-sans text-sm font-bold">Biography:</p>
                    <p className="font-sans">
                        {userData.bio}
                    </p>
                </div>


            </div>

            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Upload profile picture</ModalHeader>
                            <ModalBody>
                                <div className="mt-5">
                                    <input type="file" className="block w-full text-gray-500 border-2 border-gray rounded-xl py-3 px-3 focus:outline-none focus:border-black-700"
                                        accept="image/*"
                                        name="avatar"
                                        onChange={handleFileChange}
                                    />
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="deafult" variant="light" onPress={onClose}>
                                    Close
                                </Button>
                                <Button color="warning" onPress={onClose} onClick={handleSubmitAvatar}>
                                    Send
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>


        </>
    )
}
export default Profile;