import GraphQL from "../assets/icons/GraphQL.astro"
import MongoDB from "../assets/icons/MongoDB.astro"
import NestJS from "../assets/icons/NestJS.astro"
import NextJS from "../assets/icons/NextJS.astro"
import React from "../assets/icons/React.astro"
import TailwindCSS from "../assets/icons/TailwindCSS.astro"
import Typescript from "../assets/icons/Typescript.astro"

export const proyectsData = [
        {
            title: 'MovieAPP',
            description: 'Listado de películas, donde puedes buscar y ver detalles de las mismas. Todo esto manejado con una interfaz agradable y clara para cualquier usuario.',
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
            title: 'Kapool (Clon de Kahoot)',
            description: 'Este proyecto podrás crear tus partidas y conectarte en tiempo real con otros jugadores para jugar tus partida. Cuenta con un sistema de puntaje y clasificación, y diseño atractivo.',
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
            description: 'La aplicación facilita la creación de listas de compras, con funciones para autenticarse, listar ítems, y visualizar estadísticas de uso mediante gráficos, incluyendo una línea de tiempo de las listas.',
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
        {
            title: 'TRES EN RAYA',
            description: 'Este proyecto es una versión del juego "Tres en Raya" con una interfaz simple y una lógica avanzada para manejar estados, detectando victorias, derrotas, o empates, y está diseñado para aumentar la dificultad de ganar para el usuario.',
            image: 'https://res.cloudinary.com/dyuj1zglt/image/upload/v1675565063/portfolio-projects/rjve54majth1g8oyugos.png',
            link: 'https://juego-tres-en-raya.vercel.app/',
            github: 'https://github.com/Armandocm19/juego-tres-en-raya',
            technologys: [
                {
                    name: 'React',
                    class: 'bg-sky-400/60 text-white/90',
                    icon: React,
                },
                {
                    name: 'Typescript',
                    class: 'bg-[#23568D] text-white/90',
                    icon: Typescript,
                },
            ]
        },
        {
            title: 'GitHub Cards',
            description: 'El proyecto permite visualizar y descargar una tarjeta con estadísticas de GitHub en 3D, usando solo el nombre de usuario, para servir como carta de presentación del perfil.',
            image: 'https://res.cloudinary.com/dyuj1zglt/image/upload/v1688055012/portfolio-projects/fn4kxrz7lqzebxbilvlp.png',
            link: 'https://devfinder-github-cards.vercel.app/',
            github: 'https://github.com/armandocodecr/Devfinder-GithhubCards',
            technologys: [
                {
                    name: 'NextJS',
                    class: 'bg-black text-white/90',
                    icon: NextJS,
                },
                {
                    name: "TailwindCSS",
                    class: "bg-[#003159] text-white/90",
                    icon: TailwindCSS,
                },
            ]
        },
    ]