import {useNavigate} from "react-router-dom";
import InfoBlock from "../components/InfoBlock/InfoBlock";
import React from "react";
import TechStack from "../components/TechStack/TechStack";
import MyTimeline from "../components/MyTimeline/MyTimeline";
import Button from "../components/Button/Button";
import LinkButton from "../components/LinkButton/LinkButton";
import s from "./Pages.module.css";

export const BlogPage = () => {
    let navigate = useNavigate();

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
            <h1 className={s.projectsTitle}>Мой блог</h1>
            <p style={{textAlign: "center"}}>В разработке</p>
        </div>
    )
}
