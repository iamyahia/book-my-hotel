import Button from "@mui/material/Button";
import { styled } from "@mui/system";

/*
    #6415ff
    mycolor="#f7fafc"
    mycolor="#4a5568"
*/

const ButtonStyled = styled(Button)`
  background-color: ${({ bg }) => bg};
  padding: 16px 0;
  font-size: 16px;
  width: 12rem;
  color: ${({ mycolor }) => mycolor};
  &:hover {
    background-color: ${({ bgHover }) => bgHover};
  }
`;

export default ButtonStyled;
