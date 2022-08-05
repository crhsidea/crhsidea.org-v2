import { NextPage } from 'next';
import { Parallax } from 'react-scroll-parallax';
import { useMediaQuery } from '../hooks/useMediaQuery';
import { LandingPage } from '../ui/landing/LandingPage';
import { Project, ProjectDisplay } from '../ui/projects/ProjectDisplay';

const projects: Project[] = [
  {
    name: 'Greenway',
    description:
      'A fast and interactive way to learn about the manufacturing of your belongings, and what the you can do to reduce your footprint.',
    imgSrc: 'https://crhsidea.org/static/images/Greenway.jpg',
    competitionName: 'Silicon Valley Hacks',
    date: new Date(),
    awardName: 'Best Climate Change Hack',
    won: true,
    competitionURL: 'https://siliconvalleyhacks.devpost.com/',
  },
  {
    name: 'Bot Dilemma',
    description: 'An interactive, creative, and original way to hangout and chat online. ',
    imgSrc: 'https://crhsidea.org/static/images/Greenway.jpg',
    competitionName: 'Something Hacks',
    date: new Date(),
    awardName: 'Best Hack for Something',
    won: true,
    competitionURL: 'https://example.com',
  },
];

const HomePage: NextPage = () => {
  const disableParallax = useMediaQuery('(max-width: 768px)');

  if (disableParallax) {
    return (
      <>
        <LandingPage />
        <ProjectDisplay projects={projects} />
      </>
    );
  }

  return (
    <>
      <Parallax speed={-50}>
        <LandingPage />
      </Parallax>
      <Parallax speed={15}>
        <ProjectDisplay projects={projects} />
      </Parallax>
    </>
  );
};

export default HomePage;
