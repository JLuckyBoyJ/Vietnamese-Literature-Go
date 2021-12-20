import axios,{ AxiosInstance, AxiosResponse, AxiosRequestConfig} from "axios";

declare module 'axios' {
    interface AxiosResponse<T = any> extends Promise<T> {}
}

abstract class HttpClient {
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
        return config
    }

    protected _handleError = (error: any) => Promise.reject(error);
}

export default HttpClient 