import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { registerUser } from "../redux/actions";
import { Input, Textarea, Button } from "@nextui-org/react";
import { ArrowLongLeftIcon } from '@heroicons/react/24/outline'
import { EyeSlashFilledIcon } from "../icons/EyeSlashFilledIcon";
import { EyeFilledIcon } from "../icons/EyeFilledIcon";
import { useNavigate } from "react-router-dom";


const Registration = () => {
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        email: '',
        password: '',
        country: '',
        city: '',
        avatar: '',
        bio: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(registerUser(formData));
    };

    const navigate = useNavigate();
    const goToHome = () => {
        navigate('/home');
    }

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

                <Input type="text" variant="bordered" label="Name" placeholder="Enter your name" className="mt-4 focus:outline-none" isRequired
                    name="name" value={formData.name} onChange={handleInputChange}
                />

                <Input type="text" variant="bordered" label="Surname" placeholder="Enter your surname" className="mt-4" isRequired
                    name="surname" value={formData.surname} onChange={handleInputChange}
                />

                <Input type="email" variant="bordered" label="Email" placeholder="Enter your mail" className="mt-4" isRequired
                    name="email" value={formData.email} onChange={handleInputChange}
                />

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
                    isRequired

                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                />

                <div className="flex flex-row space-x-4">
                    <Input type="text" variant="bordered" label="Country" placeholder="Enter your country" className="mt-4"
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                    />

                    <Input type="text" variant="bordered" label="city" placeholder="Enter your city" className="mt-4"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                    />
                </div>
                {/* <div className="mt-5">
                    <label className="block text-gray-700  font-bold mb-2">
                        Upload profile picture
                    </label>
                    <input type="file" className="block w-full text-gray-500 border-2 border-gray rounded-xl py-3 px-3 focus:outline-none focus:border-black-700"
                        name="avatar"
                        value={formData.avatar}
                        onChange={handleInputChange}
                    />
                </div> */}

                <div className="mt-5">
                    <label className="block text-gray-700 font-bold mb-2">
                        Create your description
                    </label>
                    <Textarea
                        label="Description"
                        placeholder="Enter your description"
                        variant="bordered"
                        id="bio"

                        onChange={handleInputChange}
                        maxLength={250}

                        name="bio"
                        value={formData.bio}
                    />
                    <p className="text-xs mt-1 pe-3 text-gray-600 text-right">Caratteri rimanenti: {250 - formData.bio.length}</p>
                </div>
                <div className="flex flex-col mb-5 mt-4 sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                    <Button color="default" variant="flat" className="sm:w-1/2" onClick={(goToHome)}>
                        Go back <ArrowLongLeftIcon className="text-black w-6 h-6"></ArrowLongLeftIcon>
                    </Button>
                    <Button color="warning" variant="solid" className="sm:w-1/2 font-semibold text-base"
                        onClick={handleSubmit}>
                        Registration
                    </Button>

                </div>

            </div>
        </>
    )
}

export default Registration
