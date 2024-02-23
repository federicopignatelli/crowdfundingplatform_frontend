import React from "react";
import { Progress } from "@nextui-org/react";
import { Chip } from "@nextui-org/react";


const Campaign = () => {


    return (
        <>
            <div className="relative h-96 overflow-hidden">
                <img
                    className="w-full h-full object-cover object-center"
                    src="https://app.requestly.io/delay/5000/https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
                    alt="Immagine di copertina"
                />
            </div>
            <p className="font-mono text-4xl font-bold">Smartphone</p>
            <p>Best smartphone in the world</p>
            <p>create from 20/20/2014</p>
            <Chip size="sm" color="warning" className="text-white uppercase tracking-widest">Tecnology</Chip>
            <Progress
                label="Funds received"
                size="sm"
                value={4000}
                maxValue={10000}
                color="warning"
                formatOptions={{ style: "currency", currency: "USD" }}
                showValueLabel={true}
                className="max-w-md"
            />




        </>
    )
};

export default Campaign