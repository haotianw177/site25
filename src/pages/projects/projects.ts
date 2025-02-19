import { getRepositoryDetails } from "../../utils";

export interface Project {
  name: string;
  demoLink: string;
  tags?: string[],
  description?: string;
  postLink?: string;
  demoLinkRel?: string;
  [key: string]: any;
}

export const projects: Project[] = [
  {
    name: 'Digital Garden: Put that there',
    description: 'A letter drawing machine that take keyboard and mouse input',
    demoLink: 'https://fontsdrawingmachine.netlify.app/',
    tags: ['Web Design']
  },
  {
    name: 'Unity Garden',
    description: 'A project exploring visualization of waveform through Tone.js library',
    demoLink: '',
    demoLinkRel: 'nofollow noopener noreferrer',
    tags: ['Software Development']
  },
  {
    name: 'Budget-Breeze',
    description: 'A project exploring visualization of waveform through Tone.js library',
    demoLink: '',
    demoLinkRel: 'nofollow noopener noreferrer',
    tags: ['Software Development']
  },
  {
    name: 'Space Invader',
    description: 'A project exploring visualization of waveform through Tone.js library',
    demoLink: '',
    demoLinkRel: 'nofollow noopener noreferrer',
    tags: ['Software Development']
  },
  {
    name: 'Arcturus',
    description: 'A series of ambient poems that explored nonlinear storytelling on the web.',
    demoLink: 'https://arcturus0.netlify.app/',
    demoLinkRel: 'nofollow noopener noreferrer',
    tags: ['Web Design']
  },
  {
    name: 'Parsons Senior Thesis',
    description: 'A series of ambient poems that explored nonlinear storytelling on the web.',
    demoLink: 'https://arcturus0.netlify.app/',
    demoLinkRel: 'nofollow noopener noreferrer',
    tags: ['Web Design']
  },
  {
    name: 'Wavefrom Machine',
    description: 'A project exploring visualization of waveform through Tone.js library',
    demoLink: '',
    demoLinkRel: 'nofollow noopener noreferrer',
    tags: ['Web Design']
  },
  

  // {
  //   ...(await getRepositoryDetails('devaradise/paradise-ui')),
  //   name: 'Space Invader',
  //   demoLink: '',
  //   postLink: 'https://devaradise.com/how-i-build-paradise-ui-react-component-library/',
  //   tags: ['React', 'UI Library']
  // }
]
