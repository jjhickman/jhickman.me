import ExperienceProps from '@/types/ExperienceProps'


const filters: string[] = [
  'React',
  'TypeScript',
  'JavaScript',
  'Tailwind CSS',
  'HTML/CSS',
  'Java',
  'Python',
  'C++',
  'Kubernetes',
  'GCP',
  'AWS',
  'Lua',
  'Docker'
]

const experiences: ExperienceProps[] = [
  {
    techStack: ['HTML/CSS', 'React', 'TypeScript', 'JavaScript', 'C++', 'Python', 'GCP', 'Docker', 'Kubernetes'],
    title: "Senior Software Engineer",
    company: "Boston Dynamics",
    location: "Waltham, MA",
    startDate: "05/2022",
    endDate: "12/2024",
    contents: [
      "Accelerated factory acceptance testing of robots for production using C++,  gRPC,  Node.js, TypeScript, Python, and React.",
      "Owned the React web interface and robot REST/Websockets APIs to enable end users to control robots in production.",
      "Scaled user reporting microservices for Jira and Salesforce using Python, FastAPI, Docker, and GCP GKE (Google Kubernetes Engine).",
      "Led the localization effort for robots and interfaces to enable the roll-out of robotic systems to Europe to support a growing customer base.",
      "Mentored junior engineers, fostering a high-performance team culture and improving code quality.",
      "Designed and implemented UI and UX features for robot functionality for intuitive interfaces to operate complex enterprise systems.",
      "Architected and led the user analytics pipeline for fleets of robots and infrastructure using Snowflake, SQL, Node.js, and TypeScript.",
      "Engineered backend Node.js REST and Python/C++ gRPC APIs to support users and technicians with operating robots.",
      "Created suites of diagnostics tools in Python for factory acceptance testing with features such as network speed testing, CPU and GPU stress testing, PCIE and USB device validation, and more through the convenient web interface.",
      "Collaborated with a team of UI designers, product managers, application engineers, and sales representatives to delight customers."
    ],
    link: "https://bostondynamics.com"
  },
  {
    techStack: ['React', 'Java', 'JavaScript', 'C++', 'Python', 'Lua', 'AWS', 'Docker'],
    title: "Software Engineer II",
    company: "Sick Sensor Intelligence",
    location: "Stoughton, MA",
    startDate: "11/2020",
    endDate: "05/2022",
    contents: [
      "Developed and deployed new features for package processing and logistics systems written in C++, enhancing application functionality and improving user satisfaction.",
      "Collaborated with senior engineers to refactor legacy code, improving code maintainability and reducing technical debt.",
      "Led workshops for Docker and AWS to introduce new technologies to the team and expand the pool of projects available to the team.",
      "Architected and implemented an AWS backend for package monitoring using MQTT, IoT Core, Lambda, S3, RDS, and SNS.",
      "Designed and implemented REST APIs in Java and Spring to create a scalable pallet scanning system.",
      "Troubleshooted and resolved production issues including onsite customer support, minimizing downtime and ensuring smooth user experiences.",
      "Saved the company $10,000 - $25,000 by developing a Linux build system on Windows using Jenkins and Docker, avoiding the provisioning of additional build servers to support Linux.",
      "Reduced package processing time by 50% through optimization of archive compression and file-system I/O in C++ multi-threaded applications on Linux"
    ],
    link: "https://sick.com"
  },
  {
    techStack: ['React', 'Java', 'JavaScript', 'C++', 'Python', 'Lua'],
    title: "Software Engineer",
    company: "Sick Sensor Intelligence",
    location: "Waltham, MA",
    startDate: "08/2018",
    endDate: "11/2020",
    contents: [
      "Controlled and communicated with PLCs and embedded controllers using Java and Ethernet IP.",
      "Designed package processing system user interfaces in React and JavaScript to facilitate system deployments and configuration.",
      "Refactored legacy code, improving system maintainability and reducing technical debt, leading to faster development cycles.",
      "Optimized algorithms and data structures, boosting system efficiency and reducing response times in C++.",
      "Resolved critical production issues, minimizing downtime and ensuring smooth user experiences across environments.",
      "Improved system security by identifying vulnerabilities and implementing safeguards, ensuring protection of user data."
    ],
    link: "https://sick.com"
  }
]

export { filters, experiences }
