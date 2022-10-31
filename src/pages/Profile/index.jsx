import { Container, Header, Form, Avatar } from "./styles";
import { InputText } from "../../components/InputText"; 
import { FiArrowLeft, FiCamera, FiUser, FiMail, FiLock } from "react-icons/fi";
import { Button } from "../../components/Button";

export function Profile() {
    return (
        <Container>
            <Header>
                <button>
                    <FiArrowLeft />
                </button>
            </Header>

            <Avatar>
                <img 
                src="https://github.com/sagraziela.png" 
                alt="Foto do usuário" 
                />

                <label htmlFor="avatar">
                    <FiCamera size={20} />

                    <input 
                    id="avatar" 
                    type="file" />
                    
                </label>
            </Avatar>

            <Form>
                <InputText 
                type="text" 
                value="Graziela Antunes" 
                icon={ FiUser } />

                <InputText 
                type="text" 
                value="graziela@gmail.com" 
                icon={ FiMail } />

                <InputText 
                type="password" 
                id="currentPassword" 
                placeholder="Senha atual"  
                icon={ FiLock }/>

                <InputText 
                type="password" 
                id="newPassword" 
                placeholder="Nova senha" 
                icon={ FiLock } />
            
                <Button title="Salvar" />
            </Form>
            
        </Container>
    )
}