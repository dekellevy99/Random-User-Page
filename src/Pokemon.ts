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
    static async generatePokemon(){
        const MAX_POKEMON_COUNT = 949;
        const MIN_POKEMON_COUNT = 1;
        const randomId = Math.floor(Math.random() * (MAX_POKEMON_COUNT - MIN_POKEMON_COUNT + 1) + MIN_POKEMON_COUNT)
        const pokemon = await $.get(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
        
        const name = pokemon.name;
        const imgUrl = pokemon.sprites.other.dream_world.front_default;
    }
}