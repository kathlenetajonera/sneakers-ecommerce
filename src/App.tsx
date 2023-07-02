import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import Container from "./layout/Container";
import GlobalStyle from "./GlobalStyle";
import Navbar from "./components/Navbar";
import ProductContainer from "./components/ProductContainer";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Container>
                <GlobalStyle />
                <Navbar />

                <ProductContainer />
            </Container>
        </ThemeProvider>
    );
}

export default App;
