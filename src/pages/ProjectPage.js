import React from 'react';
import {useParams} from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";
import s from "./Pages.module.css"
import {Image} from 'antd'
import AutoMagShinaSCR1 from "../assets/img/AutoMagShinaSCR1.png";
import AutoMagShinaSCR2 from "../assets/img/AutoMagShinaSCR2.png";
import AutoMagShinaSCR3 from "../assets/img/AutoMagShinaSCR3.png";
import AutoMagShinaSCR4 from "../assets/img/AutoMagShinaSCR4.png";
import AutoMagShinaSCR5 from "../assets/img/AutoMagShinaSCR5.png";
import UralMebelSCR1 from "../assets/img/UralMebelSCR1.png";
import UralMebelSCR2 from "../assets/img/UralMebelSCR2.png";
import UralMebelSCR3 from "../assets/img/UralMebelSCR3.png";
import UralMebelSCR4 from "../assets/img/UralMebelSCR4.png";
import RecArtSRC1 from "../assets/img/RecArtSRC1.png";
import RecArtSRC2 from "../assets/img/RecArtSRC2.png";
import RecArtSRC3 from "../assets/img/RecArtSRC3.png";
import RecArtSRC4 from "../assets/img/RecArtSRC4.png";
import HrUsscSRC1 from "../assets/img/HrUsscSRC1.png";
import HrUsscSRC2 from "../assets/img/HrUsscSRC2.png";
import HrUsscSRC3 from "../assets/img/HrUsscSRC3.png";
import HrUsscSRC4 from "../assets/img/HrUsscSRC4.png";
import HrUsscSRC5 from "../assets/img/HrUsscSRC5.png";
import HrUsscSRC6 from "../assets/img/HrUsscSRC6.png";
import HrUsscSRC7 from "../assets/img/HrUsscSRC7.png";
import HrUsscDemo from "../assets/video/HRUSSC-Demo.mp4";
import P1SRC1 from "../assets/img/P1SRC1.png";
import P1SRC2 from "../assets/img/P1SRC2.png";
import P1SRC3 from "../assets/img/P1SRC3.png";
import P1SRC4 from "../assets/img/P1SRC4.png";
import P1SRC5 from "../assets/img/P1SRC5.png";
import P1SRC6 from "../assets/img/P1SRC6.png";
import BeMyVoiceSRC1 from "../assets/img/BeMyVoiceSRC1.png";
import BeMyVoiceSRC2 from "../assets/img/BeMyVoiceSRC2.png";
import BeMyVoiceSRC3 from "../assets/img/BeMyVoiceSRC3.png";
import BeMyVoiceSRC4 from "../assets/img/BeMyVoiceSRC4.png";

import BeMyVoiceSRC1Preview from "../assets/img/Preview/BeMyVoiceSRC1.png";
import BeMyVoiceSRC2Preview from "../assets/img/Preview/BeMyVoiceSRC2.png";
import BeMyVoiceSRC3Preview from "../assets/img/Preview/BeMyVoiceSRC3.png";
import BeMyVoiceSRC4Preview from "../assets/img/Preview/BeMyVoiceSRC4.png";

import BeMyVoiceDemo from "../assets/video/BeMyVoice-Demo.mp4";

import PortfolioHubSRC1 from "../assets/img/PortfolioHubSRC1.png";
import PortfolioHubSRC2 from "../assets/img/PortfolioHubSRC2.png";
import PortfolioHubSRC3 from "../assets/img/PortfolioHubSRC3.png";
import PortfolioHubSRC4 from "../assets/img/PortfolioHubSRC4.png";
import PortfolioHubSRC5 from "../assets/img/PortfolioHubSRC5.png";
import PortfolioHubSRC6 from "../assets/img/PortfolioHubSRC6.png";
import PortfolioHubDemo from "../assets/video/PortfolioHub-Demo.mp4";

import HeroReturnSRC1 from "../assets/img/HeroReturnSRC1.png";
import HeroReturnSRC2 from "../assets/img/HeroReturnSRC2.png";
import HeroReturnSRC3 from "../assets/img/HeroReturnSRC3.png";
import HeroReturnSRC4 from "../assets/img/HeroReturnSRC4.png";
import HeroReturnSRC5 from "../assets/img/HeroReturnSRC5.png";
import HeroReturnSRC6 from "../assets/img/HeroReturnSRC6.png";
import HeroReturnDemo from "../assets/video/HeroReturn-Demo.mp4";

import PoolBookingSRC1 from "../assets/img/PoolBookingSRC1.png";
import PoolBookingSRC2 from "../assets/img/PoolBookingSRC2.png";
import PoolBookingSRC3 from "../assets/img/PoolBookingSRC3.png";

