import {
  Body,
  Container,
  Html,
  Link,
  Preview,
  Tailwind,
  Text,
} from "@react-email/components";

interface Props {
  name: string;
}

const WelcomeTemplate = ({ name }: Props) => {
  return (
    <Html>
      <Preview>Welcome on board</Preview>
      <Tailwind>
        <Body>
          <Container>
            <Text className="font-bold text-3xl">Welcome {name}</Text>
            <Link href="https://github.com/LeonelKero">Kanmogne Leonel</Link>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default WelcomeTemplate;
