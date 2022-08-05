import { ButtonComponent } from './ButtonStyle'

type ButtonProps = {
    text: string;
}

export function Button({text}: ButtonProps) {
    return (
        <>
            <ButtonComponent >
                {text}
            </ButtonComponent>
        </>
    )
}