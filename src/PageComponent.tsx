import { Container } from "./components/Container";
import { Text } from "./components/Text";
import { Card, CardTop, CardBottom } from "./components/Card";
import { Button } from "./components/Button";

export function PageComponent() {
  return (
      <Container background="#79d52d" padding="29">
        <Text text="Updated" fontSize="20"></Text>
        <Card background="#ffffff" padding="3">
          <CardTop>
            <Text text="Title" fontSize="20"></Text>
            <Text text="Subtitle" fontSize="15"></Text>
          </CardTop>
          <CardBottom>
            <Button size="small" variant="contained" color="primary" onClickScript="">Learn more</Button>
          </CardBottom>
        </Card>
        <Container background="#ffffff" padding="20">
          <Button size="small" variant="contained" color="primary" onClickScript="alert('hey')">Click me</Button>
          <Button size="small" variant="contained" color="primary" onClickScript="">Click me</Button>
          <Button size="small" variant="contained" color="primary" onClickScript="">Click me</Button>
          <Text text="Hi world" fontSize="20"></Text>
        </Container>
        <Text text="Hi world" fontSize="20"></Text>
        <Text text="Hi world йохохохо" fontSize="20"></Text>
        <Container background="#dee8ff" padding="100">
          <Text text="THE TEXT" fontSize="50"></Text>
        </Container>
        <Card background="#f7dada" padding="45">
          <CardTop>
            <Text text="Title" fontSize="29"></Text>
            <Text text="Subtitle" fontSize="15"></Text>
          </CardTop>
          <CardBottom></CardBottom>
        </Card>
      </Container>
  );
}