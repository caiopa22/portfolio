"use client"

import Image from "next/image";
import ThemeToggle from "../src/components/ui/theme-toggle";
import Header from "../src/components/header";
import { Experience, Project, Section,  } from "../src/models/models";
import { ArrowDownIcon, ChevronDownIcon } from "@heroicons/react/16/solid";
import experiencesData from "../src/data/experiences.json";
import projectsData from "../src/data/projects.json";
import { RefObject, useEffect, useRef, useState } from "react";
import Tag from "@/src/components/ui/tag";
import { useTheme } from "next-themes";
import Footer from "@/src/components/footer";

export default function Home() {

  const experiencesRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null); 

  const { theme } = useTheme();

  const projects: Project[] = projectsData;

  const experiences: Experience[] = experiencesData;
  const [selectedExperience, setSelectedExperience] = useState<string>(experiences[0].company);

  const sections: Section[] = [
    { name: "Início", ref: null },
    { name: "Sobre mim", ref: null },
    { name: "Experiência", ref: experiencesRef },
    { name: "Projetos", ref: projectsRef }
  ]

  return (
    <>
      <Header sections={sections} />
      <main className="flex flex-col gap-128">
        <section className="min-h-[80vh] flex items-center overflow-x-hidden">
          <div className="mt-12">
            <p className="text-foreground text-2xl">Olá, eu sou o</p>
            <h4 className="text-primary font-mono text-4xl">Caio Pacheco Andrade</h4>
            <div className="flex flex-col gap-4">
              <h1 className="font-mono text-[9rem] font-extrabold  leading-36">Fullstack</h1>
              <h1 className="font-mono text-[9rem] font-extrabold leading-36">Developer &</h1>
              <h1 className="font-mono text-[9rem] font-extrabold leading-36">UX/UI Designer.</h1>
            </div>
            <ArrowDownIcon className="size-16 mt-16 animate-bounce" />
          </div>
        </section>
        <section className="flex justify-between items-center gap-56">
          <img
            src="/caio-pfp.png"
          />
          <div className="flex flex-col gap-8">
            <h2 className="text-foreground text-8xl font-bold">Sobre mim</h2>
            <p className="text-gray-400 text-3xl">
              Sou um desenvolvedor apaixonado por criar experiências digitais únicas e funcionais. Com expertise em desenvolvimento fullstack e design UX/UI, trabalho para transformar ideias em soluções inovadoras que conectam tecnologia e criatividade de forma harmoniosa.
            </p>
          </div>
        </section>
        <section className="flex gap-48 py-32" ref={experiencesRef}>
          <div className="flex flex-col gap-10 w-fit">
            <h2 className="text-foreground text-8xl font-bold">Experiência</h2>
            <div className="flex justify-end items-center ">
              <div className="flex items-center justify-between gap-2 hover:underline  cursor-(--custom-cursor-pointer)">
                <p className="font-mono text-xl">Filtros</p>
                <ChevronDownIcon className="size-6" />
              </div>
            </div>
            <div className="flex flex-col">
              {experiences.map((exp) => exp.company).map((company) => {
                return (
                  <div
                    key={company}
                    className={
                      `cursor-(--custom-cursor-pointer) text-foreground  text-2xl pl-8 py-3 transition font-poppins
                      ${selectedExperience === company
                        ? theme === 'dark' ? 'bg-primary' : 'bg-secondary'
                        : theme === 'dark'
                          ? 'hover:bg-gray-800'
                          : 'hover:bg-gray-100'
                      }`
                    }
                    onClick={() => {
                      setSelectedExperience(company);
                      experiencesRef.current!.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    {company}
                  </div>
                )
              })}
            </div>
          </div>
          <div>
            {experiences.filter(exp => exp.company === selectedExperience).map((exp) => (
              <div className="flex flex-col gap-4" key={exp.company}>
                <p className="text-gray-400 font-opensans text-xl">{exp.period}</p>
                <div className="flex gap-4">
                  {exp.stacks.map((stack) => (
                    <Tag key={stack} text={stack} />
                  ))}
                </div>
                <h1 className="font-bold text-6xl">{exp.title}</h1>
                <label className="font-opensans text-2xl text-gray-400 cursor-(--custom-cursor)">{exp.description}</label>

                <ul className="flex flex-col gap-4">
                  {exp.workdetails.map((detail, index) => (
                    <div key={index} className="topic font-opensans text-2xl text-gray-400">
                      <span className="mr-2">●</span> {detail}
                    </div>
                  ))}
                </ul>

              </div>
            ))}
          </div>
        </section>
        <section className="flex flex-col gap-16 " ref={projectsRef}>
          <div className="flex items-end gap-12 ">
            <h2 className="text-foreground text-8xl font-bold">Projetos</h2>
            <div className="flex items-center justify-between gap-2 hover:underline  cursor-(--custom-cursor-pointer)">
              <p className="font-mono text-xl">Filtros</p>
              <ChevronDownIcon className="size-6" />
            </div>
          </div>
          <div className="flex flex-col gap-8">
            {projects.map((project) => (
              <div
                suppressHydrationWarning
                key={project.slug}
                className={`cursor-(--custom-cursor-pointer2) flex flex-col gap-2 transition p-6 rounded-lg ${theme === 'dark' ? 'hover:bg-gray-800' : 'hover:bg-gray-100'}`}
              >
                <div className="flex gap-4">
                  {project.stacks.map((stack) => (
                    <Tag key={stack} text={stack} />
                  ))}
                </div>
                <h3 className="font-bold text-3xl text-foreground">{project.title}</h3>
                <p className="font-opensans text-xl text-gray-400 w-3/6">{project.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <div className="w-screen relative left-1/2 -translate-x-1/2 mt-24">
        <Footer />
      </div>
      <div className="w-64 h-64 rounded-full bg-[radial-gradient(circle,rgba(255,0,0,0.1),rgba(255,255,255,0.05))]" />
    </>
  );
}
