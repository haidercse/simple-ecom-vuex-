export const PUSH_NOTIFICATION = (state, notification) => {
    state.notifications.push({
        ...notification,
        id: (Math.random().toString(36) + Date.now().toString(36)).substr(),
    })
}

export const REMOVE_NOTIFICATION = (state, notification) => {
    state.notifications = state.notifications.filter((remove) => {
        return remove.id != notification.id;
    })
}