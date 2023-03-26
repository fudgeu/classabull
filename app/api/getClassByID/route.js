import { NextResponse } from 'next/server';
// import classes from './../ClassSchedule.json' assert {type: 'json'};

export const revalidate = 1

export async function GET(request) {
  const { searchParams } = new URL(request)
  const subject = searchParams.get('subj')
  const classNumber = searchParams.get('classNumb')
  console.log(`AH: ${subject}`)
  // console.log(classes)

  return NextResponse.json({ text: "blah" })
}


