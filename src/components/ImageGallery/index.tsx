import { useState } from "react";
import FlexWrapper from "../../layout/FlexWrapper";
import { ActiveImage, Container, Thumbnail } from "./styles";
import images from "./data";

const ImageGallery = () => {
    const [activeImage, setActiveImage] = useState(0);

    return (
        <Container>
            <ActiveImage>
                <img src={images[activeImage].original} />
            </ActiveImage>

            <FlexWrapper>
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
    );
};

export default ImageGallery;
