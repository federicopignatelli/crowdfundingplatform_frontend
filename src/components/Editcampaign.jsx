import React from "react"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

import { ArrowLongLeftIcon } from '@heroicons/react/24/outline'
import { Input, Textarea, Button } from "@nextui-org/react";

const Editcampaign = () => {

    const navigate = useNavigate();

    const goToMyCampaigns = () => {
        navigate('/mycampaigns')
    }

    const [formData, setFormData] = useState({
        title: '',
        subtitle: '',
        category: '',
        description: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const token = localStorage.getItem('token');
    const { campaignId } = useParams();




    const handleSubmit = async () => {

        try {
            const response = await fetch(`http://localhost:4003/campaign/edit/${campaignId}`,
                {
                    method: 'PUT',
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
            <div className="container mx-auto px-4 mt-5 max-w-xl text-left">
                <p className="font-mono font-bold text-4xl">Modify your Campaign data</p>
                <p className="font-sans w-72 mt-3 text-center">if you do not want to modify a data, leave the corresponding field empty</p>
            </div>

            <div className="container mx-auto px-4 mt-5 max-w-xl">
                <label className="block text-gray-700 font-bold mb-2">
                    Insert your campaign data
                </label>

                <Input type="text" variant="bordered" label="Title" placeholder="Insert campaign title" className="focus:outline-none"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                />

                <Input type="text" variant="bordered" label="Subtitle" placeholder="Insert campaign subtitle" className="mt-4"
                    name="subtitle"
                    value={formData.subtitle}
                    onChange={handleInputChange}
                />

                <Input type="text" variant="bordered" label="Category" placeholder="Insert campaign category" className="mt-4"
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
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
                    <p className="text-xs mt-1 pe-3 text-gray-600 text-right">
                        Caratteri rimanenti:
                        {250 - formData.description.length}
                    </p>
                </div>

                <div className="flex flex-col mb-5 mt-3 sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                    <Button color="default" variant="flat" className="sm:w-1/2"
                        onClick={goToMyCampaigns}
                    >
                        Go back <ArrowLongLeftIcon className="text-black w-6 h-6"></ArrowLongLeftIcon>
                    </Button>
                    <Button color="warning" variant="solid" className="sm:w-1/2 font-semibold text-base"
                        onClick={handleSubmit}
                    >
                        Save new campaign data
                    </Button>

                </div>

            </div>


        </>
    )
}

export default Editcampaign