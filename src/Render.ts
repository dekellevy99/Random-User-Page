class Render{
    constructor(){

    }

    render(data: Data): void{
        this._clean();
        this._renderPerson(data.user);
        this._renderQuote(data.quote);
        this._renderPokemon(data.pokemon);
        this._renderAboutMe(data.aboutMe);
    }

    renderSavedUsers(users: any): void{
        $("#dropup-content").empty();
        let source = $("#saved-users-template").html();
        let template = Handlebars.compile(source);
        $("#dropup-content").append(template({savedUsers: users}));
    }

    // === Private Helper Methods ===

    private _clean(){
        $("#header").empty();
        $("#friends-container").empty();
        $("#quote-section").empty();
        $("#pokemon-section").empty();
        $("#aboutMe-section").empty();
    }
    
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
}