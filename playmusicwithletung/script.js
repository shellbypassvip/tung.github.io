
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const PlAYER_STORAGE_KEY = "F8_PLAYER";

const player = $(".player");
const cd = $(".cd");
const heading = $("header h2");
const cdThumb = $(".cd-thumb");
const audio = $("#audio");
const playBtn = $(".btn-toggle-play");
const progress = $("#progress");
const prevBtn = $(".btn-prev");
const nextBtn = $(".btn-next");
const randomBtn = $(".btn-random");
const repeatBtn = $(".btn-repeat");
const playlist = $(".playlist");

const app = {
  currentIndex: 0,
  isPlaying: false,
  isRandom: false,
  isRepeat: false,
  config: {},
  // (1/2) Uncomment the line below to use localStorage
  // config: JSON.parse(localStorage.getItem(PlAYER_STORAGE_KEY)) || {},
  songs: [
    {
      name: "Anh Sẽ Đợi",
      singer: "Lê Hồng Anh Tùng",
      path: "./y2mate.com - Anh Sẽ Đợi  Remix Violon chuẩn TikTok   AiR REMIX  Điềm Lê.mp3",
      image: "https://tse1.mm.bing.net/th?id=OIP.B23-1HSczZP1Uuc41GOP4gHaEK&pid=Api&P=0&w=711&h=400&fbclid=IwAR1SKOnTRINHAHZSEk-dgrKvJ-ZBzIf_-cqhN-V12tEAIRt42g-Z6eroBQY"
    },
    {
      name: "Love Story",
      singer: "Lê Hồng Anh Tùng",
      path: "./y2mate.com - Love Story Remix FkHs Remix  Nhạc HOT TikTok Gây Nghiện 2022.mp3 ",
      image:
        "https://tse1.mm.bing.net/th?id=OIP.B23-1HSczZP1Uuc41GOP4gHaEK&pid=Api&P=0&w=711&h=400&fbclid=IwAR1SKOnTRINHAHZSEk-dgrKvJ-ZBzIf_-cqhN-V12tEAIRt42g-Z6eroBQY"
    },
    {
      name: "Lời Yêu Ngây Dại",
      singer: "Lê Hồng Anh Tùng",
      path: "./y2mate.com - Nightcore  Lời Yêu Ngây Dại Remix.mp3 ",
      image:
        "https://tse1.mm.bing.net/th?id=OIP.B23-1HSczZP1Uuc41GOP4gHaEK&pid=Api&P=0&w=711&h=400&fbclid=IwAR1SKOnTRINHAHZSEk-dgrKvJ-ZBzIf_-cqhN-V12tEAIRt42g-Z6eroBQY"
    },
    {
      name: "Nightcore Ngày Dài Mệt Mỏi.",
      singer: "Lê Hồng Anh Tùng",
      path: "./y2mate.com - Nightcore Cho Ngày Dài Mỏi Mệt  Bản Nhạc Nightcore Thư Giãn   Pé Con  Music .mp3 ",
      image:
        "https://tse1.mm.bing.net/th?id=OIP.B23-1HSczZP1Uuc41GOP4gHaEK&pid=Api&P=0&w=711&h=400&fbclid=IwAR1SKOnTRINHAHZSEk-dgrKvJ-ZBzIf_-cqhN-V12tEAIRt42g-Z6eroBQY"
    },
    {
      name: "Hey Hey Hey ",
      singer: "Lê Hồng Anh Tùng",
      path: "./y2mate.com - Hey Hey Hey X Mood  TVT Remix  Nhạc Nền Hot TikTok 2022.mp3 ",
      image:
        "https://tse1.mm.bing.net/th?id=OIP.B23-1HSczZP1Uuc41GOP4gHaEK&pid=Api&P=0&w=711&h=400&fbclid=IwAR1SKOnTRINHAHZSEk-dgrKvJ-ZBzIf_-cqhN-V12tEAIRt42g-Z6eroBQY"
    },
    {
      name: "2AM ",
      singer: "Lê Hồng Anh Tùng",
      path: "./y2mate.com - 2AM  Justatee x BigDaddy sped up 7.mp3 ",
      image:
        "https://tse1.mm.bing.net/th?id=OIP.B23-1HSczZP1Uuc41GOP4gHaEK&pid=Api&P=0&w=711&h=400&fbclid=IwAR1SKOnTRINHAHZSEk-dgrKvJ-ZBzIf_-cqhN-V12tEAIRt42g-Z6eroBQY"
    },
    {
name: "Kẻ Theo Đuổi Ánh Sáng ",
      singer: "Lê Hồng Anh Tùng",
      path: "./y2mate.com - Kẻ Theo Đuổi Ánh Sáng  Huy Vạc ft Tiến NguyễnCukak Remix Audio Lyrics Video.mp3",
      image:
        "https://tse1.mm.bing.net/th?id=OIP.B23-1HSczZP1Uuc41GOP4gHaEK&pid=Api&P=0&w=711&h=400&fbclid=IwAR1SKOnTRINHAHZSEk-dgrKvJ-ZBzIf_-cqhN-V12tEAIRt42g-Z6eroBQY"
    },
    {
name: "Way Back Home (Live)",
      singer: "Lê Hồng Anh Tùng",
      path: "./FDownloader.net-2035105680169744-(320kbps).mp3",
      image:
        "https://tse1.mm.bing.net/th?id=OIP.B23-1HSczZP1Uuc41GOP4gHaEK&pid=Api&P=0&w=711&h=400&fbclid=IwAR1SKOnTRINHAHZSEk-dgrKvJ-ZBzIf_-cqhN-V12tEAIRt42g-Z6eroBQY"
    },
    {
name: "Death Bed ( Live )",
      singer: "Lê Hồng Anh Tùng",
      path: "./FDownloader.net-1101612693794854-(320kbps).mp3",
      image:
        "https://tse1.mm.bing.net/th?id=OIP.B23-1HSczZP1Uuc41GOP4gHaEK&pid=Api&P=0&w=711&h=400&fbclid=IwAR1SKOnTRINHAHZSEk-dgrKvJ-ZBzIf_-cqhN-V12tEAIRt42g-Z6eroBQY"
    },
    {
      name: "EDM Nightcore",
      singer: "Lê Hồng Anh Tùng",
      path: "./y2mate.com - Top 20 Bản Nhạc EDM Nightcore Hay Hơn Cả Bản Gốc  Nhạc Điện Tử Gây Nghiện Hay Nhất 2022.mp3",
      image:
        "https://tse1.mm.bing.net/th?id=OIP.B23-1HSczZP1Uuc41GOP4gHaEK&pid=Api&P=0&w=711&h=400&fbclid=IwAR1SKOnTRINHAHZSEk-dgrKvJ-ZBzIf_-cqhN-V12tEAIRt42g-Z6eroBQY"
    },
    {
      name: "Fly Away ",
      singer: "Lê Hồng Anh Tùng",
      path: "./y2mate.com - TheFatRat  Fly Away Lyrics feat Anjulie (1).mp3",
      image:
        "https://tse1.mm.bing.net/th?id=OIP.B23-1HSczZP1Uuc41GOP4gHaEK&pid=Api&P=0&w=711&h=400&fbclid=IwAR1SKOnTRINHAHZSEk-dgrKvJ-ZBzIf_-cqhN-V12tEAIRt42g-Z6eroBQY"
    }, 
    {
      name: "Chạy Khỏi Thế Giới Này",
      singer: "Lê Hồng Anh Tùng",
      path: "./y2mate.com - Chạy Khỏi Thế Giới Này  Da LAB ft Phương LyCukak Remix Audio Lyric Video.mp3",
      image:
        "https://tse1.mm.bing.net/th?id=OIP.B23-1HSczZP1Uuc41GOP4gHaEK&pid=Api&P=0&w=711&h=400&fbclid=IwAR1SKOnTRINHAHZSEk-dgrKvJ-ZBzIf_-cqhN-V12tEAIRt42g-Z6eroBQY"
    },
    {
      name: "Cứ Nói Yêu Lần Này",
      singer: "Lê Hồng Anh Tùng",
      path:
        "./y2mate.com - Cứ Nói Yêu Lần Này  Lil ZpoetCukak Remix Audio Lyrics Video.mp3",
      image: "https://tse1.mm.bing.net/th?id=OIP.B23-1HSczZP1Uuc41GOP4gHaEK&pid=Api&P=0&w=711&h=400&fbclid=IwAR1SKOnTRINHAHZSEk-dgrKvJ-ZBzIf_-cqhN-V12tEAIRt42g-Z6eroBQY"
    },
    {
      name: "Let Her Go",
      singer: "Lê Hồng Anh Tùng",
      path: "./y2mate.com - Let Her Go SAD  Sad songs for lonely people  Depressing songs playlist for crying at 3 am_64kbps.mp3",
      image:
        "https://tse1.mm.bing.net/th?id=OIP.B23-1HSczZP1Uuc41GOP4gHaEK&pid=Api&P=0&w=711&h=400&fbclid=IwAR1SKOnTRINHAHZSEk-dgrKvJ-ZBzIf_-cqhN-V12tEAIRt42g-Z6eroBQY"
    },
    {
      name: "Lời Anh Chưa Thể Nói",
      singer: "Lê Hồng Anh Tùng",
      path: "./y2mate.com - New Version Lời Anh Chưa Thể Nói ST Nguyên Jenda  ChubbyOrinn x Jena Remix Remix Hot TikTok.mp3",
      image:
        "https://tse1.mm.bing.net/th?id=OIP.B23-1HSczZP1Uuc41GOP4gHaEK&pid=Api&P=0&w=711&h=400&fbclid=IwAR1SKOnTRINHAHZSEk-dgrKvJ-ZBzIf_-cqhN-V12tEAIRt42g-Z6eroBQY"
    },
    {
      name: "Yêu Sắc Yếu",
      singer: "Lê Hồng Anh Tùng",
      path:
        "./y2mate.com - Yêu Sắc Yếu  OsadJena Remix Audio Lyrics  Remix Hot TikTok 2022.mp3",
      image:
      "https://tse1.mm.bing.net/th?id=OIP.B23-1HSczZP1Uuc41GOP4gHaEK&pid=Api&P=0&w=711&h=400&fbclid=IwAR1SKOnTRINHAHZSEk-dgrKvJ-ZBzIf_-cqhN-V12tEAIRt42g-Z6eroBQY"
    },
    {
      name: "Never Be Alone",
      singer: "Lê Hồng Anh Tùng",
      path: "./y2mate.com - TheFatRat   Never Be Alone  Lyrics  Vietsub .mp3",
      image:
        "https://tse1.mm.bing.net/th?id=OIP.B23-1HSczZP1Uuc41GOP4gHaEK&pid=Api&P=0&w=711&h=400&fbclid=IwAR1SKOnTRINHAHZSEk-dgrKvJ-ZBzIf_-cqhN-V12tEAIRt42g-Z6eroBQY"
    },
    {
      name: "Baka",
      singer: "Lê Hồng Anh Tùng",
      path: "./y2mate.com - あれくん Alekun  Baka ばーか  Lyrics.mp3",
      image:
        "https://tse1.mm.bing.net/th?id=OIP.B23-1HSczZP1Uuc41GOP4gHaEK&pid=Api&P=0&w=711&h=400&fbclid=IwAR1SKOnTRINHAHZSEk-dgrKvJ-ZBzIf_-cqhN-V12tEAIRt42g-Z6eroBQY"
    },
    {
      name: "Alone LoFi",
      singer: "Lê Hồng Anh Tùng",
      path: "./y2mate.com - Alan Walker  Alone Lofi Hiphop.mp3",
      image:
        "https://tse1.mm.bing.net/th?id=OIP.B23-1HSczZP1Uuc41GOP4gHaEK&pid=Api&P=0&w=711&h=400&fbclid=IwAR1SKOnTRINHAHZSEk-dgrKvJ-ZBzIf_-cqhN-V12tEAIRt42g-Z6eroBQY"
    }, 
    {
      name: "Lemon",
      singer: "Lê Hồng Anh Tùng",
      path: "./y2mate.com - MADAMVヴァイオレットエヴァーガーデンLemon.mp3",
      image:
        "https://tse1.mm.bing.net/th?id=OIP.B23-1HSczZP1Uuc41GOP4gHaEK&pid=Api&P=0&w=711&h=400&fbclid=IwAR1SKOnTRINHAHZSEk-dgrKvJ-ZBzIf_-cqhN-V12tEAIRt42g-Z6eroBQY"
    },
    {
      name: "Cute LoFi",
      singer: "Lê Hồng Anh Tùng",
      path: "./y2mate.com - cute lofi mix  songs to help you be happy  寛げる  J A P A N E S E   L O F I   F U T U R E   B A S S.mp3",
      image:
        "https://tse1.mm.bing.net/th?id=OIP.B23-1HSczZP1Uuc41GOP4gHaEK&pid=Api&P=0&w=711&h=400&fbclid=IwAR1SKOnTRINHAHZSEk-dgrKvJ-ZBzIf_-cqhN-V12tEAIRt42g-Z6eroBQY"
    },
    {
      name: "Sparkle",
      singer: "Lê Hồng Anh Tùng",
      path: "./y2mate.com - Sparkle  Your Name Kimi no Na wa AMV.mp3",
      image:
        "https://tse1.mm.bing.net/th?id=OIP.B23-1HSczZP1Uuc41GOP4gHaEK&pid=Api&P=0&w=711&h=400&fbclid=IwAR1SKOnTRINHAHZSEk-dgrKvJ-ZBzIf_-cqhN-V12tEAIRt42g-Z6eroBQY"
    },
    {
      name: "Violin Lindsey",
      singer: "Lê Hồng Anh Tùng",
      path: "./y2mate.com - Senbonzakura Violin  Lindsey Stirling  TikTok 001  Nhạc Nền Violin Cực Hay  Hot TikTok 2022.mp3 ",
      image:
        "https://tse1.mm.bing.net/th?id=OIP.B23-1HSczZP1Uuc41GOP4gHaEK&pid=Api&P=0&w=711&h=400&fbclid=IwAR1SKOnTRINHAHZSEk-dgrKvJ-ZBzIf_-cqhN-V12tEAIRt42g-Z6eroBQY"
    },
    {
      name: "Renai Circulation",
      singer: "Lê Hồng Anh Tùng",
      path: "./y2mate.com - Renai Circulation恋愛サーキュレーション歌ってみたなみりん.mp3",
      image:
        "https://tse1.mm.bing.net/th?id=OIP.B23-1HSczZP1Uuc41GOP4gHaEK&pid=Api&P=0&w=711&h=400&fbclid=IwAR1SKOnTRINHAHZSEk-dgrKvJ-ZBzIf_-cqhN-V12tEAIRt42g-Z6eroBQY"
    },
    {
      name: "Save Me",
      singer: "Lê Hồng Anh Tùng",
      path: "./y2mate.com - DEAMN  Save Me Audio.mp3 ",
      image:
        "https://tse1.mm.bing.net/th?id=OIP.B23-1HSczZP1Uuc41GOP4gHaEK&pid=Api&P=0&w=711&h=400&fbclid=IwAR1SKOnTRINHAHZSEk-dgrKvJ-ZBzIf_-cqhN-V12tEAIRt42g-Z6eroBQY"
    },
    {
      name: "Lemon",
      singer: "Lê Hồng Anh Tùng",
      path: "./y2mate.com - Rival x Cadmium  Seasons feat Harley Bird Futuristik  Whogaux Remix NCS Release.mp3",
      image:
        "https://tse1.mm.bing.net/th?id=OIP.B23-1HSczZP1Uuc41GOP4gHaEK&pid=Api&P=0&w=711&h=400&fbclid=IwAR1SKOnTRINHAHZSEk-dgrKvJ-ZBzIf_-cqhN-V12tEAIRt42g-Z6eroBQY"
    },
    {
      name: "Where We Started",
      singer: "Lê Hồng Anh Tùng",
      path: "./y2mate.com - Nightcore  Where We Started Lost Sky ft Jex  Lyrics.mp3 ",
      image:
        "https://tse1.mm.bing.net/th?id=OIP.B23-1HSczZP1Uuc41GOP4gHaEK&pid=Api&P=0&w=711&h=400&fbclid=IwAR1SKOnTRINHAHZSEk-dgrKvJ-ZBzIf_-cqhN-V12tEAIRt42g-Z6eroBQY"
    },
    {
      name: "Close To The Sun",
      singer: "Lê Hồng Anh Tùng",
      path: "./y2mate.com - TheFatRat  Anjulie  Close To The Sun.mp3 ",
      image:
        "https://tse1.mm.bing.net/th?id=OIP.B23-1HSczZP1Uuc41GOP4gHaEK&pid=Api&P=0&w=711&h=400&fbclid=IwAR1SKOnTRINHAHZSEk-dgrKvJ-ZBzIf_-cqhN-V12tEAIRt42g-Z6eroBQY"
    },
    {
      name: "Savannah",
      singer: "Lê Hồng Anh Tùng",
      path: "./y2mate.com - Diviners  Savannah feat Philly K NCS Release.mp3 ",
      image:
        "https://tse1.mm.bing.net/th?id=OIP.B23-1HSczZP1Uuc41GOP4gHaEK&pid=Api&P=0&w=711&h=400&fbclid=IwAR1SKOnTRINHAHZSEk-dgrKvJ-ZBzIf_-cqhN-V12tEAIRt42g-Z6eroBQY"
    },
    {
  name: "GU",
      singer: "Lê Hồng Anh Tùng",
      path: "./y2mate.com - gu  freaky x seachains x 1 9 6 7 speed up.mp3",
      image:
        "https://tse1.mm.bing.net/th?id=OIP.B23-1HSczZP1Uuc41GOP4gHaEK&pid=Api&P=0&w=711&h=400&fbclid=IwAR1SKOnTRINHAHZSEk-dgrKvJ-ZBzIf_-cqhN-V12tEAIRt42g-Z6eroBQY"
    } 
  ],
  setConfig: function (key, value) {
    this.config[key] = value;
    // (2/2) Uncomment the line below to use localStorage
    // localStorage.setItem(PlAYER_STORAGE_KEY, JSON.stringify(this.config));
  },
  render: function () {
    const htmls = this.songs.map((song, index) => {
      return `
                        <div class="song ${
                          index === this.currentIndex ? "active" : ""
                        }" data-index="${index}">
                            <div class="thumb"
                                style="background-image: url('${song.image}')">
                            </div>
                            <div class="body">
                                <h3 class="title">${song.name}</h3>
                                <p class="author">${song.singer}</p>
                            </div>
                            <div class="option">
                                <i class="fas fa-ellipsis-h"></i>
                            </div>
                        </div>
                    `;
    });
    playlist.innerHTML = htmls.join("");
  },
  defineProperties: function () {
    Object.defineProperty(this, "currentSong", {
      get: function () {
        return this.songs[this.currentIndex];
      }
    });
  },
  handleEvents: function () {
    const _this = this;
    const cdWidth = cd.offsetWidth;

    // Xử lý CD quay / dừng
    // Handle CD spins / stops
    const cdThumbAnimate = cdThumb.animate([{ transform: "rotate(360deg)" }], {
      duration: 10000, // 10 seconds
      iterations: Infinity
    });
    cdThumbAnimate.pause();

    // Xử lý phóng to / thu nhỏ CD
    // Handles CD enlargement / reduction
    document.onscroll = function () {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const newCdWidth = cdWidth - scrollTop;

      cd.style.width = newCdWidth > 0 ? newCdWidth + "px" : 0;
      cd.style.opacity = newCdWidth / cdWidth;
    };

    // Xử lý khi click play
    // Handle when click play
    playBtn.onclick = function () {
      if (_this.isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
    };

    // Khi song được play
    // When the song is played
    audio.onplay = function () {
      _this.isPlaying = true;
      player.classList.add("playing");
      cdThumbAnimate.play();
    };

    // Khi song bị pause
    // When the song is pause
    audio.onpause = function () {
      _this.isPlaying = false;
      player.classList.remove("playing");
      cdThumbAnimate.pause();
    };

    // Khi tiến độ bài hát thay đổi
    // When the song progress changes
    audio.ontimeupdate = function () {
      if (audio.duration) {
        const progressPercent = Math.floor(
          (audio.currentTime / audio.duration) * 100
        );
        progress.value = progressPercent;
      }
    };

    // Xử lý khi tua song
    // Handling when seek
    progress.onchange = function (e) {
      const seekTime = (audio.duration / 100) * e.target.value;
      audio.currentTime = seekTime;
    };

    // Khi next song
    // When next song
    nextBtn.onclick = function () {
      if (_this.isRandom) {
        _this.playRandomSong();
      } else {
        _this.nextSong();
      }
      audio.play();
      _this.render();
      _this.scrollToActiveSong();
    };

    // Khi prev song
    // When prev song
    prevBtn.onclick = function () {
      if (_this.isRandom) {
        _this.playRandomSong();
      } else {
        _this.prevSong();
      }
      audio.play();
      _this.render();
      _this.scrollToActiveSong();
    };

    // Xử lý bật / tắt random song
    // Handling on / off random song
    randomBtn.onclick = function (e) {
      _this.isRandom = !_this.isRandom;
      _this.setConfig("isRandom", _this.isRandom);
      randomBtn.classList.toggle("active", _this.isRandom);
    };

    // Xử lý lặp lại một song
    // Single-parallel repeat processing
    repeatBtn.onclick = function (e) {
      _this.isRepeat = !_this.isRepeat;
      _this.setConfig("isRepeat", _this.isRepeat);
      repeatBtn.classList.toggle("active", _this.isRepeat);
    };

    // Xử lý next song khi audio ended
    // Handle next song when audio ended
    audio.onended = function () {
      if (_this.isRepeat) {
        audio.play();
      } else {
        nextBtn.click();
      }
    };

    // Lắng nghe hành vi click vào playlist
    // Listen to playlist clicks
    playlist.onclick = function (e) {
      const songNode = e.target.closest(".song:not(.active)");

      if (songNode || e.target.closest(".option")) {
        // Xử lý khi click vào song
        // Handle when clicking on the song
        if (songNode) {
          _this.currentIndex = Number(songNode.dataset.index);
          _this.loadCurrentSong();
          _this.render();
          audio.play();
        }

        // Xử lý khi click vào song option
        // Handle when clicking on the song option
        if (e.target.closest(".option")) {
        }
      }
    };
  },
  scrollToActiveSong: function () {
    setTimeout(() => {
      $(".song.active").scrollIntoView({
        behavior: "smooth",
        block: "nearest"
      });
    }, 300);
  },
  loadCurrentSong: function () {
    heading.textContent = this.currentSong.name;
    cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`;
    audio.src = this.currentSong.path;
  },
  loadConfig: function () {
    this.isRandom = this.config.isRandom;
    this.isRepeat = this.config.isRepeat;
  },
  nextSong: function () {
    this.currentIndex++;
    if (this.currentIndex >= this.songs.length) {
      this.currentIndex = 0;
    }
    this.loadCurrentSong();
  },
  prevSong: function () {
    this.currentIndex--;
    if (this.currentIndex < 0) {
      this.currentIndex = this.songs.length - 1;
    }
    this.loadCurrentSong();
  },
  playRandomSong: function () {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * this.songs.length);
    } while (newIndex === this.currentIndex);

    this.currentIndex = newIndex;
    this.loadCurrentSong();
  },
  start: function () {
    // Gán cấu hình từ config vào ứng dụng
    // Assign configuration from config to application
    this.loadConfig();

    // Định nghĩa các thuộc tính cho object
    // Defines properties for the object
    this.defineProperties();

    // Lắng nghe / xử lý các sự kiện (DOM events)
    // Listening / handling events (DOM events)
    this.handleEvents();

    // Tải thông tin bài hát đầu tiên vào UI khi chạy ứng dụng
    // Load the first song information into the UI when running the app
    this.loadCurrentSong();

    // Render playlist
    this.render();

    // Hiển thị trạng thái ban đầu của button repeat & random
    // Display the initial state of the repeat & random button
    randomBtn.classList.toggle("active", this.isRandom);
    repeatBtn.classList.toggle("active", this.isRepeat);
  }
};

app.start();