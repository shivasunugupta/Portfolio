import React, { lazy } from 'react'
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { ShineBorder } from '@/components/magicui/shine-border'
import { useTheme } from '@/utils/darkThemeProvider'
import { Button } from '@/components/ui/button'
import { ExternalLink, FolderOpen, Github } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

const Projects = () => {

    const { resolvedTheme } = useTheme()

    const projects = [
        {
            title: 'Quick AI (All-in-One AI Toolbox)',
            description: 'A powerful AI platform with utilities for generating titles, removing backgrounds, resumes, images, and more.',
            fullDescription: 'A powerful web platform that offers AI-powered utilities to assist with tasks like generating blog titles, removing backgrounds, reviewing resumes, generating images, and more. Integrated using Gemini, Cloudinary, Clipdrop for generation. Neon for DB and Clerk for payment/authentication.',
            image: '/images/quickai.png', 
            alt: 'quick-ai-img',
            technologies: ['React', 'Vite', 'Tailwind', 'NeonDB', 'ClerkAuth', 'Axios', 'Gemini', 'Cloudinary', 'Clipdrop'],
            github: 'https://github.com/shivasunugupta/AI_APP', 
            live: 'https://frontend-eosin-nine-82.vercel.app/',
            featured: true,
        },
        {
            title: 'TV Time (Movie App)',
            description: 'React-based movie search and discovery app powered by TMDB API.',
            fullDescription: 'A sleek React-based movie search and discovery app powered by the TMDB API. Search for movies, see trending picks, and view posters in real-time. Integrated trending section using Appwrite.',
            image: '/images/movie app.png',
            alt: 'tv-time-img',
            technologies: ['ReactJS', 'Tailwind', 'Appwrite', 'NextAuth'],
            github: 'https://github.com/shivasunugupta/movie_app',
            live: 'https://movie-app-r128.vercel.app/',
            featured: true,
        },
        {
            title: 'Tourista (Travel App)',
            description: 'Full-stack travel planning app with interactive maps and AI suggestions.',
            fullDescription: 'A modern full-stack travel planning application. Users can register, login, and plan trips with interactive maps, AI travel suggestions, and payment integration. Built with Syncfusion, Stripe, and Gemini API.',
            image: '/images/Travel app.png',
            alt: 'tourista-img',
            technologies: ['React Router', 'Tailwind CSS', 'TypeScript', 'Appwrite', 'Gemini API', 'Stripe', 'NextAuth', 'Syncfusion'],
            github: 'https://github.com/shivasunugupta/Travel-app',
            live: '',
            featured: true,
        },
        {
            title: 'Portfolio Website',
            description: 'A fully responsive personal portfolio website* built using React, Vite, TailwindCSS, and Three.js.',
            fullDescription: 'This project showcases my skills, projects, and hobbies with modern UI/UX, smooth animations, and interactive 3D elements.',
            image: '/images/portfolio.png',
            alt: 'project-4-img',
            technologies: ['React 19 + Vite' ,'@react-three','Radix UI','MagicUI','EmailJS Browser'],
            github: 'https://github.com/shivasunugupta/Portfolio',
            live: '',
            featured: false,
        },
        {
            title: 'Animated gaming video site',
            description: 'A fully responsive, visually stunning gaming interface built with React, Tailwind CSS, and GSAP animations.',
            fullDescription: 'Designed to immerse users in a dynamic universe of Web2 and Web3 gaming layers, this project demonstrates creative UI/UX blending interactive video cards, hover effects, tilt animations, and more.',
            image: '/images/gamingVideo.png',
            alt: 'project-5-img',
            technologies: ['React','Tailwind CSS','GSAP','React Icons','Vite','React Use','ESLint + Prettier'],
            github: 'https://github.com/shivasunugupta/animated-gaming-site',
            live: 'https://animated-gaming-site-nu.vercel.app/',
            featured: false,
        },
        {
            title: 'Music Landing Page',
            description: 'A sleek and responsive music streaming UI built using React + TypeScript, styled with Tailwind CSS',
            fullDescription: 'Inspired by Spotify design, this app includes features like album display, song preview, and a fully functional audio player with play/pause, next/prev, and seek capabilities.',
            image: '/images/music app.png',
            alt: 'project-6-img',
            technologies: ['React','TypeScript','Tailwind CSS','React Router DOM','Context API' ],
            github: 'https://github.com/shivasunugupta/music_app_landing_page',
            live: 'https://music-app-landing-page.vercel.app/',
            featured: false,
        }
    ]

    return (
        <section id='projects' className='py-16'>
            <div className='max-w-7xl mx-auto'>
                <div className='text-center mb-12 mt-5'>
                    <h2 className='flex justify-center items-center mb-4 text-3xl md:text-4xl font-bold'>
                        <FolderOpen style={{ width: "2rem", height: '2rem' }} className='mr-4' />My Projects
                    </h2>
                    <p className='px-4 mb-4 text-slate-600 dark:text-slate-200/80 text-sm sm:text-lg md:text-xl'>
                        Here are some of my recent projects that showcase my skills in full-stack development
                    </p>
                </div>

                <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3 px-4'>
                    {projects.map((project) => (
                        <Card key={project.title} className='group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 backdrop-blur-sm border-0 shadow-lg'>
                            {
                                <ShineBorder shineColor={resolvedTheme === "dark" ? "green" : "black"} borderWidth={2} />
                            }
                            <CardHeader>
                                <CardTitle className='text-xl group-hover:text-green-600 transition-colors duration-300 leading-tight'>{project.title}</CardTitle>
                                <CardDescription className='text-sm'>{project.description}</CardDescription>
                                <CardAction>
                                    {project.github && (
                                        <Button variant='ghost' size='icon'>
                                            <a href={project.github} target='__blank'>
                                                <Github style={{ width: '1.2rem', height: '1.2rem' }} />
                                            </a>
                                        </Button>
                                    )}
                                    {project.live && (
                                        <Button variant='ghost' size='icon'>
                                            <a href={project.live} target='__blank'>
                                                <ExternalLink style={{ width: '1.2rem', height: '1.2rem' }} />
                                            </a>
                                        </Button>
                                    )}
                                </CardAction>
                            </CardHeader>
                            <CardContent className='relative w-full'>
                                {project.image && (
                                    <img
                                        className="rounded-md w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                                        src={project.image}
                                        alt={project.alt}
                                        loading="lazy"
                                    />
                                )}
                            </CardContent>
                            <CardFooter className='flex flex-wrap gap-1'>
                                {project.technologies.map((tech, index) => (
                                    <Badge key={index} variant='outline'>{tech}</Badge>
                                ))}
                            </CardFooter>

                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects
