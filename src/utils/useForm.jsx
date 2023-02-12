import React, { useState } from "react"
/**
 * This function handling keystroke changes on Forms
 * @param {array} initialValues - The initial values of each fields
 * @returns values, setValues, eventListener
 */
function useForm(initialValues) {
    const [values, setValues] = useState(initialValues); 

    const handleChanges = event => {
        const {name, value} = event.target
        setValues(preValues => {
            return {
                ...preValues,
                [name]: value
            }
        })
    }

    return {
        values,
        setValues,
        handleChanges
    }
}

export default useForm

