import {students} from './students.js';

let container = document.getElementById('students-container');

for(let student of students) {
    container.innerHTML += `<div class="col">
                    <div class="card shadow-sm">
                        <img class="bd-placeholder-img card-img-top mt-2" width="100%" height="225"
                            src="./images/student-img.webp"></img>
                        <h2 class="text-center mt-2 fs-4">${student.name}</h2>
                        
                        <div class="mx-1 mb-2 rounded px-2 py-2 bg-secondary-subtle d-flex flex-column gap-1" id="student-detail-section">

                            <div class="card-text d-flex">
                                <span class="w-25">Age:</span>
                                <span class="w-75">${student.age}</span>
                            </div>

                            <div class="card-text d-flex">
                                <span class="w-25">Contact:</span>
                                <span class="w-75">${student.contact}</span>
                            </div>

                            <div class="card-text d-flex">
                                <span class="w-25">Email:</span>
                                <span class="w-75">${student.email}</span>
                            </div>
                        </div>
                    </div>
                </div> `
}