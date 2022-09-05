class About{
    private _paragraph: string;

    constructor(paragraph: string){
        this._paragraph = paragraph;
    }

    // === Getters Methods ===
    get paragraph(): string{
        return this._paragraph;
    }

    // === Setters Methods ===
    set paragraph(paragraph: string){
        this._paragraph = paragraph;
    }

    // === Static Methods ===
    static async generateAbout(): Promise<About>{
        const text = await $.get("https://baconipsum.com/api/?type=all-meat&paras=1");
        return new About(text[0]);
    }
}
