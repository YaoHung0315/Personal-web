// All site content lives here so it is easy to update in one place.

/** Prefix a public-folder path with the Vite base URL (for GitHub Pages). */
export const asset = (path: string) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;

export const profile = {
  name: 'Yao-Hung Tsai',
  role: 'Advanced Controls Engineer · Corning Incorporated',
  affiliation: 'Physics-Informed ML · M.E., NTU Applied Mechanics',
  photo: asset('profile-photo.jpg'),
  interests: [
    'Simulation & Modeling',
    'Physics-Informed ML',
    'Digital Twin',
    'High-Performance Computing',
  ],
  about: [
    'I specialize in **computational modeling** and **physics-informed machine learning**. I leverage high-fidelity numerical simulation to investigate complex physical phenomena, while harnessing **physics-based AI surrogate models** to dramatically boost **computational efficiency** and **predictive accuracy**. By integrating these methodologies, I build **robust digital twins** for rapid simulation and advanced control analysis — turning days of computation into seconds. I am deeply passionate about this field and driven to continuously **push the boundaries** of what this technology can achieve.',
  ],
  contact: {
    email: 'phank0315@gmail.com',
    linkedin: 'https://linkedin.com/in/yao-hung-tsai-2b14b1218',
    scholar: 'https://scholar.google.com/citations?user=2UAMLJAAAAAJ&hl=en',
  },
  cv: asset('file/CV.pdf'),
};

export type Education = {
  school: string;
  degree: string;
  period: string;
  logo: string;
  details: string[];
};

export const education: Education[] = [
  {
    school: 'National Taiwan University',
    degree: "Master's, Applied Mechanics",
    period: 'Sep 2023 — Aug 2025',
    logo: asset('NTU.jpg'),
    details: ['Advisor: Prof. Yi-Ju Chou', 'GPA: 3.99 / 4.3', 'Credits: 27'],
  },
  {
    school: 'National Taiwan University',
    degree: "Bachelor's, Civil Engineering",
    period: 'Sep 2019 — Jun 2023',
    logo: asset('NTU.jpg'),
    details: ['GPA: 3.69 / 4.0', 'Credits: 168'],
  },
];

export type WorkExperience = {
  company: string;
  title: string;
  period: string;
  logo: string;
  details: string[];
};

export const workExperience: WorkExperience[] = [
  {
    company: 'Corning Incorporated',
    title: 'Advanced Controls Engineer',
    period: 'Oct 2025 — Present',
    logo: asset('corning-logo.svg'),
    details: ['Asia Region · Taichung, Taiwan'],
  },
  {
    company: 'National Taiwan University',
    title: 'Research Assistant',
    period: 'Sep 2023 — Aug 2025',
    logo: asset('NTU.jpg'),
    details: ['Institute of Applied Mechanics'],
  },
];

export type SkillGroup = { title: string; items: string[] };

export const skills: SkillGroup[] = [
  { title: 'Numerical Simulation', items: ['C++', 'Fortran', 'CUDA', 'MPI', 'MATLAB'] },
  { title: 'Machine Learning', items: ['Python', 'PyTorch', 'R'] },
  { title: 'Software', items: ['ANSYS Fluent', 'OpenFOAM', 'AutoCAD', 'SOLIDWORKS'] },
];

export type Publication = {
  title: string;
  authors: string;
  venue: string;
  year: string;
  status: 'Published' | 'Under Review' | 'In Preparation' | 'Manuscript';
  link?: string;
  linkText?: string;
};

export const publications: Publication[] = [
  {
    title: 'A simulated annealing framework for stabilizing hybrid AI–CFD solvers',
    authors: 'Y.-H. Tsai, Y.-J. Chou',
    venue: 'Nature Computational Science',
    year: '2026',
    status: 'Manuscript',
  },
  {
    title:
      'Data-driven turbulence closure using a tensor basis neural network without reliance on baseline models',
    authors:
      'Y.-H. Tsai, Y. Wang, C.-J. Cheng, C.-Y. Hung, Y.-E. Chou, K.-L. Li, C.-C. Tseng, R.-L. Chern, Y.-J. Chou',
    venue: 'Journal of Fluid Mechanics, Vol. 1033, A15',
    year: '2026',
    status: 'Published',
    link: 'https://doi.org/10.1017/jfm.2026.11414',
    linkText: 'DOI: 10.1017/jfm.2026.11414',
  },
  {
    title: 'On the suspension and deposition within turbidity currents',
    authors: 'Y.-H. Tsai, Y.-J. Chou',
    venue: 'Journal of Fluid Mechanics, Vol. 1003, A1',
    year: '2025',
    status: 'Published',
    link: 'https://doi.org/10.1017/jfm.2024.1174',
    linkText: 'DOI: 10.1017/jfm.2024.1174',
  },
];

export type Honor = {
  title: string;
  org: string;
  years: string;
};

export const honors: Honor[] = [
  {
    title: 'Dean’s Award',
    org: 'College of Engineering, National Taiwan University',
    years: 'Aug 2025',
  },
  {
    title: 'Best Paper Poster Award',
    org: 'Institute of Applied Mechanics, National Taiwan University',
    years: 'Jun 2025',
  },
];

export type ConferenceItem = {
  title: string;
  type: string;
  date?: string;
  location?: string;
  link?: string;
};

export type ProjectCategory = 'Research' | 'Working Experience' | 'Side Project';

export type Project = {
  id: string;
  category: ProjectCategory;
  title: string;
  tags?: string[];
  org?: string;
  period?: string;
  image?: string;
  imageSize?: 'sm' | 'md' | 'lg';
  description?: string[];
  bullets?: string[];
  highlights?: { title: string; description: string }[];
  technologies: string[];
  link?: string;
  linkText?: string;
  demo?: string;
  publication?: Publication;
  conferences?: ConferenceItem[];
};

