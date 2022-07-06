import {useState, useEffect} from "react";
import youtube from "../apis/youtube";

const useVideos =(defaultSearchInput)=> {
    const [videos, setVideos] = useState([]);

    useEffect(()=> {
        search(defaultSearchInput);
    }, [defaultSearchInput]);

    const search = async (myInput) => {
        const response = await youtube.get('/search', {
            params: {
                q: myInput,
            }
        });

        setVideos(response.data.items);
    };

    return [videos, search];
};

export default useVideos;