import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

export const Icon = ({icon,css}) => {
    return(
        <FontAwesomeIcon className={css}> Icon={icon}</FontAwesomeIcon>
    )
}