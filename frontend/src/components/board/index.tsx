import React from 'react'
import { range } from '../../missing'
import Field from '../field'
import styles from './style.module.scss'

const Board: React.FC = (): React.ReactElement => {
    return (
        <div className={styles.board}>
            {range(64).map(
                (n: number): React.ReactElement => (
                    <Field key={n} index={n} />
                )
            )}
        </div>
    )
}
export default Board
