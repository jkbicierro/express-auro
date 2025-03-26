// Sample Data
export const UserSchema: User[] = [
    {
        id: 0,
        name: "John Bicierro",
        email: "jbicierro@gbox.adnu.edu.ph",
        password: "aouhsaodhjoo",
        role: "User",
    },
    {
        id: 1,
        name: "Karl Lumabi",
        email: "klumabi@gbox.adnu.edu.ph",
        password: "aouhsaodhjoo",
        role: "User",
    },
    {
        id: 2,
        name: "Mark Jacinto",
        email: "mjacinto@gbox.adnu.edu.ph",
        password: "aouhsaodhjoo",
        role: "User",
    },
];

export interface User {
    id: number;
    name: string;
    email: string;
    password: string;
    role: string;
}
