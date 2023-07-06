import { useEffect, useState } from "react";
import FlexWrapper from "../../layout/FlexWrapper";
import CloseIcon from "../CloseIcon";
import PrevIcon from "../PrevIcon";
import NextIcon from "../NextIcon";
import {
    ActiveImage,
    Arrow,
    CloseButton,
    Container,
    Overlay,
    Thumbnail,
    Wrapper,
} from "./styles";

type Props = {
    show: boolean;
    setShow: (show: boolean) => void;
    selectedImage: number;
    images: {
        key: number;
        thumbnail: string;
        original: string;
    }[];
};

const Lightbox = ({ show, setShow, selectedImage, images }: Props) => {
    const [activeImage, setActiveImage] = useState(0);

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

    useEffect(() => {
        setActiveImage(selectedImage);
    }, [selectedImage]);

    return (
        <Container className={show ? "active" : ""}>
            <Wrapper>
                <CloseButton onClick={() => setShow(false)}>
                    <CloseIcon />
                </CloseButton>

                <ActiveImage>
                    <Arrow
                        $position="prev"
                        onClick={() => handleArrowClick("prev")}
                    >
                        <PrevIcon />
                    </Arrow>

                    <img src={images[activeImage].original} />

                    <Arrow
                        $position="next"
                        onClick={() => handleArrowClick("next")}
                    >
                        <NextIcon />
                    </Arrow>
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
            </Wrapper>
            <Overlay onClick={() => setShow(false)} />
        </Container>
    );
};

export default Lightbox;
