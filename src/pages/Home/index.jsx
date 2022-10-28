import { Container, Brand, Menu, Search, Content, NewNote } from "./styles";
import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { ButtonText } from '../../components/ButtonText';
import { InputText } from "../../components/InputText";
import { Card } from "../../components/Card";
import { Tag } from "../../components/Tag";
import { FiPlus, FiSearch } from 'react-icons/fi';

export function Home() {
    return (
        <Container>
            <Brand>
            <h1>Rocketnotes</h1>
            </Brand>

            <Header></Header>

            <Menu>
                <li><ButtonText title="Todos" isActive ></ButtonText></li>
                <li><ButtonText title="Nodejs" ></ButtonText></li>
                <li><ButtonText title="Express" ></ButtonText></li>
            </Menu>

            <Search>
                <InputText placeholder="Pesquisar por título" icon={FiSearch} />
            </Search>

            <Content>
                <Section title="Minhas notas"></Section>

                <Card 
                data={{
                    title: 'React Modal', 
                    tags: [
                        {id: 1, name: 'React'}
                        ]
                    }} 
                />

                <Card 
                data={{
                    title: 'Exemplo de Middleware', 
                    tags: [
                        {id: 2, name: 'Nodejs'},
                        {id: 3, name: 'Express'}
                        ]
                    }} 
                />

            </Content>

            <NewNote>
                <FiPlus />
                <p>Criar nota</p>
            </NewNote>

        </Container>
    )
}