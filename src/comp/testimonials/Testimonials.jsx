import React, { useState, useRef, useEffect } from "react";
import "./Testimonials.scss";
import posterImg from "../../assets/testimoneal/img1.webp";
import videoFile from "../../assets/testimoneal/testimonial.mp4";

const sampleVideos = [
  {
    id: 1,
    title: "Patient Testimonial 1",
    poster: posterImg,
    src: videoFile,
  },
  {
    id: 2,
    title: "Patient Testimonial 2",
    poster: posterImg,
    src: videoFile,
  },
  {
    id: 3,
    title: "Patient Testimonial 3",
    poster: posterImg,
    src: videoFile,
  },
  {
    id: 4,
    title: "Patient Testimonial 4",
    poster: posterImg,
    src: videoFile,
  },
];

const Testimonials = ({ videos = sampleVideos }) => {
  const [current, setCurrent] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState(null);
  const videoRef = useRef(null);
  const listRef = useRef(null);

  useEffect(() => {
    if (!lightboxOpen || !activeVideo || !videoRef.current) return;

    const videoEl = videoRef.current;
    try {
      videoEl.setAttribute("webkit-playsinline", "true");
      videoEl.setAttribute("playsinline", "true");
    } catch (e) {}
    videoEl.muted = true;
    videoEl.currentTime = 0;
    videoEl.load();

    const playVideo = () => {
      const p = videoEl.play();
      if (p && p.then) {
        p.catch(() => {
          videoEl.muted = true;
          videoEl.play().catch(() => {});
        });
      }
    };

    const rafId = requestAnimationFrame(playVideo);
    return () => cancelAnimationFrame(rafId);
  }, [lightboxOpen, activeVideo]);

  const openLightbox = (video) => {
    setActiveVideo(video);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    if (videoRef.current) {
      try {
        videoRef.current.pause();
      } catch (e) {}
    }
    setLightboxOpen(false);
    setActiveVideo(null);
  };

 
 
 const scrollToIndex = (idx) => {
  if (!listRef.current) return;

  const container = listRef.current;
  const card = container.children[idx];

  if (!card) return;

  container.scrollTo({
    left:
      card.offsetLeft -
      (container.offsetWidth / 2 - card.offsetWidth / 2),
    behavior: "smooth",
  });

  setCurrent(idx);
};

const prev = () => {
  const newIndex = current === 0 ? 0 : current - 1;
  scrollToIndex(newIndex);
};

const next = () => {
  const newIndex =
    current === videos.length - 1
      ? videos.length - 1
      : current + 1;

  scrollToIndex(newIndex);
};

  return (
    <div className="testimonials_root">
      <div className="testimonials_inner">

       
            <h2 className="section_title">What Our Patients Say</h2>
       
        <button className="nav left" onClick={prev} aria-label="Previous">
          ‹
        </button>
        <div className="thumbs" ref={listRef}>
          {videos.map((v, i) => (
            <div
              key={v.id}
              className={`thumb ${i === current ? "active" : ""}`}
              onClick={() => {
                setCurrent(i);
                openLightbox(v);
              }}
            >
              <div className="thumb_img">
                <video
                  src={v.src}
                  poster={v.poster}
                  muted
                  loop
                  playsInline
                  autoPlay
                />
                {/* <div className="play_overlay">▌▌</div> */}
              </div>
            </div>
          ))}
        </div>
        <button className="nav right" onClick={next} aria-label="Next">
          ›
        </button>
      </div>

      {lightboxOpen && activeVideo && (
        <div className="lightbox" onClick={closeLightbox}>
          <div className="lightbox_inner" onClick={(e) => e.stopPropagation()}>
            <button className="close_btn" onClick={closeLightbox} aria-label="Close">✕</button>
            <video
              key={activeVideo.id}
              ref={videoRef}
              src={activeVideo.src}
              poster={activeVideo.poster}
              muted
              controls
              playsInline
              autoPlay
              preload="auto"
              onCanPlay={() => {
                if (videoRef.current) {
                  videoRef.current.muted = true;
                  videoRef.current.play().catch(() => {});
                }
              }}
            />
            <h3 className="video_title">{activeVideo.title}</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default Testimonials;
