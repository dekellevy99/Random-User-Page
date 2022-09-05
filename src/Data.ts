class Data{
    private _user: Person;
    private _quote: Quote;
    private _pokemon: Pokemon;
    private _aboutMe: About;

    constructor(){
        this._user = undefined;
        this._quote = undefined;
        this._pokemon = undefined;
        this._aboutMe = undefined;
    }

    // === Getters Methods ===
    get user(): Person{
        return this._user;
    }

    get quote(): Quote{
        return this._quote;
    }

    get pokemon(): Pokemon{
        return this._pokemon;
    }

    get aboutMe(): About{
        return this._aboutMe;
    }

    // === Setters Methods ===
    set user(user: Person){
        this._user = user;
    }

    set quote(quote: Quote){
        this._quote = quote;
    }

    set pokemon(pokemon: Pokemon){
        this._pokemon = pokemon;
    }

    set aboutMe(aboutMe: About){
        this._aboutMe = aboutMe;
    }

    async generate(){
        this.user = await Person.generateUser();
        this.quote = await Quote.generateQuote();
        this.pokemon = await Pokemon.generatePokemon();
        this.aboutMe = await About.generateAbout();
    }
    
}
