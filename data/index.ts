// Define types for the content
interface ContentSection {
  section: string;
  content: string[]; // Assuming all content is an array of strings for consistency
}

interface Certificate {
  title: string;
  organization: string;
  year: string;
}

interface Experience {
  description: string;
}

// Define the heroContent type
export const heroContent: ContentSection[] = [
  {
    section: "Introduction",
    content: [
      "I’m a full-stack developer skilled in web and mobile development, with expertise in front-end, back-end, CI/CD, Docker, and cloud hosting.",
    ],
  },
];

// Define the aboutContent type
export const aboutContent: (
  | ContentSection
  | { section: "Certificates"; content: Certificate[] }
  | { section: "Experience"; content: Experience }
)[] = [
  {
    section: "Introduction",
    content: [
      `In 2019, I came to Dhaka to pursue my graduation and got admitted to Primeasia University for a B.Sc. in Computer Science and Engineering (CSE).
      It was during my time at the university that I developed a passion for programming. I learned all the basic concepts and technologies, which laid the foundation for my journey into the world of software development.`,
      `My web development journey began when I enrolled in a Full Stack Web Development course at Programming Hero. The course provided a deep dive into MERN stack technologies, which include MongoDB, Express.js, React, and Node.js. From there, I started exploring and building projects using these technologies, gaining hands-on experience in creating dynamic and responsive web applications. This journey has been instrumental in shaping my skills as a full-stack developer, with a particular focus on the MERN stack. As I continued to hone my skills, I became more passionate about web development, constantly exploring new tools and frameworks to stay updated with the latest industry trends.`,
    ],
  },
  {
    section: "Study",
    content: [],
  },
  {
    section: "Certificates",
    content: [
      {
        title: "Full Stack Web Development",
        organization: "Programming Hero",
        year: "2021",
      },
      {
        title: "JavaScript Algorithms and Data Structures",
        organization: "freeCodeCamp",
        year: "2020",
      },
    ],
  },
  {
    section: "Experience",
    content: {
      description:
        "I have a strong background in web development, having worked as both a front-end and back-end developer.",
    },
  },
];
