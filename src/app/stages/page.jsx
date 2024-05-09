import React from 'react'
import { getAllSchedule } from "@/app/lib/api";

function stages() {
    const data = getAllSchedule();
    console.log(data);
    
  return (
    <main>
      <p>Hello kan du se mig??</p>
    </main>
  )
}

export default stages
