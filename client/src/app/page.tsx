"use client";
// import Image from "next/image";

import { useEffect, useState } from "react";

// Model
interface User {
    id: number;
    name: string;
    email: string;
}

export default function Home() {
    const [users, setUsers] = useState<User[]>([]);
    useEffect(() => {
        fetch("http://localhost:1000/api/users")
            .then((res) => res.json())
            .then((data) => setUsers(data))
            .catch((err) => console.error("Error fetching users:", err));
    }, []);

    console.log(users);
    return (
        <>
            <h1>User Accounts</h1>
            <ul>
                {users.map((i) => (
                    <li key={i.id}>
                        {i.name} ({i.email})
                    </li>
                ))}
            </ul>
        </>
    );
}
