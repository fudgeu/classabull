import { NextResponse } from 'next/server';
import classList from './../ClassSchedule.json' assert {type: 'json'};

export const revalidate = 1

export async function GET(request) {
  console.log(request)
  const { searchParams } = new URL(request.url)
  const instructor = searchParams.get('instructor').toLowerCase();

  // console.log(JSON.stringify(classes, null, 2))

  const instructors = classList.classes;
  //console.log(JSON.stringify(classes, null, 2));

  if (!instructor){
    return NextResponse.json([])

}
  var filteredInstructors = instructors.filter(c => {

    if (c.instructor.toLowerCase().includes(instructor)) {
      return true;
    }
    return false;
  });

  console.log(filteredInstructors)

  return NextResponse.json({ text: filteredInstructor })
}