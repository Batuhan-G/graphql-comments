const users = [
    {
        id: '1',
        fullname: 'Mehmet Seven',
    },
    {
        id: '1',
        fullname: 'Ahmet Günal',
    },
]

const posts = [
    {
        id: '1',
        title: "Mehmet'in gönderisi",
        user_id: '1',
    },
    {
        id: '2',
        title: "Mehmet'in diğer gönderisi",
        user_id: '1',
    },
    {
        id: '3',
        title: "Ahmet'in gönderisi",
        user_id: '2',
    },
]

const comments = [
    {
        id: '1',
        text: "Comment of Ahmet",
        post_id: '1',
        user_id: '1'
    },
    {
        id: '2',
        text: 'Comment of Mehmet',
        post_id: '1',
        user_id: '1'
    },
    {
        id: '3',
        text: 'foo bar',
        post_id: '2',
        user_id: '2'
    },
    {
        id: '4',
        text: 'foo bar baz',
        post_id: '3',
        user_id: '1'
    },
]

module.exports = {
    users,
    posts,
    comments
}