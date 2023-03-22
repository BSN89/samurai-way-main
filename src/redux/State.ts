export type DialogItemType = {
    name: string
    id: number
}

export type DialogMessageType = {
    dialogs: DialogItemType[]
    messages: MessagesType[]
}


export type PostsType = {
    message: string
    id: number
    likesCount: number
}
export type ProfilePageType = {
    posts: PostsType[]
}

export type MessagesType = {
    id: number
    message: string
}

export type PropsMyPosts = {
    id: number
    message: string
    likesCount: number
}

export type PropsType = {
    message: string,
    likesCount: number
    id: number
}

export type RootType = {
    profilePage: ProfilePageType
    dialogsPage: DialogMessageType
}

export let state = {
    profilePage: {
        posts: [
            {id: 1, message: "Hi, how are you?", likesCount: 12},
            {id: 2, message: 'It\'s my first post', likesCount: 11},
            {id: 3, message: 'Bla bla', likesCount: 11},
            {id: 4, message: 'Da da', likesCount: 11},
        ]
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Andrey'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Sasha'},
            {id: 5, name: 'Viktor'},
            {id: 6, name: 'Valera'},
        ],
        messages: [
            {id: 1, message: "Hi"},
            {id: 2, message: 'How are you it-kamasutra?'},
            {id: 3, message: 'Yo'},
            {id: 4, message: 'Yo'},
            {id: 5, message: 'Yo'},
        ]
    }
}