import React from 'react';
import s from './DownloadFileButton.module.css';

function DownloadFileButton(props) {
    return (
        <div className={s.container}>
            {/*<button>*/}
                <a className={s.button} href={props.link} download="Text.txt" rel="noopener">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 10V16M12 16L9 13M12 16L15 13M17 21H7C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3H12.5858C12.851 3 13.1054 3.10536 13.2929 3.29289L18.7071 8.70711C18.8946 8.89464 19 9.149 19 9.41421V19C19 20.1046 18.1046 21 17 21Z" stroke="#EEEEEE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {props.text}
                </a>
            {/*</button>*/}

        </div>
    )
}

export default DownloadFileButton;
