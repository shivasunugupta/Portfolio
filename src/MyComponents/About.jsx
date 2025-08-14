import { Code, Database, Globe, User, GraduationCap, School, BookOpen } from 'lucide-react'
import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from '@/components/ui/badge'

const About = () => {
    const skills = [
        {
            category: 'Languages',
            items: [ 'Java', 'Python' ,'TypeScript', 'Javascript'],
            icon: Code,
        },
        {
            category: 'Development',
            items: ['React', 'Next.js','Node.js', 'Express', 'MongoDB', 'PostgreSQL' , 'Tailwind CSS'  ],
            icon: Globe,
        },
        {
            category: 'Technologies',
            items: [ 'Git-Github','Docker','AWS','Postman', 'Appwrite' ],
            icon: Database,
        }
        
    ]

    const education = [
        {
            category: 'B.Tech CSE',
            items: ['DIT University', '2022 - Present', 'CGPA: 8.1'],
            icon: GraduationCap,
        },
        {
            category: 'Intermediate (12th)',
            items: ['Jayshree Periwal High School (Jpr)', '2020 - 2022', 'Percentage: 92.4%'],
            icon: School,
        },
        {
            category: 'High School (10th)',
            items: ['Mangal Newton School', '2018 - 2020', 'Percentage: 94.8%'],
            icon: BookOpen,
        }
    ]

    return (
        <section id='about' className='relative'>
            <div className='max-w-7xl mx-auto py-16'>
                
                {/* About Me Heading */}
                <div className='text-center mb-12 mt-5'>
                    <h2 className='flex justify-center items-center text-3xl md:text-4xl font-bold mb-4'>
                        <User style={{ width: "2rem", height: '2rem' }} className='mr-4' />About Me
                    </h2>
                    
                    <p className='px-4 mb-4 text-slate-600 dark:text-slate-200/80 text-sm sm:text-lg md:text-xl'>
                        I’m currently in my pre-final year of Computer Science Engineering, 
                        where I’ve built a strong foundation in programming, data structures & algorithms, 
                        and system design. My passion lies in full-stack web development and cloud computing.
                    </p>
                    <p className='px-4 mb-4 text-slate-600 dark:text-slate-200/80 text-sm sm:text-lg md:text-xl'>
                        Outside of academics, I enjoy sketching, listening to music, playing chess, 
                        and staying active through various sports.
                    </p>
                    <p className='px-4 mb-4 text-slate-600 dark:text-slate-200/80 text-sm sm:text-lg md:text-xl'>
                        Developed strong team leadership, time management under pressure ,
                         and clear communication skills by organizing multiple college events as Overall Student Coordinator
                    </p>
                </div>

                {/* Skills Section */}
                <div className='p-4'>
                    <h3 className='text-2xl font-semibold mb-8 text-center'>Skills</h3>
                    <div className='flex flex-wrap justify-center gap-10'>
                        {skills.map(skill => (
                            <Card 
                                key={skill.category} 
                                className='hover:shadow-lg transition-shadow w-[300px]'
                            >
                                <CardContent className='px-4 py-6'>
                                    <div className='flex items-center mb-4 gap-x-2'>
                                        <div className='p-2 rounded-lg bg-gradient-to-r from-blue-100 to-purple-100 mr-3'>
                                            <skill.icon 
                                                style={{ width: '1.5rem', height: '1.5rem' }} 
                                                className='text-blue-500' 
                                            />
                                        </div>
                                        <h4 className='font-semibold text-lg'>{skill.category}</h4>
                                    </div>
                                    <div className='flex flex-wrap gap-2'>
                                        {skill.items.map((item, index) => (
                                            <Badge key={index} variant='secondary' className='text-xs'>
                                                {item}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Education Section */}
                <div className='p-4 mt-16'>
                    <h3 className='text-2xl font-semibold mb-8 text-center'>Education</h3>
                    <div className='flex flex-wrap justify-center gap-10'>
                        {education.map(edu => (
                            <Card 
                                key={edu.category} 
                                className='hover:shadow-lg transition-shadow w-[300px]'
                            >
                                <CardContent className='px-4 py-6'>
                                    <div className='flex items-center mb-4 gap-x-2'>
                                        <div className='p-2 rounded-lg bg-gradient-to-r from-green-100 to-teal-100 mr-3'>
                                            <edu.icon 
                                                style={{ width: '1.5rem', height: '1.5rem' }} 
                                                className='text-green-600' 
                                            />
                                        </div>
                                        <h4 className='font-semibold text-lg'>{edu.category}</h4>
                                    </div>
                                    <div className='flex flex-col gap-1 text-base font-semibold text-slate-800 dark:text-slate-100'>
                                        {edu.items.map((item, index) => (
                                            <span key={index}>{item}</span>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    )
}

export default About
