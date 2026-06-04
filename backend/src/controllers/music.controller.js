const yts = require("yt-search");

const moodMap = {
  happy: [
    "bollywood dance songs",
    "happy hindi songs",
    "party songs hindi"
  ],

  sad: [
    "arijit singh sad songs",
    "bollywood breakup songs",
    "emotional hindi songs"
  ],

  neutral: [
    "hindi lofi",
    "calm bollywood songs",
    "chill hindi songs"
  ],

  excited: [
    "party songs hindi",
    "bollywood edm",
    "dance hits hindi"
  ],

  angry: [
    "motivational hindi songs",
    "divine songs",
    "hindi rap"
  ]
};

const getMusic = async (req, res) => {
  try {
    const emotion = req.params.emotion;

    const queries =
      moodMap[emotion] || moodMap.neutral;

    const randomQuery =
      queries[
        Math.floor(
          Math.random() * queries.length
        )
      ];

    const result = await yts(randomQuery);

    const songs = result.videos
      .slice(0, 20)
      .map((video) => ({
        title: video.title,

        channel: video.author.name,

        duration: video.timestamp,

        thumbnail: video.thumbnail,

        videoId: video.videoId,

        url: video.url,

        videoId: video.videoId,

        views: video.views
      }));

    res.status(200).json({
      success: true,
      emotion,
      count: songs.length,
      songs
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

module.exports = {
  getMusic
};