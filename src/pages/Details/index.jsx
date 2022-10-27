//import "../../global.js";
import { Container, Links, Content } from "./styles.js";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Button } from "../../components/Button";
import { Tag } from "../../components/Tag";
import { ButtonText } from "../../components/ButtonText/index.jsx";

export function Details() {

  return (
    <Container>
      <Header />

      <main>
        <Content>

          <ButtonText title="Excluir nota" />

          <h1>Título da Nota</h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, voluptatem? Earum, ad consectetur! Debitis, aut eius, dolores earum sunt esse voluptate aliquid, blanditiis quae quasi necessitatibus quibusdam corrupti corporis placeat!
          </p>

          <Section title="Links úteis">
            <Links>
              <li><a href="#">https://app.rocketseat.com.br/</a></li>
              <li><a href="#">https://app.rocketseat.com.br/</a></li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="Node" />
            <Tag title="Express" />
          </Section>

          <Button title="Voltar" />

        </Content>
      </main>
    </Container>
  )
}
