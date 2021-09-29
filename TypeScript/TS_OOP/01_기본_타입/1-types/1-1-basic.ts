{
    // JavaScript
    // old: var 💩
    var age1 = 5;
    age1 = 1;

    // let es6
    let name1 = 'hello';
    name1 = 'hi';

    // const - 한번 선언하면 끝
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

    // undefined - 값이 있는지 없는지 아무것도 결정되지 않은
    let name: undefined;  // 💩
    // name = 'hello';  // 이러면 에러
    let age: number | undefined;  // age는 숫자타입 또는 undefined을 할당할 수 있는 datatype <- 보편적으로 이렇게 씀(null 말고)
    age = undefined;
    age = 1;
    function find(): number | undefined {
        return undefined;
    }

    // null - 텅텅 비어져있다로 결정
    let person: null;  // 💩
    let person2: string | null;
}