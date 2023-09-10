import React from 'react';
import s from './BlogPost.module.css';
import classNames from "classnames/bind";
import ReactPlayer from "react-player";
import {Image} from "antd";
import {useNavigate} from "react-router-dom";

function BlogPost(props) {
    const navigate = useNavigate()
    return (
        <div className={s.container}>
            <div className={s.headerContainer}>
                <div className={s.header}>
                    <img className={s.avatar} src={props.post.avatar} alt={"avatar"}/>
                    <div className={s.nicknameContainer}>
                        <p className={s.nickname}>{props.post.nickname}</p>
                        <p className={s.date}>{props.post.date}</p>
                    </div>
                </div>
                {
                    props.post.isPinned ?
                        <div className={s.pinned}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4"><path fill="currentColor" d="M16,12V4H17V2H7V4H8V12L6,14V16H11.2V22H12.8V16H18V14L16,12Z"></path></svg>
                            Закреплённый пост
                        </div> : <></>
                }
            </div>
            <div className={s.bodyContainer}>
                <div>
                    <div className={s.post} dangerouslySetInnerHTML={{__html: props.post.post}}/>
                    {
                        props.post.haveArticle ?
                            <p className={s.more} onClick={() => navigate("/blog/"+props.post.id)}>
                                Читать статью
                                <svg width="14" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 3.33329L10.6667 7.99996L6 12.6666" stroke="#F086CB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>

                            </p> : <></>
                    }
                </div>

                {
                    props.post.attachment.type === "image" ?
                        <div className={s.image}>
                            <Image width={610} src={props.post.attachment.link}/>
                        </div> :

                        <div className={s.video}>
                            <ReactPlayer
                                url={props.post.attachment.link}
                                width="650"
                                height="360"
                                controls
                            />
                        </div>
                }
            </div>
            <div className={s.footerContainer}>
                <div>
                    {
                        props.post.location ?
                            <div className={s.location}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                     className="w-4 h-4">
                                    <path fill-rule="evenodd"
                                          d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                                          clipRule="evenodd"></path>
                                </svg>
                                {props.post.location}
                            </div> : <></>
                    }
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}

export default BlogPost;
