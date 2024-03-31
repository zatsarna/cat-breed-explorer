import { useState, useEffect } from 'react';
import s from "./fetch.module.css"
import { Select} from './Select.tsx';
import {CatInfo, PhotoType} from './CatInfo.tsx';


export const api_key = 'live_Pb78jrrT6tI8GXhzjmzLgxrrKzCFbtRXfLSPL5n0JAZ5VVLMhA28YhAsahrFfPHi'
export const Fetch = () => {

    const [breedId, setBreedId]=useState<string | undefined>(undefined)
    const url = `https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=${breedId}&api_key=${api_key}`;

    const [photos, setPhotos] = useState<PhotoType[]>([]);

    const [showInfo, setShowInfo]=useState<boolean>(false)



    useEffect(() => {
        fetch(url,{headers: {
                'x-api-key': api_key
            }})
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setPhotos(data);
            });
    }, [breedId]);

    const updateBreedId=(id: string | undefined)=>{
        setBreedId(id)
    }

    function toggleCatInfo() {
        setShowInfo(true)
        console.log(photos)
    }

    return (
        <div>
            <Select updateBreedId={updateBreedId} setShowInfo={setShowInfo}/>
            <div className={`${s.photos} ${s.row}`}>

                {photos.slice(0,5).map((photo) => (
                    <div key={photo.id} className={s.container}>
                        <img key={photo.id} src={photo.url} alt={'cat'} className={s.image} />
                    </div>
                ))}

            </div>
            <div className={`${s.photos} ${s.row}`}>
                <button onClick={toggleCatInfo}>Learn more about this breed</button>
                {photos[0] && showInfo && <CatInfo id={photos[0].id}/>}
            </div>


        </div>
    );
};
