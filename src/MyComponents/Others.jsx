import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star, ArrowUpRight   } from "lucide-react";

const Others = () => {
  return (
    <section id="others" className="py-16">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-8 mt-5">
          <h2 className="flex justify-center items-center mb-4 text-3xl md:text-4xl font-bold">
            <Star style={{ width: "2rem", height: "2rem" }} className="mr-4" />
            Others
          </h2>
          <p className="px-4 text-slate-600 dark:text-slate-200/80 text-sm sm:text-lg md:text-xl">
            A glimpse into my achievements, hobbies, and personal interests beyond coding.
          </p>
        </div>

        {/* Cards Container */}
        <div className="flex flex-col md:flex-row gap-8 px-4">
          
          {/* Achievements Card */}
          <Card className="hover:shadow-lg transition-shadow w-full">
            <CardContent className="p-6">
              <h3 className="text-2xl font-semibold mb-4"> Achievements</h3>
              <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-slate-200/80">
                <li>GATE 2025 CSE quallifier</li>
                <li>LeetCode: 300+ problems solved <a href="https://leetcode.com/u/Shivasunu_gupta/" target="_blank" rel="noopener noreferrer">
                        <span className="inline-block ml-1 text-blue-500">↗</span>
                    </a></li>
                <li>College Coding Club Lead</li>
              </ul>
            </CardContent>
          </Card>

          {/* Hobbies Card */}
          <Card className="hover:shadow-lg transition-shadow w-full">
            <CardContent className="p-6">
            <h3 className="text-2xl font-semibold mb-4"> Hobbies</h3>
                <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-slate-200/80">
                    <li>Photography</li>
                    <li >Chess - 1400 max on chesscom<a href="https://www.chess.com/member/shinchan725" target="_blank" rel="noopener noreferrer">
                        <span className="inline-block ml-1 text-blue-500">↗</span>
                    </a></li>
                    <li >Sketch and Digital Art <a href="https://www.instagram.com/artxshivasunu/" target="_blank" rel="noopener noreferrer">
                        <span className="inline-block ml-1 text-blue-500">↗</span>
                    </a></li>
                </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Others;

