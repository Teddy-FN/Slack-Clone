import React, { useContext } from 'react';
import './style/Chat.css';
import StyleContext from '../contexs/StyleContext'

function Chat() {
    const { isDark } = useContext(StyleContext);
    return (
        <div className={isDark ? "dark-menu header" : "header"}>
            chat
        </div>
    )
}

export default Chat
