import {useNavigate} from "react-router-dom";
import React from "react";
import s from "./Pages.module.css";
import BlogPost from "../components/BlogPost/BlogPost";
import Avatar1 from '../assets/img/Avatar2.png'

export const BlogPage = () => {
    let navigate = useNavigate();

    const posts = [
        {
            id: 0,
            avatar: Avatar1,
            nickname: "CatDev 💻",
            post: "<div><h1>Привет, я Макс!</h1><p>Это мой блог, здесь я рассказываю о своих увлечениях, экспериментах в программировании и истории создания своих проектов.</p><p>Если вам интересны IT-технологии или же моя жизнь, заглядывайте иногда на эту страницу 😉</p></div>",
            attachment: {
                type: "image",
                link: "https://www.ren-design.ru/api/portfolio/1.0/images/posts/Image5.jpg"
            },
            location: "Москва",
            date: "10.09.2023",
            isPinned: true
        },
        // {
        //     id: 1,
        //     avatar: Avatar1,
        //     nickname: "CatDev 💻",
        //     post: "<div><h1>Как мы хакатон от Сбера выиграли</h1><p>В рамках хакатона за неделю успели сделать прототип приложения для ПК, которое позволит слабослышащим удобно общаться в онлайн созвонах и конференциях.</p><p>О том, как мы придумали идею, не спали несколько суток, облажались на презентации и многом другом - читайте далее.</p></div>",
        //     attachment: {
        //         type: "image",
        //         link: "https://www.ren-design.ru/api/portfolio/1.0/images/posts/Image2.jpg"
        //     },
        //     location: "Екатеринбург, Бизнес-центр Neboplaza",
        //     date: "19.08.2023",
        //     haveArticle: true,
        // },
        // {
        //     id: 1,
        //     avatar: Avatar1,
        //     nickname: "CatDev 💻",
        //     post: "<p>Всем приветawdawd</p>",
        //     attachment: {
        //         type: "video",
        //         link: "https://www.ren-design.ru/api/portfolio/1.0/images/posts/Image2.jpg"
        //     },
        //     location: "Екатеринбург",
        //     haveArticle: true,
        //     date: "10.09.2023",
        //     isPinned: true
        // },
    ]

    return (
        <div style={{paddingBottom: "48px"}}>
            <h1 className={s.projectsTitle}>Мой блог</h1>

            <div className={s.blogPage_posts}>
                {
                    posts.map(post => {
                        return <BlogPost key={"postCard"+post.id} post={post}/>
                    })
                }
            </div>
        </div>
    )
}
