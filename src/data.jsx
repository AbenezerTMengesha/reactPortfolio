import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';

import Work1 from './assets/project-1.jpg';
import Work2 from './assets/project-2.jpg';
import Work3 from './assets/project-3.jpeg';
import Work4 from './assets/project-4.jpeg';
import Work5 from './assets/project-5.jpg';
import Work6 from './assets/project-6.jpg';

import Theme1 from './assets/purple.png';
import Theme2 from './assets/red.png';
import Theme3 from './assets/blueviolet.png';
import Theme4 from './assets/blue.png';
import Theme5 from './assets/goldenrod.png';
import Theme6 from './assets/magenta.png';
import Theme7 from './assets/yellowgreen.png';
import Theme8 from './assets/orange.png';
import Theme9 from './assets/green.png';
import Theme10 from './assets/yellow.png';

export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className='nav__icon' />,
    path: '/',
  },

  {
    id: 2,
    name: 'About',
    icon: <FaUser className='nav__icon' />,
    path: '/about',
  },

  {
    id: 3,
    name: 'Portfolio',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '/portfolio',
  },

  {
    id: 4,
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contact',
  },
];

export const personalInfo = [
  {
    id: 1,
    title: 'First Name : ',
    description: 'Abenezer',
  },

  {
    id: 2,
    title: 'Last Name : ',
    description: 'Mengesha',
  },

  {
    id: 3,
    title: 'Freelance : ',
    description: 'Available',
  },

  {
    id: 4,
    title: 'Langages : ',
    description: 'English, Amharic',
  },
];

export const stats = [
  {
    id: 1,
    no: '2+',
    title: 'Years of <br /> Experience',
  },

  {
    id: 2,
    no: '3+',
    title: 'Completed <br /> Projects',
  }
];

export const resume = [
  {
    id: 1,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2023',
    title: 'Coding Bootcamp <span> Carlton University </span>',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do tempor incididunt ut labore',
  },

  {
    id: 2,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2021',
    title: 'Programming Diploma <span> Algonquin College </span>',
    desc: 'Lorem incididunt dolor sit amet, consectetur eiusmod dunt doldunt dol elit, tempor incididunt',
  },
];

export const skills = [
  {
    id: 1,
    title: 'Html',
    percentage: '70',
  },

  {
    id: 2,
    title: 'Javascript',
    percentage: '80',
  },

  {
    id: 3,
    title: 'CSS',
    percentage: '70',
  },

  {
    id: 4,
    title: 'SQL',
    percentage: '66',
  },

  {
    id: 5,
    title: 'NodeJS',
    percentage: '70',
  },

  {
    id: 6,
    title: 'Jquery',
    percentage: '50',
  },

  {
    id: 7,
    title: 'Java',
    percentage: '50',
  },

  {
    id: 8,
    title: 'React',
    percentage: '65',
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: 'Recipe Website',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Feastful Finds',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Bootcamp',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'JS, HTML, CSS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'teriannephillips.github.io/Feastful-Finds',
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: 'Flower Shop',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Website',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Bootcamp',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'JS, HTML, CSS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'flower-emporium.herokuapp.com/',
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: 'Upcoming Project...',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: '',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: '',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: '',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: '',
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: 'Upcoming Project...',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: '',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: '',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: '',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: '',
      },
    ],
  },

  {
    id: 5,
    img: Work5,
    title: 'Upcoming Project...',
    details: [
      {
        title: 'Project : ',
        desc: '',
      },
      {
        title: 'Client : ',
        desc: '',
      },
      {
        title: 'Language : ',
        desc: '',
      },
      {
        title: 'Preview : ',
        desc: '',
      },
    ],
  },

  {
    id: 6,
    img: Work6,
    title: 'Upcoming Project...',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: '',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: '',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: '',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: '',
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(252, 35%, 51%)',
  },

  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: Theme10,
    color: 'hsl(42, 100%, 50%)',
  },
];
