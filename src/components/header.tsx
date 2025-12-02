import { RefObject } from "react";
import ThemeToggle from "./ui/theme-toggle";
import { Section } from "../models/models";

interface Props {
    sections: Section[];
}

export default function Header({ sections }: Props) {

    const scrollToSection = (ref: RefObject<HTMLElement>) => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    };
    
    return (
        <header className="flex items-center justify-between py-8">

            <div/>

            <nav className="flex items-center gap-8">
                {sections.map((section, index) => (
                    <button
                        key={index}
                        className="font-poppins cursor-pointer text-xl"
                        onClick={() => scrollToSection(section.ref!)}
                    >
                        {section.name}
                    </button>
                ))}
            </nav>
            <ThemeToggle />
        </header>
    );
}   