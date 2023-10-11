import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {ToastContainer} from "react-toastify";
import {ConfigProvider, theme} from 'antd';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <ConfigProvider theme={{algorithm: theme.darkAlgorithm}}>
            <App/>
        </ConfigProvider>
        <ToastContainer
            position="bottom-right"
            autoClose={3000}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss={false}
            draggable
            pauseOnHover
            theme="light"
        />
    </>
)
