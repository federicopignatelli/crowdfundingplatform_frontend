import React from "react";
import { Input, Button } from "@nextui-org/react";
import { EyeSlashFilledIcon } from "../icons/EyeSlashFilledIcon";
import { EyeFilledIcon } from "../icons/EyeFilledIcon";


const Registration = () => {

    const [isVisible, setIsVisible] = React.useState(false);

    const toggleVisibility = () => setIsVisible(!isVisible);


    return (
        <>
            <div className="container mx-auto px-4 mt-5 max-w-xl">
                <p className="font-mono font-bold text-4xl">Login</p>
            </div>

            <div className="container mx-auto px-4 mt-5 max-w-xl">

                <label className="block text-gray-700  font-bold mb-2">
                    Insert your data
                </label>

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

                <div class="flex flex-col mt-4 sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 ">
                    <Button color="warning" variant="solid" className=" sm:w-1/2 font-semibold text-base">
                        Login
                    </Button>
                    <Button color="default" variant="flat" className="sm:w-1/2 text-base">
                        Registration
                    </Button>
                </div>
            </div>

        </>
    )
}

export default Registration