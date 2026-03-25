type Role = "admin" | "user" | "moderator";
type TestExc = "testing" | "admin" | "user" | "security";


type O = Extract<Role, TestExc>;