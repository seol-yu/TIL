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

    // unknown 💩 가능하면 쓰지 않는 것이 좋다
    let notSure: unknown = 0;
    notSure = 'he';
    notSure = true;

    // any 💩 가능하면 쓰지 않는 것이 좋다
    let anything: any = 0;
    anything = 'hello';

    // void 아무것도 없는 텅텅 빈
    function print(): void {  // void인 경우 생략 가능
        console.log('hello');
        return;  // 아무 값도 리턴하지 않으면 이게 생략된 것
    }

    let unusable: void = undefined;  // 💩 변수에서 void 선언하면 undefined 밖에 쓸 수 없어서

    // never <- 어플리케이션에서 어떠한 에러를 던질 때, 예상치 못한 핸들링할 수 없는 에러 발생시 호출, while문 끝나지 않게 코드 작성 등
    function throwError(message: string): never {  // 이 함수 리턴하는 값이 없음
        // message -> server (log)  // 발생한 에러 메세지 서버로 보내서 로그 남기기 
        throw new Error(message);  // 어플리케이션에서 에러 던지기
        while(true) {  // 위에서 에러 던지면 여기 도달 못해서 while이 희미하게 표현됨

        }
    }
    
    let neverEnding: never;  // 💩

    // object
    let obj: object;  // 💩 안쓰는 것이 좋음. 어떤 타입의 데이터도 담을 수 있다. 원시 타입을 제외한 모든 object 타입 할당 가능. 배열도 전달 가능.
    // 가능하면 구체적으로 object도 어떤 타입인지를 조금 더 명시해서 작성하는 것이 좋다
    function acceptSomeObject(obj: object) {  // 어떠한 오브젝트도 전달 가능

    }
    acceptSomeObject({ name: 'seolyu' });
    acceptSomeObject({ animal: 'dog '});
}