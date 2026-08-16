// All site content lives here so it is easy to update in one place.

/** Prefix a public-folder path with the Vite base URL (for GitHub Pages). */
export const asset = (path: string) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;

export const profile = {
  name: 'Yao-Hung Tsai',
  role: 'Computational Engineer',
  photo: asset('profile-photo.jpg'),
  interests: [
    'Scientific Machine Learning',
    'Computational Fluid Dynamics',
    'Hybrid AI–PDE Solvers',
    'Reduced-Order Modeling',
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
  /** Small muted line under the degree (advisor, GPA, credits). */
  meta?: string;
  location: string;
  period: string;
  logo: string;
};

export const education: Education[] = [
  {
    school: 'Institute of Applied Mechanics, National Taiwan University',
    degree: 'M.E. in Applied Mechanics',
    meta: 'GPA 3.99 / 4.3 · Advisor: Prof. Yi-Ju Chou',
    location: 'Taipei, Taiwan',
    period: 'Sep 2023 — Aug 2025',
    logo: asset('NTU.jpg'),
  },
  {
    school: 'Department of Civil Engineering, National Taiwan University',
    degree: 'B.E. in Civil Engineering',
    meta: 'GPA 3.69 / 4.3',
    location: 'Taipei, Taiwan',
    period: 'Sep 2019 — Jun 2023',
    logo: asset('NTU.jpg'),
  },
];

export type WorkExperience = {
  company: string;
  title: string;
  location: string;
  period: string;
  logo: string;
};

export const workExperience: WorkExperience[] = [
  {
    company: 'Corning Display Technologies, Corning Incorporated',
    title: 'Advanced Controls Engineer',
    location: 'Taichung, Taiwan',
    period: 'Oct 2025 — Present',
    logo: asset('corning-logo.svg'),
  },
  {
    company: 'Institute of Applied Mechanics, National Taiwan University',
    title: 'Research Assistant',
    location: 'Taipei, Taiwan',
    period: 'Sep 2023 — Aug 2025',
    logo: asset('NTU.jpg'),
  },
];

export type Publication = {
  title: string;
  authors: string;
  /** Journal name only — shown in the right column. */
  venue: string;
  /** Volume / article number, shown under the journal name. */
  volume?: string;
  year: string;
  status: 'Published' | 'Under Review' | 'In Preparation' | 'Manuscript';
  link?: string;
  linkText?: string;
};

export const publications: Publication[] = [
  {
    title: 'A Simulated Annealing inspired iteration framework for solving differential equations with machine learning-based parameters',
    authors: 'Y.-H. Tsai, Y. Wang, Y.-J. Chou',
    venue: '',
    year: '',
    status: 'Manuscript',
    linkText: 'Manuscript in final revision',
  },
  {
    title:
      'Data-driven turbulence closure using a tensor basis neural network without reliance on baseline models',
    authors:
      'Y.-H. Tsai, Y. Wang, C.-J. Cheng, C.-Y. Hung, Y.-E. Chou, K.-L. Li, C.-C. Tseng, R.-L. Chern, Y.-J. Chou',
    venue: 'Journal of Fluid Mechanics',
    volume: 'Vol. 1033, A15',
    year: '2026',
    status: 'Published',
    link: 'https://doi.org/10.1017/jfm.2026.11414',
    linkText: 'DOI: 10.1017/jfm.2026.11414',
  },
  {
    title: 'On the suspension and deposition within turbidity currents',
    authors: 'Y.-H. Tsai, Y.-J. Chou',
    venue: 'Journal of Fluid Mechanics',
    volume: 'Vol. 1003, A1',
    year: '2025',
    status: 'Published',
    link: 'https://doi.org/10.1017/jfm.2024.1174',
    linkText: 'DOI: 10.1017/jfm.2024.1174',
  },
];

export type Honor = {
  title: string;
  org: string;
  /** City, Country — shown in the right column. */
  location?: string;
  years: string;
};

export type HonorGroup = { label: string; items: Honor[] };

export const honorGroups: HonorGroup[] = [
  {
    label: 'Academic',
    items: [
      {
        title: 'Dean’s Award',
        org: 'College of Engineering, National Taiwan University',
        location: 'Taipei, Taiwan',
        years: 'Aug 2025',
      },
      {
        title: 'Best Master’s Thesis Poster Award',
        org: 'Institute of Applied Mechanics, National Taiwan University',
        location: 'Taipei, Taiwan',
        years: 'Jun 2025',
      },
    ],
  },
  {
    label: 'Professional',
    items: [
      {
        title: 'Internal Innovation Recognition',
        org: 'Corning Display Technologies, Corning Incorporated',
        location: 'Taichung, Taiwan',
        years: '2026',
      },
    ],
  },
];

export type ConferenceItem = {
  /** Conference or workshop name. */
  title: string;
  type: 'Oral' | 'Poster';
  /** Title of the talk or poster presented. */
  presentation?: string;
  date?: string;
  /** City, Country — shown in the right column. */
  location?: string;
  link?: string;
};

export type ConferenceGroup = { label: string; items: ConferenceItem[] };

export const conferenceGroups: ConferenceGroup[] = [
  {
    label: 'Academic',
    items: [
      {
        presentation:
          'Data-driven turbulence closure using a tensor basis neural network',
        title: 'Graduate Research Poster Session',
        type: 'Poster',
        location: 'Taipei, Taiwan',
        date: 'Jul 2025',
        link: asset('research/tbnn-poster.pdf'),
      },
      {
        presentation: 'On the suspension and deposition within turbidity currents',
        title: 'NSTC Research Project Results Presentation',
        type: 'Poster',
        location: 'Taipei, Taiwan',
        date: 'Mar 2025',
        link: asset('research/turbidity-currents-poster-3.pdf'),
      },
      {
        presentation:
          'Data-driven turbulence modeling using a tensor-based neural network with consideration of the geometric effect',
        title: '48th Conference on Theoretical and Applied Mechanics',
        type: 'Oral',
        location: 'Hsinchu, Taiwan',
        date: 'Nov 2024',
        link: asset('research/ai-turbulence-oral-1.pdf'),
      },
      {
        presentation:
          'Numerical simulation of turbidity currents in the lock-exchange problem',
        title: '45th Ocean Engineering Conference',
        type: 'Poster',
        location: 'Keelung, Taiwan',
        date: 'Nov 2023',
        link: asset('research/turbidity-currents-poster-2.pdf'),
      },
    ],
  },
  {
    label: 'Professional',
    items: [
      {
        presentation: 'Computer Vision-Based Monitoring and Flow Analysis for PreMelt Furnaces',
        title: 'Corning Incorporated - PreMelt Optimization Workshop',
        type: 'Oral',
        location: 'Beijing, China',
        date: 'Scheduled · Sep 2026',
      },
      {
        presentation: 'AI-integrated next-generation TOD control system',
        title: 'Corning Incorporated - Glass Melting & Forming Conference (GMFC)',
        type: 'Oral',
        location: 'New York, USA',
        date: 'Jul 2026',
      },
      {
        presentation: 'Data-driven AI surrogate for PreMelt CFD simulation',
        title: 'Corning Incorporated - Melting Life Workshop',
        type: 'Oral',
        location: 'Wuhan, China',
        date: 'Mar 2026',
      },
    ],
  },
];

export type ProjectCategory = 'Research' | 'Working Experience' | 'Side Project';

export const grantsAndFellowships = [
  {
    title: 'Graduate Scholarship',
    organization: 'Institute of Applied Mechanics, National Taiwan University',
    location: 'Taipei, Taiwan',
    period: 'Sep 2023 — Aug 2025',
  },
  {
    title: 'Research Assistant Fellowship',
    organization: 'National Science and Technology Council',
    location: 'Taipei, Taiwan',
    period: 'Sep 2023 — Aug 2025',
  },
];

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
};

