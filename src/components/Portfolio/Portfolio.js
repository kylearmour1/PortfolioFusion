import React from 'react';
import Project from './Project';
import './Portfolio.css';

function Portfolio() {
  const projects = [
    {
      title: 'Adventure Finder',
      imageUrl: 'https://www.explore.com/img/gallery/the-worlds-best-once-in-a-lifetime-travel-journeys-ranked-by-top-travel-professionals/0-shutterstock_675590356.jpg',
      deployedUrl: 'https://jbungurait.github.io/Adventure_Finder/',
      githubUrl: 'https://github.com/jbungurait/Adventure_Finder'
    },
    {
      title: 'BlogSphere',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRkBuWnNr9v-RgLs7ktDAQXAwSeRLx1eh87g&usqp=CAU',
      deployedUrl: 'https://blogsphere.herokuapp.com',
      githubUrl: 'https://github.com/kylearmour1/BlogSphere'
    },
    {
      title: 'StarWarsQuiz',
      imageUrl: 'https://parade.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cq_auto:good%2Cw_1200/MTkwNTc4MzQyNjY3NzU2NjY5/screen-shot-2022-03-22-at-124908-pm.png',
      deployedUrl: 'https://kylearmour1.github.io/Java-Quiz-Sprint/',
      githubUrl: 'https://github.com/kylearmour1/Java-Quiz-Sprint'
    },
    {
      title: 'StreamVerse',
      imageUrl: 'https://c4.wallpaperflare.com/wallpaper/268/578/436/severe-thunderstorm-at-night-wallpaper-preview.jpg',
      deployedUrl: 'https://github.com/kylearmour1/StreamVerse20',
      githubUrl: 'https://github.com/kylearmour1/StreamVerse20'
    },
    {
      title: 'ReadMeMagician',
      imageUrl: 'https://media.istockphoto.com/id/912003020/photo/magician-or-illusionist-is-showing-magic-trick-blue-stage-light-in-background.jpg?b=1&s=170667a&w=0&k=20&c=pWiOegK2l-0zLGwkeZi8IiGompr4Obeff_mBsGficg8=',
      githubUrl: 'https://github.com/kylearmour1/README-Magician'
    },
    {
      title: 'ExpressMarketEComm',
      imageUrl: 'https://media.istockphoto.com/id/629391430/photo/matrix.jpg?b=1&s=612x612&w=0&k=20&c=08dSkGeKddz55zWTFYjubKZUgUgh0HCCeTmfzlsc62c=',
      githubUrl: 'https://github.com/kylearmour1/Express-Market-E-Comm'
    },
    // More projects...
  ];

  return (
    <section className="portfolio-section">
      <h2 className="portfolio-title">Portfolio</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
