import React from "react";
import { Input, Textarea, Button } from "@nextui-org/react";
import { EyeSlashFilledIcon } from "../eyeicon/EyeSlashFilledIcon";
import { EyeFilledIcon } from "../eyeicon/EyeFilledIcon";


const Registration = () => {

    const [isVisible, setIsVisible] = React.useState(false);

    const toggleVisibility = () => setIsVisible(!isVisible);


    return (
        <>


            <div className="container mx-auto px-4 mt-5 max-w-xl">
                <p className="font-mono font-bold text-4xl">Create your account</p>
            </div>

            <div className="container mx-auto px-4 mt-5 max-w-xl">

                <label className="block text-gray-700  font-bold mb-2">
                    Insert your data
                </label>

                <Input type="text" variant="bordered" label="Name" placeholder="Enter your name" className="mt-4 focus:outline-none" />

                <Input type="text" variant="bordered" label="Surname" placeholder="Enter your surname" className="mt-4" />

                <Input type="email" variant="bordered" label="Email" placeholder="Enter your mail" className="mt-4" />

                <Input
                    label="Password"
                    variant="bordered"
                    placeholder="Enter your password"
                    endContent={
                        <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                            {isVisible ? (
                                <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                            ) : (
                                <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                            )}
                        </button>
                    }
                    type={isVisible ? "text" : "password"}
                    className="mt-4"
                />

                <div class="flex flex-row space-x-4">
                    <Input type="text" variant="bordered" label="Country" placeholder="Enter your country" className="mt-4" />

                    <Input type="text" variant="bordered" label="city" placeholder="Enter your city" className="mt-4" />
                </div>
                <div className="mt-5">
                    <label className="block text-gray-700  font-bold mb-2">
                        Upload File
                    </label>
                    <input type="file" className="block w-full text-gray-500 border-2 border-gray rounded-xl py-3 px-3 focus:outline-none focus:border-black-700" />
                </div>

                <div className="mt-5">
                    <label className="block text-gray-700 font-bold mb-2">
                        Create your description
                    </label>
                    <Textarea
                        label="Description"
                        placeholder="Enter your description"
                        className=""
                        variant="bordered"
                    />
                </div>
                <div class="flex flex-col mb-5 mt-4 sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                    <Button color="warning" variant="solid" className="sm:w-1/2 font-semibold text-base">
                        Registration
                    </Button>
                    <Button color="default" variant="flat" className="sm:w-1/2">
                        Login
                    </Button>
                </div>

            </div>

        </>
    )
}

export default Registration
