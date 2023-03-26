import { NextResponse } from 'next/server';
import classList from './../ClassSchedule.json' assert {type: 'json'};

export const revalidate = 1

export async function GET(request) {
  console.log(request)
  const { searchParams } = new URL(request.url)
  const tag = searchParams.get('tag');

  // console.log(JSON.stringify(classes, null, 2))

  const tags = classList.classes;
  //console.log(JSON.stringify(classes, null, 2));
  if (!tag){
    return NextResponse.json([])
}

  var filteredtags = tags.filter(c => {
    if (c.tags.includes(tag)) {
      return true;
    }
    return false;
  });

  console.log(filteredtags)

  return NextResponse.json(filteredtags)
}