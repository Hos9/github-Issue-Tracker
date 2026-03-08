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
      <div onclick="my_modal_5.showModal()"
        id=""
        class="issue-card p-4 shadow-lg rounded-lg border border-gray-200 h-full ${issue.status === "open" ? "border-3 border-t-green-400" : "border-3 border-t-purple-400"}""
      >
        <div id="" class="flex justify-between items-center mb-3">
          <div id="status"><img src="${issue.status === "open" ? "./assets/Open-Status.png" : "./assets/Closed-Status.png"}" alt="" /></div>
          <div id="priority" class="btn ${issue.priority === "high" ? "btn-error" : issue.priority === "medium" ? "btn-warning" : ""} btn-soft rounded-full">
            <button class="text-xs">${issue.priority.charAt(0).toUpperCase() + issue.priority.slice(1).toLowerCase()}</button>
          </div>
        </div>
        <div id="" class="">
          <h2 id="title" class="text-sm font-semibold mb-2  truncate">
            ${issue.title}
          </h2>
          <p id="" class="text-xs text-gray-500 mb-3 truncate">
            ${issue.description}
          </p>
        </div>
        <div id="" class="flex gap-2">
          <button
            id="bug-btn"
            class="text-xs ${
              issue.labels[0] === "bug"
                ? "btn btn-error"
                : issue.labels[0] === "help wanted"
                  ? "btn btn-warning"
                  : issue.labels[0] === "enhancement"
                    ? "btn btn-success"
                    : issue.labels[0] === "good first issue"
                      ? "btn btn-secondary"
                      : issue.labels[0] === "documentation"
                        ? "btn btn-info"
                        : ""
            } btn-soft rounded-full"
          >
            
            ${
              issue.labels?.[0]
                ? `<i class="fa-solid fa-spider" style="color: rgb(239, 68, 68)"></i>  ${issue.labels[0]}`
                : ""
            }
          </button>
          <button
            id="help-btn"
            class="text-xs ${
              issue.labels[1] === "bug"
                ? "btn btn-error"
                : issue.labels[1] === "help wanted"
                  ? "btn btn-warning"
                  : issue.labels[1] === "enhancement"
                    ? "btn btn-success"
                    : issue.labels[1] === "good first issue"
                      ? "btn btn-secondary"
                      : issue.labels[1] === "documentation"
                        ? "btn btn-info"
                        : ""
            } btn-soft rounded-full"
          >
            
            ${
              issue.labels?.[1]
                ? `<i
              class="fa-solid fa-life-ring"
              style="color: rgb(217, 119, 6)"
            ></i>  ${issue.labels[1]}`
                : ""
            }
          </button>
        </div>
        <div class="border-t-1 my-4 border-gray-200"></div>
        <div id="" class="mb-2 text-gray-400 flex justify-between">
          <p class="text-xs">#${issue.id} by ${issue.author}</p>
          <p class="text-xs">${new Date(issue.createdAt).toLocaleDateString("en-US")}</p>
        </div>
        <div id="" class="mb-2 text-gray-400 flex justify-between">
          <p class="text-xs">assignee: ${issue.assignee ? issue.assignee : "Unassigned"}</p>
          <p class="text-xs">Updated: ${new Date(issue.updatedAt).toLocaleDateString("en-US")}</p>
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

// Individual Card Open
const loadIssueCard = async (id) => {
  const url = `https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`;
  const res = await fetch(url);
  const details = await res.json();
  displayModal(details.data);
};

const displayModal = (popups) => {
  // 1. Get modal container
  const modalBox = document.getElementById("modal-container");
  modalBox.innerHTML = "";

  const popup = popups.forEach((popup) => {
    const modalCard = document.createElement("div");
    modalCard.innerHTML = `
          <div id="modal-card">
            <div id="modal-title" class="text-2xl font-bold mb-2">
              Fix broken image uploads
            </div>
            <div id="" class="mb-6">
              <span id="status">Opened</span> • Opened by Fahim Ahmed •
              <span>Date</span>
            </div>
            <div id="" class="my-6">
              <button class="btn btn-error btn-soft">bug</button>
              <button class="btn btn-warning btn-soft">Help Wanted</button>
            </div>
            <div id="" class="description my-6">
              The navigation menu doesn't collapse properly on mobile devices.
              Need to fix the responsive behavior.
            </div>
            <div class="grid grid-cols-2 justify-start items-center">
              <div id="" class="h-full">
                <div class="mb-1">Assignee</div>
                <div class="font-semibold">Assignee Name</div>
              </div>
              <div class="h-full">
                <div class="mb-1">Priority</div>
                <div class="btn btn-error rounded-full">High</div>
              </div>
            </div>
          </div>
    `;

    document.getElementById("my_modal_5").showModal();
    // modalContainer.append(popup);
  });
};

// loadIssueCard();
