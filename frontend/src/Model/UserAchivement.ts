import User from "./User"
import Achivement from './Achivement';

export default class UserAchivement {
    id: number = 0
    user: User = new User()
    achivements: Achivement[] = []
}