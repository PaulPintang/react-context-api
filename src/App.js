import { Container, MantineProvider } from "@mantine/core";
import Addtocart from "./components/Addtocart";
import Cart from "./components/Cart";

function App() {
  return (
    <MantineProvider emotionOptions={{ key: "mantine", prepend: false }}>
      <Container className="text-center py-10">
        <div className="App">
          <Addtocart />
          <Cart />
        </div>
      </Container>
    </MantineProvider>
  );
}

export default App;
