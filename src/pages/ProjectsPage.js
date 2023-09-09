import React from "react";
import Project1 from "../assets/img/Project1.png";
import Project5 from "../assets/img/Project5.png";
import Project6 from "../assets/img/Project6.png";
import Project7 from "../assets/img/Project7.png";
import Project8 from "../assets/img/Project8.png";
import Project9 from "../assets/img/Project9.png";
import Project10 from "../assets/img/Project10.png";
import Project11 from "../assets/img/Project11.png";
import Project12 from "../assets/img/Project12.jpg";
import Project13 from "../assets/img/Project13.png";
import Project14 from "../assets/img/Project14.png";
import Project15 from "../assets/img/Project15.png";
import UralMebelSCR1 from "../assets/img/UralMebelSCR1.png";
import {ProjectPreview} from "../components/ProjectPreview/ProjectPreview";
import s from "./Pages.module.css"

export const ProjectsPage = () => {
    const projects = [
        {
            id: 0,
            category: "Коммерческий",
            name: "АвтоМагШина",
            description: "Интернет-магазин шин и дисков с автоматическим подбором по авто, каталогом продукции, шинным калькулятором и онлайн заказом для компании из Магнитогорска",
            image: Project1,
            tags: ["PHPShop", "1C", "Интернет-магазин"],
            // gitURL: "123",
            projectURL: "https://automagshina.ru/"
        },
        {
            id: 1,
            category: "Коммерческий",
            name: "УралМебель",
            description: "Веб-сайт с каталогом товаров и адресами магазинов для группы компаний, занимающихся мягкой мебелью, из Магнитогорска",
            image: UralMebelSCR1,
            tags: ["WordPress", "Elementor", "Интернет-магазин"],
            // gitURL: "123",
            projectURL: "https://уралмебель74.рф/"
        },
        {
            id: 2,
            category: "Коммерческий",
            name: "РекАрт",
            description: "Веб-сайт для рекламного агенства в Магнитогорске",
            image: Project11,
            tags: ["WordPress", "Elementor"],
            // gitURL: "123",
            projectURL: "https://рекарт.рф/"
        },
        {
            id: 3,
            category: "Разработан на хакатоне",
            name: "BeMyVoice",
            description: "Сервис для распознавания и озвучивания русской жестовой речи, а также транскрибации звуков с компьютера и окружающего мира",
            image: Project14,
            tags: ["React", "Python", "C#"],
            gitURL: "https://github.com/CatDevelop/BeMyVoice"
        },
        {
            id: 4,
            category: "Сервис внутреннего использования",
            name: "P-1",
            description: "Сервис для эффективного управления проектом внутри команды. Постановка задач, менеджер багов, блочный редактор статей, построитель схем - теперь в одном приложении",
            image: Project15,
            tags: ["React", "Redux", "PHP"]
        },
        {
            id: 5,
            category: "Учебный (для партнёров)",
            name: "HR USSCxUDV",
            description: "Сервис для постановки квартальных целей HR-сотрудников группы компаний УЦСБ",
            image: Project7,
            tags: ["React", "Redux", "C#"]
        },
        {
            id: 6,
            category: "Учебный",
            name: "Portfolio Hub",
            description: "Сервис для создания web-портфолио IT-специалиста с помощью блочного редактора (Можно добавлять свои проекты)",
            image: Project13,
            tags: ["React", "Redux", "PHP"],
            projectURL: "https://portfoliohub.ru/",
            gitURL: "https://github.com/CatDevelop/URFU-portfolio-hub"
        },
        {
            id: 7,
            category: "GameDev",
            name: "HeroReturn",
            description: "Пиксельная игра в жанре Lazy-RPG (Призывай юнитов - они сделают всё за тебя)",
            image: Project12,
            tags: ["С#", "MonoGame"],
            gitURL: "https://github.com/CatDevelop/HeroReturnC"
        },
        {
            id: 8,
            category: "Учебный",
            name: "Бронирование бассейна УрФУ",
            description: "Сервис для бронирования дорожек в бассейне Уральского федерального университета им. Б. Ельцина",
            image: Project5,
            tags: ["React", "Redux", "PHP"],
            gitURL: "https://github.com/CatDevelop/URFU-pool-booking"
        },
        {
            id: 9,
            category: "Учебный",
            name: "Система учёта книг",
            description: "Автоматизированная информационная система для библиотеки Академического лицея города Магнитогорска",
            image: Project6,
            tags: ["HTML", "CSS", "Python", "PHP"],
            gitURL: "https://github.com/CatDevelop/Library"
        },
        {
            id: 10,
            category: "Учебный",
            name: "ITS-Economy",
            description: "Электронный сервис управления банковским счётом виртуальной валюты для выездной профильной смены в IT-школе",
            image: Project8,
            tags: ["React", "Redux", "PHP"],
            gitURL: "https://github.com/CatDevelop/ITS-Economy"
        },
        {
            id: 11,
            category: "Учебный",
            name: "Визуализатор деревьев",
            description: "Приложение для визуализации работы со структурой данных \"Деревья\" (Создание, добавление, удаление, поиск элементов, обходы)",
            image: Project9,
            tags: ["С++", "Windows Forms"],
            gitURL: "https://github.com/CatDevelop/IT-School/tree/main/SecondCourse/TreesVisualization"
        },
        {
            id: 12,
            category: "Учебный",
            name: "Калькулятор графиков",
            description: "Приложение для визуализации графиков и их зависимости от коэффициентов",
            image: Project10,
            tags: ["С++", "TXLib"],
            gitURL: "https://github.com/CatDevelop/IT-School/tree/main/SecondCourse/TreesVisualization"
        }
    ]

    return (
        <div>
            <h1 className={s.projectsTitle}>Мои проекты</h1>

            <div className={s.projects}>
                {
                    projects.map(project => {
                        return <ProjectPreview key={project.id}
                                               id={project.id}
                                               category={project.category}
                                               name={project.name}
                                               description={project.description}
                                               image={project.image}
                                               tags={project.tags}
                                               gitURL={project.gitURL}
                                               projectURL={project.projectURL}
                                               isInvert={project.id%2===0}
                        />
                    })
                }
            </div>
        </div>
    )
}
