import { NextResponse } from 'next/server';
import classList from './../ClassSchedule.json' assert {type: 'json'};

export const revalidate = 1

export async function GET(request) {
  console.log(request)
  const { searchParams } = new URL(request.url)
  const subject = searchParams.get('subj')
  const classNumber = searchParams.get('classNumb')

  // console.log(JSON.stringify(classes, null, 2))

  const classes = classList.classes;
  //console.log(JSON.stringify(classes, null, 2));

  var filteredClasses = classes.filter(c => {
    if (c.subject.startsWith(subject)) {
      return true;
    }
    return false;
  });

  console.log(filteredClasses)

  return NextResponse.json({ text: subject })
}


