import { useState } from "react";
import FlexWrapper from "../../layout/FlexWrapper";
import Lightbox from "../Lightbox";
import PrevIcon from "../PrevIcon";
import NextIcon from "../NextIcon";
import images from "./data";
import { ActiveImage, Arrow, Container, Thumbnail } from "./styles";

const ImageGallery = () => {
    const [activeImage, setActiveImage] = useState(0);
    const [openLightbox, setOpenLightbox] = useState(false);

    const handleArrowClick = (type: string) => {
        if (type === "prev") {
            setActiveImage((prev) =>
                prev === 0 ? images.length - 1 : prev - 1
            );
        }

        if (type === "next") {
            setActiveImage((prev) =>
                prev === images.length - 1 ? 0 : prev + 1
            );
        }
    };

    return (
        <>
            <Container>
                <Arrow
                    $position="prev"
                    onClick={() => handleArrowClick("prev")}
                >
                    <PrevIcon />
                </Arrow>
                <ActiveImage onClick={() => setOpenLightbox(true)}>
                    <img src={images[activeImage].original} />
                </ActiveImage>
                <Arrow
                    $position="next"
                    onClick={() => handleArrowClick("next")}
                >
                    <NextIcon />
                </Arrow>

                <FlexWrapper className="thumbnails">
                    {images.map((img) => (
                        <Thumbnail
                            key={img.key}
                            className={img.key === activeImage ? "active" : ""}
                            onClick={() => setActiveImage(img.key)}
                        >
                            <img src={img.thumbnail} />
                        </Thumbnail>
                    ))}
                </FlexWrapper>
            </Container>

            <Lightbox
                show={openLightbox}
                setShow={setOpenLightbox}
                images={images}
                selectedImage={activeImage}
            />
        </>
    );
};

export default ImageGallery;
