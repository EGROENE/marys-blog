// FUNCTIONALITY FOR SEARCH FEATURE ON ALL POSTS PAGES
const searchInput = document.querySelector('.search-input');

searchInput.addEventListener("keyup", (e) => {
    // Declare & assign the event's target to a variable, which is whatever is typed into the search bar:
    let value = e.target.value.trim().toLowerCase();

    const postPreviews = document.getElementsByClassName('post-preview');

    let totalResults = 0;
    const resultsMessageLocations = document.getElementsByClassName('results-message');

    // Check if input exists & is greater than 0:
    if (value && value.trim().length > 0) {
        for (const prev of postPreviews) {
            if (prev.dataset.author.toLowerCase().trim().includes(value)
            || prev.dataset.date.toLowerCase().trim().includes(value)
            || prev.dataset.title.toLowerCase().trim().includes(value)
            || prev.dataset.topic.toLowerCase().trim().includes(value)
            || prev.dataset.text.toLowerCase().trim().includes(value)) {
                prev.style.display = 'block';
                prev.style.opacity = '1';
                totalResults += 1;
                for (let resultsMessage of resultsMessageLocations) {
                    resultsMessage.style.display = 'block';
                    resultsMessage.textContent = `Your search yielded ${totalResults} result(s).`;
                    resultsMessage.style.margin = '4% 0';
                    resultsMessage.style.textAlign = 'center';
                    resultsMessage.style.color = 'var(default-text-color)';
                }
            } else {
                totalResults += 0;
                prev.style.display = 'none';
                for (let resultsMessage of resultsMessageLocations) {
                    resultsMessage.classList.add('rm-active');
                    if (totalResults === 0) {
                        resultsMessage.textContent = `We couldn't find what you're looking for. Make sure your spelling is correct & try again.`;
                    }
                }
            }
        }
    } else {
        totalResults = 0;
        for (let resultsMessage of resultsMessageLocations) {
            resultsMessage.style.display = 'none';
        }
        for (const prev of postPreviews) {
            prev.style.display = 'block';
        }
    }
    const clearSearchIcon = document.getElementById('clear-search-icon');
    clearSearchIcon.addEventListener("click", function clearSearchBox() {
        totalResults = 0;
        for (let resultsMessage of resultsMessageLocations) {
            resultsMessage.style.display = 'none';
        }
        for (const prev of postPreviews) {
            prev.style.display = 'block';
        }
    })
})