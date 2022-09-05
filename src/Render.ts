class Render{
    constructor(){

    }

    // === Private Helper Methods ===
    private _renderPerson(user: Person): void{
        let source = $("#person-template").html();
        let template = Handlebars.compile(source);
        $("#header").append(template(user));

        source = $("#friends-template").html();
        template = Handlebars.compile(source);
        $("#friends-container").append(template({friends: user.friends}))
    }

    private _renderQuote(quote: Quote): void{
        const source = $("#quote-template").html();
        let template = Handlebars.compile(source);
        $("#quote-section").append(template(quote))
    }

    private _renderPokemon(pokemon: Pokemon): void{
        const source = $("#pokemon-template").html();
        let template = Handlebars.compile(source);
        $("#pokemon-section").append(template(pokemon))
    }

    private _renderAboutMe(aboutMe: About): void{
        const source = $("#aboutMe-template").html();
        let template = Handlebars.compile(source);
        $("#aboutMe-section").append(template(aboutMe))

    }

    render(data: Data): void{
        this._renderPerson(data.user);
        this._renderQuote(data.quote);
        this._renderPokemon(data.pokemon);
        this._renderAboutMe(data.aboutMe);
    }
}

const render = new Render();
const data = new Data();
data.generate().then(response => {
    render.render(data);
});