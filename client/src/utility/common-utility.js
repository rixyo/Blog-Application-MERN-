import  secureLocalStorage  from  "react-secure-storage";
export const getRefreshToken = () => {
    return secureLocalStorage.getItem('Token');
}

export const setRefreshToken = (refreshToken) => {
    secureLocalStorage.setItem('Token', `Bearer ${refreshToken}`);
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