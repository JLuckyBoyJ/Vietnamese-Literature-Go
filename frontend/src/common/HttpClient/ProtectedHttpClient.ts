import HttpClient from './HttpClient';
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import CookieManager from '../Cookies/CookiesManager';

export default abstract class ProtectedHttpClient {
    protected readonly instance: AxiosInstance;

    public constructor(baseURL: string) {
        this.instance = axios.create({
            baseURL,
        });
        
        this._initializeRequestInterceptor()
        this._initializeResponseInterceptor()
    }

    protected _initializeRequestInterceptor = () => {
        this.instance.interceptors.request.use(
            this._handleRequest,
            this._handleError,
        )
    }

    private _initializeResponseInterceptor = () => {
        this.instance.interceptors.response.use(
            this._handleResponse,
            this._handleError,
        )
    }

    private _handleResponse = ({data}: AxiosResponse) => data;

    protected _handleRequest = (config: AxiosRequestConfig) => {
        if (!config.headers) config.headers = {};
        config.headers["Content-Type"] = "multipart/form-data"
        config.headers["Authorization"] = 'Bearer ' + CookieManager.getCookieWithName('accessToken')
        return config
    }

    protected _handleError = (error: any) => Promise.reject(error);

}