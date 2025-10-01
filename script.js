const audio = document.getElementById('audio');
        const playPauseBtn = document.getElementById('playPauseBtn');
        const icon = playPauseBtn.querySelector('i');
        const prograssBar = document.getElementById('prograssBar');
        playPauseBtn.addEventListener('click', () => {
          if(audio.paused) {
            audio.play();
            icon.classList.remove('fa-play');
            icon.classList.add('fa-pause');
          } else {
            audio.pause();
            icon.classList.remove('fa-pause');
            icon.classList.add('fa-play');
          }
        });
        audio.addEventListener('timeupdate', () => {
          const percent = (audio.currentTime / audio.duration) * 100;
          prograssBar.style.width = percent + "%";
        });
        document.querySelector('.prograss-container').addEventListener('click', (e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const clickX = e.clientX - rect.left;
          const width = rect.width;
          const percent = clickX / width;
          audio.currentTime = percent * audio.duration;
        });









         const heart = document.getElementById("heart");

    // နာမည်စာရင်း
    const namesList = [
      "💖 You are my star Khaing Zar Kyi ✨",
      "🌙 My destiny is you",
      "⏰ Time stops with you",
      "🌟 Alice",
      "💕 Bob",
      "✨ Charlie"
    ];

    heart.addEventListener("click", () => {
      // Random နာမည်
      const randomName = namesList[Math.floor(Math.random() * namesList.length)];

      // Name box ဖန်တီး
      const nameBox = document.createElement("div");
      nameBox.classList.add("names");
      nameBox.textContent = randomName;
      
      const margin = 55; // px
      const maxX = window.innerWidth - 150 - margin;
      const maxY = window.innerHeight - 50 - margin;
      const randomX = Math.random() * (maxX - margin) + margin;
      const randomY = Math.random() * (maxY - margin) + margin;


      nameBox.style.left = `${randomX}px`;
      nameBox.style.top = `${randomY}px`;

      // Body ထဲထည့်
      document.body.appendChild(nameBox);

      // Show animation
      setTimeout(() => {
        nameBox.classList.add("show");
      }, 50);

      // 3.5s အကြာ auto remove
      setTimeout(() => {
        nameBox.remove();
      }, 3500);
    });

    // Stars Background
    for (let i = 0; i < 50; i++) {
      let star = document.createElement("div");
      star.classList.add("star");
      star.style.width = star.style.height = Math.random() * 3 + "px";
      star.style.top = Math.random() * window.innerHeight + "px";
      star.style.left = Math.random() * window.innerWidth + "px";
      star.style.animationDuration = (Math.random() * 3 + 2) + "s";
      document.body.appendChild(star);
    }