import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    width: 100%;

    display: grid;
    grid-template-rows: 105px auto;
    grid-template-areas:
    "header"
    "content";

    > main {
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

    .tags {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
`;

export const Form = styled.form`
    max-width: 550px;
    height: 100vh;
    margin: 38px auto;

    > header {
        display: flex;
        justify-content: space-between;
        align-items: baseline;

        margin-bottom: 36px;
    }

    > section {
        margin-top: 48px;
    }

    > button {
        margin: 34px 0 48px 0;
    }
`;

export const Textarea = styled.textarea`
        height: 150px;
        width: 100%;
        background-color: ${({ theme }) => theme.COLORS.GRAY_900};
        color: ${({ theme }) => theme.COLORS.GRAY_100};
        padding: 20px;
        margin-top: 16px;
        text-align: justify;

        border: none;
        border-radius: 10px;

        resize: none;

        ::placeholder {
            color: ${({ theme }) => theme.COLORS.GRAY_700};
        }
`;