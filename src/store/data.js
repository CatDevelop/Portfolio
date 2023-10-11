import Project1 from "../assets/img/Project1.png";
import Project16 from "../assets/img/Project16.png";
import Project14 from "../assets/img/Project14.png";
import Project15 from "../assets/img/Project15.png";
import Project7 from "../assets/img/Project7.png";
import Project13 from "../assets/img/Project13.png";
import Project12 from "../assets/img/Project12.jpg";
import Project5 from "../assets/img/Project5.png";
import Project6 from "../assets/img/Project6.png";
import Project8 from "../assets/img/Project8.png";
import Project9 from "../assets/img/Project9.png";
import Project10 from "../assets/img/Project10.png";
import Project17 from "../assets/img/Project17.png";
import Project11 from "../assets/img/Project11.png";
import s from "../pages/Pages.module.css"
import classNames from "classnames";

const APIsrc = "https://www.ren-design.ru/api/portfolio/1.0/"
const projectImagesAPI = APIsrc+"images/projects/"
const projectVideosAPI = APIsrc+"video/"

export const projects = [
    {
        id: 0,
        category: "Коммерческий",
        name: "АвтоМагШина",
        year: 2022,
        shortDescription: "Интернет-магазин шин и дисков с автоматическим подбором по авто, каталогом продукции, шинным калькулятором и онлайн заказом для компании из Магнитогорска",
        previewImage: Project1,
        tags: ["PHPShop", "1C", "Интернет-магазин"],
        projectURL: "https://automagshina.ru/",
        description: (
            <div>
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
            </div>
        ),
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
        images: [projectImagesAPI + "AutoMagShinaSRC1.png", projectImagesAPI + "AutoMagShinaSRC2.png", projectImagesAPI + "AutoMagShinaSRC3.png", projectImagesAPI + "AutoMagShinaSRC4.png", projectImagesAPI + "AutoMagShinaSRC5.png"]
    },
    {
        id: 1,
        category: "Коммерческий",
        name: "УралМебель",
        year: 2022,
        shortDescription: "Веб-сайт с каталогом товаров и адресами магазинов для группы компаний, занимающихся мягкой мебелью, из Магнитогорска",
        previewImage: Project16,
        tags: ["WordPress", "Elementor", "Интернет-магазин"],
        projectURL: "https://уралмебель74.рф/",
        description: (
            <div>
                <p>Веб-сайт с каталогом товаров и адресами магазинов для группы компаний, занимающихся мягкой
                    мебелью,
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
            </div>
        ),
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
        images: [projectImagesAPI + "UralMebelSRC1.png", projectImagesAPI + "UralMebelSRC2.png", projectImagesAPI + "UralMebelSRC3.png", projectImagesAPI + "UralMebelSRC4.png"]
    },
    {
        id: 2,
        category: "Коммерческий",
        name: "РекАрт",
        year: 2023,
        shortDescription: "Веб-сайт для рекламного агенства в Магнитогорске",
        previewImage: Project11,
        tags: ["WordPress", "Elementor"],
        projectURL: "https://рекарт.рф/",
        description: (
            <div>
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
            </div>
        ),
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
        images: [projectImagesAPI + "RecArtSRC1.png", projectImagesAPI + "RecArtSRC2.png", projectImagesAPI + "RecArtSRC3.png", projectImagesAPI + "RecArtSRC4.png"]
    },
    {
        id: 3,
        category: "Разработан на хакатоне",
        name: "BeMyVoice",
        year: 2023,
        shortDescription: "Сервис для распознавания и озвучивания русской жестовой речи, а также транскрибации звуков с компьютера и окружающего мира",
        previewImage: Project14,
        tags: ["React", "Python", "C#", "AI"],
        gitURL: "https://github.com/CatDevelop/BeMyVoice",
        description: (
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
            </div>
        ),
        informationBlocks: [
            {
                id: 0,
                blockType: "Text",
                blockTitle: "Стек",
                content: "React, Electron, Python, C#"
            },
        ],
        video: projectVideosAPI + "BeMyVoice-Demo.mp4",
        images: [projectImagesAPI + "BeMyVoiceSRC1.png", projectImagesAPI + "BeMyVoiceSRC2.png", projectImagesAPI + "BeMyVoiceSRC3.png", projectImagesAPI + "BeMyVoiceSRC4.png"],
    },
    {
        id: 4,
        category: "Сервис внутреннего использования",
        name: "P-1",
        year: "В разработке",
        shortDescription: "Сервис для эффективного управления проектом внутри команды. Постановка задач, менеджер багов, блочный редактор статей, построитель схем - теперь в одном приложении",
        previewImage: Project15,
        tags: ["React", "Redux", "PHP"],
        description: (
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
            </div>
        ),
        informationBlocks: [
            {
                id: 0,
                blockType: "Text",
                blockTitle: "Стек",
                content: "React, Redux, Electron, PHP"
            },
        ],
        images: [projectImagesAPI + "P1SRC1.png", projectImagesAPI + "P1SRC2.png", projectImagesAPI + "P1SRC3.png", projectImagesAPI + "P1SRC4.png", projectImagesAPI + "P1SRC5.png", projectImagesAPI + "P1SRC6.png", projectImagesAPI + "P1SRC7.png"]
    },
    {
        id: 5,
        category: "Учебный (для партнёров)",
        name: "HR USSCxUDV",
        year: 2023,
        shortDescription: "Сервис для постановки квартальных целей HR-сотрудников группы компаний УЦСБ",
        previewImage: Project7,
        tags: ["React", "Redux", "C#"],
        description: (
            <div>
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
            </div>
        ),
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
        video: projectVideosAPI + "HRUSSC-Demo.mp4",
        images: [projectImagesAPI + "HrUsscSRC1.png", projectImagesAPI + "HrUsscSRC2.png", projectImagesAPI + "HrUsscSRC3.png", projectImagesAPI + "HrUsscSRC4.png", projectImagesAPI + "HrUsscSRC5.png", projectImagesAPI + "HrUsscSRC6.png", projectImagesAPI + "HrUsscSRC7.png"],
    },
    {
        id: 6,
        category: "Учебный",
        name: "Portfolio Hub",
        year: 2023,
        shortDescription: "Сервис для создания web-портфолио IT-специалиста с помощью блочного редактора (Можно добавлять свои проекты)",
        previewImage: Project13,
        tags: ["React", "Redux", "PHP"],
        projectURL: "https://portfoliohub.ru/",
        gitURL: "https://github.com/CatDevelop/URFU-portfolio-hub",
        description: (
            <div>
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
            </div>
        ),
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
        video: projectVideosAPI + "PortfolioHub-Demo.mp4",
        images: [projectImagesAPI + "PortfolioHubSRC1.png", projectImagesAPI + "PortfolioHubSRC2.png", projectImagesAPI + "PortfolioHubSRC3.png", projectImagesAPI + "PortfolioHubSRC4.png", projectImagesAPI + "PortfolioHubSRC5.png", projectImagesAPI + "PortfolioHubSRC6.png"]
    },
    {
        id: 7,
        category: "GameDev",
        name: "HeroReturn",
        year: 2023,
        shortDescription: "Пиксельная игра в жанре Lazy-RPG (Призывай юнитов - они сделают всё за тебя)",
        previewImage: Project12,
        tags: ["С#", "MonoGame"],
        gitURL: "https://github.com/CatDevelop/HeroReturnC",
        description: (
            <div>
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
            </div>
        ),
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
        video: projectVideosAPI + "HeroReturn-Demo.mp4",
        images: [projectImagesAPI + "HeroReturnSRC1.png", projectImagesAPI + "HeroReturnSRC2.png", projectImagesAPI + "HeroReturnSRC3.png", projectImagesAPI + "HeroReturnSRC4.png", projectImagesAPI + "HeroReturnSRC5.png", projectImagesAPI + "HeroReturnSRC6.jpg"],
    },
    {
        id: 8,
        category: "Учебный",
        name: "Бронирование бассейна УрФУ",
        year: 2023,
        shortDescription: "Сервис для бронирования дорожек в бассейне Уральского федерального университета им. Б. Ельцина",
        previewImage: Project5,
        tags: ["React", "Redux", "PHP"],
        gitURL: "https://github.com/CatDevelop/URFU-pool-booking",
        description: (
            <div>
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
            </div>
        ),
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
        images: [projectImagesAPI + "PoolBookingSRC1.png", projectImagesAPI + "PoolBookingSRC2.png", projectImagesAPI + "PoolBookingSRC3.png"]
    },
    {
        id: 9,
        category: "Учебный",
        name: "Система учёта книг",
        year: 2021,
        shortDescription: "Автоматизированная информационная система для библиотеки Академического лицея города Магнитогорска",
        previewImage: Project6,
        tags: ["HTML", "CSS", "Python", "PHP"],
        gitURL: "https://github.com/CatDevelop/Library",
        description: (
            <div>
                <p>Автоматизированная информационная система для библиотеки Академического лицея города
                    Магнитогорска</p>
                <p>Проект выполнен в рамках всероссийского конкурса научно-технологических проектов "Большие
                    вызовы"</p>
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
            </div>
        ),
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
        images: [projectImagesAPI + "LibrarySRC1.png", projectImagesAPI + "LibrarySRC2.png", projectImagesAPI + "LibrarySRC3.png"]
    },
    {
        id: 10,
        category: "Учебный",
        name: "ITS-Economy",
        year: 2022,
        shortDescription: "Электронный сервис управления банковским счётом виртуальной валюты для выездной профильной смены в IT-школе",
        previewImage: Project8,
        tags: ["React", "Redux", "PHP"],
        gitURL: "https://github.com/CatDevelop/ITS-Economy",
        description: (
            <div>
                <p>Электронный сервис управления банковским счётом виртуальной валюты для выездной профильной смены
                    в
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
            </div>
        ),
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
        images: [projectImagesAPI + "ITSeconomySRC1.png", projectImagesAPI + "ITSeconomySRC3.png", projectImagesAPI + "ITSeconomySRC4.png", projectImagesAPI + "ITSeconomySRC2.png"]
    },
    {
        id: 11,
        category: "Учебный",
        name: "Визуализатор деревьев",
        year: 2021,
        shortDescription: "Приложение для визуализации работы со структурой данных \"Деревья\" (Создание, добавление, удаление, поиск элементов, обходы)",
        previewImage: Project9,
        tags: ["С++", "Windows Forms"],
        gitURL: "https://github.com/CatDevelop/IT-School/tree/main/SecondCourse/TreesVisualization",
        description: (
            <div>
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
            </div>
        ),
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
        images: [projectImagesAPI + "TreesVisualizationSRC1.png"]
    },
    {
        id: 12,
        category: "Учебный",
        name: "Калькулятор графиков",
        year: 2020,
        shortDescription: "Приложение для визуализации графиков и их зависимости от коэффициентов",
        previewImage: Project10,
        tags: ["С++", "TXLib"],
        gitURL: "https://github.com/CatDevelop/IT-School/tree/main/SecondCourse/TreesVisualization",
        description: (
            <div>
                <p>Приложение для визуализации графиков и их зависимости от коэффициентов</p>
                <p>Проект выполнен в качестве выпускной работы за первый курс обучения в школе программирования</p>
                <br/>
                <p className={s.projectBadge}>Возможности визуализатора</p>
                <ul className={s.nestedList}>
                    <li className={classNames(s.nestedListItem, s.nestedListItemUnordered)}>
                        Отрисовка графиков: прямая, модуль, парабола, ветвь параболы, кубическая парабола,
                        радиоволны,
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
            </div>
        ),
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
        images: [projectImagesAPI + "GraphicsSRC1.png", projectImagesAPI + "GraphicsSRC2.png"]
    },
    {
        id: 13,
        category: "Коммерческий",
        name: "Изучение РЖЯ",
        year: "2023 - в разработке",
        shortDescription: "Сервис для изучения русского жестового языка с использованием модели распознавания жестов для тренировок",
        previewImage: Project17,
        tags: ["React", "Python", "C#", "AI"],
        gitURL: "https://github.com/CatDevelop/Teaching-RSL/tree/88_exhibition_stand__dev",
        projectURL: "https://pincode-project.ru/",
        description: (
            <div>
                <p>Сервис для изучения русского жестового языка с использованием модели распознавания жестов для тренировок</p>
                <br/>
                <p>
                    Демо вариант сервиса будет выставлен на международной выставке-форуме "Россия" на ВДНХ в Москве
                    4 ноября — 12 апреля. В этой версии отсутствует словарь, пользовательские тренировки,
                    личный кабинет и геймификация (Очки опыта и трофеи).
                </p>
                <br/>
                <p>Проект выполнен в рамках дисциплины "Проектный практикум" студентов 2-3 курсов Уральского федерального университета имени первого Президента России Б. Н. Ельцина.</p>
                <br/>
                <p className={s.projectBadge}>Возможности сервиса</p>
                <ul className={s.nestedList}>
                    <li className={classNames(s.nestedListItem, s.nestedListItemUnordered)}>
                        Изучение жестов: теория + закрепление практическими заданиями
                    </li>
                    <li className={classNames(s.nestedListItem, s.nestedListItemUnordered)}>
                        Проверка знаний с помощью распознавания жестов, показываемых обучающимся в камеру
                    </li>
                    <li className={classNames(s.nestedListItem, s.nestedListItemUnordered)}>
                        Словарь жестов
                    </li>
                    <li className={classNames(s.nestedListItem, s.nestedListItemUnordered)}>
                        Создание пользовательских тренировок
                    </li>
                    <li className={classNames(s.nestedListItem, s.nestedListItemUnordered)}>
                        Система уровней и достижений
                    </li>
                </ul>
                <br/>
                <p className={s.projectBadge}>Чем занимался в проекте</p>
                <ul className={s.nestedList}>
                    <li className={classNames(s.nestedListItem, s.nestedListItemUnordered)}>
                        Разработка демонстрационной версии для стенда на выставке-форуме
                    </li>
                    <li className={classNames(s.nestedListItem, s.nestedListItemUnordered)}>
                        Разработка схемы пользовательского пути сервиса
                    </li>
                    <li className={classNames(s.nestedListItem, s.nestedListItemUnordered)}>
                        Разработка дизайна система
                    </li>
                    <li className={classNames(s.nestedListItem, s.nestedListItemUnordered)}>
                        Разработка схемы взаимодействия бэкенда и фронтенда
                    </li>
                    <li className={classNames(s.nestedListItem, s.nestedListItemUnordered)}>
                        Разработка API для подключения к модели распознования
                    </li>
                </ul>
            </div>
        ),
        informationBlocks: [
            {
                id: 0,
                blockType: "Text",
                blockTitle: "Стек",
                content: "React, Python, C#"
            },
            {
                id: 1,
                blockType: "Link",
                blockTitle: "GitHub",
                linkText: "Teaching-RSL",
                content: "https://github.com/CatDevelop/Teaching-RSL/tree/stand"
            },
            {
                id: 1,
                blockType: "Link",
                blockTitle: "Сайт",
                linkText: "pincode-project.ru",
                content: "https://pincode-project.ru"
            }
        ],
        images: [projectImagesAPI + "RSLSRC1.png", projectImagesAPI + "RSLSRC2.png", projectImagesAPI + "RSLSRC3.png", projectImagesAPI + "RSLSRC4.png", projectImagesAPI + "RSLSRC5.png"]
    }
]

export const projectOrder = [0, 1, 2, 13, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
