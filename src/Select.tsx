import React, {useState} from 'react';
import s from './fetch.module.css';
export type SelectPropsType ={
    updateBreedId: (id: string | undefined)=>void
    setShowInfo: (showInfo: boolean)=>void
}
export type BreedIds= 'beng'| 'abys'| 'munc'| 'siam'| 'pers'| 'sphy'| 'bomb'| 'mcoo'| 'manx'
export type BreedsType={
    breedId: BreedIds,
    breedName: string
}

export const Select = (props: SelectPropsType) => {
    const [selectedOption, setSelectedOption] = useState<string | undefined>(undefined); // State to store selected option

    const options: BreedsType[] = [
        {breedId: 'beng', breedName: 'Bengal'},
        {breedId: 'abys', breedName: 'Abyssinian'},
        {breedId: 'munc', breedName: 'Munchkin'},
        {breedId: 'siam', breedName: 'Siamese'},
        {breedId: 'pers', breedName: 'Persian'},
        {breedId: 'sphy', breedName: 'Sphynx'},
        {breedId: 'bomb', breedName: 'Bombay'},
        {breedId: 'mcoo', breedName: 'Maine Coon'},
        {breedId: 'manx', breedName: 'Manx'},
    ]; // Array of options for the select input

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(event.target.value); // Update selected option when select value changes
        props.setShowInfo(false)
    };

    const handleButtonClick = () => {
        // Perform some action with the selected option and input value when the button is clicked
        props.updateBreedId(selectedOption)
        props.setShowInfo(false)
    };

    return (
        <div className={`${s.photos} ${s.row}`}>
            {/* Select input */}
            <select value={selectedOption} onChange={handleSelectChange}>
                <option value="">Select a breed...</option>
                {options.map((option) => (
                    <option key={option.breedId} value={option.breedId}>{option.breedName}</option>
                ))}
            </select>
            {/* Button */}
            <button onClick={handleButtonClick}>Submit</button>
        </div>
    );
};
