document.getElementById('recommendation-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const userId = document.getElementById('user-id').value;
    fetch(`/recommendations?user_id=${userId}`)
        .then(response => response.json())
        .then(data => {
            const recommendationsDiv = document.getElementById('recommendations');
            recommendationsDiv.innerHTML = '<h2>Recommended Movies:</h2>';
            const ul = document.createElement('ul');
            data.recommendations.forEach(movie => {
                const li = document.createElement('li');
                li.textContent = movie;
                ul.appendChild(li);
            });
            recommendationsDiv.appendChild(ul);
        });
});