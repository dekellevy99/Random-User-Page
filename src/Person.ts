class Person{
    private _firstName: string;
    private _lastName: string;
    private _city: string;
    private _state: string;
    private _friends: string[];
    private _urlImg: string;


    constructor(firstName: string, lastName: string, city: string, state: string, friends: string[], urlImg: string){
        this._firstName = firstName;
        this._lastName = lastName;
        this._city = city;
        this._state = state;
        this._friends = friends;
        this._urlImg = urlImg;
    }

    // === Getters Methods ===
    get firstName(): string{
        return this._firstName;
    }

    get lastName(): string{
        return this._lastName;
    }

    get city(): string{
        return this._city;
    }

    get state(): string{
        return this._state;
    }

    get friends(): string[]{
        return [...this._friends];
    }

    get urlImg(): string{
        return this._urlImg;
    }

    // === Setters Methods ===
    set firstName(name: string){
        this._firstName = name;
    }

    set lastName(name: string){
        this._lastName = name;
    }

    set city(city: string){
        this._city = city;
    }

    set state(state: string){
        this._state = state;
    }

    set urlImg(url: string){
        this._urlImg = url;
    }

    addFriend(friendName: string): void{
        if(!this._friends.find(friend => friend === friendName)){
            this._friends.push(friendName);
        }
    }

    removeFriend(friendName: string): void{
        const NOT_FOUND = -1;
        let index = this._friends.indexOf(friendName);
        if(index != NOT_FOUND){
            this._friends.splice(index, 1);
        }
    }

    // === Static Methods ===
    static async generateUser(){
        const users = await $.get("https://randomuser.me/api/?format=JSON&results=7");

        const mainUser= users.results[0];

        const firstName = mainUser.name.first;
        const lastName = mainUser.name.last;
        const city = mainUser.location.city;
        const state = mainUser.location.state;

        const friends = users.results.splice(1).
                            map((user: any) => {return `${user.name.first} ${user.name.last}`});
                            
        console.log(firstName, lastName, city, state);
        console.log(friends);
    }
}