const projects = [
    {
        thumbnail: "",
        title: "ochi design ui clone",
        category: "Frontend",
        description: "This is the ui clone of ochi design website.",
        features: [
            "It is responssive for all devices",
            "Gsap animation Added",
        ],
        techStack: [
            "HTML",
            "CSS",
            "Javascript",
            "Gsap",
        ],
        githubLink: "https://github.com/Stranger-One/ochi.design",
        liveLink: "https://stranger-one.github.io/ochi.design/",
        createdAt: new Date,
    },
    {
        thumbnail: "",
        title: "MERN E-Commerce",
        category: "FullStack",
        description: "This is a fully functional e-commerce website. you can add products to cart and checkout.",
        features: [
            "Users can register and login",
            "Add products to cart",
            "Checkout functionality",
        ],
        techStack: [
            "React.js",
            "Tailwind CSS",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Cloudinary",

        ],
        githubLink: "https://github.com/Stranger-One/first-MERN-E-commerce",
        liveLink: "https://first-mern-e-commerce-1.onrender.com/",
        createdAt: new Date,
    },
    {
        thumbnail: "",
        title: "AI Chat Bot",
        category: "FullStack",
        description: " This application integrates cutting-edge AI capabilities with robust backend and frontend frameworks.",
        features: [
            "Users can register and login",
            "Ask questions to AI",
            "AI will answer your questions",
        ],
        techStack: [
            "React.js",
            "Tailwind CSS",
            "Gsap",
            "Appwrite (Backend as a service)",
        ],
        githubLink: "https://github.com/Stranger-One/Ai_Chat_App",
        liveLink: "https://ai-chat-app-steel.vercel.app/",
        createdAt: new Date,
    },
    {
        thumbnail: "",
        title: "Chat Application",
        category: "FullStack",
        description: "An advanced chat application that supports real-time messaging and video calling, built using Socket.IO and PeerJS.",
        features: [
            "Users can register and login",
            "Email verification system",
            "Real-time messaging and video calling",
        ],
        techStack: [
            "React.js",
            "Tailwind CSS",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Socket.io",
            "PeerJS",
        ],
        githubLink: "https://github.com/Stranger-One/My_Chat_App",
        liveLink: "https://my-chat-app-1-h9wb.onrender.com/",
        createdAt: new Date,
    },
    {
        thumbnail: "",
        title: "Youtube Video Downloader",
        category: "Frontend",
        description: "This is a youtube video downloader. you can download youtube videos in different formats.",
        features: [
            "Users can download youtube videos",
            "Download videos in different formats",
        ],
        techStack: [
            "React.js",
            "Tailwind CSS",
            "Rapid API",
        ],
        githubLink: "https://github.com/Stranger-One/youtube-video-downloader",
        liveLink: "https://youtube-video-downloader-nine.vercel.app/",
        createdAt: new Date,
    },
    {
        thumbnail: "",
        title: "Weather App",
        category: "Frontend",
        description: "This is a weather app. you can check the weather of any city.",
        features: [
            "Search any city ",
            "Get the weather of that city",
            "Get visual on map",
        ],
        techStack: [
            "React.js",
            "Tailwind CSS",
            "Open Weather API",
            "Leaflet Map"
        ],
        githubLink: "https://github.com/Stranger-One/Task-2-My-Weather",
        liveLink: "https://my-weather-xi.vercel.app/",
        createdAt: new Date,
    },
    {
        thumbnail: "",
        title: "Shoes Store",
        category: "Frontend",
        description: "This is a shoes store website. This is only a frontend project.",
        features: [
            "Register and login via Local Storage",
            "Cart And Wishlist Functionality",
            "Dummy Checkout Functionality",
        ],
        techStack: [
            "React.js",
            "Tailwind CSS",
            "React Router",
            "Swiper.js",
        ],
        githubLink: "https://github.com/Stranger-One/shoes-e-commerce",
        liveLink: "https://shoes-e-commerce-tau.vercel.app/",
        createdAt: new Date,
    },
    {
        thumbnail: "",
        title: "E-Learning Platform",
        category: "Frontend",
        description: "This is a E-Learning Platform. This is only a frontend project.",
        features: [
            "Responsive for all devices.",
            "Smooth animation with Framer-motion.",
            "Dummy Courses",
        ],
        techStack: [
            "React.js",
            "Tailwind CSS",
            "Framer-motion",
        ],
        githubLink: "https://github.com/Stranger-One/E-Learning",
        liveLink: "https://e-learning-lovat.vercel.app/",
        createdAt: new Date,
    },
    {
        thumbnail: "",
        title: "A Simple Post",
        category: "FullStack",
        description: "This is a simple post website. you can add posts, and delete posts.",
        features: [
            "Register and login functionality",
            "Users can add posts and view all user posts",
            "Users can delete only their posts",
        ],
        techStack: [
            "React.js",
            "Tailwind CSS",
            "Appwrite (Backend as a service)",
            "React Router",
        ],
        githubLink: "https://github.com/Stranger-One/React-Project-With-Hitesh-Sir",
        liveLink: "https://react-project-with-hitesh-sir.vercel.app/",
        createdAt: new Date,
    },
    {
        thumbnail: "",
        title: "Simple TODO App",
        category: "Frontend",
        description: "This is a simple todo app. you can add todos and delete todos.",
        features: [
            "Register and login functionality with Local Storage",
            "Users can add todos and Manage todos",
            "Responsive for all devices",
        ],
        techStack: [
            "HTML",
            "CSS",
            "Javascript",
        ],
        githubLink: "https://github.com/Stranger-One/Todo-with-Login",
        liveLink: "https://stranger-one.github.io/Todo-with-Login/",
        createdAt: new Date,
    },
    {
        thumbnail: "",
        title: "Simple Travel Website",
        category: "Frontend",
        description: "This is a travel planing website. Search your destination and book your trip with proper Itinerary.",
        features: [
            "Search your destination",
            "Book your trip with proper Itinerary",
            "Responsive for all devices",
        ],
        techStack: [
            "HTML",
            "CSS",
            "Javascript",
        ],
        githubLink: "https://github.com/Stranger-One/WeAreTheBest",
        liveLink: "https://stranger-one.github.io/WeAreTheBest/index.html",
        createdAt: new Date,
    },
    {
        thumbnail: "",
        title: "Password Generator",
        category: "Frontend",
        description: "This is a password generator. you can generate a strong password.",
        features: [
            "Generate a strong password",
            "Copy to clipboard functionality",
            "Responsive for all devices",
        ],
        techStack: [
            "React.js",
            "React hot toast",
            "Javascript",
        ],
        githubLink: "https://github.com/Stranger-One/Password-generator",
        liveLink: "https://stranger-one.github.io/Password-generator/",
        createdAt: new Date,
    },
    {
        thumbnail: "",
        title: "Frase UI Clone",
        category: "Frontend",
        description: "This is the ui clone of Frase website.",
        features: [
            "It is responssive for all devices",
            "Gsap animation Added",
        ],
        techStack: [
            "HTML",
            "CSS",
            "Javascript",
            "Gsap",
        ],
        githubLink: "https://github.com/Stranger-One/frace-full-responssive",
        liveLink: "https://stranger-one.github.io/frace-full-responssive/",
        createdAt: new Date,
    },
    {
        thumbnail: "",
        title: "connect 4 game",
        category: "Frontend",
        description: "This is a connect 4 game. you can play with your friend.",
        features: [
            "Play with your friend",
            "Responsive for all devices",

        ],
        techStack: [
            "HTML",
            "CSS",
            "Javascript",
        ],
        githubLink: "https://github.com/Stranger-One/connect-4-game",
        liveLink: "https://stranger-one.github.io/connect-4-game/",
        createdAt: new Date,
    },
    {
        thumbnail: "",
        title: "zasira e-commerce only frontend",
        category: "Frontend",
        description: "This is a e-commerce website. This is only a frontend project.",
        features: [
            "see products details",
            "Responsive for all devices",
        ],
        techStack: [
            "HTML",
            "CSS",
            "Javascript",
        ],
        githubLink: "https://github.com/Stranger-One/zasira_e-commerce",
        liveLink: "https://stranger-one.github.io/zasira_e-commerce/",
        createdAt: new Date,
    },
    {
        thumbnail: "",
        title: "Analog Clock",
        category: "Frontend",
        description: "This is an analog clock. you can see the time.",
        features: [
            "See the time",
            "Responsive for all devices",
        ],
        techStack: [
            "HTML",
            "CSS",
            "Javascript",
        ],
        githubLink: "https://github.com/Stranger-One/Analog_Clock",
        liveLink: "https://stranger-one.github.io/Analog_Clock/",
        createdAt: new Date,
    },
    {
        thumbnail: "",
        title: "Basic Calculator",
        category: "Frontend",
        description: "This is a basic calculator. you can do basic calculations.",
        features: [
            "Do basic calculations",
            "Responsive for all devices",
        ],
        techStack: [
            "HTML",
            "CSS",
            "Javascript",
        ],
        githubLink: "https://github.com/Stranger-One/Basic_Calculator",
        liveLink: "https://stranger-one.github.io/Basic_Calculator/",
        createdAt: new Date,
    }, //////////
    {
        thumbnail: "",
        title: "GitHub Home UI",
        category: "Frontend",
        description: "This is the ui clone of GitHub Home Page.",
        features: [
            "It is responssive for all devices",
            "Gsap animation Added",

        ],
        techStack: [
            "HTML",
            "CSS",
            "Tailwind CSS",
            "Javascript",
            "GSAP",
        ],
        githubLink: "https://github.com/Stranger-One/GiHub-Clone",
        liveLink: "https://stranger-one.github.io/GiHub-Clone/",
        startDate: "",
        createdAt: new Date,
    },
    {
        thumbnail: "",
        title: "A TODO List",
        category: "Frontend",
        description: "This is a simple todo list. you can add todos and delete todos.",
        features: [
            "It is responssive for all devices",
            "Users can add todos and delete todos",

        ],
        techStack: [
            "HTML",
            "CSS",
            "Javascript",
        ],
        githubLink: "https://github.com/Stranger-One/My-To-Do-List",
        liveLink: "https://stranger-one.github.io/My-To-Do-List/",
        startDate: "",
        createdAt: new Date,
    },
    {
        thumbnail: "",
        title: "Tinder Clone UI",
        category: "Frontend",
        description: "This is the ui clone of Tinder website, Using static data.",
        features: [
            "It is now only for mobile devices",
            "see different profiles ",

        ],
        techStack: [
            "Vite",
            "CSS",
            "Tailwind CSS",
            "Javascript",
        ],
        githubLink: "https://github.com/Stranger-One/Tinder-Clone",
        liveLink: "https://stranger-one.github.io/Tinder-Clone/",
        startDate: "",
        createdAt: new Date,
    },

]

