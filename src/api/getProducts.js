import { BASE_URL } from ".";

export async function getProducts() {
    try {
        const response = await fetch(BASE_URL, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                accept: 'application/json',
            },
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(`${error.statusCode} ${error.status} - ${error.errors[0].message}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}
