var page = 1;
limit = 40;
var count = 1;
var gridtemplaterows = "";
var start = 0;
var end = 2;
async function generatecontent() {
  const promise = await fetch(
    `https://pixabay.com/api/?key=27056281-2db7f0833202d09c5d077a8d1&&page=${page}&&per_page=${limit}`
  );

  const data = await promise.json();
  console.log(data, "data");

  document.getElementById("maincontent").style.gridTemplateRows = `repeat(${
    data.length / 5
  },200px)`;

  data.hits.map((e, i) => {
    const img = document.createElement("img");
    img.setAttribute("class", "gridimage");
    img.src = e.largeImageURL;
    const div = document.createElement("div");

    div.setAttribute("class", "contentchildren");
    if (count == 1) {
      div.setAttribute("class", "one");
    }
    if (count == 2) {
      div.setAttribute("class", "two");
    }
    if (count == 3) {
      div.setAttribute("class", "three");
    }
    if (count == 4) {
      div.setAttribute("class", "four");
    }
    if (count == 5) {
      div.setAttribute("class", "five");
    }

    if (count != 5) {
      count++;
    } else {
      count = 1;
    }

    // document.getElementById("maincontent").style.gridTemplateRows=gridtemplaterows

    div.append(img);
    document.getElementById("maincontent").append(div);
    console.log(gridtemplaterows, "e");
  });
}

generatecontent();

window.addEventListener("scroll", () => {
  const { scrollHeight, scrollTop, clientHeight } = document.documentElement;

  if (scrollTop + clientHeight >= scrollHeight) {
    page++;
    // limit=limit*page

    generatecontent();
  }
});

//////////////////////

// const APIDATA = async function () {
//   const res = await fetch(
//     "https://api.facthunt.in/fostergem/v1/post/list/public"
//   );
//   const data = await res.json();
//   console.log(data.content);
// };

// APIDATA();
