import {useNavigate} from "react-router-dom";
import ConsoleAndPhoto from "../components/ConsoleAndPhoto/ConsoleAndPhoto";
import InfoBlock from "../components/InfoBlock/InfoBlock";
import React from "react";
import TechStack from "../components/TechStack/TechStack";
import MyTimeline from "../components/MyTimeline/MyTimeline";
import Button from "../components/Button/Button";
import LinkButton from "../components/LinkButton/LinkButton";
import s from "./Pages.module.css";

export const WelcomePage = () => {
    let navigate = useNavigate();

    const toRotate = ["Frontend developer", "Web Designer", "UI/UX Designer", "Tech Analyst"]

    const items = [
        {
            year: "12.08.2023-18.08.2023",
            color: "red",
            text: "<b>Победа в хакатоне от Сбера и УрФУ \"Код города 300\"</b>\nСоздали MVP десктопного приложение для распознавания и озвучивания русской жестовой речи, что позволяет слабослышащим удобно общаться в онлайн созвонах и конференциях"
        },
        {
            year: "01.01.2023-31.05.2023",
            text: "<b>Прохождение курса \"Основы программирования на примере C#. Часть 2\" (Ulearn)</b>\nИзучение generics, генераторов последовательностей, LINQ, алгоритмов и структур данных"
        },
        {
            year: "15.04.2023-16.04.2023",
            color: "red",
            text: "<b>Участие в хакатоне от Сбера и УрФУ \"SkyHack\"</b>"
        },
        {
            year: "29.10.2022-30.10.2022",
            color: "red",
            text: "<b>Участие в хакатоне от УрФУ \"Hackathon’22 Code Runner\", кейс от Тинькофф</b>"
        },
        {
            year: "01.09.2022-31.12.2022",
            color: "green",
            text: "<b>Прохождение курса \"React JS - путь самурая 1.0\"</b>\nИзучение библиотек React, Redux, Thunk, Axios и Saga"
        },
        {
            year: "01.09.2022-31.12.2022",
            text: "<b>Прохождение курса \"Основы программирования на примере C#. Часть 1\" (Ulearn)</b>\nИзучение основ синтаксиса C#, стандартных классов .NET, основ ООП и базовых алгоритмов"
        },
        {
            year: "01.09.2021-01.05.2022",
            text: "<b>Прохождение курса \"Программирование на языке Python\" (Compass Plus It-school)</b>"
        },
        {
            year: "01.09.2020-01.05.2021",
            text: "<b>Прохождение курса \"Математика на компьютерах\" (Compass Plus It-school)</b>"
        },
        {
            year: "01.09.2020-01.05.2021",
            text: "<b>Прохождение курса \"Программирование на С++\" (Compass Plus It-school)</b>\nИзучение алгоритмизации, структур данных, методов объектно-ориентированного программирования"
        },
        {
            year: "01.09.2019-01.05-2020",
            text: "<b>Прохождение курса \"Программирование на С и С++ для начинающих\" (Compass Plus It-school)</b>\nИзучение основных концепций программирования, алгоритмизации, разработки модульного программного обеспечения"
        }
    ]

    return (
        <div style={{paddingBottom: "48px"}}>
            <ConsoleAndPhoto toRotate={toRotate}/>
            <TechStack/>

            <div>
                <InfoBlock header="Обо мне"
                           content={
                               "<p>Меня зовут Максим, я продуктовый разработчик, специализирующийся на React. Cейчас обучаюсь на 2 курсе УрФУ имени первого Президента России Б.Н. Ельцина, направление «Программная инженерия».</p><br/>" +
                               "<p>Мой путь начался в школе программирования, где 3 года изучал основы программирования и алгоритмизации на языке C++, основы Python. Эти знания не только дали мне крепкую основу в программировании, но и позволяют лучше разбираться в архитектуре backend\'a.</p><br/>" +
                               "<p>Не ограничиваюсь только frontend разработкой, интересуюсь разными аспектами IT-индустрии (GameDev, Arduino, нейронные сети) и уделяю много времени самообразованию.</p>"
                           }/>
            </div>
            {/*<div>*/}
            {/*    <InfoBlock header="I ♥"*/}
            {/*               content="Art, Music, Drawing, Playing Drums, Photography, Leica, Machine Learning"/>*/}
            {/*</div>*/}
            <div style={{padding: '0 10px'}}>
                <h3 className={s.projectBlockTitle}>Ссылки</h3>
                <LinkButton link={"https://github.com/CatDevelop"}>
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512"
                         aria-hidden="true" focusable="false" height="1em" width="1em"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 003.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 01-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0025.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 015-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 01112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 015 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 004-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z"></path>
                    </svg>
                    @CatDevelop
                </LinkButton>
                <LinkButton link={"https://t.me/CatDevelops"}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_507_788)">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.1848 2.95319C13.9101 2.64781 14.6876 3.26109 14.5596 4.03755L13.047 13.2087C12.9011 14.093 11.9299 14.6004 11.1186 14.1597C10.4398 13.791 9.43258 13.2234 8.52484 12.6303C8.07158 12.3341 6.68364 11.3844 6.85424 10.7083C7.00011 10.1302 9.33338 7.95829 10.6667 6.66663C11.1904 6.15925 10.9519 5.86613 10.3334 6.33329C8.79898 7.49216 6.33552 9.25409 5.52088 9.74996C4.80213 10.1874 4.42685 10.2621 3.97922 10.1874C3.1618 10.0512 2.40395 9.84029 1.78523 9.58383C0.948984 9.23716 0.989717 8.08796 1.78466 7.75329L13.1848 2.95319Z" fill="#81E6D9"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_507_788">
                                <rect width="16" height="16" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>

                    @CatDevelops
                </LinkButton>
                <LinkButton link={"https://vk.com/cat_dev"}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.71454 12.9837C3.24795 12.9837 0.129927 9.2361 0 3H2.73829C2.82824 7.57713 4.84693 9.5159 6.44592 9.91566V3H9.0244V6.9475C10.6034 6.77761 12.2622 4.97876 12.8218 3H15.4003C14.9705 5.43848 13.1717 7.23733 11.8925 7.97686C13.1717 8.57648 15.2205 10.1455 16 12.9837H13.1617C12.5521 11.0849 11.0331 9.61585 9.0244 9.41596V12.9837H8.71454Z" fill="#81E6D9"/>
                    </svg>
                    @cat_dev
                </LinkButton>
                <LinkButton link={"https://www.instagram.com/catdeveloper/"}>
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" aria-hidden="true" focusable="false" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M349.33 69.33a93.62 93.62 0 0193.34 93.34v186.66a93.62 93.62 0 01-93.34 93.34H162.67a93.62 93.62 0 01-93.34-93.34V162.67a93.62 93.62 0 0193.34-93.34h186.66m0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32z"></path><path d="M377.33 162.67a28 28 0 1128-28 27.94 27.94 0 01-28 28zM256 181.33A74.67 74.67 0 11181.33 256 74.75 74.75 0 01256 181.33m0-37.33a112 112 0 10112 112 112 112 0 00-112-112z"></path></svg>
                    @catdeveloper
                </LinkButton>
            </div>
            <div style={{padding: '0 10px', margin: '10px 0 30px 0'}}>
                <h3 className={s.projectBlockTitle}>Основные события</h3>

            </div>

            <MyTimeline items={items}/>

            <div style={{display: 'flex', alignContent: 'center', justifyContent: 'center'}}>
                <Button onClick={() => navigate("/works")}>Мои проекты</Button>
            </div>
        </div>
    )
}
