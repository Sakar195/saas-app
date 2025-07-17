import CompaninionsList from "@/components/CompaninionsList";
import CompanionCard from "@/components/CompanionCard";
import CTA from "@/components/CTA";
import { Button } from "@/components/ui/button";
import { recentSessions } from "@/constants";
import React from "react";

const Page = () => {
    return (
        <div>
            <h1 className="text-2xl underline"> Popular Companions</h1>

            <section className="home-section">
                <CompanionCard
                    id="123"
                    name="Neura the Brainy Explored"
                    topic="Neural network of the Brain"
                    subject="Science"
                    duration={45}
                    color="#ffda6e"
                />
                <CompanionCard
                    id="124"
                    name="Countsy the Number Wizard"
                    topic="Derivatives & Integrals"
                    subject="Maths"
                    duration={30}
                    color="#e5d0ff"
                />
                <CompanionCard
                    id="125"
                    name="Verba the Vocabulary Builder"
                    topic="English Literature"
                    subject="Language"
                    duration={30}
                    color="#BDE7FF"
                />
            </section>

            <section className="home-section">
                <CompaninionsList
                    title="Recently completed sessions"
                    companions={recentSessions}
                    classNames="w-2/3 max-lg:w-full"
                />
                <CTA />
            </section>
        </div>
    );
};

export default Page;
