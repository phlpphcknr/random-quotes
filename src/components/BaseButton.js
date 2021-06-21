import styled from "styled-components/macro";

export default function BaseButton( {content} ) {
    return (
            <ButtonSphere>
            <AddButton>{content}</AddButton>
            </ButtonSphere>
    )
}

const ButtonSphere = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 80px;
  margin: 10px;
  background-color: var(--secondary-color);
  border-radius: 50%;
`

const AddButton = styled.button`
  background-color: var(--primary-color);
  border: 0;
  outline: none;
  padding: 30px 50px;
  border-radius: 50%;
`
