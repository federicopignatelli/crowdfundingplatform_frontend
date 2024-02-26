import React from "react";
import { Progress } from "@nextui-org/react";
import { Chip } from "@nextui-org/react";


const Campaign = () => {


    return (
        <>
            <div className="relative overflow-hidden" style={{ height: '500px' }}>
                <img
                    className="w-full h-full object-cover object-center"
                    src="https://app.requestly.io/delay/5000/https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
                    alt="Immagine di copertina"
                />
            </div>
            <div className="container mx-auto px-4 mt-3 max-w-5xl flex flex-col sm:flex-row gap-x-8">
                <div className="basis-3/5 ">
                    <Chip size="sm" color="warning" variant="flat" className="tracking-widest my-2">Tecnology</Chip>
                    <p className="font-mono text-5xl font-bold mb-2">Smartphone</p>
                    <p className="font-sans text-lg font-normal italic leading-5 mb-2">Best smartphone in the world Labore irure excepteur voluptate</p>
                    <p className="text-sm mb-5 text-right sm:text-left text-gray-500"> Created on 20/20/2014</p>


                    <Progress
                        label="Funds received"
                        size="sm"
                        value={4000}
                        maxValue={10000}
                        color="warning"
                        formatOptions={{ style: "currency", currency: "USD" }}
                        showValueLabel={true}
                        classNames={{
                            label: "font-medium sm:text-base",
                            value: "font-medium sm:text-base",
                            base: "max-w-md",
                        }}
                    />
                    <p className="text-xs mt-2 sm:text-base">Funds necessary to carry out the project: $10.000</p>
                </div>

                <div className="mt-5 sm:mt-10 basis-2/5 ">
                    <p className="text-lg sm:text-xl font-mono uppercase font-bold">Description:</p>
                    <p className="leading-5 text-sm sm:text-base">
                        Occaecat est commodo officia cillum ea elit aliqua officia irure magna in.
                        Culpa in eiusmod cillum nisi duis reprehenderit enim occaecat.
                    </p>
                </div>

            </div>
            <div className="my-10"><p className="text-white">a</p></div>


        </>
    )
};

export default Campaign