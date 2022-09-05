class Quote{
    private _text: string;
    private _author: string;

    constructor(text: string, author: string){
        this._text = text;
        this._author = author;
    }

    // === Getters Methods ===
    get text(): string{
        return this._text;
    }

    get author(): string{
        return this._author;
    }

    // === Setters Methods ===
    set text(text: string){
        this._text = text;
    }

    set author(author: string){
        this._author = author;
    }

    // === Static Methods ===
    static async generateQuote(){
        const quoteObj = await $.get("https://api.kanye.rest");
        const text = quoteObj.quote;
    }
}