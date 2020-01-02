import React from "react";
import useFriendStatus from '../../../Hooks/useFriendStatus';
import "./Friend.css"

export default function ({name, friendId}) {
    const isOnline = useFriendStatus(friendId);
    return (
        <span className={isOnline ? 'Online' : 'Offline'}>{name}</span>
    )
}