export const projects: Project[] = [
  // ---- Research (NTU) ----
  {
    id: 'simulated-annealing',
    category: 'Research',
    title: 'Simulated Annealing for AI–CFD Convergence',
    tags: [
      'Hybrid AI–CFD Solvers',
      'Numerical Stability',
      'Physics-Informed Machine Learning',
    ],
    org: 'National Taiwan University, Institute of Applied Mechanics',
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
    tags: [
      'Physics-Informed Machine Learning',
      'Turbulence Modeling',
      'Computational Fluid Dynamics',
    ],
    org: 'National Taiwan University, Institute of Applied Mechanics',
    period: 'Sep 2023 — Jun 2025',
    image: asset('research/tbnn-workflow.jpg'),
    imageSize: 'sm',
    bullets: [
      'Designed a physics-informed machine learning model based on turbulence theory to ensure physically meaningful outputs.',
      'Integrated an AI model with CFD solvers, eliminating additional equations to reduce computational time and enhance accuracy.',
    ],
    technologies: [
      'Python',
      'PyTorch',
      'MATLAB',
      'Shell Script',
      'ANSYS Fluent',
      'FEniCS',
    ],
    publication: publications[1],
  },
  {
    id: 'turbidity-currents',
    category: 'Research',
    title: 'Turbidity Current Dynamics',
    tags: [
      'Computational Fluid Dynamics',
      'Particle-Laden Flows',
      'High-Performance Computing',
    ],
    org: 'National Taiwan University, Institute of Applied Mechanics',
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
  },

  // ---- Working Experience (Corning) ----
  {
    id: 'premelt-camera',
    category: 'Working Experience',
    title: 'PreMelt Furnace Infrared Camera',
    tags: ['Computer Vision', 'Deep Learning', 'Full-Stack Web Development'],
    org: 'Corning Display Technologies',
    period: 'Jun 2026 — Present',
    bullets: [
      'Built an end-to-end computer-vision pipeline using U-Net and optical flow to convert infrared furnace imagery into quantitative flow-velocity and crown-coverage measurements.',
      'Integrated live image streams with process analytics in a real-time monitoring application for furnace behavior and manufacturing stability.',
    ],
    technologies: ['Python', 'OpenCV', 'HTML', 'CSS', 'React.js', 'FastAPI', 'SQL'],
  },
  {
    id: 'active-learning-cfd',
    category: 'Working Experience',
    title: 'Active Learning for CFD Optimization',
    tags: ['Physics-Informed Machine Learning', 'Simulation & Modeling'],
    org: 'Corning Display Technologies',
    period: 'Mar 2026 — Present',
    bullets: [
      'Architected an automated Proper Orthogonal Decomposition (POD) and Gaussian Process (GP) pipeline with active sampling to maximize physical information capture using minimal CFD data.',
      'Optimized computational efficiency and significantly reduced the total simulation budget by prioritizing high-uncertainty dimensions.',
    ],
    technologies: ['Python', 'R', 'MATLAB', 'OpenFOAM'],
  },
  {
    id: 'digital-premelt-twin',
    category: 'Working Experience',
    title: 'Digital PreMelt Twin',
    tags: [
      'Digital Twin',
      'Physics-Informed Machine Learning',
      'Full-Stack Web Development',
    ],
    org: 'Corning Display Technologies',
    period: 'Nov 2025 — Present',
    bullets: [
      'Developed a Reduced Order Model (ROM) using Proper Orthogonal Decomposition (POD) as the core algorithm to compute glass melting flows in real time.',
      "Integrated the digital twin into a web platform, processing live sensor data to deploy dynamic 3D visualizations of the tank's physical fields.",
      'Formulated quantitative physical indices directly from predicted field behaviors to monitor system anomalies and optimize operational parameters.',
    ],
    technologies: [
      'Python',
      'MATLAB',
      'R',
      'Shell Script',
      'OpenFOAM',
      'HTML',
      'CSS',
      'Three.js',
      'FastAPI',
    ],
  },

  // ---- Side Project ----
  {
    id: 'pde-solvers',
    category: 'Side Project',
    title: 'High-Performance PDE Solvers',
    tags: ['High-Performance Computing'],
    period: 'May 2026 — Present',
    bullets: [
      'GPU- and multi-node-parallel solvers for the wave, heat, and Laplace equations.',
      'OpenCL kernels handle device-side compute while MPI domain decomposition scales the work across nodes, reducing runtime without losing accuracy.',
    ],
    technologies: ['OpenCL', 'MPI', 'C++', 'Python'],
    link: 'https://github.com/YaoHung0315/Numerical-Simulation',
    linkText: 'View on GitHub',
  },
];
