"use client";	
import { useState, useEffect } from "react";
import { Navigation } from "../components/nav";
import Modal from "../components/modal";
import Particles from "../components/particles";  // Importar el componente de partículas
import Link from "next/link";
import React from "react";

const navigation = [
  { name: "Click here babe", href: "/clock" },
];


export default function Example() {
    const [elapsedTime, setElapsedTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    const [showMessage, setShowMessage] = useState(false);

    useEffect(() => {
        const targetDate = new Date("2024-04-09T00:00:00");

        const updateElapsedTime = () => {
            const now = new Date();
            const diff = now.getTime() - targetDate.getTime();

            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((diff / (1000 * 60)) % 60);
            const seconds = Math.floor((diff / 1000) % 60);

            setElapsedTime({ days, hours, minutes, seconds });
        };

        updateElapsedTime();
        const interval = setInterval(updateElapsedTime, 1000);

        return () => clearInterval(interval);
    }, []);

    const handleStopClick = () => {
        setShowMessage(true);
    };

    const handleCloseModal = () => {
        setShowMessage(false);
    };

    return (

		<div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden ">
		<nav></nav>
		<Particles
		  className="absolute inset-0 -z-10 "
		  quantity={300}
		/>
		<div className="flex flex-col items-center text-center">
		<div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r bg-glow-orange" />

                <h5 className="mb-8 text-lg font-cormorant">
					
                    Dear <span className="text-glow-orange">Brett</span> Hanna, <br />
                    wish I could count the <span className="text-glow-orange">kisses</span> I've gave you, <br />
                    just to makesure, they are <span className="text-glow-orange">endless</span>. <br />
					I want to wish you the happiest birthday, <br />
					you're my <span className="text-glow-orange">honeypot</span> ant. <br />
					wish I could be there to <span className="text-glow-orange">celebrate with you</span>, <br />
                    Instead, I coded this <span className="text-white bg-glow-orange rounded-lg p-1">clock</span> that counts  <br />
                    the days, hours, minutes, and seconds  <br />
                    that have passed since the day <br />
                    I saw you for the <span className="text-glow-orange">last</span> time. <br />
                </h5>
		
                <div className="bg-white p-3 rounded-lg shadow-md inline-block mb-4">
                    <div className="bg-glow-orange text-white text-3xl font-mono py-2 px-4 rounded-lg flex items-center justify-center space-x-1">
                        <div className="flex items-baseline space-x-1">
                            <span className="inline-block w-10 text-center">{String(elapsedTime.days).padStart(2, '0')}</span>
                            <span className="text-lg ml-1">d</span>
                        </div>
                        <span>:</span>
                        <div className="flex items-baseline space-x-1">
                            <span className="inline-block w-10 text-center">{String(elapsedTime.hours).padStart(2, '0')}</span>
                            <span className="text-lg ml-1">h</span>
                        </div>
                        <span>:</span>
                        <div className="flex items-baseline space-x-1">
                            <span className="inline-block w-10 text-center">{String(elapsedTime.minutes).padStart(2, '0')}</span>
                            <span className="text-lg ml-1">m</span>
                        </div>
                        <span>:</span>
                        <div className="flex items-baseline space-x-1">
                            <span className="inline-block w-10 text-center">{String(elapsedTime.seconds).padStart(2, '0')}</span>
                            <span className="text-lg ml-1">s</span>
                        </div>
                    </div>
                </div>
                <button
                    onClick={handleStopClick}
                    className="bg-glow-orange text-white px-4 py-2 rounded shadow-md hover:bg-white hover:text-glow-orange mt-2 font-display"
                >
                    Stop
                </button>
                <p className=" text-sm mt-4 text-center">
                    Babe click the button 'stop' and see what happens 
                </p>
				<div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r bg-glow-orange" />

                <Modal show={showMessage} onClose={handleCloseModal}>
                    <div className="text-lg text-center text-glow-orange ">
                        ¡¡Sorry babe but this clock will only stop, once you kiss me again...!!
                    </div>
                </Modal>
            </div>
	  </div>
    );
}
