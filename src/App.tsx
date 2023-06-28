import GlobalStyle from "./GlobalStyle";
import Navbar from "./components/Navbar";
import Container from "./layout/Container";

function App() {
    return (
        <Container>
            <GlobalStyle />
            <Navbar />
        </Container>
    );
}

export default App;
