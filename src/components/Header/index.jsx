import { RiShutDownLine } from 'react-icons/ri'
import { Container, Profile, Logout } from "./styles";

export function Header() {
    return (
        <Container>
            <Profile>
                <img 
                src="https://github.com/sagraziela.png" 
                alt="Profile image" />

                <div>
                    <span>Bem-vindo(a)!</span>
                    <strong>Graziela Antunes</strong>
                </div>
            </Profile>

            <Logout>
                <RiShutDownLine />
            </Logout>
        </Container>
    )
}