// console.log(projects.length)

export const serverProjects = [
    {
        _id: "676d97fc9720a8b6d78e517f",
        thumbnail: "https://res.cloudinary.com/dolamani-cloudinary/image/upload/v1735236697/My_Portfolio/images/Chat%20Application-1735236695762.jpg",
        // thumbnail: "/chat.png",
        title: "Chat Application",
        category: "FullStack",
        description: "An advanced chat application that supports real-time messaging and video calling, built using Socket.IO and PeerJS.",
        features: [
            "Users can register and login",
            "Email verification system",
            "Real-time messaging and video calling"
        ],
        techStack: [
            "React.js",
            "Tailwind CSS",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Socket.io",
            "PeerJS"
        ],
        githubLink: "https://github.com/Stranger-One/My_Chat_App",
        liveLink: "https://my-chat-app-1-h9wb.onrender.com/",
        createdAt: "2024-12-26T17:53:00.613Z",
        updatedAt: "2024-12-26T19:21:44.028Z",
        startDate: "2024-11-06T00:00:00.000Z"
    },
    {
        _id: "676d97fc9720a8b6d78e517d",
        thumbnail: "https://res.cloudinary.com/dolamani-cloudinary/image/upload/v1735236635/My_Portfolio/images/MERN%20E-Commerce-1735236631830.jpg",
        title: "MERN E-Commerce",
        category: "FullStack",
        description: "This is a fully functional e-commerce website. you can add products to cart and checkout.",
        features: [
            "Users can register and login",
            "Add products to cart",
            "Checkout functionality"
        ],
        techStack: [
            "React.js",
            "Tailwind CSS",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Cloudinary"
        ],
        githubLink: "https://github.com/Stranger-One/first-MERN-E-commerce",
        liveLink: "https://first-mern-e-commerce-1.onrender.com/",
        createdAt: "2024-12-26T17:53:00.613Z",
        updatedAt: "2024-12-26T19:20:58.450Z",
        startDate: "2024-10-13T00:00:00.000Z"
    },
    {
        _id: "676d97fc9720a8b6d78e5180",
        thumbnail: "https://res.cloudinary.com/dolamani-cloudinary/image/upload/v1735236728/My_Portfolio/images/Youtube%20Video%20Downloader-1735236726914.jpg",
        title: "Youtube Video Downloader",
        category: "Frontend",
        description: "This is a youtube video downloader. you can download youtube videos in different formats.",
        features: [
            "Users can download youtube videos",
            "Download videos in different formats"
        ],
        techStack: [
            "React.js",
            "Tailwind CSS",
            "Rapid API"
        ],
        githubLink: "https://github.com/Stranger-One/youtube-video-downloader",
        liveLink: "https://youtube-video-downloader-nine.vercel.app/",
        createdAt: "2024-12-26T17:53:00.613Z",
        updatedAt: "2024-12-26T19:17:41.003Z",
        startDate: "2024-09-26T00:00:00.000Z"
    },
    {
        _id: "676d97fc9720a8b6d78e5181",
        thumbnail: "https://res.cloudinary.com/dolamani-cloudinary/image/upload/v1735236761/My_Portfolio/images/Weather%20App-1735236755344.jpg",
        title: "Weather App",
        category: "Frontend",
        description: "This is a weather app. you can check the weather of any city.",
        features: [
            "Search any city ",
            "Get the weather of that city",
            "Get visual on map"
        ],
        techStack: [
            "React.js",
            "Tailwind CSS",
            "Open Weather API",
            "Leaflet Map"
        ],
        githubLink: "https://github.com/Stranger-One/Task-2-My-Weather",
        liveLink: "https://my-weather-xi.vercel.app/",
        createdAt: "2024-12-26T17:53:00.613Z",
        updatedAt: "2024-12-26T19:15:56.121Z",
        startDate: "2024-09-17T00:00:00.000Z"
    },
    {
        _id: "676d97fc9720a8b6d78e517e",
        thumbnail: "https://res.cloudinary.com/dolamani-cloudinary/image/upload/v1735236673/My_Portfolio/images/AI%20Chat%20Bot-1735236671558.jpg",
        title: "AI Chat Bot",
        category: "FullStack",
        description: " This application integrates cutting-edge AI capabilities with robust backend and frontend frameworks.",
        features: [
            "Users can register and login",
            "Ask questions to AI",
            "AI will answer your questions"
        ],
        techStack: [
            "React.js",
            "Tailwind CSS",
            "Gsap",
            "Appwrite (Backend as a service)"
        ],
        githubLink: "https://github.com/Stranger-One/Ai_Chat_App",
        liveLink: "https://ai-chat-app-steel.vercel.app/",
        createdAt: "2024-12-26T17:53:00.613Z",
        updatedAt: "2024-12-26T19:19:56.431Z",
        startDate: "2024-09-04T00:00:00.000Z"
    },
    {
        _id: "676d97fc9720a8b6d78e5182",
        thumbnail: "https://res.cloudinary.com/dolamani-cloudinary/image/upload/v1735236795/My_Portfolio/images/Shoes%20Store-1735236792424.jpg",
        title: "Shoes Store",
        category: "Frontend",
        description: "This is a shoes store website. This is only a frontend project.",
        features: [
            "Register and login via Local Storage",
            "Cart And Wishlist Functionality",
            "Dummy Checkout Functionality"
        ],
        techStack: [
            "React.js",
            "Tailwind CSS",
            "React Router",
            "Swiper.js"
        ],
        githubLink: "https://github.com/Stranger-One/shoes-e-commerce",
        liveLink: "https://shoes-e-commerce-tau.vercel.app/",
        createdAt: "2024-12-26T17:53:00.613Z",
        updatedAt: "2024-12-26T19:28:10.966Z",
        startDate: "2024-08-14T00:00:00.000Z"
    },
    {
        _id: "676d97fc9720a8b6d78e5183",
        thumbnail: "https://res.cloudinary.com/dolamani-cloudinary/image/upload/v1735236845/My_Portfolio/images/E-Learning%20Platform-1735236843468.jpg",
        title: "E-Learning Platform",
        category: "Frontend",
        description: "This is a E-Learning Platform. This is only a frontend project.",
        features: [
            "Responsive for all devices.",
            "Smooth animation with Framer-motion.",
            "Dummy Courses"
        ],
        techStack: [
            "React.js",
            "Tailwind CSS",
            "Framer-motion"
        ],
        githubLink: "https://github.com/Stranger-One/E-Learning",
        liveLink: "https://e-learning-lovat.vercel.app/",
        createdAt: "2024-12-26T17:53:00.613Z",
        updatedAt: "2024-12-26T19:28:47.681Z",
        startDate: "2024-07-29T00:00:00.000Z"
    },
    {
        _id: "676da89e9720a8b6d78e5188",
        thumbnail: "https://res.cloudinary.com/dolamani-cloudinary/image/upload/v1735240112/My_Portfolio/images/GitHub%20Home%20Clone-1735240108802.jpg",
        title: "GitHub Home UI",
        category: "Frontend",
        description: "This is the ui clone of GitHub Home Page.",
        features: [
            "It is responssive for all devices",
            "Gsap animation Added"
        ],
        techStack: [
            "HTML",
            "CSS",
            "Tailwind CSS",
            "Javascript",
            "GSAP"
        ],
        githubLink: "https://github.com/Stranger-One/GiHub-Clone",
        liveLink: "https://stranger-one.github.io/GiHub-Clone/",
        startDate: "2024-05-20T00:00:00.000Z",
        createdAt: "2024-12-26T19:03:58.783Z",
        updatedAt: "2024-12-26T19:08:32.624Z"
    },
    {
        _id: "676da89e9720a8b6d78e5189",
        thumbnail: "https://res.cloudinary.com/dolamani-cloudinary/image/upload/v1735240211/My_Portfolio/images/A%20todo%20list-1735240210186.jpg",
        title: "A TODO List",
        category: "Frontend",
        description: "This is a simple todo list. you can add todos and delete todos.",
        features: [
            "It is responssive for all devices",
            "Users can add todos and delete todos"
        ],
        techStack: [
            "HTML",
            "CSS",
            "Javascript"
        ],
        githubLink: "https://github.com/Stranger-One/My-To-Do-List",
        liveLink: "https://stranger-one.github.io/My-To-Do-List/",
        startDate: "2024-04-10T00:00:00.000Z",
        createdAt: "2024-12-26T19:03:58.783Z",
        updatedAt: "2024-12-26T19:10:12.512Z"
    },
    {
        _id: "676da89e9720a8b6d78e518a",
        thumbnail: "https://res.cloudinary.com/dolamani-cloudinary/image/upload/v1735240289/My_Portfolio/images/Tinder%20clone-1735240285876.jpg",
        title: "Tinder Clone UI",
        category: "Frontend",
        description: "This is the ui clone of Tinder website, Using static data.",
        features: [
            "It is now only for mobile devices",
            "see different profiles "
        ],
        techStack: [
            "Vite",
            "CSS",
            "Tailwind CSS",
            "Javascript"
        ],
        githubLink: "https://github.com/Stranger-One/Tinder-Clone",
        liveLink: "https://stranger-one.github.io/Tinder-Clone/",
        startDate: "2024-03-17T00:00:00.000Z",
        createdAt: "2024-12-26T19:03:58.783Z",
        updatedAt: "2024-12-26T19:11:29.670Z"
    },
    {
        _id: "676d97fc9720a8b6d78e517c",
        thumbnail: "https://res.cloudinary.com/dolamani-cloudinary/image/upload/v1735236594/My_Portfolio/images/Ochi%20Design-1735236592777.jpg",
        title: "ochi design ui clone",
        category: "Frontend",
        description: "This is the ui clone of ochi design website.",
        features: [
            "It is responssive for all devices",
            "Gsap animation Added"
        ],
        techStack: [
            "HTML",
            "CSS",
            "Javascript",
            "Gsap"
        ],
        githubLink: "https://github.com/Stranger-One/ochi.design",
        liveLink: "https://stranger-one.github.io/ochi.design/",
        createdAt: "2024-12-26T17:53:00.613Z",
        updatedAt: "2024-12-26T18:09:55.106Z"
    },
    {
        _id: "676d97fc9720a8b6d78e5184",
        thumbnail: "https://res.cloudinary.com/dolamani-cloudinary/image/upload/v1735236884/My_Portfolio/images/A%20Simple%20Post-1735236880890.jpg",
        title: "A Simple Post",
        category: "FullStack",
        description: "This is a simple post website. you can add posts, and delete posts.",
        features: [
            "Register and login functionality",
            "Users can add posts and view all user posts",
            "Users can delete only their posts"
        ],
        techStack: [
            "React.js",
            "Tailwind CSS",
            "Appwrite (Backend as a service)",
            "React Router"
        ],
        githubLink: "https://github.com/Stranger-One/React-Project-With-Hitesh-Sir",
        liveLink: "https://react-project-with-hitesh-sir.vercel.app/",
        createdAt: "2024-12-26T17:53:00.613Z",
        updatedAt: "2024-12-26T18:14:45.293Z"
    },
    {
        _id: "676d97fc9720a8b6d78e5185",
        thumbnail: "https://res.cloudinary.com/dolamani-cloudinary/image/upload/v1735236924/My_Portfolio/images/Simple%20Todo%20App-1735236922766.jpg",
        title: "Simple TODO App",
        category: "Frontend",
        description: "This is a simple todo app. you can add todos and delete todos.",
        features: [
            "Register and login functionality with Local Storage",
            "Users can add todos and Manage todos",
            "Responsive for all devices"
        ],
        techStack: [
            "HTML",
            "CSS",
            "Javascript"
        ],
        githubLink: "https://github.com/Stranger-One/Todo-with-Login",
        liveLink: "https://stranger-one.github.io/Todo-with-Login/",
        createdAt: "2024-12-26T17:53:00.613Z",
        updatedAt: "2024-12-26T18:15:24.930Z"
    },
    {
        _id: "676d97fc9720a8b6d78e5186",
        thumbnail: "https://res.cloudinary.com/dolamani-cloudinary/image/upload/v1735236964/My_Portfolio/images/Simple%20Travel%20Website-1735236961707.jpg",
        title: "Simple Travel Website",
        category: "Frontend",
        description: "This is a travel planing website. Search your destination and book your trip with proper Itinerary.",
        features: [
            "Search your destination",
            "Book your trip with proper Itinerary",
            "Responsive for all devices"
        ],
        techStack: [
            "HTML",
            "CSS",
            "Javascript"
        ],
        githubLink: "https://github.com/Stranger-One/WeAreTheBest",
        liveLink: "https://stranger-one.github.io/WeAreTheBest/index.html",
        createdAt: "2024-12-26T17:53:00.613Z",
        updatedAt: "2024-12-26T18:16:05.394Z"
    },
    {
        _id: "676d97fc9720a8b6d78e5187",
        thumbnail: "https://res.cloudinary.com/dolamani-cloudinary/image/upload/v1735236997/My_Portfolio/images/Password%20generator-1735236996558.jpg",
        title: "Password Generator",
        category: "Frontend",
        description: "This is a password generator. you can generate a strong password.",
        features: [
            "Generate a strong password",
            "Copy to clipboard functionality",
            "Responsive for all devices"
        ],
        techStack: [
            "React.js",
            "React hot toast",
            "Javascript"
        ],
        githubLink: "https://github.com/Stranger-One/Password-generator",
        liveLink: "https://stranger-one.github.io/Password-generator/",
        createdAt: "2024-12-26T17:53:00.613Z",
        updatedAt: "2024-12-26T18:16:38.388Z"
    },
    {
        _id: "676d97c29720a8b6d78e517b",
        thumbnail: "https://res.cloudinary.com/dolamani-cloudinary/image/upload/v1735236544/My_Portfolio/images/Connect%204%20game-1735236541195.jpg",
        title: "connect 4 game",
        category: "Frontend",
        description: "This is a connect 4 game. you can play with your friend.",
        features: [
            "Play with your friend",
            "Responsive for all devices"
        ],
        techStack: [
            "HTML",
            "CSS",
            "Javascript"
        ],
        githubLink: "https://github.com/Stranger-One/connect-4-game",
        liveLink: "https://stranger-one.github.io/connect-4-game/",
        createdAt: "2024-12-26T17:52:02.414Z",
        updatedAt: "2024-12-26T18:09:04.850Z"
    },
    {
        _id: "676d97c29720a8b6d78e517a",
        thumbnail: "https://res.cloudinary.com/dolamani-cloudinary/image/upload/v1735236286/My_Portfolio/images/Frase%20UI%20Clone-1735236283793.jpg",
        title: "Frase UI Clone",
        category: "Frontend",
        description: "This is the ui clone of Frase website.",
        features: [
            "It is responssive for all devices",
            "Gsap animation Added"
        ],
        techStack: [
            "HTML",
            "CSS",
            "Javascript",
            "Gsap"
        ],
        githubLink: "https://github.com/Stranger-One/frace-full-responssive",
        liveLink: "https://stranger-one.github.io/frace-full-responssive/",
        createdAt: "2024-12-26T17:52:02.414Z",
        updatedAt: "2024-12-26T18:04:46.972Z"
    },
    {
        _id: "676d973d9720a8b6d78e5179",
        thumbnail: "https://res.cloudinary.com/dolamani-cloudinary/image/upload/v1735236164/My_Portfolio/images/zasira%20e-commerce-1735236161534.jpg",
        title: "Zasira E-Commerce",
        category: "Frontend",
        description: "This is a e-commerce website. This is only a frontend project.",
        features: [
            "see products details",
            "Responsive for all devices"
        ],
        techStack: [
            "HTML",
            "CSS",
            "Javascript"
        ],
        githubLink: "https://github.com/Stranger-One/zasira_e-commerce",
        liveLink: "https://stranger-one.github.io/zasira_e-commerce/",
        createdAt: "2024-12-26T17:49:49.613Z",
        updatedAt: "2024-12-26T18:03:38.671Z"
    },
    {
        _id: "676d97009720a8b6d78e5178",
        thumbnail: "https://res.cloudinary.com/dolamani-cloudinary/image/upload/v1735236119/My_Portfolio/images/Analog%20Clock-1735236117662.jpg",
        title: "Analog Clock",
        category: "Frontend",
        description: "This is an analog clock. you can see the time.",
        features: [
            "See the time",
            "Responsive for all devices"
        ],
        techStack: [
            "HTML",
            "CSS",
            "Javascript"
        ],
        githubLink: "https://github.com/Stranger-One/Analog_Clock",
        liveLink: "https://stranger-one.github.io/Analog_Clock/",
        createdAt: "2024-12-26T17:48:48.580Z",
        updatedAt: "2024-12-26T18:01:59.301Z"
    },
    {
        _id: "676d96dc9720a8b6d78e5177",
        thumbnail: "https://res.cloudinary.com/dolamani-cloudinary/image/upload/v1735236053/My_Portfolio/images/Basic%20calculator-1735236051194.jpg",
        title: "Basic Calculator",
        category: "Frontend",
        description: "This is a basic calculator. you can do basic calculations.",
        features: [
            "Do basic calculations",
            "Responsive for all devices"
        ],
        techStack: [
            "HTML",
            "CSS",
            "Javascript"
        ],
        githubLink: "https://github.com/Stranger-One/Basic_Calculator",
        liveLink: "https://stranger-one.github.io/Basic_Calculator/",
        createdAt: "2024-12-26T17:48:12.365Z",
        updatedAt: "2024-12-26T18:00:54.320Z"
    }
]



// Experiences
export const experiences = [
    {
        role: "Frontend Developer Intern",
        company: "NovaNectar Services Pvt. Ltd.",
        duration: "Jun 2024 - July 2024",
        description: [
            "Developed and maintained responsive web pages using HTML, CSS, and JavaScript.",
            "During the internship, I worked on 3 projects.",
            "The projects i worked on were a responsive e-commerce website, a travel website and a todo list with localhost login.",
        ],
    },
    {
        role: "Frontend Developer Intern",
        company: "InternPe",
        duration: "May 2024 - Jun 2024",
        description: [
            "Developed and maintained responsive web pages using HTML, CSS, and JavaScript.",
            "During the internship, I worked on 4 projects.",
            "The projects i worked on were a basic calculator, a e-commerce website, a todo list and a connect 4 game.",
        ],
    },
];
