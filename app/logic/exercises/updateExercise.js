import { data } from '../../data/index.js';
import { errors } from 'com'

const { SystemError } = errors

export const updateExercise = (exerciseId, updateFields) => {
    const { token } = data;

    return fetch(`${import.meta.env.VITE_API_URL}/exercises/${exerciseId}/edit`, {
        method: 'PATCH',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ updateFields })
    })
        .catch(error => { throw new SystemError(error.message) })
        .then(response => {

            if (response.status === 204)
                return

            return response.json()
                .catch(error => { throw new SystemError(error.message) })
                .then(body => {
                    const { error, message } = body

                    const constructor = errors[error]

                    throw new constructor(message)
                })
        })
}