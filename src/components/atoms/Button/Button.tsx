import { StyledButton } from "./styles"

interface IButtonProps {
  icon: React.FC
}

export const Button = ({ icon: Icon }: IButtonProps) => {
  return (
    <StyledButton>
      <Icon />
    </StyledButton>
  )
}
