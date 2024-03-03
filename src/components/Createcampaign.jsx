import React from "react";
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { Input, Textarea, Button, Tooltip } from "@nextui-org/react";
import { ArrowLongLeftIcon } from '@heroicons/react/24/outline'
import { ExclamationTriangleIcon } from '@heroicons/react/16/solid'
import { useNavigate } from "react-router-dom";

const CreateCampaign = () => {

    const navigate = useNavigate();
    const goToHome = () => {
        navigate('/home');
    }

    const goToMyCampaigns = () => {
        navigate('/mycampaigns')
    }

    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        title: '',
        subtitle: '',
        category: '',
        description: '',
        fundsTarget: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };


    const token = localStorage.getItem('token');

    const handleSubmit = async () => {

        try {
            const response = await fetch('http://localhost:4003/campaign/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                alert("Campaign uploaded successfully!");

            } else {
                const data = await response.json();
                alert("Error: " + data.message);
            }

            navigate('/mycampaigns');

        } catch (error) {
            console.error('Error saving campaign:', error.message);

        }
    };


    return (
        <>


            <div className="container mx-auto px-4 mt-5 max-w-xl">
                <p className="font-mono font-bold text-4xl">Create your Campaign</p>
            </div>

            <div className="container mx-auto px-4 mt-5 max-w-xl">

                <label className="block text-gray-700 font-bold mb-2">
                    Insert your campaign data
                </label>

                <Input type="text" variant="bordered" label="Title" placeholder="Insert campaign title" className="focus:outline-none"
                    name="title" value={formData.title} onChange={handleInputChange}
                />

                <Input type="text" variant="bordered" label="Subtitle" placeholder="Insert campaign subtitle" className="mt-4"
                    name="subtitle" value={formData.subtitle} onChange={handleInputChange}
                />

                <Input type="text" variant="bordered" label="Category" placeholder="Insert campaign category" className="mt-4"
                    name="category" value={formData.category} onChange={handleInputChange}
                />

                <div className="mt-5">
                    <label className="block text-gray-700 font-bold mb-2">
                        Create your campaign description
                    </label>
                    <Textarea
                        label="Description"
                        placeholder="Enter your description"
                        variant="bordered"
                        id="description"

                        onChange={handleInputChange}
                        maxLength={250}

                        name="description"
                        value={formData.description}
                    />
                    <p className="text-xs mt-1 pe-3 text-gray-600 text-right">Caratteri rimanenti: {250 - formData.description.length}</p>
                </div>

                <div className="flex flex-row justify-start justify-items-center">
                    <label className="block text-gray-700 mb-2 font-bold">
                        Insert your project target
                    </label>
                    <div className="ms-1">
                        <Tooltip
                            placement="right"
                            className=""
                            content={
                                <>
                                    <p className="text-sm p-1 text-orange-400 text-left w-52"> The funds target indicates the maximum funds that the project can receive.</p>
                                    <p className="text-sm p-1 text-orange-400 text-left w-52"> It cannot be modified after the creation of the project.</p>
                                </>
                            }
                        >
                            <Button
                                size="sm"
                                color="warning"
                                variant="light"
                                isIconOnly
                                className="pb-2"
                            >
                                <ExclamationTriangleIcon className="h-6"></ExclamationTriangleIcon>
                            </Button>
                        </Tooltip>
                    </div>
                </div>
                <Input type="number" variant="bordered" label="Funds Target" placeholder="0.00" className="focus:outline-none"
                    name="fundsTarget" value={formData.fundsTarget} onChange={handleInputChange}
                    startContent={
                        <div className="pointer-events-none flex items-center">
                            <span className="text-default-500 text-small">$</span>
                        </div>
                    }
                />


                <div className="flex flex-col mb-5 mt-7 sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                    <Button color="default" variant="flat" className="sm:w-1/2" onClick={(goToHome)}>
                        Go back <ArrowLongLeftIcon className="text-black w-6 h-6"></ArrowLongLeftIcon>
                    </Button>
                    <Button color="warning" variant="solid" className="sm:w-1/2 font-semibold text-base"
                        onClick={handleSubmit}
                    >
                        Save campaign
                    </Button>

                </div>

            </div>

        </>
    )
}

export default CreateCampaign