import LibrarySRC1 from "../assets/img/LibrarySRC1.png";
import LibrarySRC2 from "../assets/img/LibrarySRC2.png";
import LibrarySRC3 from "../assets/img/LibrarySRC3.png";

import ITSeconomySRC1 from "../assets/img/ITSeconomySRC1.png";
import ITSeconomySRC2 from "../assets/img/ITSeconomySRC2.png";
import ITSeconomySRC3 from "../assets/img/ITSeconomySRC3.png";
import ITSeconomySRC4 from "../assets/img/ITSeconomySRC4.png";
import TreesVisualizationSRC1 from "../assets/img/TreesVisualizationSRC1.png";
import GraphicsSRC1 from "../assets/img/GraphicsSRC1.png";
import GraphicsSRC2 from "../assets/img/GraphicsSRC2.png";
import ProjectInformationBlock from "../components/ProjectInformationBlock/ProjectInformationBlock";
import {NotFoundPage} from "./NotFoundPage";
import classNames from 'classnames'
import ReactPlayer from 'react-player';

export const ProjectPage = () => {
    const {projectID} = useParams();

    const projects = [
        {
            id: 0,
            name: "АвтоМагШина",
            year: 2022,
            description: <div>
                <p>Интернет-магазин шин и дисков с автоматическим подбором по авто, каталогом продукции, шинным
                    калькулятором и онлайн заказом для компании из Магнитогорска</p>
                <br/>
                <p className={s.projectBadge}>Чем занимался в проекте</p>
                <ul className={s.nestedList}>
                    <li className={classNames(s.nestedListItem, s.nestedListItemUnordered)}>
                        Установка и настройка PHPShop
                    </li>
                    <li className={classNames(s.nestedListItem, s.nestedListItemUnordered)}>
                        Разработка дизайна сайта и реализация его через систему шаблонов в PHPShop
                    </li>
                    <li className={classNames(s.nestedListItem, s.nestedListItemUnordered)}>
                        Подключение базы подбора шин и дисков по авто TyresAddict
                    </li>
                    <li className={classNames(s.nestedListItem, s.nestedListItemUnordered)}>
                        Настройка фильтров шин и дисков для каталога товаров
                    </li>
                    <li className={classNames(s.nestedListItem, s.nestedListItemUnordered)}>
                        Разработка модуля 1С для ежедневной выгрузки товаров на сайт
                    </li>
                    <li className={classNames(s.nestedListItem, s.nestedListItemUnordered)}>
                        Подключение ежедневной выгрузки товаров на сайт из 1С и сервиса 4tochki
                    </li>
                </ul>
            </div>,
            informationBlocks: [
                {
                    id: 0,
                    blockType: "Text",
                    blockTitle: "Стек",
                    content: "PHPShop, HTML, CSS, PHP, 1C (Для учёта товаров)"
                },
                {
                    id: 1,
                    blockType: "Link",
                    blockTitle: "Сайт",
                    content: "https://automagshina.ru/"
                }
            ],
            images: [AutoMagShinaSCR1, AutoMagShinaSCR2, AutoMagShinaSCR3, AutoMagShinaSCR4, AutoMagShinaSCR5]
        },
        {
            id: 1,
            name: "УралМебель",
            year: 2022,
            description: <div>
                <p>Веб-сайт с каталогом товаров и адресами магазинов для группы компаний, занимающихся мягкой мебелью,
                    из Магнитогорска</p>
                <br/>
                <p className={s.projectBadge}>Чем занимался в проекте:</p>
                <ul className={s.nestedList}>
                    <li className={classNames(s.nestedListItem, s.nestedListItemUnordered)}>
                        Редизайн сайта, реализация через конструктор Elementor
                    </li>
                    <li className={classNames(s.nestedListItem, s.nestedListItemUnordered)}>
                        Разработка новых баннеров для главной страницы
                    </li>
                    <li className={classNames(s.nestedListItem, s.nestedListItemUnordered)}>
                        Подготовка изображений товаров к публикации
                    </li>
                </ul>
            </div>,
            informationBlocks: [
                {
                    id: 0,
                    blockType: "Text",
                    blockTitle: "Стек",
                    content: "WordPress, Elementor, HTML, CSS"
                },
                {
                    id: 1,
                    blockType: "Link",
                    blockTitle: "Сайт",
                    content: "https://уралмебель74.рф"
                }
            ],
            images: [UralMebelSCR1, UralMebelSCR2, UralMebelSCR3, UralMebelSCR4]
        },
        {
            id: 2,
            name: "РекАрт",
            year: 2023,
            description: <div>
                <p>Веб-сайт для рекламного агенства в Магнитогорске</p>
                <br/>
                <p className={s.projectBadge}>Чем занимался в проекте</p>
                <ul className={s.nestedList}>
                    <li className={classNames(s.nestedListItem, s.nestedListItemUnordered)}>
                        Обновление плагинов WordPress c 2011 года
                    </li>
                    <li className={classNames(s.nestedListItem, s.nestedListItemUnordered)}>
                        Разработка сайта по макетам от заказчика
                    </li>
                </ul>
            </div>,
            informationBlocks: [
                {
                    id: 0,
                    blockType: "Text",
                    blockTitle: "Стек",
                    content: "WordPress, Elementor, HTML, CSS"
                },
                {
                    id: 1,
                    blockType: "Link",
                    blockTitle: "Сайт",
                    content: "https://рекарт.рф"
                }
            ],
            images: [RecArtSRC1, RecArtSRC2, RecArtSRC3, RecArtSRC4]
        },
        {
            id: 3,
            name: "BeMyVoice",
            year: 2023,
            description:
                <div>
                    <p>Сервис для распознавания и озвучивания русской жестовой речи, а также транскрибации
                        звуков с компьютера и окружающего мира</p><br/>
                    <p>Проект разработан в рамках хакатона от Сбера и УрФУ "Код города 300" и стал победителем в кейсе
                        "ЧитAI жесты"</p>
                    <br/>
                    <p className={s.projectBadge}>Возможности сервиса</p>
                    <ul className={s.nestedList}>
                        <li className={classNames(s.nestedListItem, s.nestedListItemUnordered)}>
                            Захват видео с камеры
                        </li>
                        <li className={classNames(s.nestedListItem, s.nestedListItemUnordered)}>
                            Превращение жестов в текст с помощью нейросети от Сбера SLT2TXT
                        </li>
                        <li className={classNames(s.nestedListItem, s.nestedListItemUnordered)}>
                            Озвучка текста с помощью нейросети от Сбера Salute Speech
                        </li>
                        <li className={classNames(s.nestedListItem, s.nestedListItemUnordered)}>
                            Захват звука с компьютера и преобразование его в текст (Salute Speech) с определением эмоции
                            собеседника: позитивная, нейтральная, негативная
                        </li>
                    </ul>
                    <br/>
                    <p className={s.projectBadge}>Чем занимался в проекте</p>
                    <ul className={s.nestedList}>
                        <li className={classNames(s.nestedListItem, s.nestedListItemUnordered)}>
                            Разработка архитектуры приложения и схемы взаимодействия микросервисов
                        </li>
                        <li className={classNames(s.nestedListItem, s.nestedListItemUnordered)}>
                            Разработка дизайна приложения
                        </li>
                        <li className={classNames(s.nestedListItem, s.nestedListItemUnordered)}>
                            Разработка десктопного приложения на React+Electron
                        </li>
                        <li className={classNames(s.nestedListItem, s.nestedListItemUnordered)}>
                            Создание API на Python для подключения нейронной сети SLT2TXT к приложению
                        </li>
                    </ul>
                </div>,
            informationBlocks: [
                {
                    id: 0,
                    blockType: "Text",
                    blockTitle: "Стек",
                    content: "React, Electron, Python, C#"
                },
                // {
                //     id: 1,
                //     blockType: "Link",
                //     blockTitle: "Сайт",
                //     content: "https://рекарт.рф"
                // }
            ],
            video: BeMyVoiceDemo,
            images: [BeMyVoiceSRC1, BeMyVoiceSRC2, BeMyVoiceSRC3, BeMyVoiceSRC4],
            imagePreviews: [BeMyVoiceSRC1Preview, BeMyVoiceSRC2Preview, BeMyVoiceSRC3Preview, BeMyVoiceSRC4Preview]
        },
        {
            id: 4,
            name: "P-1",
            year: "В разработке",
            description:
                <div>
                    <p>Сервис для эффективного управления проектом внутри команды. Постановка задач, менеджер
                        багов, блочный редактор статей, построитель схем - теперь в одном приложении</p><br/>
                    <p className={s.projectBadge}>Возможности сервиса</p>
                    <ul className={s.nestedList}>
                        <li className={classNames(s.nestedListItem, s.nestedListItemUnordered)}>
                            Управление задачами (Создание, редактирование, удаление, несколько видов отображения,
                            создание кастомного вида по фильтрам и сортировкам)
                        </li>
                        <li className={classNames(s.nestedListItem, s.nestedListItemUnordered)}>
                            Управление багами, связь с задачами
                        </li>
                        <li className={classNames(s.nestedListItem, s.nestedListItemUnordered)}>
                            Управление статьями (Объединение статей в серии, блочный редактор статей, интеграция с
                            построителем схем)
                        </li>
                        <li className={classNames(s.nestedListItem, s.nestedListItemUnordered)}>
                            Построитель схем
                        </li>
                    </ul>
                    <br/>
                    <p className={s.projectBadge}>Чем занимаюсь на проекте</p>
                    <ul className={s.nestedList}>
                        <li className={classNames(s.nestedListItem, s.nestedListItemUnordered)}>
                            Разработка архитектуры приложения и схемы взаимодействия микросервисов
                        </li>
                        <li className={classNames(s.nestedListItem, s.nestedListItemUnordered)}>
                            Разработка дизайна приложения
                        </li>
                        <li className={classNames(s.nestedListItem, s.nestedListItemUnordered)}>
                            Разработка десктопного приложения на React+Electron
                        </li>
                    </ul>
                </div>,
            informationBlocks: [
                {
                    id: 0,
                    blockType: "Text",
                    blockTitle: "Стек",
                    content: "React, Redux, Electron, PHP"
                },
                // {
                //     id: 1,
                //     blockType: "Link",
                //     blockTitle: "Сайт",
                //     content: "https://рекарт.рф"
                // }
            ],
            images: [P1SRC1, P1SRC2, P1SRC3, P1SRC4, P1SRC5, P1SRC6]
        },
        {
            id: 5,
            name: "HR USSCxUDV",
            year: 2023,
            description: <div>
                <p>Сервис для постановки квартальных целей HR-сотрудников группы компаний УЦСБ.</p>
                <p>Проект выполнен в рамках курса "Проектный практикум" для 2 курса УрФУ</p>
                <br/>
                <p className={s.projectBadge}>Возможности сервиса</p>
                <ul className={s.nestedList}>
                    <li className={classNames(s.nestedListItem, s.nestedListItemUnordered)}>
                        Управление задачами
                    </li>
                    <li className={classNames(s.nestedListItem, s.nestedListItemUnordered)}>
                        Управление итогами по задачам
                    </li>
                    <li className={classNames(s.nestedListItem, s.nestedListItemUnordered)}>
                        Фильтр и сортировка каталога
                    </li>
                    <li className={classNames(s.nestedListItem, s.nestedListItemUnordered)}>
                        Разделение сервиса на роли: главный руководитель, руководитель, сотрудник
                    </li>
                    <li className={classNames(s.nestedListItem, s.nestedListItemUnordered)}>
                        Выгрузка задач и итогов в Excel
                    </li>
                </ul>
                <br/>
                <p className={s.projectBadge}>Чем занимался в проекте</p>
                <ul className={s.nestedList}>
                    <li className={classNames(s.nestedListItem, s.nestedListItemUnordered)}>
                        Участие в разработке архитектуры сервиса
                    </li>
                    <li className={classNames(s.nestedListItem, s.nestedListItemUnordered)}>
                        Разработка frontend'a сервиса на React
                    </li>
                    <li className={classNames(s.nestedListItem, s.nestedListItemUnordered)}>
                        Связывание frontend и backend частей
                    </li>
                </ul>
            </div>,
            informationBlocks: [
                {
                    id: 0,
                    blockType: "Text",
                    blockTitle: "Стек",
                    content: "React, Redux, HTML, CSS"
                },
                {
                    id: 1,
                    blockType: "Link",
                    blockTitle: "GitHub",
                    linkText: "URFU-HR-USSC",
                    content: "https://github.com/CatDevelop/URFU-HR-USSC"
                }
            ],
            video: HrUsscDemo,
            images: [HrUsscSRC1, HrUsscSRC2, HrUsscSRC3, HrUsscSRC4, HrUsscSRC5, HrUsscSRC6, HrUsscSRC7]
        },
        {
            id: 6,
            name: "Portfolio Hub",
            year: 2023,
            description: <div>
                <p>Сервис для создания web-портфолио IT-специалиста.</p>
                <p>Проект выполнен в рамках курса "Проектный практикум" для 1 курса УрФУ</p>
                <br/>
                <p className={s.projectBadge}>Возможности сервиса</p>
                <ul className={s.nestedList}>
                    <li className={classNames(s.nestedListItem, s.nestedListItemUnordered)}>
                        Создание своего портфолио
                    </li>
                    <li className={classNames(s.nestedListItem, s.nestedListItemUnordered)}>
                        Заполнение информации о своей профессиональной деятельности
                    </li>
                    <li className={classNames(s.nestedListItem, s.nestedListItemUnordered)}>
                        Добавление своих проектов
                    </li>
                    <li className={classNames(s.nestedListItem, s.nestedListItemUnordered)}>
                        Группировка проектов по категориям
                    </li>
                    <li className={classNames(s.nestedListItem, s.nestedListItemUnordered)}>
                        Добавление своего резюме
                    </li>
                    <li className={classNames(s.nestedListItem, s.nestedListItemUnordered)}>
                        Комментирование и оценивание чужих проектов
                    </li>
                    <li className={classNames(s.nestedListItem, s.nestedListItemUnordered)}>
                        Просмотр каталога всех пользователей сервиса (С поиском и фильтрацией по тегам)
                    </li>
                </ul>
                <br/>
                <p className={s.projectBadge}>Чем занимался в проекте</p>
                <ul className={s.nestedList}>
                    <li className={classNames(s.nestedListItem, s.nestedListItemUnordered)}>
                        Разработка архитектуры сервиса
                    </li>
                    <li className={classNames(s.nestedListItem, s.nestedListItemUnordered)}>
                        Разработка дизайна сервиса
                    </li>
                    <li className={classNames(s.nestedListItem, s.nestedListItemUnordered)}>
                        Разработка frontend'a сервиса на React
                    </li>
                    <li className={classNames(s.nestedListItem, s.nestedListItemUnordered)}>
                        Написание рестов для взаимодействия с БД
                    </li>
                    <li className={classNames(s.nestedListItem, s.nestedListItemUnordered)}>
                        Связывание frontend и backend частей
                    </li>
                </ul>
            </div>,
            informationBlocks: [
                {
                    id: 0,
                    blockType: "Text",
                    blockTitle: "Стек",
                    content: "React, Redux, HTML, CSS"
                },
                {
                    id: 1,
                    blockType: "Link",
                    blockTitle: "Сайт",
                    content: "https://portfoliohub.ru/"
                },
                {
                    id: 2,
                    blockType: "Link",
                    blockTitle: "GitHub",
                    linkText: "URFU-portfolio-hub",
                    content: "https://github.com/CatDevelop/URFU-portfolio-hub"
                }
            ],
            video: PortfolioHubDemo,
            images: [PortfolioHubSRC1, PortfolioHubSRC2, PortfolioHubSRC3, PortfolioHubSRC4, PortfolioHubSRC5, PortfolioHubSRC6]
        },
        // {
        //     id: 7,
        //     name: "U Summer School",
        //     year: 2023,
        //     description: <div>
        //         <p>Сервис для отбора студентов на летние стажировки в компанию УЦСБ через тестовые задания.</p>
        //         <p>Проект выполнен по заказу студентов 2 курса УрФУ для дисциплины "Проектный практикум"</p>
        //         <br/>
        //         <p className={s.projectBadge}>Возможности сервиса</p>
        //         <ul className={s.nestedList}>
        //             <li className={classNames(s.nestedListItem, s.nestedListItemUnordered)}>
        //                 Захват видео с камеры
        //             </li>
        //             <li className={classNames(s.nestedListItem, s.nestedListItemUnordered)}>
        //                 Превращение жестов в текст с помощью нейросети от Сбера SLT2TXT
        //             </li>
        //             <li className={classNames(s.nestedListItem, s.nestedListItemUnordered)}>
        //                 Озвучка текста с помощью нейросети от Сбера Salute Speech
        //             </li>
        //             <li className={classNames(s.nestedListItem, s.nestedListItemUnordered)}>
        //                 Захват звука с компьютера и преобразование его в текст (Salute Speech) с определением эмоции
        //                 собеседника: позитивная, нейтральная, негативная
        //             </li>
        //         </ul>
        //         <br/>
        //         <p className={s.projectBadge}>Чем занимался в проекте</p>
        //         <ul className={s.nestedList}>
        //             <li className={classNames(s.nestedListItem, s.nestedListItemUnordered)}>
        //                 Разработка архитектуры приложения и схемы взаимодействия микросервисов
        //             </li>
        //             <li className={classNames(s.nestedListItem, s.nestedListItemUnordered)}>
        //                 Разработка дизайна приложения
        //             </li>
        //             <li className={classNames(s.nestedListItem, s.nestedListItemUnordered)}>
        //                 Разработка десктопного приложения на React+Electron
        //             </li>
        //             <li className={classNames(s.nestedListItem, s.nestedListItemUnordered)}>
        //                 Создание API на Python для подключения нейронной сети SLT2TXT к приложению
        //             </li>
        //         </ul>
        //     </div>,
        //     informationBlocks: [
        //         {
        //             id: 0,
        //             blockType: "Text",
        //             blockTitle: "Стек",
        //             content: "React, Redux, HTML, CSS"
        //         },
        //         {
        //             id: 1,
        //             blockType: "Link",
        //             blockTitle: "GitHub",
        //             linkText: "URFU-HR-USSC",
        //             content: "https://github.com/CatDevelop/URFU-HR-USSC"
        //         }
        //     ],
        //     video: HrUsscDemo,
        //     images: [HrUsscSRC1, HrUsscSRC2, HrUsscSRC3, HrUsscSRC4, HrUsscSRC5, HrUsscSRC6, HrUsscSRC7]
        // },
        {
            id: 7,
            name: "HeroReturn",
            year: 2023,
            description: <div>
                <p>Пиксельная игра в жанре Lazy-RPG (Призывай юнитов - они сделают всё за тебя).</p>
                <p>Проект выполнен в рамках курса "Основый программирования" для 1 курса УрФУ</p>
                <br/>
                <p className={s.projectBadge}>Механики игры</p>
                <ul className={s.nestedList}>
                    <li className={classNames(s.nestedListItem, s.nestedListItemUnordered)}>
                        Улучшение построек
                    </li>
                    <li className={classNames(s.nestedListItem, s.nestedListItemUnordered)}>
                        Улучшение ресурсов
                    </li>
                    <li className={classNames(s.nestedListItem, s.nestedListItemUnordered)}>
                        Призыв собирателей, дровосеков и воинов
                    </li>
                    <li className={classNames(s.nestedListItem, s.nestedListItemUnordered)}>
                        Система волн врагов
                    </li>
                    <li className={classNames(s.nestedListItem, s.nestedListItemUnordered)}>
                        Постепенная разблокировка героев с каждым уровнем
                    </li>
                    <li className={classNames(s.nestedListItem, s.nestedListItemUnordered)}>
                        Система сохранений
                    </li>
                </ul>
            </div>,
            informationBlocks: [
                {
                    id: 0,
                    blockType: "Text",
                    blockTitle: "Стек",
                    content: "C#, MonoGame"
                },
                {
                    id: 1,
                    blockType: "Link",
                    blockTitle: "GitHub",
                    linkText: "HeroReturnC#",
                    content: "https://github.com/CatDevelop/HeroReturnC"
                }
            ],
            video: HeroReturnDemo,
            images: [HeroReturnSRC1, HeroReturnSRC2, HeroReturnSRC3, HeroReturnSRC4, HeroReturnSRC5, HeroReturnSRC6]
        },
        {
            id: 8,
            name: "Бронирование бассейна УрФУ",
            year: 2023,
            description: <div>
                <p>Сервис для бронирования дорожек в бассейне УрФУ</p>
                <p>Проект выполнен по заказу студентов 4 курса УрФУ для дисциплины "Проектный практикум"</p>
                <br/>
                <p className={s.projectBadge}>Возможности сервиса</p>
                <ul className={s.nestedList}>
                    <li className={classNames(s.nestedListItem, s.nestedListItemUnordered)}>
                        Просмотр таблицы забронированных дорожек
                    </li>
                    <li className={classNames(s.nestedListItem, s.nestedListItemUnordered)}>
                        Создание новой записи бронирования, включая данные для оплаты
                    </li>
                    <li className={classNames(s.nestedListItem, s.nestedListItemUnordered)}>
                        Уведомления об изменениях в базе данных
                    </li>
                </ul>
                <br/>
                <p className={s.projectBadge}>Чем занимался в проекте</p>
                <ul className={s.nestedList}>
                    <li className={classNames(s.nestedListItem, s.nestedListItemUnordered)}>
                        Разработка архитектуры системы
                    </li>
                    <li className={classNames(s.nestedListItem, s.nestedListItemUnordered)}>
                        Написание рестов для взаимодействия с БД
                    </li>
                    <li className={classNames(s.nestedListItem, s.nestedListItemUnordered)}>
                        Связывание frontend и backend частей
                    </li>
                </ul>
            </div>,
            informationBlocks: [
                {
                    id: 0,
                    blockType: "Text",
                    blockTitle: "Стек",
                    content: "React, Redux, HTML, CSS, PHP"
                },
                {
                    id: 1,
                    blockType: "Link",
                    blockTitle: "GitHub",
                    linkText: "URFU-pool-booking",
                    content: "https://github.com/CatDevelop/URFU-pool-booking"
                }
            ],
            images: [PoolBookingSRC1, PoolBookingSRC2, PoolBookingSRC3]
        },
        {
            id: 9,
            name: "Система учёта книг",
            year: 2021,
            description: <div>
                <p>Автоматизированная информационная система для библиотеки Академического лицея города
                    Магнитогорска</p>
                <p>Проект выполнен в рамках всероссийского конкурса научно-технологических проектов "Большие вызовы"</p>
                <br/>
                <p className={s.projectBadge}>Возможности сервиса</p>
                <ul className={s.nestedList}>
                    <li className={classNames(s.nestedListItem, s.nestedListItemUnordered)}>
                        Управление книгами
                    </li>
                    <li className={classNames(s.nestedListItem, s.nestedListItemUnordered)}>
                        Фильтр и сортировка каталога
                    </li>
                    <li className={classNames(s.nestedListItem, s.nestedListItemUnordered)}>
                        Создание отчёта из электронного каталога в MS Excel
                    </li>
                    <li className={classNames(s.nestedListItem, s.nestedListItemUnordered)}>
                        Создание QR-кодов для книг
                    </li>
                    <li className={classNames(s.nestedListItem, s.nestedListItemUnordered)}>
                        Автоматическое обновление приложения с сервера
                    </li>
                </ul>
                <br/>
                <p className={s.projectBadge}>Чем занимался в проекте</p>
                <ul className={s.nestedList}>
                    <li className={classNames(s.nestedListItem, s.nestedListItemUnordered)}>
                        Разработка архитектуры системы
                    </li>
                    <li className={classNames(s.nestedListItem, s.nestedListItemUnordered)}>
                        Написание рестов для взаимодействия с БД
                    </li>
                    <li className={classNames(s.nestedListItem, s.nestedListItemUnordered)}>
                        Разработка дизайна система
                    </li>
                    <li className={classNames(s.nestedListItem, s.nestedListItemUnordered)}>
                        Разработка десктопного приложения на Contruct 2
                    </li>
                    <li className={classNames(s.nestedListItem, s.nestedListItemUnordered)}>
                        Связывание frontend и backend частей
                    </li>
                </ul>
            </div>,
            informationBlocks: [
                {
                    id: 0,
                    blockType: "Text",
                    blockTitle: "Стек",
                    content: "HTML, CSS, Python, PHP"
                },
                {
                    id: 1,
                    blockType: "Link",
                    blockTitle: "GitHub",
                    linkText: "Library",
                    content: "https://github.com/CatDevelop/Library"
                }
            ],
            images: [LibrarySRC1, LibrarySRC2, LibrarySRC3]
        },
        {
            id: 10,
            name: "ITS-Economy",
            year: 2022,
            description: <div>
                <p>Электронный сервис управления банковским счётом виртуальной валюты для выездной профильной смены в
                    IT-школе</p>
                <br/>
                <p className={s.projectBadge}>Возможности сервиса</p>
                <ul className={s.nestedList}>
                    <li className={classNames(s.nestedListItem, s.nestedListItemUnordered)}>
                        Просмотр текущего баланса
                    </li>
                    <li className={classNames(s.nestedListItem, s.nestedListItemUnordered)}>
                        Просмотр истории операций
                    </li>
                    <li className={classNames(s.nestedListItem, s.nestedListItemUnordered)}>
                        Перевод на другой счёт
                    </li>
                    <li className={classNames(s.nestedListItem, s.nestedListItemUnordered)}>
                        Заморозка счетов (Для администратора)
                    </li>
                    <li className={classNames(s.nestedListItem, s.nestedListItemUnordered)}>
                        Просмотр текущего баланса всех пользователей (Для администратора)
                    </li>
                </ul>
            </div>,
            informationBlocks: [
                {
                    id: 0,
                    blockType: "Text",
                    blockTitle: "Стек",
                    content: "React, Redux, HTML, CSS, PHP"
                },
                {
                    id: 1,
                    blockType: "Link",
                    blockTitle: "GitHub",
                    linkText: "ITS-Economy",
                    content: "https://github.com/CatDevelop/ITS-Economy"
                }
            ],
            images: [ITSeconomySRC1, ITSeconomySRC3, ITSeconomySRC4, ITSeconomySRC2]
        },
        {
            id: 11,
            name: "Визуализатор деревьев",
            year: 2021,
            description: <div>
                <p>Приложение для визуализации работы со структурой данных "Деревья" </p>
                <p>Проект выполнен в качестве выпускной работы за второй курс обучения в школе программирования</p>
                <br/>
                <p className={s.projectBadge}>Возможности визуализатора</p>
                <ul className={s.nestedList}>
                    <li className={classNames(s.nestedListItem, s.nestedListItemUnordered)}>
                        Создание бинарных и AVL деревьев
                    </li>
                    <li className={classNames(s.nestedListItem, s.nestedListItemUnordered)}>
                        Вставка нового элемента
                    </li>
                    <li className={classNames(s.nestedListItem, s.nestedListItemUnordered)}>
                        Поиск элемента
                    </li>
                    <li className={classNames(s.nestedListItem, s.nestedListItemUnordered)}>
                        Удаление элемента
                    </li>
                    <li className={classNames(s.nestedListItem, s.nestedListItemUnordered)}>
                        Обход дерева
                    </li>
                    <li className={classNames(s.nestedListItem, s.nestedListItemUnordered)}>
                        Проверка на симметричность
                    </li>
                </ul>
            </div>,
            informationBlocks: [
                {
                    id: 0,
                    blockType: "Text",
                    blockTitle: "Стек",
                    content: "C++, WinForms"
                },
                {
                    id: 1,
                    blockType: "Link",
                    blockTitle: "GitHub",
                    linkText: "TreesVisualization",
                    content: "https://github.com/CatDevelop/IT-School/tree/main/SecondCourse/TreesVisualization"
                }
            ],
            images: [TreesVisualizationSRC1]
        },
        {
            id: 12,
            name: "Калькулятор графиков",
            year: 2020,
            description: <div>
                <p>Приложение для визуализации графиков и их зависимости от коэффициентов</p>
                <p>Проект выполнен в качестве выпускной работы за первый курс обучения в школе программирования</p>
                <br/>
                <p className={s.projectBadge}>Возможности визуализатора</p>
                <ul className={s.nestedList}>
                    <li className={classNames(s.nestedListItem, s.nestedListItemUnordered)}>
                        Отрисовка графиков: прямая, модуль, парабола, ветвь параболы, кубическая парабола, радиоволны,
                        синус, тангенс, арктангенс
                    </li>
                    <li className={classNames(s.nestedListItem, s.nestedListItemUnordered)}>
                        Просмотр формулы и коэффициентов
                    </li>
                    <li className={classNames(s.nestedListItem, s.nestedListItemUnordered)}>
                        Управление коэффициентами в формуле
                    </li>
                    <li className={classNames(s.nestedListItem, s.nestedListItemUnordered)}>
                        Управление масштабом графика
                    </li>
                </ul>
            </div>,
            informationBlocks: [
                {
                    id: 0,
                    blockType: "Text",
                    blockTitle: "Стек",
                    content: "С++, TXLib"
                },
                {
                    id: 1,
                    blockType: "Link",
                    blockTitle: "GitHub",
                    linkText: "GraphCalculator",
                    content: "https://github.com/CatDevelop/IT-School/tree/main/FirstCourse/GraphCalculator"
                }
            ],
            images: [GraphicsSRC1, GraphicsSRC2]
        },
    ]

    const project = projects.at(parseInt(projectID))


    let breadcrumbs = [
        {id: 1, title: "Проекты", src: "/works"},
        {id: 2, title: project?.name, year: project?.year ?? ""},
    ]

    if (!project)
        return <NotFoundPage/>

    return (
        <div>
            <div className={s.projectPage}>
                <Breadcrumbs breadcrumbs={breadcrumbs}/>
                <div className={s.projectDescription}>
                    {
                        project.description
                    }
                </div>

                {
                    project.informationBlocks ?
                        <ProjectInformationBlock informationBlocks={project.informationBlocks}/> : <></>
                }


                {
                    project.images ?
                        <Image.PreviewGroup>
                            <h3 className={s.projectBlockTitle}>Скриншоты</h3>
                            {project.imagePreviews ? project.images.map((image, i) => {
                                return <div className={s.projectImage} key={"projectImage"+i}>
                                    <Image width={650} src={image} placeholder={
                                        <Image
                                            preview={false}
                                            src={project.imagePreviews[i]}
                                            width={100}
                                        />
                                    }/>
                                </div>
                            }) :
                                project.images.map((image, i) => {
                                    return <div className={s.projectImage} key={project.id+"projectImage"+i}>
                                        <Image width={650} src={image}/>
                                    </div>
                                })

                            }
                        </Image.PreviewGroup> : <></>
                }

                {
                    project.video ?
                        <div>
                            <h3 className={s.projectBlockTitle}>Видео-демонстрация</h3>
                            <div className={s.projectVideo}>
                                <ReactPlayer
                                    url={project.video}
                                    width="650"
                                    height="360"
                                    controls
                                />
                            </div>
                        </div>
                        : <></>
                }


            </div>

        </div>
    )
}
