import React from 'react'
import { range } from '../../missing'

const Board: React.FC = (): React.ReactElement => {
    return (
        <div>
            {range(64).map((n: number) => {
                return <div key={n}>{n}</div>
            })}
        </div>
    )
}
export default Board
