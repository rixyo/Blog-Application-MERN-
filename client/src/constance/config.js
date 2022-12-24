export const API_NOTIFICATION_MESSAGES = {
    loading: {
        title: "Loading...",
        message: "Data is being loaded. Please wait"
    },
    success: {
        title: "Success",
        message: "Data successfully loaded"
    },
    requestFailure: {
        title: "Error!",
        message: "An error occur while parsing request data"
    },
    responseFailure: {
        title: "Error!",
        message: "An error occur while fetching response from server. Please try again"
    },
    networkError: {
        title: "Error!",
        message: "Unable to connect to the server. Please check internet connectivity and try again."
    }
}

// API SERVICE URL
// SAMPLE REQUEST
// NEED SERVICE CALL: { url: "/", method: "POST/GET/PATCH/DELETE" }
export const SERVICE_URLS = {
    userLogin: { url: '/auth/login', method: 'POST' },
    userSignup: { url: '/auth/register', method: 'POST' },
    getAllPosts: { url: '/posts', method: 'GET', params: true },
    Profile:{url:'/auth/profile',method: 'GET',params: true},

  
    createPost: { url: '/posts', method: 'POST' },
    deletePost: { url: '/posts', method: 'DELETE', query: true },
    updatePost:{url:'/posts',method: 'PATCH',query: true},
    likePost:{url:'/posts/like',method: 'PATCH'},
    getPostById: { url: '/posts', method: 'GET', query: true },
    newComment: { url: '/comments', method: 'POST' },
    getAllComments: { url: '/comments', method: 'GET', query: true },
    deleteComment: { url: '/comments', method: 'DELETE', query: true },
    newReplay: { url: '/replays', method: 'POST' },
    getAllReplays: { url: '/replays', method: 'GET', query: true },
    deleteReplay: { url: '/replays', method: 'DELETE', query: true },
    getAllUsers:{url: '/auth/info',method: 'GET',query: true}
}