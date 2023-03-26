import { NextResponse } from 'next/server';
import classList from './../ClassSchedule.json' assert {type: 'json'};

export const revalidate = 1

export async function GET(request) {
  console.log(request)
  const { searchParams } = new URL(request.url)
  const subject = searchParams.get('subj').toLowerCase()
  const classNumber = searchParams.get('num')

  // console.log(JSON.stringify(classes, null, 2))

  const classes = classList.classes;
  //console.log(JSON.stringify(classes, null, 2));

  var filteredClasses = classes.filter(c => {
    if (!subject && c.courseNumber.startsWith(classNumber)) {
      return true;
    }
    if (c.subject.toLowerCase().startsWith(subject) && c.courseNumber.startsWith(classNumber)) {
      return true;
    }
    return false;
  });

  console.log(filteredClasses)

  return NextResponse.json({ text: subject })
}
