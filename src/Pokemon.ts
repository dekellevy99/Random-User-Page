class Pokemon{
    private _name: string;
    private _imgUrl: string;

    constructor(name: string, imgUrl: string){
        this._name = name;
        this._imgUrl = imgUrl;
    }

    // === Getters Methods ===
    get name(): string{
        return this._name;
    }

    get imgUrl(): string{
        return this._imgUrl;
    }

    // === Setters Methods ===
    set name(name: string){
        this._name = name;
    }

    set imgUrl(imgUrl: string){
        this._imgUrl = imgUrl;
    }

    // === Static Methods ===
    static async generatePokemon(): Promise<Pokemon>{
        const MAX_POKEMON_COUNT = 905;
        const MIN_POKEMON_COUNT = 1;
        const randomId = Math.floor(Math.random() * (MAX_POKEMON_COUNT - MIN_POKEMON_COUNT + 1) + MIN_POKEMON_COUNT)
        const pokemon = await $.get(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
        
        const name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.substring(1);
        const imgUrl = pokemon.sprites.front_default;

        return new Pokemon(name, imgUrl);
    }
}