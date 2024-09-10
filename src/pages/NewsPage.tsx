import { Container } from "./components/Container";
import { Text } from "./components/Text";

export function PageComponent() {
  return (
      <Container background="#fff" padding="29">
        <Text text="news" fontSize="20"></Text>
      </Container>
  );
}