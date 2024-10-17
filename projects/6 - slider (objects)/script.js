const slider = {
    images: [
        "images/cactus-6679665_640.jpg", 
        "images/cactus-9085905_640.jpg", 
        "images/japan-9074037_640.jpg", 
        "images/sunset-8064078_640.jpg"
    ],

    currentIndex: 0,
    imageElements: [],  // Store the created image elements here

    init: function() {
        const sliderDiv = document.querySelector(".slider");
        
        // Create image elements and store them
        this.images.forEach((imgSrc, index) => {
            const img = document.createElement("img");
            img.setAttribute("src", imgSrc);

            // Set the first image as active
            if (index === 0) {
                img.classList.add("active");
            }

            sliderDiv.appendChild(img);
            this.imageElements.push(img);  // Store the image element
        });

        // Fix event listeners by passing function references
        document.getElementById("prev-btn").addEventListener("click", ()=>this.prevSlide());
        document.getElementById("next-btn").addEventListener("click", ()=>this.nextSlide());
    },

    updateSlide: function() {
        // Remove 'active' class from all images
        this.imageElements.forEach(img => {
            img.classList.remove("active");
        });

        // Add 'active' class to the current image
        this.imageElements[this.currentIndex].classList.add("active");
    },

    nextSlide: function() {
        // Increment the index and reset to 0 if at the end
        this.currentIndex++;

        if (this.currentIndex === this.images.length) {
            this.currentIndex = 0;
        }

        // Update the displayed image
        this.updateSlide();
    },

    prevSlide: function() {
        // Decrement the index and reset to the last image if below 0
        this.currentIndex--;

        if (this.currentIndex < 0) {
            this.currentIndex = this.images.length - 1;
        }

        // Update the displayed image
        this.updateSlide();
    }
};

slider.init();
