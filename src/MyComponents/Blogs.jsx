import { ShineBorder } from "@/components/magicui/shine-border"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { useTheme } from "@/utils/darkThemeProvider"
import { ArrowRight, BookOpen, Calendar, Clock } from 'lucide-react'
import React from 'react'

const Blogs = () => {

    const { resolvedTheme } = useTheme();

    const blogs = [
        {
            title: 'API - Explaining it to a complete Newbie',
            description: 'This beginner-friendly blog simplifies APIs with relatable examples, making it easy to understand their purpose and applications—ideal for tech newcomers.',
            image: 'https://assets.showwcase.com/1420x/gallery/newimage7.jpeg?type=webp',
            alt: 'api-blog',
            date: 'June 27, 2023',
            readTime: '3',
            link: 'https://www.showwcase.com/article/35597/api-explaining-it-to-a-complete-newbie',
            featured: true,
        },
        {
            title: 'GitHub Markdown: A Beginners Guide',
            description: 'This blog covers GitHub Markdown basics, offering tips to style text, add links, images, and task lists—perfect for enhancing GitHub repositories and communication.',
            image: 'https://cdn.hashnode.com/res/hashnode/image/upload/v1718003315330/57ea324e-ee9a-4649-a1dd-617a03b81f65.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp',
            alt: 'github-blog',
            date: 'June 10, 2024',
            readTime: '3',
            link: 'https://yashpreet2707.hashnode.dev/github-markdown-a-beginners-guide',
            featured: true,
        },
        {
            title: 'My Postman Student Leader Journey',
            description: 'I share my journey of becoming a Postman Student Leader, from earning the Student Expert Certification to hosting an API 101 session. It\'s a guide for students to explore APIs and grow in the tech community!',
            image: 'https://cdn.hashnode.com/res/hashnode/image/upload/v1693048965667/e68ec320-ed15-4388-8e62-955cbd9e82e0.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp',
            alt: 'postman-blog',
            date: 'August 26, 2023',
            readTime: '2',
            link: 'https://yashpreet2707.hashnode.dev/my-postman-student-leader-journey',
            featured: true,
        },
        // {
        //     title: 'Getting Started with EJS: Embedded JavaScript templates',
        //     description: 'Discover EJS for dynamic web templates in Node.js. Learn setup, template creation, and EJS tags to enhance your web development skills!',
        //     image: 'https://cdn.hashnode.com/res/hashnode/image/upload/v1717360890996/98f4b2a5-94a2-4394-968e-4fb72cc57b32.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp',
        //     alt: 'ejs-blog',
        //     date: 'June 3, 2024',
        //     readTime: '4',
        //     link: 'https://yashpreet2707.hashnode.dev/getting-started-with-ejs-embedded-javascript-templates',
        //     featured: true,
        // }
    ]

    return (
        <section id='blogs' className='py-16'>
            <div className='max-w-7xl mx-auto'>
                <div className='text-center mb-12 mt-5'>
                    <h2 className='flex justify-center items-center mb-4 text-3xl md:text-4xl font-bold'><BookOpen style={{ width: "2rem", height: '2rem' }} className='mr-4' />My Blogs</h2>
                    <p className='px-4 mb-4 text-slate-600 dark:text-slate-200/80 text-sm sm:text-lg md:text-xl'>Sharing my thoughts and learnings about technology and development.<br /> Here are some of my blogs covering various aspects of modern development.</p>
                </div>
                <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3 px-4'>
                    {blogs.map((blog, index) => (
                        <Card key={index} className='group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 backdrop-blur-sm border-0 shadow-lg'>
                            {blog.featured && (
                                <ShineBorder shineColor={resolvedTheme === "dark" ? "green" : "black"} borderWidth={2} />
                            )}
                            <img src={blog.image} alt={blog.alt} className='w-[90%] mx-auto rounded-lg h-48 object-cover transition-transform duration-500 group-hover:scale-110' />
                            <CardHeader>
                                <div className='flex items-center justify-between mb-3'>
                                    <div className='flex items-center space-x-4 text-gray-500 text-sm'>
                                        <div className='flex items-center'>
                                            <Calendar className='h-4 w-4 mr-1' />
                                            {blog.date}
                                        </div>
                                        <div className='flex items-center'>
                                            <Clock className='h-4 w-4 mr-1' />
                                            {blog.readTime} min read
                                        </div>
                                    </div>
                                </div>
                                <CardTitle className='text-xl font-bold group-hover:text-green-600 transition-colors duration-300 leading-tight'>
                                    {blog.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent className='pt-0'>
                                <p className='text-gray-600 mb-6 leading-relaxed'>{blog.description}</p>
                                <Button variant='ghost' className='p-0 h-auto hover:text-green-600 group/button font-semibold'>
                                    <a href={blog.link} target="__blank" className="flex items-center">
                                        Read Full Article
                                        <ArrowRight className='ml-2 h-4 w-4 group-hover/button:translate-x-1 transition-transform duration-300' />
                                    </a>
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Blogs