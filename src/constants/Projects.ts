import GraphQL from "../assets/icons/GraphQL.astro"
import MongoDB from "../assets/icons/MongoDB.astro"
import NestJS from "../assets/icons/NestJS.astro"
import NextJS from "../assets/icons/NextJS.astro"
import React from "../assets/icons/React.astro"
import Rust from "../assets/icons/Rust.astro"
import TailwindCSS from "../assets/icons/TailwindCSS.astro"
import Typescript from "../assets/icons/Typescript.astro"

export const proyectsData = [
        {
            title: 'Trustless Work',
            description: 'Add milestone-based payments to your platform or app without building everything from scratch. Trustless Work offers a ready-to-use API to launch secure, programmable escrows with stablecoins. Built for developers, trusted by platforms, enterprise-ready.',
            image: 'https://res.cloudinary.com/dyuj1zglt/image/upload/v1748033223/portfolio-projects/tgj7lwwcwtit5yz0cxz4.png',
            link: 'https://www.trustlesswork.com/',
            github: 'https://github.com/Trustless-Work',
            technologys: [
                {
                    name: 'NextJS',
                    class: 'bg-black text-white/90',
                    icon: NextJS,
                },
                {
                    name: "Rust",
                    class: "bg-[#BC6222] text-white/90",
                    icon: Rust,
                },
            ]
        },
        {
            title: 'STOCK ANALYZER',
            description: 'Web application that allows users to analyze and visualize historical stock market data using interactive charts and technical analysis tools.',
            image: 'https://res.cloudinary.com/dyuj1zglt/image/upload/v1767192520/portfolio-projects/mvvki5ovb9x5cce0a0f5.png',
            link: 'https://us-stock-analyzer.vercel.app/',
            github: 'https://github.com/armandocodecr/stock-analyzer',
            technologys: [
                {
                    name: 'NextJS',
                    class: 'bg-black text-white',
                    icon: NextJS,
                },
                {
                    name: 'Typescript',
                    class: 'bg-[#23568D] text-white/90',
                    icon: Typescript,
                },
            ]
        },
        {
            title: 'MovieAPP',
            description: 'Movie listing application where you can search and view details. All managed with a pleasant and clear interface for any user.',
            image: 'https://res.cloudinary.com/dyuj1zglt/image/upload/v1710636908/portfolio-projects/czcposhnk9ekytbktfkz.png',
            link: 'https://movie-app-2024-cm.vercel.app/',
            github: 'https://github.com/Armandocm19/movie-app',
            technologys: [
                {
                    name: 'NextJS',
                    class: 'bg-black text-white',
                    icon: NextJS,
                },
                {
                    name: 'Typescript',
                    class: 'bg-[#23568D] text-white',
                    icon: Typescript,
                },
            ],
        },
        {
            title: 'Kapool (Kahoot Clone)',
            description: 'In this project you can create your games and connect in real-time with other players to play your matches. It features a scoring and ranking system, along with an attractive design.',
            image: 'https://res.cloudinary.com/dyuj1zglt/image/upload/v1684262039/portfolio-projects/brbttmwqenvsocinibvn.png',
            link: 'https://kapool-react-frontend.vercel.app/',
            github: 'https://github.com/Armandocm19/kapool-react-frontend',
            technologys: [
                {
                    name: 'React',
                    class: 'bg-sky-400/60 text-white/90',
                    icon: React,
                },
                {
                    name: "TailwindCSS",
                    class: "bg-[#003159] text-white/90",
                    icon: TailwindCSS,
                },
                {
                    name: "MongoDB",
                    class: "bg-green-400/80 text-white/90",
                    icon: MongoDB,
                },
            ],
            video: 'https://www.youtube.com/watch?v=_tMWN6hUAOo'
        },
        {
            title: 'Shopping List',
            description: 'The application facilitates the creation of shopping lists, with features for authentication, listing items, and visualizing usage statistics through charts, including a timeline of lists.',
            image: 'https://res.cloudinary.com/dyuj1zglt/image/upload/v1691785152/portfolio-projects/Shoppinglist.png',
            link: 'https://shopping-list-2023.vercel.app/',
            github: 'https://github.com/armandocodecr/ShoppingList',
            technologys: [
                {
                    name: 'NextJS',
                    class: 'bg-black text-white/90',
                    icon: NextJS,
                },
                {
                    name: 'GraphQL',
                    class: 'bg-pink-600/50 text-white/90',
                    icon: GraphQL,
                },
                {
                    name: 'NestJS',
                    class: 'bg-rose-500/40 text-white/90',
                    icon: NestJS,
                },
            ],
            video: 'https://youtu.be/D9G8okA7qmQ'
        },
    ]