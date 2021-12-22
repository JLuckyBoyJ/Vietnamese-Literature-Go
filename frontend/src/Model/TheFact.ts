import Location from "./Location";
import Category from './Category';
import User from "./User";

export default class TheFact {
    id: number = 0
    location: Location = new Location()
    category: Category = new Category()
    user: User = new User()
    target: Object = new Object()
    content: string = ""
}