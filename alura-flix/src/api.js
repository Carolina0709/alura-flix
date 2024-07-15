const API_URL = 'https://my-json-server.typicode.com/Carolina0709/alura-flix/videos';

export const fetchVideos = async () => {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error('Error fetching videos');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        return [];
    }
};

export const updateVideo = async (id) => {
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error('Error updating video');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const deleteVideo = async (id) => {
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error('Error deleting video');
        }

        return { id }; 
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const createVideo = async (newVideo) => {
    try {
        const response = await fetch(`${API_URL}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newVideo),
        });

        if (!response.ok) {
            throw new Error('Error creating video');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};
