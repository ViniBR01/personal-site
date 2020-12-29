const projects = [
    {
        title: 'PERFORM: Multi-User Emulation',
        avatar: '/assets/projects/defaultAvatar.png',
        text: 'Emulation platform written in C with iptables and nf-queue. It modifies all incoming traffic of an Ethernet LAN to emulate the behavior of a wireless LAN. The goal is to run experiments with multi-user uplink trnamissions and real network traffic.',
        badges: ['Master Thesis', '802.11', 'C', 'Linux Kernel'],
        link: '',
    },
    {
        title: 'WiFi Backlog Estimation via RNNs',
        avatar: '/assets/projects/rnns.png',
        text: 'Designed, trained and evaluated a Recurrent neural network model to estimate the backlog of stations at the WiFi AP in real-time.',
        badges: ['Machine Learning', '802.11', 'Python', 'TensorFlow'],
        link: '',
    },
    {
        title: 'Personal Website from Scratch in React',
        avatar: '/assets/projects/react-logo.png',
        text: "Create a fully responsive SPA to display personal portifolio. It's a mix of diverse design and implementation techniques and explore various possibilities of React and correlated libraries. The code is all available on my GitHub and can be used to build portifolio websites or other similar applications.",
        badges: ['Web', 'React', 'JavaScript', 'Single-page Application'],
        link: '',
    },
    {
        title: 'Network Model for Music Authorship Attribution',
        avatar: '/assets/projects/defaultAvatar.png',
        text: 'Proposed, implemented and evaluated the performance of a network-based model for music authorship attribution. We used the classical music corpus dataset and comapred results to a baseline frequency-based analysis algorithm.',
        badges: ['Network Science', 'Python', 'Networkx', 'Markov Chain'],
        link: '',
    },
    {
        title: 'Covid-19 Seasonality Model',
        avatar: '/assets/projects/defaultAvatar.png',
        text: 'Group project to create a platform based on modern databases, visualization, web design, virtual machines, signal processing, and data analysis. My main contributions were to collect data and develop the analytical model for the virus spread based on compartmental models. Also implemented an interactive model visualization using the d3 library.',
        badges: ['Data-science', 'Compartmental Models', 'Data Visualization', 'D3'],
        link: '',
    },
    {
        title: 'Blog in NextJS',
        avatar: '/assets/projects/next-logo.png',
        text: "Built a blog app to learn the basics of the Next.js framework. It includes page-based routing, pre-rendering on a per-page basis, automatic code-spliting, optimized prefetching, automated development environment, and more. Modified the original tutorial's layout and added new content.",
        badges: ['Web', 'NextJS', 'Markup Language', 'Server-side Rendering'],
        link: '',
    },
    {
        title: 'Reliable File Transfer Protocol',
        avatar: '/assets/projects/defaultAvatar.png',
        text: 'Designed and implemented a custom file transfer protocol for both sender and receiver on top of UDP sockets. Focus on throughput performance and memory consumption, with a memory-friendly caching system that takes at most 1.5 MB even for very large file transfers.',
        badges: ['Networks', 'C/C++','Socket Programming' ,'Transport Layer Control'],
        link: '',
    },
    {
        title: 'Loteria! Mexican Card Game',
        avatar: '/assets/projects/loteria.png',
        text: "Recreated an original 2019 Google doodle's version of the classical Mexican card game of luck. Currently offering a simple front-end to draw cards and play with freinds. Future plans include a server integration to add extra functionalities",
        badges: ['Web', 'HTML', 'CSS', 'JavaScript'],
        link: '',
    },
    {
        title: 'Intra-Domain Routing Protocols',
        avatar: '/assets/projects/defaultAvatar.png',
        text: 'Designed and implemented Distance-vector and Link-state protocols on an educational simulator written in C++. Evaluated the performance and correntness for simple and more complex networks.',
        badges: ['Networks', 'C/C++', 'Routing', 'IGP'],
        link: '',
    },
    {
        title: "Analysis of Magma's Performance",
        avatar: '/assets/projects/magma-logo.png',
        text: "Deployed and evaluated the perforamnce of Magma's Access Gateway (AGW) under variable traffic and computation resources.",
        badges: ['Infra-sctructure', 'Mobile','Python', 'Open-source'],
        link: '',
    },
    
    
];

export default projects;
