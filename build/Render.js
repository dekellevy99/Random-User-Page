"use strict";
class Render {
    constructor() {
    }
    render(data) {
        this._clean();
        this._renderPerson(data.user);
        this._renderQuote(data.quote);
        this._renderPokemon(data.pokemon);
        this._renderAboutMe(data.aboutMe);
    }
    renderSavedUsers(users) {
        $("#dropup-content").empty();
        let source = $("#saved-users-template").html();
        let template = Handlebars.compile(source);
        $("#dropup-content").append(template({ savedUsers: users }));
    }
    // === Private Helper Methods ===
    _clean() {
        $("#header").empty();
        $("#friends-container").empty();
        $("#quote-section").empty();
        $("#pokemon-section").empty();
        $("#aboutMe-section").empty();
    }
    _renderPerson(user) {
        let source = $("#person-template").html();
        let template = Handlebars.compile(source);
        $("#header").append(template(user));
        source = $("#friends-template").html();
        template = Handlebars.compile(source);
        $("#friends-container").append(template({ friends: user.friends }));
    }
    _renderQuote(quote) {
        const source = $("#quote-template").html();
        let template = Handlebars.compile(source);
        $("#quote-section").append(template(quote));
    }
    _renderPokemon(pokemon) {
        const source = $("#pokemon-template").html();
        let template = Handlebars.compile(source);
        $("#pokemon-section").append(template(pokemon));
    }
    _renderAboutMe(aboutMe) {
        const source = $("#aboutMe-template").html();
        let template = Handlebars.compile(source);
        $("#aboutMe-section").append(template(aboutMe));
    }
}
