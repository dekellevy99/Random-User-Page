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
class About {
    constructor(paragraph) {
        this._paragraph = paragraph;
    }
    // === Getters Methods ===
    get paragraph() {
        return this._paragraph;
    }
    // === Setters Methods ===
    set paragraph(paragraph) {
        this._paragraph = paragraph;
    }
    // === Static Methods ===
    static generateAbout() {
        return __awaiter(this, void 0, void 0, function* () {
            const text = yield $.get("https://baconipsum.com/api/?type=all-meat&paras=1");
            return new About(text[0]);
        });
    }
}
