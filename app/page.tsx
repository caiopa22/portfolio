"use client"

import Image from "next/image";
import ThemeToggle from "../src/components/ui/theme-toggle";
import Header from "../src/components/header";
import { Experience, Section } from "../src/models/models";
import { ArrowDownIcon, ChevronDownIcon } from "@heroicons/react/16/solid";
import experiencesData from "../src/data/experiences.json";
import { useEffect, useState } from "react";
import Tag from "@/src/components/ui/tag";

export default function Home() {


  const experiences: Experience[] = experiencesData;
  const experienceCompanies: string[] = experiences.map((exp) => exp.company);
  const [selectedExperience, setSelectedExperience] = useState<string>(experiences[0].company);

  const sections: Section[] = [
    { name: "Início", ref: undefined },
    { name: "Sobre mim", ref: undefined },
    { name: "Experiência", ref: undefined },
    { name: "Projetos", ref: undefined }
  ]

  useEffect(() => {
    console.log(experiences);
  }, []);

  return (
    <>
      <Header sections={sections} />
      <main className="flex flex-col gap-96">
        <section className="min-h-[80vh] flex items-center">
          <div className="mt-12">
            <p className="text-foreground text-2xl">Olá, eu sou o</p>
            <h4 className="text-primary font-mono text-4xl">Caio Pacheco Andrade</h4>
            <div className="flex flex-col gap-4">
              <h1 className="font-mono text-[9rem] font-extrabold leading-36">Fullstack</h1>
              <h1 className="font-mono text-[9rem] font-extrabold leading-36">Developer &</h1>
              <h1 className="font-mono text-[9rem] font-extrabold leading-36">UX/UI Designer.</h1>
            </div>
            <ArrowDownIcon className="size-16 mt-16 animate-bounce" />
          </div>
        </section>
        <section className="flex justify-between items-center">
          <div className="flex flex-col gap-8">
            <h2 className="text-foreground text-8xl font-bold">Sobre mim</h2>
            <p className="text-gray-400 text-3xl w-4/5">
              Sou um desenvolvedor apaixonado por criar experiências digitais únicas e funcionais. Com expertise em desenvolvimento fullstack e design UX/UI, trabalho para transformar ideias em soluções inovadoras que conectam tecnologia e criatividade de forma harmoniosa.
            </p>
          </div>
          <img
            src="/caio-pfp.svg"
          />
        </section>
        <section className="flex justify-between">
          <div className="flex flex-col gap-10 w-fit">
            <h2 className="text-foreground text-8xl font-bold">Experiência</h2>
            <div className="flex justify-end items-center cursor-pointer">
              <div className="flex items-center justify-between gap-2">
                <p className="font-mono text-xl">Filtros</p>
                <ChevronDownIcon className="size-6" />
              </div>
            </div>
            <div className="flex flex-col">
              {experienceCompanies.map((company) => {
                return (
                  <div
                    key={company}
                    className={
                      `cursor-pointer text-foreground font-semibold text-2xl pl-8 py-3 font-poppins
                      ${selectedExperience === company && 'bg-secondary'}`
                    }
                    onClick={() => setSelectedExperience(company)}
                  >
                    {company}
                  </div>
                )
              })}
            </div>
          </div>
          <div>
            {experiences.filter(exp => exp.company === selectedExperience).map((exp) => (
              <div key={exp.company}>
                <p>{exp.period}</p>
                <div className="flex gap-4">
                  {exp.stacks.map((stack) => (
                    <Tag key={stack} text={stack} />
                  ))}
                </div>
                <h1>{exp.title}</h1>
                <label>{exp.description}</label>

                <ul>
                  {exp.workdetails.map((detail, index) => (
                    <div key={index} className="topic">
                      <span>●</span> {detail}
                    </div>
                  ))}
                </ul>

              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
