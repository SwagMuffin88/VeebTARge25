/// <reference path='index.ts' />


type RequiredUser = {
    name: string;
    age: number;
    address: {
        street: string;
        city?: string; // -> "?" marks parameter as optional
    };
    readonly property: string; // "readonly" is useful for avoiding accidental changes in fields
}

// "Readonly<>" marks all properties in defined type (RequiredUser) READ-ONLY.
type T = Readonly<RequiredUser>;

// Marks all properties in defined type (RequiredUser) REQUIRED.
type R = Required<RequiredUser>;

function createUserWithAddress(user: R) {}

Object.freeze(createUserWithAddress); // "freezes" all fields within object, thus they cannot be used.