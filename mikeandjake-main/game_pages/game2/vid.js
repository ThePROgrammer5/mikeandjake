function start() {
    const thumb = document.getElementById("thumb");
    const thumb_btn = document.getElementById("thumb_btn");
    const vid = document.getElementById("video");
  
    thumb.style.display = "none";
    thumb_btn.style.display = "none";
    vid.style.display = "initial";
    vid.play();
  }

    const myImage = document.getElementById("thumb");

    myImage.addEventListener("click", function() {
    // Code to execute when the image is clicked
    console.log("Image clicked!");
    });

    vid.addEventListener('loadedmetadata', () => {
        const videoWidth = video.videoWidth;
        const videoHeight = video.videoHeight;
        const aspectRatio = videoWidth / videoHeight;
      
        image.style.width = '100%';
        image.style.height = `${100 / aspectRatio}%`;
      });