class Render{
    constructor(){

    }

    render(data: Data): void{
        this._renderPerson(data.user);
        this._renderQuote(data.quote);
        this._renderPokemon(data.pokemon);
        this._renderAboutMe(data.aboutMe);
    }

    // === Private Helper Methods ===
    private _renderPerson(user: Person): void{
        $("#header").empty();
        let source = $("#person-template").html();
        let template = Handlebars.compile(source);
        $("#header").append(template(user));

        $("#friends-container").empty();
        source = $("#friends-template").html();
        template = Handlebars.compile(source);
        $("#friends-container").append(template({friends: user.friends}))
    }

    private _renderQuote(quote: Quote): void{
        $("#quote-section").empty();
        const source = $("#quote-template").html();
        let template = Handlebars.compile(source);
        $("#quote-section").append(template(quote))
    }

    private _renderPokemon(pokemon: Pokemon): void{
        $("#pokemon-section").empty();
        const source = $("#pokemon-template").html();
        let template = Handlebars.compile(source);
        $("#pokemon-section").append(template(pokemon))
    }

    private _renderAboutMe(aboutMe: About): void{
        $("#aboutMe-section").empty();
        const source = $("#aboutMe-template").html();
        let template = Handlebars.compile(source);
        $("#aboutMe-section").append(template(aboutMe))

    }
}