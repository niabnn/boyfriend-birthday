"use client";
import { Github, Mail, Twitter } from "lucide-react";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

export default function Example() {
	return (
		<div className=" bg-soft-orange	">
			<Navigation />	
			<div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
				<div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-3 lg:gap-16">
					<h5 >
						Dear Brett Hanna, <br />
						wish I could count the kisses I've gave you, just to make<br/>
						sure, they are  endless. <br />
						Intead I code this clock <br />
						that counts the minutes that has <br />
						pass since the day <br />
						I saw you for the last time. <br />
					</h5>
					
				</div>
			</div>
		</div>
	);
}

