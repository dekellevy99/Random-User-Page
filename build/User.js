"use strict";
class Person {
    constructor(firstName, lastName, city, state, friends) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._city = city;
        this._state = state;
        this._friends = friends;
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
}
