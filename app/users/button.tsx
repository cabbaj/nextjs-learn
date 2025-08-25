// Client Component (ClientWrapper) - contains both button and data
"use client";
import Link from "next/link";
import { useState } from "react";

interface ClientWrapperProps {
  data: { name: string; id: number }[];
}

export default function Button({ data }: ClientWrapperProps) {
  const [show, setShow] = useState(false);

  return (
    <div>
      {/* Button is directly here - no need for separate component */}
      <button onClick={() => setShow(!show)}>
        {show ? "Hide Data" : "Show Data"}
      </button>

      {show && (
        <div>
          <h3>Todo List:</h3>
          {data.map((item) => (
            <Link href={`/users/${item.id}`}>
              <p key={item.id}>{item.name}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
