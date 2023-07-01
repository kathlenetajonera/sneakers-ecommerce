import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import Container from "./layout/Container";
import Navbar from "./components/Navbar";
import GlobalStyle from "./GlobalStyle";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Container>
                <GlobalStyle />
                <Navbar />
            </Container>
        </ThemeProvider>
    );
}

export default App;
