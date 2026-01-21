// src/data/projects.js

const projects = [
  {
    id: 1,
    title: "Edoror Judy Empowerment Foundation",
    description: "A comprehensive non-profit website for EJPEEF, empowering lives and eradicating poverty across Nigerian communities. Features donation system, program showcase, and blog.",
    longDescription: "Full-featured non-profit platform showcasing programs, success stories, and facilitating donations. The site has impacted over 2,500 lives across 150+ communities with education support, health & wellness, and empowerment initiatives.",
    tags: ["html", "CSS", "JavaScript", "Responsive Design", "SEO"],

    demoLink: "https://edororjudyempowermentfoundation.org/",
    githubLink: "https://github.com/Austinixe",
   
    featured: true,
    category: "Static website"
  },
  {
    id: 2,
    title: "9ja Kitchen",
    description: "Nigerian recipe sharing and food discovery platform. Users can explore authentic Nigerian recipes, create and share their own recipes, and connect with food enthusiasts.",
    longDescription: "A culinary platform dedicated to Nigerian cuisine featuring recipe creation, ingredient lists, cooking instructions, user ratings, and social features. Built to celebrate and preserve Nigerian culinary heritage.",
    tags: ["React", "Node.js", "MongoDB", "Express", "Vercel", "REST API"],
    demoLink: "https://9jakitchen-frontend.vercel.app/",
   githubLink: "https://github.com/Austinixe",
    featured: true,
    category: "Full Stack"
  },
  {
    id: 3,
    title: "Community Resource Board",
    description: "A collaborative platform for communities to share and discover local resources, events, and services with real-time updates and interactive features.",
    longDescription: "Community-driven platform enabling users to post and discover local resources, events, and services. Features include resource categorization, search functionality, user authentication, and community moderation tools.",
    tags: ["React", "Node.js", "MongoDB", "Express", "Vercel", "JWT"],
    demoLink: "https://community-resource-app.vercel.app/",
    githubLink: "https://github.com/Austinixe",

    featured: true,
    category: "Full Stack"
  },
  {
    id: 4,
    title: "Real-Time Communication App",
    description: "Modern real-time chat application with instant messaging, typing indicators, and seamless user experience using WebSocket technology.",
    longDescription: "Full-featured real-time messaging platform with instant message delivery, online status indicators, typing notifications, and message history. Built with Socket.io for real-time bidirectional communication.",
    tags: ["React", "Socket.io", "Node.js", "MongoDB", "Express", "WebSockets"],
    demoLink: "https://real-time-communication-xha8.vercel.app/",
    githubLink: "https://github.com/Austinixe",
    featured: true,
    category: "Full Stack"
  }
];

export default projects;