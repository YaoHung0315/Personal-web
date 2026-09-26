// All site content lives here so it is easy to update in one place.

/** Prefix a public-folder path with the Vite base URL (for GitHub Pages). */
export const asset = (path: string) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;

export const profile = {
  name: 'Yao-Hung Tsai',
  role: 'Computational Engineer',
  photo: asset('profile-photo.png'),
  interests: [
    'Scientific Machine Learning',
    'Computational Fluid Dynamics',
    'Hybrid AI–PDE Solvers',
    'Reduced-Order Modeling',
    'High-Performance Computing',
  ],
  about: [
    'I specialize in **computational modeling** and **physics-informed machine learning**. I leverage high-fidelity numerical simulation to investigate complex physical phenomena, while harnessing physics-based AI surrogate models to dramatically boost computational efficiency and predictive accuracy. By integrating these methodologies, I build a **digital twin** for rapid simulation and advanced control analysis — turning days of computation into seconds. I am deeply passionate about this field and driven to continuously push the boundaries of what this technology can achieve.',
  ],
  contact: {
    email: 'phank0315@gmail.com',
    linkedin: 'https://linkedin.com/in/yao-hung-tsai-2b14b1218',
    scholar: 'https://scholar.google.com/citations?user=2UAMLJAAAAAJ&hl=en',
  },
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
        title: 'Thesis Merit Award',
        org: 'Taiwan Society of Architectural Medicine',
        location: 'Taipei, Taiwan',
        years: 'Nov 2025',
      },
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
        years: 'May 2025',
      },
      {
        title: 'NTU ESG Sustainable Campus Student Creative Competition - Merit Award',
        org: 'National Taiwan University',
        location: 'Taipei, Taiwan',
        years: 'Feb 2022',
      },
    ],
  },
  {
    label: 'Professional',
    items: [
      {
        title: 'Innovation Recognition - MLCOP Knowledge Sharing',
        org: 'Corning Display Technologies, Corning Incorporated',
        location: 'Taichung, Taiwan',
        years: 'Sep 2026',
      },
      {
        title: 'GMFC Invited Speaker Recognition',
        org: 'Corning Incorporated',
        location: 'New York, USA',
        years: 'Jul 2026',
      },
      {
        title: 'Innovation Recognition - Innovative Technology',
        org: 'Corning Display Technologies, Corning Incorporated',
        location: 'Taichung, Taiwan',
        years: 'Jun 2026',
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
  location?: string;
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
    location: 'Taipei, Taiwan',
    period: 'Jun 2025 — Present',
    image: asset('research/sa-framework.jpg'),
    imageSize: 'lg',
    bullets: [
      'Formulated instability in hybrid AI–CFD coupling as an iterative optimization problem and developed a simulated-annealing-inspired acceptance mechanism to regulate learned closure updates during numerical solution.',
      'Designed a temperature-decay strategy that permits broader solution exploration during early iterations and progressively constrains closure variations to improve late-stage convergence and nonlinear-solver robustness.',
      'Validated the framework across canonical benchmarks and turbulent flow CFD cases, evaluating residual convergence, closure-field fluctuations, noise sensitivity, and flow-field prediction accuracy.',
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
    location: 'Taipei, Taiwan',
    period: 'Sep 2023 — Jun 2025',
    image: asset('research/tbnn-workflow.jpg'),
    imageSize: 'sm',
    bullets: [
      'Developed a geometry-informed tensor-basis neural network using strain and rotation invariants, stream function, and velocity potential to predict physically consistent Reynolds-stress anisotropy.',
      'Constructed a random-forest mapping from predicted anisotropy and strain rate to eddy viscosity, enabling direct RANS-solver integration without initialization or scaling from a baseline turbulence model.',
      'Reduced global eddy-viscosity error from approximately 0.35% to 0.14% and increased R² from 0.64 to 0.81, validated via both a priori and a posteriori assessments across three complex geometries.',
    ],
    technologies: [
      'Python',
      'PyTorch',
      'MATLAB',
      'Shell Script',
      'ANSYS Fluent',
      'FEniCSx',
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
    location: 'Taipei, Taiwan',
    period: 'Sep 2022 — Apr 2024',
    image: asset('research/turbidity-3d.jpg'),
    imageSize: 'lg',
    demo: asset('research/turbidity-currents.mp4'),
    bullets: [
      'Developed an in-house Fortran Euler–Lagrange CFD–DEM solver to resolve particle settling, collision, deposition, and two-way coupling between dispersed particles and the carrier flow.',
      'Scaled high-resolution simulations to 100 million particles at Re ~ O(10³) using MPI parallelization and linked-list spatial searches for efficient particle tracking and collision detection.',
      'Analyzed current-front propagation, autosuspension, and deposit evolution, deriving scaling relationships among propagation speed, current length, settling behavior, and evolving particle–fluid dynamics.',
    ],
    technologies: ['Fortran', 'MPI', 'MATLAB'],
    publication: publications[2],
  },

  // ---- Working Experience (Corning) ----
  {
    id: 'premelt-camera',
    category: 'Working Experience',
    title: 'Furnace Infrared Camera',
    tags: ['Computer Vision', 'Deep Learning', 'Full-Stack Web Development'],
    org: 'Corning Display Technologies, Corning Incorporated',
    location: 'Taichung, Taiwan',
    period: 'Jul 2026 — Present',
    bullets: [
      'Developed a U-Net segmentation pipeline for infrared imagery to identify surface regions and quantify their spatial coverage throughout the melting process.',
      'Applied optical flow to estimate pixel-wise surface velocities, derived flow-energy metrics from the resulting velocity fields, and extracted spatial temperature distributions from calibrated infrared images.',
      'Built a web-based monitoring system that correlates coverage, flow energy, and temperature metrics with PI System measurements and tank attributes, revealing surface physics field behavior.',
    ],
    technologies: ['Python', 'PyTorch', 'OpenCV', 'HTML', 'CSS', 'React.js', 'FastAPI', 'SQL'],
  },
  {
    id: 'active-learning-cfd',
    category: 'Working Experience',
    title: 'Active Learning for CFD Optimization',
    tags: ['Physics-Informed Machine Learning', 'Simulation & Modeling'],
    org: 'Corning Display Technologies, Corning Incorporated',
    location: 'Taichung, Taiwan',
    period: 'Mar 2026 — Present',
    bullets: [
      'Applied Proper Orthogonal Decomposition (POD) to extract dominant reduced-order representations from OpenFOAM simulations, then used Gaussian Process (GP) models to quantify prediction uncertainty and identify the next input conditions for evaluation.',
      'Automated simulation, model updating, and adaptive resampling in a closed loop, reducing the CFD simulation budget while focusing computation on the most informative regions of the design space.',
    ],
    technologies: ['Python', 'Shell Script', 'R', 'MATLAB', 'OpenFOAM'],
  },
  {
    id: 'digital-premelt-twin',
    category: 'Working Experience',
    title: 'Digital Furnace Twin',
    tags: [
      'Digital Twin',
      'Physics-Informed Machine Learning',
      'Full-Stack Web Development',
    ],
    org: 'Corning Display Technologies, Corning Incorporated',
    location: 'Taichung, Taiwan',
    period: 'Nov 2025 — Present',
    bullets: [
      'Developed a POD-based reduced-order model from high-fidelity CFD simulations to reconstruct full physical fields in the same data structure as the original simulations.',
      'Achieved approximately 3,600× wall-clock acceleration on standard computing hardware while maintaining strong agreement with CFD reference fields, with a coefficient of determination of approximately R² = 0.99.',
      'Integrated sensor data, interactive 3D field visualization, and physics-based indicators into a web platform to track thermal-region size, temperature, location, maximum velocity, and electrical quantities.',
    ],
    technologies: [
      'Python',
      'MATLAB',
      'R',
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
      'Developed GPU-accelerated, multi-node solvers for the wave, heat, and Laplace equations using OpenCL for parallel computation and MPI for distributed-memory domain decomposition.',
      'Reduced runtime while preserving numerical accuracy as problem sizes scale across multiple compute nodes.',
    ],
    technologies: ['OpenCL', 'MPI', 'C++', 'Python'],
    link: 'https://github.com/YaoHung0315/Numerical-Simulation',
    linkText: 'View on GitHub',
  },
];
