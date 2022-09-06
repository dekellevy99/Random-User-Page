"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Person {
    constructor(firstName, lastName, city, state, friends, urlImg) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._city = city;
        this._state = state;
        this._friends = friends;
        this._urlImg = urlImg;
    }
    // === Getters Methods ===
    get firstName() {
        return this._firstName;
    }
    get lastName() {
        return this._lastName;
    }
    get city() {
        return this._city;
    }
    get state() {
        return this._state;
    }
    get friends() {
        return [...this._friends];
    }
    get urlImg() {
        return this._urlImg;
    }
    // === Setters Methods ===
    set firstName(name) {
        this._firstName = name;
    }
    set lastName(name) {
        this._lastName = name;
    }
    set city(city) {
        this._city = city;
    }
    set state(state) {
        this._state = state;
    }
    set urlImg(url) {
        this._urlImg = url;
    }
    addFriend(friendName) {
        if (!this._friends.find(friend => friend === friendName)) {
            this._friends.push(friendName);
        }
    }
    removeFriend(friendName) {
        const NOT_FOUND = -1;
        let index = this._friends.indexOf(friendName);
        if (index != NOT_FOUND) {
            this._friends.splice(index, 1);
        }
    }
    // === Static Methods ===
    static generateUser() {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield $.get("https://randomuser.me/api/?format=JSON&results=7");
            const mainUser = users.results[0];
            const firstName = mainUser.name.first;
            const lastName = mainUser.name.last;
            const city = mainUser.location.city;
            const state = mainUser.location.state;
            const urlImg = mainUser.picture.medium;
            const friends = users.results.splice(1).
                map((user) => { return `${user.name.first} ${user.name.last}`; });
            return new Person(firstName, lastName, city, state, friends, urlImg);
        });
    }
}
