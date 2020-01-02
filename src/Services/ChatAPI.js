export default (function () {
    const friends = [
        {
            name: "Mark",
            id: 1,
            status: true,
            handleStatusChanges: []
        }
    ];
    const getFriend = id => friends.find(friend => friend.id === id);
    return {
        subscribeToFriendStatus: (friendId, handleStatusChange) => {
            const friend = getFriend(friendId);
            if (friend) {
                if (friend.handleStatusChanges) {
                    friend.handleStatusChanges.push(handleStatusChange)
                } else {
                    friend.handleStatusChanges = [handleStatusChange]
                }
            }
        },
        unsubscribeFromFriendStatus: (friendId, handleStatusChange) => {
            const friend = getFriend(friendId);
            if (friend) {
                if (friend.handleStatusChanges) {
                    friend.handleStatusChanges = friend.handleStatusChanges.filter(item => item !== handleStatusChange);
                } else {
                    friend.handleStatusChanges = [handleStatusChange]
                }
            }
        },
        changeStatus: (friendId, status) => {
            const friend = getFriend(friendId);
            if (friend.status !== status) {
                friend.handleStatusChanges.forEach(handleStatusChange => handleStatusChange(friend.status))
            }
            friend.status = status;
        },
        addFriend: person => {
            const friend = getFriend(person.id);
            if (friend) {
                Object.assign(friend, person)
            } else {
                friends.push(person)
            }
        },
        getFriend,
        getFriends: () => friends
    }
}())