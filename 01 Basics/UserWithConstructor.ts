class UserCode {
    code: string;

    constructor(code: string) {
        this.code = code;
    }
}

type U = ConstructorParameters<typeof UserCode>