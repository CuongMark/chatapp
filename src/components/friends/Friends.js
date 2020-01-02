import React from "react";
import Friend from "./friend/Friend";
import ChatAPI from "../../Services/ChatAPI";
import Toolbar from "../Toolbar";
import ThemeContext, {themes} from "../../Hooks/contexts/ThemeContext";

export default function () {
    const friends = ChatAPI.getFriends();
    const changeStatus = function () {
        const friend = ChatAPI.getFriend(1);
        ChatAPI.changeStatus(1, !friend.status)
    };
    return (
        <div>
            {friends.map(friend => <Friend key={friend.id} name={friend.name} friendId={friend.id} />)}
            <button onClick={changeStatus} >change status</button>
            <ThemeContext.Provider value={themes.dark}>
                <Toolbar/>
            </ThemeContext.Provider>
        </div>
    )
}