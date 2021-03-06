{
    // JavaScript
    // old: var π©
    var age1 = 5;
    age1 = 1;

    // let es6
    let name1 = 'hello';
    name1 = 'hi';

    // const - νλ² μ μΈνλ©΄ λ
    const age2 = 5;
    // age = 5;

    /**
     * JavaScript
     * Primitive: number, string, boolean, bigint, symbol, null, undefined
     * Object: function, array.....
     */
    
    // number
    const num:number = -6;

    // string
    const str:string = 'hello';

    // boolean
    const boal:boolean = false;

    // undefined - κ°μ΄ μλμ§ μλμ§ μλ¬΄κ²λ κ²°μ λμ§ μμ
    let name: undefined;  // π©
    // name = 'hello';  // μ΄λ¬λ©΄ μλ¬
    let age: number | undefined;  // ageλ μ«μνμ λλ undefinedμ ν λΉν  μ μλ datatype <- λ³΄νΈμ μΌλ‘ μ΄λ κ² μ(null λ§κ³ )
    age = undefined;
    age = 1;
    function find(): number | undefined {
        return undefined;
    }

    // null - νν λΉμ΄μ Έμλ€λ‘ κ²°μ 
    let person: null;  // π©
    let person2: string | null;

    // unknown π© κ°λ₯νλ©΄ μ°μ§ μλ κ²μ΄ μ’λ€
    let notSure: unknown = 0;
    notSure = 'he';
    notSure = true;

    // any π© κ°λ₯νλ©΄ μ°μ§ μλ κ²μ΄ μ’λ€
    let anything: any = 0;
    anything = 'hello';

    // void μλ¬΄κ²λ μλ νν λΉ
    function print(): void {  // voidμΈ κ²½μ° μλ΅ κ°λ₯
        console.log('hello');
        return;  // μλ¬΄ κ°λ λ¦¬ν΄νμ§ μμΌλ©΄ μ΄κ² μλ΅λ κ²
    }

    let unusable: void = undefined;  // π© λ³μμμ void μ μΈνλ©΄ undefined λ°μ μΈ μ μμ΄μ

    // never <- μ΄νλ¦¬μΌμ΄μμμ μ΄λ ν μλ¬λ₯Ό λμ§ λ, μμμΉ λͺ»ν νΈλ€λ§ν  μ μλ μλ¬ λ°μμ νΈμΆ, whileλ¬Έ λλμ§ μκ² μ½λ μμ± λ±
    function throwError(message: string): never {  // μ΄ ν¨μ λ¦¬ν΄νλ κ°μ΄ μμ
        // message -> server (log)  // λ°μν μλ¬ λ©μΈμ§ μλ²λ‘ λ³΄λ΄μ λ‘κ·Έ λ¨κΈ°κΈ° 
        throw new Error(message);  // μ΄νλ¦¬μΌμ΄μμμ μλ¬ λμ§κΈ°
        while(true) {  // μμμ μλ¬ λμ§λ©΄ μ¬κΈ° λλ¬ λͺ»ν΄μ whileμ΄ ν¬λ―Ένκ² ννλ¨

        }
    }
    
    let neverEnding: never;  // π©

    // object
    let obj: object;  // π© μμ°λ κ²μ΄ μ’μ. μ΄λ€ νμμ λ°μ΄ν°λ λ΄μ μ μλ€. μμ νμμ μ μΈν λͺ¨λ  object νμ ν λΉ κ°λ₯. λ°°μ΄λ μ λ¬ κ°λ₯.
    // κ°λ₯νλ©΄ κ΅¬μ²΄μ μΌλ‘ objectλ μ΄λ€ νμμΈμ§λ₯Ό μ‘°κΈ λ λͺμν΄μ μμ±νλ κ²μ΄ μ’λ€
    function acceptSomeObject(obj: object) {  // μ΄λ ν μ€λΈμ νΈλ μ λ¬ κ°λ₯

    }
    acceptSomeObject({ name: 'seolyu' });
    acceptSomeObject({ animal: 'dog '});
}