
import s from './fetch.module.css'
type SliderPropsType={
    level: 0 | 1 | 2 | 3 | 4 | 5 | undefined
}
const SliderComponent = (props: SliderPropsType) => {

    return (
        <div className={s.slider}>
            {/* Slider input */}
            <input
                type="range"
                min={0}
                max={5}
                value={props.level}
                list={'values'}

            />
            <datalist id="values">
                <option value={0} label="0"></option>
                <option value={1} label="1"></option>
                <option value={2} label="2"></option>
                <option value={3} label="3"></option>
                <option value={4} label="4"></option>
                <option value={5} label="5"></option>
            </datalist>
        </div>
    );
};

export default SliderComponent;