import { ArrowClockwise, ChatCircle, Heart } from 'phosphor-react'
import { Link } from 'react-router-dom'
import './Tweet.css'

type TweetProps = {
    content: string
}

function Tweet(props: TweetProps) {
    return (
        <Link to="/status" className="tweet">
            <img src="https://github.com/ojoaovitoraraujo.png" alt="Joao Vitor Araujo" />
            <div className="tweet-content">
                <div className="tweet-content-header">
                    <strong>Joao Vitor Araujo</strong>
                    <span>@ojoaovitoraraujo</span>
                </div>
                <p>{props.content}</p>

                <div className="tweet-content-footer">
                    <button type="button">
                        <ChatCircle />
                        20
                    </button>
                    <button type="button">
                        <ArrowClockwise />
                        20
                    </button>
                    <button type="button">
                        <Heart />
                        20
                    </button>
                </div>
            </div>
        </Link>
    )
}

export default Tweet