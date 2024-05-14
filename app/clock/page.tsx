"use client";
import { useState, useEffect } from "react";
import { Navigation } from "../components/nav";
import Modal from "../components/modal";

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
        <div className="bg-soft-orange min-h-screen flex flex-col justify-center items-center">
            <Navigation />
            <div className="flex flex-col items-center text-center">
                <h5 className="mb-8 text-lg">
                    Dear Brett Hanna, <br />
                    wish I could count the kisses I've gave you, just to make<br />
                    sure, they are endless. <br />
                    Instead I coded this clock <br />
                    that counts the days, hours, minutes, and seconds that have <br />
                    passed since the day <br />
                    I saw you for the last time. <br />
                </h5>
                <div className="bg-gray-200 p-6 rounded-lg shadow-md inline-block mb-4">
                    <div className="bg-soft-orange text-white text-6xl font-mono py-4 px-8 rounded-lg flex items-center justify-center space-x-2">
						<div className="flex items-baseline space-x-1">
                        <div className="flex items-baseline space-x-1">
                            <span className="inline-block w-20 text-center">{String(elapsedTime.days).padStart(2, '0')}</span>
                            <span className="text-xl ml-1">d</span>
                        </div>
                        <span>:</span>
                        <div className="flex items-baseline space-x-1">
                            <span className="inline-block w-20 text-center">{String(elapsedTime.hours).padStart(2, '0')}</span>
                            <span className="text-xl ml-1">h</span>
                        </div>
                        <span>:</span>
                        <div className="flex items-baseline space-x-1">
                            <span className="inline-block w-20 text-center">{String(elapsedTime.minutes).padStart(2, '0')}</span>
                            <span className="text-xl ml-1">m</span>
                        </div>
                        <span>:</span>
                        <div className="flex items-baseline space-x-1">
                            <span className="inline-block w-20 text-center">{String(elapsedTime.seconds).padStart(2, '0')}</span>
                            <span className="text-xl ml-1">s</span>
                        </div>
						</div>
                    </div>
					<button
                    onClick={handleStopClick}
                    className="bg-glow-orange text-white px-4 py-2 rounded shadow-md hover:bg-red-700 mt-2	"
                >
                    Stop
                </button>
				<p className="mt-4 text-lg text-center">
                    Click the button 'stop' and see what happens 
                </p>
                </div>

                <Modal show={showMessage} onClose={handleCloseModal}>
                    <div className="text-lg text-center">
                        Sorry, mi amor but this clock will only stop, once you kisses me again
                    </div>
                </Modal>
            </div>
        </div>
    );
}
