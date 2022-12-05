import  secureLocalStorage  from  "react-secure-storage";
export const getRefreshToken = () => {
    return secureLocalStorage.getItem('9z$C&F)J');
}

export const setRefreshToken = (refreshToken) => {
    secureLocalStorage.setItem('9z$C&F)J', `Bearer ${refreshToken}`);
}

export const getType = (value, body) => {
    if (value.params) {
        return { params: body }
    } else if (value.query) {
        if (typeof body === 'object') {
            return { query: body._id }
        } else {
            return { query: body }
        }
    }
    return {};
}