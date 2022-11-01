import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-rows: 105px auto;
    grid-template-areas:
    "header"
    "content";

    > main {
        padding: 64px 0;
        grid-area: content;
        overflow-y: auto;
    }

    > main::-webkit-scrollbar {
        width: 14px;
        }

    > main::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.COLORS.GRAY_300};  
    }

    > main::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.COLORS.GRAY_900};
        border-radius: 20px;
        border: 3px solid ${({ theme }) => theme.COLORS.GRAY_300};
    }
`;

export const Links = styled.ul`
    list-style: none;

    > li {
        margin-top: 24px;
        
        a {
            color: ${({ theme }) => theme.COLORS.GRAY_100};
        }
    }
`;

export const Content = styled.div`
    max-width: 550px;
    margin: 0 auto;

    display: flex;
    flex-direction: column;

    > button:first-child {
        align-self: flex-end;
    }

    > h1 {
        font-size: ${({ theme }) => theme.FONT_SIZE.XXXL};
        font-weight: ${({ theme }) => theme.FONT_WEIGHT.MEDIUM};
        padding: 64px 0 16px 0;
    }

    > p {
        font-size: ${({ theme }) => theme.FONT_SIZE.MD};
        text-align: justify;
        margin-bottom: 54px;
    }
`;
