const searchBtn = document.getElementById("search-btn");
const searchContainer = document.getElementById("search-container");
const searchInput = document.getElementById("search-input");

searchBtn.addEventListener("click", () => {
  // Show the container if hidden
  if (searchContainer.classList.contains("hidden")) {
    searchContainer.classList.remove("hidden");
  }

  // Trigger the animation
  searchInput.classList.toggle("opacity-0");
  searchInput.classList.toggle("scale-75");
  searchInput.classList.toggle("opacity-100");
  searchInput.classList.toggle("scale-100");
});
////////more
document.addEventListener("DOMContentLoaded", function () {
  const readMoreBtn = document.getElementById("read-more-btn");
  const aboutShort = document.getElementById("about-short");

  const shortText = `
    Established in 2008, St. John College of Engineering & Management is a premier Institute located in Maharashtra. The institute offers Degree and Diploma courses including 8 UG and 2 PG courses. Additionally, it also has After 10th Diploma courses. These programs are offered in Full Time mode. St. John College of Engineering & Management is a premier institute for After 10th Diploma, MMS, MBA/PGDM, B.E. / B.Tech courses.
  `;

  const fullText = `
    Established in 2008, St. John College of Engineering & Management is a premier Institute located in Maharashtra. The institute offers Degree and Diploma courses including 8 UG and 2 PG courses. Additionally, it also has After 10th Diploma courses. These programs are offered in Full Time mode. St. John College of Engineering & Management is a premier institute for After 10th Diploma, MMS, MBA/PGDM, B.E. / B.Tech courses. Candidates can pursue a range of courses like After 10th Diploma, MMS, MBA/PGDM, B.E. / B.Tech with streams in Engineering, Business & Management Studies. Over the period, St. John College of Engineering & Management has gained expertise through its trained and experienced faculty in the fields of Civil Engineering, Computer Science Engineering, Mechanical Engineering, Information Technology, Electronics Engineering, Artificial Intelligence & Machine Learning. Courses offered by the institute are recognized by approving bodies like AICTE. St. John College of Engineering & Management offers courses for 750 seats. Courses offered by the Institute are in the fee range of INR 18,000-280,000 for a total of 750 candidates.
  `;

  readMoreBtn.addEventListener("click", function () {
    if (aboutShort.classList.contains("max-h-[150px]")) {
      aboutShort.classList.remove("max-h-[150px]");
      aboutShort.classList.add("max-h-none");
      aboutShort.innerHTML = fullText;
      readMoreBtn.textContent = "Less";
    } else {
      aboutShort.classList.add("max-h-[150px]");
      aboutShort.classList.remove("max-h-none");
      aboutShort.innerHTML = shortText;
      readMoreBtn.textContent = "More";
    }
  });

  // Initialize with short content
  aboutShort.innerHTML = shortText;
});
