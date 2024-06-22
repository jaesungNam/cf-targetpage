'use client'

import Image from "next/image";

export default function Home() {
  return (
    <div>
      <button onClick={() => {
        fetch('/api/user', {method: 'GET'})
      }}>get
      </button>
      <button onClick={() => {
        fetch('/api/user', {method: 'POST', headers: {
            "Content-Type": "application/json",
          }, body: JSON.stringify({user: 1})})
      }}>post
      </button>
      <button onClick={() => {
        fetch('/api/user', {
          method: 'PUT', headers: {
            "Content-Type": "application/json",
          }, body: JSON.stringify({user: 1})
        })
      }}>put
      </button>
      <button onClick={() => {
        fetch('/api/user', {method: 'DELETE'})
      }}>get
      </button>
    </div>
  );
}
