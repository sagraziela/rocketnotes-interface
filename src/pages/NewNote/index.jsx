import { Container, Form, Textarea } from "./style";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { NoteItem } from "../../components/NoteItem";
import { InputText } from "../../components/InputText";
import { ButtonText } from "../../components/ButtonText";
import { Button } from "../../components/Button";

export function NewNote() {
    return (
        <Container>
            <Header />

            <main>
                <Form>

                    <header>
                        <h1>Criar nota</h1>
                        <ButtonText title="voltar" />
                    </header>

                    <InputText placeholder="Título" />

                    <Textarea placeholder="Observações" />

                    <Section title="Links úteis">
                        <NoteItem value="https://rocketseat.com" />
                        <NoteItem isNew placeholder="Novo link" />
                    </Section>

                    <Section title="Marcadores">
                        <div className="tags">
                            <NoteItem value="react" />
                            <NoteItem isNew placeholder="Nova tag" />
                        </div>
                    </Section>

                    <Button title="Salvar" />

                </Form>
            </main>
        </Container>
    )
}