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
class Quote {
    constructor(text, author) {
        this._text = text;
        this._author = author;
    }
    // === Getters Methods ===
    get text() {
        return this._text;
    }
    get author() {
        return this._author;
    }
    // === Setters Methods ===
    set text(text) {
        this._text = text;
    }
    set author(author) {
        this._author = author;
    }
    // === Static Methods ===
    static generateQuote() {
        return __awaiter(this, void 0, void 0, function* () {
            const quoteObj = yield $.get("https://api.kanye.rest");
            const text = quoteObj.quote;
            return new Quote(text, "Kanye West");
        });
    }
}
