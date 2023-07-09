import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import Container from "./layout/Container";
import GlobalStyle from "./GlobalStyle";
import Navbar from "./components/Navbar";
import ProductContainer from "./components/ProductContainer";
import Attribution from "./components/Attribution";

function App() {
    const [cartItems, setCartItems] = useState<CartItems>([]);

    return (
        <ThemeProvider theme={theme}>
            <Container>
                <GlobalStyle />
                <Navbar cartItems={cartItems} setCartItems={setCartItems} />

                <ProductContainer
                    cartItems={cartItems}
                    setCartItems={setCartItems}
                />
            </Container>
            <Attribution />
        </ThemeProvider>
    );
}

export type Item = {
    id: number;
    name: string;
    description: string;
    company: string;
    original_price: number;
    discounted_price: number;
    discount_percent: number;
    quantity: number;
    images: {
        key: number;
        thumbnail: string;
        original: string;
    }[];
};

export type CartItems = Item[];

export default App;
