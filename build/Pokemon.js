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
class Pokemon {
    constructor(name, imgUrl) {
        this._name = name;
        this._imgUrl = imgUrl;
    }
    // === Getters Methods ===
    get name() {
        return this._name;
    }
    get imgUrl() {
        return this._imgUrl;
    }
    // === Setters Methods ===
    set name(name) {
        this._name = name;
    }
    set imgUrl(imgUrl) {
        this._imgUrl = imgUrl;
    }
    // === Static Methods ===
    static generatePokemon() {
        return __awaiter(this, void 0, void 0, function* () {
            const MAX_POKEMON_COUNT = 905;
            const MIN_POKEMON_COUNT = 1;
            const randomId = Math.floor(Math.random() * (MAX_POKEMON_COUNT - MIN_POKEMON_COUNT + 1) + MIN_POKEMON_COUNT);
            const pokemon = yield $.get(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
            const name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.substring(1);
            const imgUrl = pokemon.sprites.front_default;
            return new Pokemon(name, imgUrl);
        });
    }
}
