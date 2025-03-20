document.addEventListener("DOMContentLoaded", function () {
    const achievementForm = document.getElementById("achievementForm");

    if (achievementForm) {
        achievementForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const achievement = document.getElementById("achievement").value;
            alert("Achievement submitted: " + achievement);
            document.getElementById("achievement").value = ""; // Clear input
        });
    }

    // Simulating fetching politicians (replace with backend API call)
    const politicianList = document.getElementById("politicianList");
    if (politicianList) {
        const politicians = [
            { name: "Politician A", id: 1 },
            { name: "Politician B", id: 2 }
        ];

        politicians.forEach(politician => {
            const li = document.createElement("li");
            li.innerHTML = ⁠ ${politician.name} - <button class="btn">View Profile</button> ⁠;
            politicianList.appendChild(li);
        });
    }
});