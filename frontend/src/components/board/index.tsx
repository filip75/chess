import React from 'react'
import Field from '../field'
import { range } from '../../missing'

const Board: React.FC = (): React.ReactElement => {
    return (
        <div>
            {range(64).map((n: number) => {
                return <Field key={n} colour="red" index={n} />
            })}
        </div>
    )
}
export default Board
