import { Briefcase } from 'lucide-react'
import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button" // Assuming you have a Button component in your UI library

const Experience = () => {
    const experiences = [
        {
            role: "Junior Web Developer Intern",
            company: "SYSX Logics",
            period: "April 2024 – August 2024",
            details: [
                "Developed a fully responsive test window for an online learning platform using PERN stack (TypeScript).",
                "Implemented features like question navigation, mark for review, timer, auto-submit, and save answer.",
                "Created REST APIs and used Axios to fetch questions and submit answers.",
                "Worked with PostgreSQL to store user data, test details, questions, and quiz results."
            ],
            github: "https://https://github.com/shivasunugupta/quizWindow.com/yourusername/your-repo", 
            certificate: "https://drive.google.com/drive/folders/18L222B0PijU-t7H_gWBdtbnylfRFTkir"
        },
        {
            role: "Trailhead Agent",
            company: "Salesforce",
            period: "July 2025 – Present",
            details: [
                "Currently completing my Trailhead journey on Salesforce Trailblazer platform."
            ]
        }
    ]

    return (
        <section id='experience' className='py-16'>
            <div className='max-w-7xl mx-auto'>

                {/* Section Heading */}
                <div className='text-center mb-8 mt-5'>
                    <h2 className='flex justify-center items-center mb-4 text-3xl md:text-4xl font-bold'>
                        <Briefcase style={{ width: "2rem", height: '2rem' }} className='mr-4' />My Experience
                    </h2>
                    <p className='px-4 text-slate-600 dark:text-slate-200/80 text-sm sm:text-lg md:text-xl'>
                        Here's my professional journey and the experiences that have shaped my skills in software development.
                    </p>
                </div>

                {/* Experience Cards */}
                <div className='flex flex-col items-center gap-8 px-4'>
                    {experiences.map((exp, index) => (
                        <Card key={index} className='hover:shadow-lg transition-shadow w-full max-w-5xl'>
                            <CardContent className='p-6'>
                                <div className='flex flex-col md:flex-row md:items-center md:justify-between mb-3'>
                                    <h3 className='text-xl font-semibold'>{exp.role}</h3>
                                    <span className='text-sm text-slate-500'>{exp.period}</span>
                                </div>
                                <p className='text-lg font-medium text-blue-600 mb-3'>{exp.company}</p>
                                <ul className='list-disc list-inside space-y-2 text-slate-600 dark:text-slate-200/80 mb-4'>
                                    {exp.details.map((detail, idx) => (
                                        <li key={idx}>{detail}</li>
                                    ))}
                                </ul>

                                {/* Buttons only for first card */}
                                {index === 0 && (
                                    <div className="flex gap-3">
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            onClick={() => window.open(exp.github, "_blank")}
                                        >
                                            GitHub Repo
                                        </Button>
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            onClick={() => window.open(exp.certificate, "_blank")}
                                        >
                                            View Certificate
                                        </Button>
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Experience
