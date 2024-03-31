import {useState, useEffect} from 'react';
import s from './fetch.module.css'
import {api_key} from './Fetch.tsx';
import SliderComponent from './Slider.tsx';

export type BreedType = {
    weight?: {
        imperial: string,
        metric: string,
    },
    id?: string,
    name?: string,
    cfa_url?: string,
    vetstreet_url?: string,
    vcahospitals_url?: string,
    temperament?: string,
    origin?: string,
    country_codes?: string,
    country_code?: string,
    description?: string,
    life_span?: string,
    indoor?: number,
    lap?: number,
    alt_names?: string,
    adaptability?: number,
    affection_level?: number,
    child_friendly?: number,
    dog_friendly?: number,
    energy_level?: 0 | 1 | 2 | 3 | 4 | 5,
    grooming?: number,
    health_issues?: number,
    intelligence?: number,
    shedding_level?: number,
    social_needs?: number,
    stranger_friendly?: number,
    vocalisation?: number,
    experimental?: number,
    hairless?: number,
    natural?: number,
    rare?: number,
    rex?: number,
    suppressed_tail?: number,
    short_legs?: number,
    wikipedia_url?: string,
    hypoallergenic?: number,
    reference_image_id?: string
}


export type PhotoType = {
    id: string,
    url: string,
    width: number,
    height: number,
    breeds?: BreedType[]
}
export type CatInfoPropsType={
    id: string | undefined
}
export const CatInfo = (props: CatInfoPropsType) => {
    const url = `https://api.thecatapi.com/v1/images/${props.id}`;
    const [catInfo, setCatInfo] = useState<PhotoType | undefined>(undefined);

    useEffect(() => {
        fetch(url, {
            headers: {
                'x-api-key': api_key
            }
        })
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setCatInfo(data);
            });
    }, []);
    return (
        <div className={`${s.photos} ${s.column}`}>

            {catInfo && catInfo.breeds ?
                <div>
                    <h2>Breed name: {catInfo.breeds[0].name}</h2>
                    <p>Temperament: {catInfo.breeds[0].temperament}</p>
                    <div className={`${s.photos} ${s.row}`}><p>Energy level: </p><SliderComponent level={catInfo.breeds[0].energy_level}/></div>
                    <p>Breed description: {catInfo.breeds[0].description}</p>
                    <p>Learn more about this breed on <a href={`${catInfo.breeds[0].wikipedia_url}` } target='_blank'>Wikipedia</a></p>

                </div> : <p>'No info about this cat'</p>
            }


        </div>
    )}