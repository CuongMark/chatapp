import { useState, useEffect } from 'react';
import ChatAPI from "../Services/ChatAPI";

export default function useFriendStatus(friendID) {
    const [isOnline, setIsOnline] = useState(ChatAPI.getFriend(friendID).status);

    useEffect(() => {
        function handleStatusChange(status) {
            setIsOnline(status);
        }

        ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange);
        return () => {
            ChatAPI.unsubscribeFromFriendStatus(friendID, handleStatusChange);
        };
    });

    return isOnline;
}