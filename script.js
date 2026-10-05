/* ================================
   Project Progress
================================ */

// Change this value whenever you want
// to update the project progress.

const projectProgress = 11;


/* ================================
   Update Progress Bar
================================ */

const progressBar = document.getElementById("progressBar");
const progressPercentage = document.getElementById("progressPercentage");


// Keep the value between 0 and 100
const progress = Math.min(Math.max(projectProgress, 0), 100);


// Apply progress
progressBar.style.width = `${progress}%`;
progressPercentage.textContent = `${progress}%`;