
export const parseJwt = (token) => {
    try {
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(atob(base64).split('').map((c) => {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
        return JSON.parse(jsonPayload);
    } catch (error) {
        console.error('Error parsing JWT:', error);
        return null;
    }
};

export const getUserEmailFromToken = () => {
    const token = localStorage.getItem('token') || sessionStorage.getItem('token');
    
    if (!token) return '';

    try {
        const decodedToken = parseJwt(token);
        return decodedToken?.email || '';
    } catch (error) {
        console.error('Error decoding token:', error);
        return '';
    }
};
