
export default class BaseResponse<T> {
    public code: number 
    public message: string 
    public data: T 
    public datas: T[]

    constructor(code: number, message: string, data: T, datas: T[]){
        this.code = code
        this.message = message 
        this.data = data
        this.datas = datas
    }
}