import { memo } from 'react'
import twemoji from 'twemoji'

import './twemoji.css'

const TwemojiComponent = ({ emoji }: {
    emoji: string
}) => (
    <span
        dangerouslySetInnerHTML={{
            __html: twemoji.parse(emoji, {
                folder: 'svg',
                ext: '.svg'
            })
        }}
    />
)

export const Twemoji = memo(TwemojiComponent);
