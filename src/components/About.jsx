import React from "react";

const About = () => {
  return (
    <div className="bg-black text-white pt-14 rounded-xl mb-12" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <img src="" alt="" />
          <p className="text-lg mb-8">
            I'm not your average Computer Science degree graduate. Before I
            completed my degree, I had already built a succesful career as a
            Food Service Director for Chartwells Higher Education, but I didn't
            feel like I was using my problem solving and analytical skills to
            their highest potential. So I decided to go back to school in June
            of 2021. For 2 years, I worked full-time and carried a full time
            course load, graduating in December of 2023, just 2 and a half years
            after starting my degree plan. At current, I am back in my role as a
            Director of Dining Services, working on my portfolio and sharpening
            my skills.
            {/* I've been a Food Service manager at various levels for Chartwells
            for 8 years. But I feared that my talents for problem solving were
            being wasted, so in 2022, I decided to go back to school to complete
            a degree in Computer Science. While in school, I worked full time
            while maintaining at least a full-time course load. I completed my
            degree in 2 years, assisted by previous course work in Psychology.
            Now that I have graduated, I'm spending my spare time building a
            portfolio, including this resume website, to build upon my current
            skillset. In school, my courses were focused on Machine Learning,
            Object Oriented Programming, and AI. I recognize that hiring a
            Junior Developer is a costly and important decision. I can only
            point to my track record of consistent employment with multiple
            promotions in 8 years as proof that I am a safe bet.
             */}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
