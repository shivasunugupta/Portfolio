import { Button } from '@/components/ui/button'
import { useTheme } from '@/utils/darkThemeProvider'
import React, { useEffect, useState } from 'react'

const Hero = () => {
    const scrollToSection = (sectionId) => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
        setIsMenuOpen(false);
    };

    const { resolvedTheme } = useTheme()

    const [color, setColor] = useState("#ffffff");

    useEffect(() => {
        setColor(resolvedTheme === "dark" ? "#ffffff" : "#000000");
    }, [resolvedTheme]);

    return (
        <section id='home'>
            <div className="absolute h-[1000px] sm:h-[700px] w-full overflow-hidden -z-10">
            </div>
            <div className='max-w-7xl mx-auto relative'>
                <div className='text-center py-16 mt-16'>
                    <h1 className='text-4xl md:text-6xl font-bold my-6'>Hi I'm <span className='bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text '>Shivasunu Gupta</span></h1>
                    <p className="text-xl text-slate-600 dark:text-slate-200/80 md:text-2xl mb-6">
                        Pre-Final Year CS Student & Full Stack Developer
                    </p>
                    <p className="text-lg text-slate-600 dark:text-slate-200/80 max-w-2xl mx-auto mb-8 px-2">
                        Passionate about building scalable, high-performance web applications and exploring cloud technologies. 
                    </p>
                    <div className='flex justify-center space-x-4'>
                        <Button onClick={() => scrollToSection('projects')} className='cursor-pointer bg-green-600 hover:bg-green-700'>
                            <a href="https://drive.google.com/drive/folders/1S_05Q26DP8Xhgv2_xAXBRPXPQzs8z4ya?usp=drive_link" target='__blank'>My Resume</a>
                        </Button>
                        <Button onClick={() => scrollToSection('contact')} className='cursor-pointer'>Get In Touch</Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero