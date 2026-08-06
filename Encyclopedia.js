const input = document.getElementById("city");
const button = document.querySelector(".btn-search");

const title = document.getElementById("citytitle");
const summary = document.getElementById("citysummary");
const img = document.getElementById("cityimg");
const link = document.getElementById("citylink");

button.addEventListener("click", searchCity);

input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        searchCity();
    }
});

async function searchCity() {
    const city = input.value.trim();
    if (!city) return;
    try {
        const searchResponse = await fetch(
            `https://en.wikipedia.org/w/rest.php/v1/search/title?q=${encodeURIComponent(city)} city&limit=1`
        );

        const searchData = await searchResponse.json();
        if (!searchData.pages || searchData.pages.length === 0) {
            alert("City not found.");
            return;
        }
        
        const key = searchData.pages[0].key;
        const summaryResponse = await fetch(
            `https://en.wikipedia.org/api/rest_v1/page/summary/${key}`
        );

        const article = await summaryResponse.json();
        title.textContent = article.title || "";
        summary.textContent = article.extract || "No summary available.";

        if (article.originalimage) {
            img.src = article.originalimage.source;
            img.hidden = false;
        }else if (article.thumbnail) {
            img.src = article.thumbnail.source;
            img.hidden = false;
        }else {
            img.hidden = true;
        }

        if (article.content_urls) {
            link.href = article.content_urls.desktop.page;
            link.textContent = "Read more on Wikipedia";
        } else {
            link.href = "";
            link.textContent = "";
        }

    } catch (error) {
        console.error(error);
        alert("Something went wrong.");
    }
}