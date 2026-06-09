import gallery1 from "../assets/images/gallery-1.png";
import gallery2 from "../assets/images/gallery-2.png";
import gallery3 from "../assets/images/gallery-3.png";
import gallery4 from "../assets/images/gallery-4.png";
import gallery5 from "../assets/images/gallery-5.png";
import gallery6 from "../assets/images/gallery-6.png";
import "./Gallery.scss";

const images = [
  { src: gallery1, alt: "Boxing training — pad work session" },
  { src: gallery2, alt: "Young boxer landing a punch on mitts" },
  { src: gallery3, alt: "Sparring drill with focus mitts" },
  { src: gallery4, alt: "Group boxing fitness class" },
  { src: gallery5, alt: "Boxer working the heavy bag" },
  { src: gallery6, alt: "Open floor sparring session" },
];

export default function Gallery() {
  return (
    <section className="gallery">
      <div className="gallery__header">
        <h2 className="gallery__title">Gallery</h2>

        <div className="gallery__divider" />
      </div>

      <div className="gallery__grid">
        {images.map((img, i) => (
          <div className="gallery__item" key={i}>
            <img src={img.src} alt={img.alt} className="gallery__img" />
          </div>
        ))}
      </div>
    </section>
  );
}
