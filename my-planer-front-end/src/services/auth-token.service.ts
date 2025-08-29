import Cookies from 'js-cookie'

export enum EnumTokens {
    'ACCESS_TOKEN' = 'accessToken',
    'REFRESH_TOKEN' = 'refreshToken'
}

// export const getAccessToken = () => {
//     const accessToken = Cookies.get(EnumTokens.ACCESS_TOKEN)
//     return accessToken || null
// }

// export const saveTokenStorage = (accessToken: string) => {
//     Cookies.set(EnumTokens.ACCESS_TOKEN, accessToken, {
//         domain: import.meta.env.PROD ? '.stage-dream.tech' : 'localhost',
//         sameSite: 'strict',
//         expires: 1
//     })
// }
//
// export const removeFromStorage = () => {
//     Cookies.remove(EnumTokens.ACCESS_TOKEN)
// }


// Получить accessToken из LocalStorage
export const getAccessToken = (): string | null => {
    return localStorage.getItem(EnumTokens.ACCESS_TOKEN)
}

// Сохранить accessToken в LocalStorage
export const saveAccessToken = (accessToken: string) => {
    localStorage.setItem(EnumTokens.ACCESS_TOKEN, accessToken)
}

// Удалить accessToken из LocalStorage
export const removeAccessToken = () => {
    localStorage.removeItem(EnumTokens.ACCESS_TOKEN)
}


