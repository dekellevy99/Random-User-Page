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
class Data {
    constructor() {
        this._user = undefined;
        this._quote = undefined;
        this._pokemon = undefined;
        this._aboutMe = undefined;
    }
    // === Getters Methods ===
    get user() {
        return this._user;
    }
    get quote() {
        return this._quote;
    }
    get pokemon() {
        return this._pokemon;
    }
    get aboutMe() {
        return this._aboutMe;
    }
    // === Setters Methods ===
    set user(user) {
        this._user = user;
    }
    set quote(quote) {
        this._quote = quote;
    }
    set pokemon(pokemon) {
        this._pokemon = pokemon;
    }
    set aboutMe(aboutMe) {
        this._aboutMe = aboutMe;
    }
    setData(data) {
        Object.assign(this._user, data._user);
        Object.assign(this._quote, data._quote);
        Object.assign(this._pokemon, data._pokemon);
        Object.assign(this._aboutMe, data._aboutMe);
    }
    generate() {
        return __awaiter(this, void 0, void 0, function* () {
            this.user = yield Person.generateUser();
            this.quote = yield Quote.generateQuote();
            this.pokemon = yield Pokemon.generatePokemon();
            this.aboutMe = yield About.generateAbout();
        });
    }
}
