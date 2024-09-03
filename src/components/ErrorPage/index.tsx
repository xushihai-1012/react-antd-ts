import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage: React.FC = () => {
    const error = useRouteError() as any;

    return (
        <div id="error-page">
            <h1>哎呀！</h1>
            <p>很抱歉，发生了意外错误.</p>
            <p>
                <i>{error?.statusText || error?.message}</i>
            </p>
        </div>
    );
};

export default ErrorPage;
