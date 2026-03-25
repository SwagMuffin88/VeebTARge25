type Role = "admin" | "user" | "moderator";
type TestExc = "testing" | "admin" | "user" | "security";


type O = Exclude<Role, "user" | "moderator">;