export const projects: Project[] = [
  // ---- Research (NTU) ----
  {
    id: 'simulated-annealing',
    category: 'Research',
    title: 'Simulated Annealing for AI–CFD Convergence',
    tags: ['Physics-Informed Machine Learning'],
    org: 'National Taiwan University',
    period: 'Jun 2025 — Present',
    image: asset('research/sa-framework.jpg'),
    imageSize: 'lg',
    bullets: [
      'Developed a stabilization framework that prevents hybrid AI–CFD solvers from diverging by redefining numerical iterations as an optimization process.',
      'Integrated a Simulated Annealing algorithm as a decision gate, allowing early-stage exploration while ensuring high-precision convergence to physical laws.',
    ],
    technologies: ['Python', 'PyTorch', 'MATLAB'],
    publication: publications[0],
  },
  {
    id: 'tbnn',
    category: 'Research',
    title: 'Data-Driven Turbulence Model (Tensor Basis Neural Network)',
    tags: ['Physics-Informed Machine Learning', 'Simulation & Modeling'],
    org: 'National Taiwan University',
    period: 'Sep 2023 — Jun 2025',
    image: asset('research/tbnn-workflow.jpg'),
    imageSize: 'sm',
    bullets: [
      'Designed a physics-informed machine learning model based on turbulence theory to ensure physically meaningful outputs.',
      'Integrated an AI model with CFD solvers, eliminating additional equations to reduce computational time and enhance accuracy.',
    ],
    technologies: ['Python', 'PyTorch', 'MATLAB', 'ANSYS Fluent', 'FEniCS'],
    publication: publications[1],
    conferences: [
      {
        title: '48th Conference on Theoretical and Applied Mechanics',
        type: 'Oral',
        date: 'Nov 2024',
        location: 'Hsinchu, Taiwan',
        link: asset('research/ai-turbulence-oral-1.pdf'),
      },
      {
        title: 'Graduate Research Poster — TBNN Turbulence Modeling',
        type: 'Poster',
        date: 'Jul 2025',
        link: asset('research/tbnn-poster.pdf'),
      },
    ],
  },
  {
    id: 'turbidity-currents',
    category: 'Research',
    title: 'Turbidity Current Dynamics',
    tags: ['Simulation & Modeling'],
    org: 'National Taiwan University',
    period: 'Sep 2022 — Apr 2024',
    image: asset('research/turbidity-3d.jpg'),
    imageSize: 'lg',
    demo: asset('research/turbidity-currents.mp4'),
    bullets: [
      'Implemented a Fortran-based CFD to simulate the interaction of 100 million particles with fluid.',
      'Improved efficiency and reduced runtime with Linked-list structures and MPI parallel computing.',
      'Investigated turbidity current speed, settling velocity, particle deposition, collision, and flow-field development.',
    ],
    technologies: ['Fortran', 'MPI', 'MATLAB'],
    publication: publications[2],
    conferences: [
      {
        title:
          'Annual Results Presentation, Dept. of Ocean & Naval Architecture Engineering',
        type: 'Poster',
        date: 'Mar 2025',
        location: 'Taipei, Taiwan',
        link: asset('research/turbidity-currents-poster-3.pdf'),
      },
      {
        title: '45th Ocean Engineering Conference',
        type: 'Poster',
        date: 'Nov 2023',
        location: 'Keelung, Taiwan',
        link: asset('research/turbidity-currents-poster-2.pdf'),
      },
    ],
  },

  // ---- Working Experience (Corning) ----
  {
    id: 'active-learning-cfd',
    category: 'Working Experience',
    title: 'Active Learning for CFD Optimization',
    tags: ['Physics-Informed Machine Learning', 'Simulation & Modeling'],
    org: 'Corning Incorporated (Asia Region)',
    period: 'Mar 2026 — Present',
    bullets: [
      'Architected an automated Proper Orthogonal Decomposition (POD) and Gaussian Process (GP) pipeline with active sampling to maximize physical information capture using minimal CFD data.',
      'Optimized computational efficiency and significantly reduced the total simulation budget by prioritizing high-uncertainty dimensions.',
    ],
    technologies: ['Python', 'R', 'MATLAB', 'OpenFOAM'],
  },
  {
    id: 'furnace-digital-twin',
    category: 'Working Experience',
    title: 'AI Surrogate for Furnace Modeling',
    tags: ['Physics-Informed Machine Learning', 'Digital Twin'],
    org: 'Corning Incorporated (Asia Region)',
    period: 'Nov 2025 — Present',
    bullets: [
      'Developed a high-fidelity Digital Twin for glass melting furnaces using Proper Orthogonal Decomposition (POD).',
      'Integrated the POD model with real-time manufacturing data to deliver CFD-level physical field predictions in seconds.',
    ],
    technologies: ['Python', 'R', 'MATLAB', 'Streamlit'],
  },

  // ---- Side Project ----
  {
    id: 'pde-solvers',
    category: 'Side Project',
    title: 'High-Performance PDE Solvers',
    tags: ['Parallel Computing'],
    period: 'Jul 2026 — Present',
    bullets: [
      'GPU- and multi-node-parallel solvers for the wave, heat, and Laplace equations.',
      'CUDA kernels handle on-device compute while MPI domain decomposition scales the work across nodes, reducing runtime without losing accuracy.',
    ],
    technologies: ['CUDA', 'MPI', 'C++', 'Python'],
    link: 'https://github.com/YaoHung0315/Numerical-Simulation',
    linkText: 'View on GitHub',
  },
];
