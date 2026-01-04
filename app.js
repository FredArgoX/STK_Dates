// Define future dates with labels
const futureDates = [
    /*
    {
        date: new Date("March 24, 2025"),
        label: "March 24, 2025",
        assets: "pHEX-L1 <span class='separator'>/</span> pXEN-L2 <span class='separator'>/</span> eHEX-MK" 
    },
    */
   /*
    {
        date: new Date("April 1, 2025"),
        label: "April 1, 2025",
        assets: "pXEN-L1"
    },
    {
        date: new Date("May 1, 2025"),
        label: "May 1, 2025",
        assets: "pHEX-L2"
    },
    */
    /*
    {
        date: new Date("August 1, 2025"),
        label: "August 1, 2025",
        assets: "pHEX-L2"
    },
    */
    /*
    {
        date: new Date("August 30, 2025"),
        label: "August 30, 2025",
        assets: "pHEX-L2"
    },
    */
    /*   
    {
        date: new Date("December 31, 2025"),
        label: "December 31, 2025",
        assets: "pHEX-L1 <span class='separator'>/</span> eHEX-L1 <span class='separator'>/</span> pHEX-L2"
    },
    */
    {
        date: new Date("March 31, 2026"),
        label: "March 31, 2026",
        assets: "pHEX-L2"
    },
    {
        date: new Date("April 01, 2026"),
        label: "April 01, 2026",
        assets: "pHEX-L2"
    }, 
    {
        date: new Date("June 20, 2026"),
        label: "June 20, 2026",
        assets: "eHEX-L2 <span class='separator'>/</span> eXEN-L2"
    },
    {
        date: new Date("July 05, 2026"),
        label: "July 05, 2026",
        assets: "pHEX-L2"
    },
    {
        date: new Date("July 31, 2026"),
        label: "July 31, 2026",
        assets: "pHEX-L2"
    },
    {
        date: new Date("August 01, 2026"),
        label: "August 01, 2026",
        assets: "pHEX-L2"
    },
    {
        date: new Date("September 01, 2026"),
        label: "September 01, 2026",
        assets: "pHEX-L2"
    },
    {
        date: new Date("December 31, 2026"),
        label: "December 31, 2026",
        assets: "pHEX-L2 <span class='separator'>/</span> eHEX-L2"
    },
    {
        date: new Date("April 16, 2032"),
        label: "April 16, 2032",
        assets: "pHEX-M4 <span class='separator'>/</span> eHEX-M4"
     }
];

// Function to calculate progress percentage
function calculateProgress(futureDate) {
    const now = new Date(); // Current real-time date
    const start = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime(); // Today's start date
    const end = futureDate.getTime(); // Future date
    const totalDuration = end - start; // Total time span
    const elapsed = now.getTime() - start; // Elapsed time
    return Math.max(0, Math.min(100, (elapsed / totalDuration) * 100)); // Ensuring the percentage is between 0 and 100
}

// Function to create and update progress bars
function createOrUpdateProgressBars() {
    const container = document.getElementById("progress-container");
    container.innerHTML = ""; // Clear previous content to avoid duplication
    
    futureDates.forEach(future => {
        const progressWrapper = document.createElement("div");
        progressWrapper.innerHTML = `<h1 class="titlex">${future.label}</h1>`;
        //progressWrapper.classList.add("titlex");
        
        const progressBar = document.createElement("div");
        progressBar.classList.add("progress-bar");
        
        const progress = document.createElement("div");
        progress.classList.add("progress");
        progress.style.width = calculateProgress(future.date) + "%";

        const assetList = document.createElement("div");
        assetList.innerHTML = `<h1 class="assets">${future.assets}</h1>`;
        //assetList.classList.add("assets");
        
        progressBar.appendChild(progress);
        progressWrapper.appendChild(progressBar);
        container.appendChild(progressWrapper);
        progressWrapper.appendChild(assetList);

    });
}

// Initial rendering of progress bars
createOrUpdateProgressBars();

// Set interval to update progress bars every 10 seconds (10,000 milliseconds)
setInterval(createOrUpdateProgressBars, 10000);

