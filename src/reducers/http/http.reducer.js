import {REQUEST, FAIL, SUCCESS} from "../contants/actions";

/**
 *  Action get Notes
 * @returns {{type, payload: (*|any|AxiosInterceptorManager<AxiosRequestConfig>|<T>(config: AxiosRequestConfig) => AxiosPromise<T>)}}
 */
export function request(type) {
    return (payload = {fetching: false})=>({
        type: type+REQUEST,
        payload
    });
}

export function success(type) {
    return (payload = {fetching: false})=>({
        type: type+SUCCESS,
        payload
    });
}

export function fail(type) {
    return (payload = {fetching: false})=>({
        type: type+FAIL,
        payload
    });
}

