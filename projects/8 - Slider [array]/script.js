"use strict";
import { imageArray } from "./images.js";

const row_container = document.getElementById("row_container");
const btn_prev = document.getElementById("btn_prev");
const btn_next = document.getElementById("btn_next");

let currentIndex = 0;
let currentIndex1;
let currentIndex2;

// Initial Render
updateImg(currentIndex, currentIndex + 1, currentIndex + 2);

btn_next.addEventListener("click", () => {
  currentIndex1 = currentIndex + 1;
  currentIndex2 = currentIndex + 2;

  if (currentIndex == imageArray.length) {
    currentIndex = 0;
  }

  if (currentIndex1 == imageArray.length) {
    currentIndex1 = 0;
  } else if (currentIndex1 == imageArray.length + 1) {
    currentIndex1 = 1;
  }

  if (currentIndex2 == imageArray.length) {
    currentIndex2 = 0;
  } else if (currentIndex2 == imageArray.length + 1) {
    currentIndex2 = 1;
  } else if (currentIndex2 == imageArray.length + 2) {
    currentIndex2 = 2;
  }

  updateImg(currentIndex, currentIndex1, currentIndex2);
  currentIndex++;
});

btn_prev.addEventListener("click", () => {
  currentIndex1 = currentIndex - 1;
  currentIndex2 = currentIndex - 2;

  if (currentIndex < 0) {
    currentIndex = imageArray.length - 1;
  }

  if (currentIndex1 < 0) {
    currentIndex1 = imageArray.length - 1;
  } else if (currentIndex1 < -1) {
    currentIndex1 = imageArray.length - 2;
  }

  if (currentIndex2 < 0) {
    currentIndex2 = imageArray.length - 1;
  } else if (currentIndex2 < -1) {
    currentIndex2 = imageArray.length - 2;
  } else if (currentIndex2 < -2) {
    currentIndex2 = imageArray.length - 3;
  }

  updateImg(currentIndex, currentIndex1, currentIndex2);
  currentIndex--;
});

function updateImg(index0, index1, index2) {
  row_container.innerHTML = `
    <div class="col">
      <div class="card" style="width: 15rem;">
        <img src="${imageArray[index0].image}" class="card-img-top" alt="...">
        <div class="card-body">
          <p class="card-text">${imageArray[index0].caption}</p>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card" style="width: 15rem;">
        <img src="${imageArray[index1].image}" class="card-img-top" alt="...">
        <div class="card-body">
          <p class="card-text">${imageArray[index1].caption}</p>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card" style="width: 15rem;">
        <img src="${imageArray[index2].image}" class="card-img-top" alt="...">
        <div class="card-body">
          <p class="card-text">${imageArray[index2].caption}</p>
        </div>
      </div>
    </div>
  `;
}


// "use strict";
// import { imageArray } from "./images.js";

// const row_container = document.getElementById("row_container");
// const btn_prev = document.getElementById("btn_prev");
// const btn_next = document.getElementById("btn_next");

// let currentIndex = 0;
// let currentIndex1 = 1;
// let currentIndex2 = 2;

// // Initial Render
// updateImgFunction(currentIndex, currentIndex1, currentIndex2);

// btn_next.addEventListener("click", () => {
//   currentIndex++;
//   currentIndex1++;
//   currentIndex2++;

//   if (currentIndex == imageArray.length) {
//     currentIndex = 0;
//   }

//   if (currentIndex1 == imageArray.length) {
//     currentIndex1 = 0;
//   }

//   if (currentIndex2 == imageArray.length) {
//     currentIndex2 = 0;
//   }

//   updateImgFunction(currentIndex, currentIndex1, currentIndex2);
// });

// btn_prev.addEventListener("click", () => {
//   currentIndex--;
//   currentIndex1--;
//   currentIndex2--;

//   if (currentIndex < 0) {
//     currentIndex = imageArray.length - 1;
//   }

//   if (currentIndex1 < 0) {
//     currentIndex1 = imageArray.length - 1;
//   }

//   if (currentIndex2 < 0) {
//     currentIndex2 = imageArray.length - 1;
//   }

//   updateImgFunction(currentIndex, currentIndex1, currentIndex2);
// });

// function updateImgFunction(index0, index1, index2) {
//   row_container.innerHTML = `
//     <div class="col">
//       <div class="card" style="width: 15rem;">
//         <img src="${imageArray[index0].image}" class="card-img-top" alt="...">
//         <div class="card-body">
//           <p class="card-text">${imageArray[index0].caption}</p>
//         </div>
//       </div>
//     </div>
//     <div class="col">
//       <div class="card" style="width: 15rem;">
//         <img src="${imageArray[index1].image}" class="card-img-top" alt="...">
//         <div class="card-body">
//           <p class="card-text">${imageArray[index1].caption}</p>
//         </div>
//       </div>
//     </div>
//     <div class="col">
//       <div class="card" style="width: 15rem;">
//         <img src="${imageArray[index2].image}" class="card-img-top" alt="...">
//         <div class="card-body">
//           <p class="card-text">${imageArray[index2].caption}</p>
//         </div>
//       </div>
//     </div>
//   `;
// }