import { NextResponse } from 'next/server';
import classList from './../ClassSchedule.json' assert {type: 'json'};

export const revalidate = 1

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const crn = searchParams.get('crn')
 

  const crns = classList.classes;
  if (crn === "")
  return NextResponse.json([])

  const firstElement = crns.find(obj => obj.crn === crn);
  console.log("-----------> " + firstElement)
  
  return NextResponse.json(firstElement)
}