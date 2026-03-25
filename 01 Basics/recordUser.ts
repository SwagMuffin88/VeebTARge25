/// <reference path='index.ts' />

// Record that contains key (string) and value (User). Similar to a Java Map.
type A = Record<string, User>

// Both "admin" and "user" are keys that are specified using a "union" type.
type U = Record<"admin" | "user", {test: string}>

// PropertyKey is helpful in situation where we want to create record types with all possible keys.
// A PropertyKey can be a string, number or symbol.
type P = Record<PropertyKey, string>