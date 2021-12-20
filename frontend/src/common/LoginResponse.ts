import BaseResponse from './BaseResponse';
export default class LoginResponse<T> extends BaseResponse<T> {
    public accessToken = ""

    constructor(code: number, message: string, data: T, datas: T[], accessToken: string){
        super(code, message, data, datas)
        this.accessToken = accessToken;
    }
}