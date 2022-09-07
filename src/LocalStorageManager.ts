class LocalStorageManager{
    private _curId: number;

    constructor(){
        localStorage["saved-users"] = '[]';
        this._curId = 0;
    }

    _genId(): number{
        this._curId += 1;
        return this._curId;
    }

    addData(data: Data): void{
        const users = JSON.parse(localStorage["saved-users"]);
        let id = this._genId();
        users.push({id: id, data: data});
        localStorage["saved-users"] = JSON.stringify(users);
    }

    getDataById(id: number){
        const users = JSON.parse(localStorage["saved-users"]);
        const user = users.find((u: any) => {return u.id === id});
        return user.data;
    }
    
    getSavedUsers(){
        let users = JSON.parse(localStorage["saved-users"]);
        users = users.map((user:any) => {return {id: user.id, 
            name: `${user.data._user._firstName} ${user.data._user._lastName}`}});
        return users;
    }
}