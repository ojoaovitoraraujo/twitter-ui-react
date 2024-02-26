import { Sparkle } from "phosphor-react";
import './Header.css'

type HeaderProps = {
    title: string
}
export function Header(props: HeaderProps) {
    return (
        <div className="timeline-header">
            {props.title}
            <Sparkle />
        </div>
    )
}