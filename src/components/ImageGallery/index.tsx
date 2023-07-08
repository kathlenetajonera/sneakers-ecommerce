import { useState } from "react";
import FlexWrapper from "../../layout/FlexWrapper";
import Lightbox from "../Lightbox";
import images from "./data";
import { ActiveImage, Container, Thumbnail } from "./styles";

const ImageGallery = () => {
    const [activeImage, setActiveImage] = useState(0);
    const [openLightbox, setOpenLightbox] = useState(false);

    return (
        <>
            <Container>
                <ActiveImage onClick={() => setOpenLightbox(true)}>
                    <img src={images[activeImage].original} />
                </ActiveImage>

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
