import { NextResponse } from 'next/server';
import classList from './../ClassSchedule.json' assert {type: 'json'};

export const revalidate = 1

export async function GET(request) {
  console.log(request)
  const { searchParams } = new URL(request.url)
  const title = searchParams.get('title').toLowerCase();

  // console.log(JSON.stringify(classes, null, 2))

  const titles = classList.classes;
  //console.log(JSON.stringify(classes, null, 2));

  if (!title){
    return NextResponse.json([])

}
  var filteredTitles = titles.filter(c => {

    if (c.title.toLowerCase().includes(title)) {
      return true;
    }
    return false;
  });

  console.log("AaAAAAAAAAAAAA")
  return NextResponse.json(filteredTitles);
}