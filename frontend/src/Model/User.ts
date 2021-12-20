
export default class User {
    id: number = 0
    username: string = ""
    email: string = ""
    displayName: string = ""
    gender: boolean = true
    dateOfBirth: Date = new Date() 
    isAdmin: boolean = false 
    isActive: boolean = true

    public getGender() {
        return this.gender ? "Nam" : "Nữ"
    }
}