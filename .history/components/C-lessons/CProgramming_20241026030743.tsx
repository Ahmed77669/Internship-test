import React, { useEffect, useState } from 'react'

interface User {
    id: number;
    rank: number;
    name: string;
    state: string;
    total_points: number;
  }
const CProgramming = () => {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
      async function fetchData() {
        try {
          const response = await fetch(
            "https://exam.gammal.tech/API/users/rankings",
            {
              method: "GET",
              headers: {
                Accept: "application/json",
              },
            }
          );
          const data: User[] = await response.json();
          const sortedData = data
            .sort(
              (a: { total_points: number }, b: { total_points: number }) =>
                b.total_points - a.total_points
            )
            .map((user, index) => ({ ...user, rank: index + 1 }));
          setUsers(sortedData);
        } catch (error) {
          console.error("Error fetching user rankings:", error);
        }
      }
  
      fetchData();
    }, []);
  return (
    <div>CProgramming</div>
  )
}

export default CProgramming