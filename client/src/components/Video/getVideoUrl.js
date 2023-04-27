export default function getVideoUrl(videoLink) {
    const link = videoLink.replace(".", "");
    let videoId;
    if (link.includes("youtube")) {
      videoId = videoLink.split("/").pop().replace("watch?v=", "");
      return `https://www.youtube.com/embed/${videoId}`;
    }
    if (link.includes("vimeo")) {
      videoId = videoLink.split("/").pop();
      return `https://vimeo.com/${videoId}`;
    }
    if (link.includes("odysee")) {
      videoId = videoLink.split("@").pop();
      return `https://odysee.com/$/embed/@${videoId}`;
    }
  }