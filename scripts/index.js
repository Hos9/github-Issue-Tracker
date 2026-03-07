// console.log("This is Index JS");

// 1.0 Load All Issues
const loadAllIssues = () => {
  const url = "https://phi-lab-server.vercel.app/api/v1/lab/issues";
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayAllIssues(data.data));
};

// 1.1 Display All Issues
const displayAllIssues = (issues) => {
  // console.log(issues);

  // 1. Get Container
  const issueContainer = document.getElementById("issue-container");
  // console.log(issueContainer);

  issueContainer.innerHTML = "";

  // 2. get each data
  const issue = issues.forEach((issue) => {
    // console.log(issue);
    // 3. create element
    const card = document.createElement("div");
    card.innerHTML = `
      <div
        id=""
        class="issue-card p-4 shadow-lg rounded-lg border border-gray-200"
      >
        <div id="" class="flex justify-between items-center mb-3">
          <div id="status"><img src="${issue.status === "open" ? "./assets/Open-Status.png" : "./assets/Closed-Status.png"}" alt="" /></div>
          <div id="priority" class="btn ${issue.priority === "high" ? "btn-error" : issue.priority === "medium" ? "btn-warning" : ""} btn-soft rounded-full">
            <button class="text-xs">${issue.priority.charAt(0).toUpperCase() + issue.priority.slice(1).toLowerCase()}</button>
          </div>
        </div>
        <div id="" class="">
          <h2 class="text-sm font-semibold mb-2">
            Fix navigation menu on mobile devices
          </h2>
          <p id="" class="text-xs text-gray-500 mb-3">
            The navigation menu doesn't collapse properly on mobile devices...
          </p>
        </div>
        <div id="" class="">
          <button
            id="bug-btn"
            class="text-xs btn btn-error btn-soft rounded-full"
          >
            <i class="fa-solid fa-spider" style="color: rgb(239, 68, 68)"></i>
            BUG
          </button>
          <button
            id="help-btn"
            class="text-xs btn btn-warning btn-soft rounded-full"
          >
            <i
              class="fa-solid fa-life-ring"
              style="color: rgb(217, 119, 6)"
            ></i>
            HELP WANTED
          </button>
        </div>
        <div class="border-t-1 my-4 border-gray-200"></div>
        <div id="" class="mb-2 text-gray-400">
          <p class="text-xs">#1 by john_doe</p>
          <p class="text-xs">1/15/2024</p>
        </div>
      </div>
    `;

    // 4, Append Child
    issueContainer.append(card);
  });

  // 2.0 Count All Issues
  const totalCards = issueContainer.querySelectorAll(".issue-card").length;
  // console.log(totalCards);

  let issueCount = document.getElementById("counts");
  issueCount.innerText = totalCards;
};

loadAllIssues();
