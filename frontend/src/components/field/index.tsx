import React from 'react'

interface Props {
    colour: string
    index: number
}

const Field: React.FC<Props> = ({
    colour,
    index,
}: Props): React.ReactElement => {
    return (
        <div className={colour} onClick={() => console.log(index)}>
            {index}
        </div>
    )
}

export default Field
