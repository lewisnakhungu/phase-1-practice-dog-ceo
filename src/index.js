console.log('%c HI', 'color: firebrick')
document.addEventListener("DOMContentLoaded", () => {
    fetchDogImages();
    fetchDogBreeds();
    setupBreedFilter();
  });
  function fetchDogImages() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
  
    fetch(imgUrl)
      .then(response => response.json())
      .then(data => {
        const imageContainer = document.getElementById("dog-image-container");
        data.message.forEach(imgUrl => {
          const img = document.createElement("img");
          img.src = imgUrl;
          img.alt = "Random Dog";
          img.style.width = "200px";
          img.style.margin = "10px";
          imageContainer.appendChild(img);
        });
      })
      .catch(error => console.error("Error fetching images:", error));
  }
  function fetchDogBreeds() {
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
  
    fetch(breedUrl)
      .then(response => response.json())
      .then(data => {
        const breedList = document.getElementById("dog-breeds");
        Object.keys(data.message).forEach(breed => {
          const li = document.createElement("li");
          li.textContent = breed;
          li.style.cursor = "pointer";
          li.addEventListener("click", () => li.style.color = "red"); // Change text color on click
          breedList.appendChild(li);
        });
      })
      .catch(error => console.error("Error fetching breeds:", error));
  }
  function setupBreedFilter() {
    const dropdown = document.getElementById("breed-dropdown");
    dropdown.addEventListener("change", event => {
      const selectedLetter = event.target.value;
      filterBreeds(selectedLetter);
    });
  }
  
  function filterBreeds(letter) {
    const breedList = document.getElementById("dog-breeds");
    const breeds = breedList.getElementsByTagName("li");
  
    for (let li of breeds) {
      li.style.display = li.textContent.startsWith(letter) ? "list-item" : "none";
    }
  }
       