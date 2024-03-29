import React from 'react'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCampaignData } from '../redux/actions/campaign';
import iconcard from '../icons/logo.png'

import { Link } from 'react-router-dom';
import { Chip } from "@nextui-org/react";
import { Progress, Divider } from "@nextui-org/react";

const ExploreCampaign = () => {
    const dispatch = useDispatch();
    const allcampaigns = useSelector(state => state.campaign.allcampaigns);

    useEffect(() => {
        dispatch(getCampaignData());
    }, [dispatch]);

    const reversedCampaigns = [...allcampaigns].reverse();

    const truncateText = (text, maxLength) => {
        if (text.length > maxLength) {
            return text.substring(0, maxLength) + '..';
        }
        return text;
    };

    return (
        <>
            <div className="container mx-auto px-4 my-7 max-w-2xl">
                <p className="font-mono font-bold text-3xl sm:text-6xl text-center">Explore</p>
            </div>
            <Divider className="mt-4" />
            <div className='mt-7 grid grid-cols-1 gap-5 lg:gap-8 justify-items-center mx-auto px-5 max-w-6xl sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                {reversedCampaigns.map(campaign => (
                    <Link to={`/campaign/${campaign.campaignId}`} key={campaign.campaignId}>
                        <div className='w-full max-w-96 sm:w-60 h-96 flex flex-col justify-between border border-gray-200 rounded-md overflow-hidden transition-all duration-500 hover:ease-out hover:shadow-xl hover:shadow-gray-200 hover:-translate-y-0.5'>

                            {
                                campaign.campaignCover ? (
                                    <img src={campaign.campaignCover}
                                        alt='campaign cover'
                                        className='w-96 h-60 sm:h-52 object-cover object-center'>
                                    </img>
                                ) : (
                                    <img src={iconcard}
                                        alt='campaign cover'
                                        className='w-96 h-60 sm:h-52 object-cover object-center'>
                                    </img>
                                )
                            }
                            <div className='flex flex-col justify-between h-44 p-5'>
                                <div className='flex flex-col justify-start'>
                                    <Chip size="sm" color="warning" variant="flat" className="tracking-widest my-1">{campaign.category}</Chip>
                                    <p className="font-mono text-xl font-bold mb-1 tracking-tight leading-ticht">{truncateText(campaign.title, 28)}</p>
                                    <p className='leading-5 text-sm'>{truncateText(campaign.subtitle, 25)}</p>
                                </div>
                                <Progress
                                    aria-label="Progresso della campagna"
                                    label=""
                                    size="sm"
                                    value={campaign.totalFunds}
                                    maxValue={campaign.fundsTarget}
                                    color="warning"
                                    formatOptions={{ style: "currency", currency: "USD" }}
                                    showValueLabel={false}
                                    classNames={{
                                        base: "w-full mt-3",
                                    }}
                                />
                            </div>
                        </div>
                    </Link>

                ))}
            </div>

        </>
    )
}

export default ExploreCampaign