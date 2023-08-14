export class Calculo {
    private _numberOne!: number
    private _numberTwo!: number
    private _operadores!: number
    private _result!: number
    private _pegarValores!: number
    private _adicionarOperadores!: string
    

    constructor(numberOne: number, numberTwo: number) {
        this._numberOne = numberOne
        this.numberTwo = numberTwo
    }


    public get numberOne(): number {
        return this._numberOne
    }
    public set numberOne(numberOne: number) {
        this._numberOne = numberOne
    }


    public get numberTwo(): number {
        return this._numberTwo
    }
    public set numberTwo(numberTwo: number) {
        this._numberTwo = numberTwo
    }

    public get operadores(): number {
        return this._operadores
    }
    public set operadores(operadores: number) {
        this._operadores = operadores
    }

    public get result(): number {
        return this._result
    }
    public set result(result: number) {
        this._result = result
    }

    public get pegarValores(): number {
        return this._pegarValores
    }
    public set pegarValores(pegarValores: number) {
        this._pegarValores = pegarValores
    }
    
    public get adicionarOperadores(): string {
        return this._adicionarOperadores
    }
    public set adicionarOperadores(adicionarOperadores: string) {
        this._adicionarOperadores = adicionarOperadores
    }
}