import React from 'react'
import { useState, useEffect } from "react";

type request ={
    email: string;
    gender: string;
}
const FetchApi = () => {
    const [result , setResult] = useState<request[]>([])
    useEffect(() => {
        const response = async () => {
          const data = await fetch("https://randomuser.me/api", {
            method: "GET"
          });
          const jsonData = await data.json();
          setResult(jsonData.results);
        };
        response();
      }, []);
      console.log('result',result);
      
  return (
    <></>
  )
}

export default FetchApi