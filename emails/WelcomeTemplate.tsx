import {
  Body,
  Container,
  Html,
  Link,
  Preview,
  Text,
} from "@react-email/components";

interface Props {
  name: string;
}

const WelcomeTemplate = ({ name }: Props) => {
  return (
    <Html>
      <Preview>Welcome on board</Preview>
      <Body>
        <Container>
          <Text>Welcome {name}</Text>
          <Link href="https://github.com/LeonelKero">Kanmogne Leonel</Link>
        </Container>
      </Body>
    </Html>
  );
};

export default WelcomeTemplate;
