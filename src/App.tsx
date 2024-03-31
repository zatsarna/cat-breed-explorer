
import {Link, Route, Routes} from 'react-router-dom';

import {Home} from './Home.tsx';
import {Fetch} from './Fetch.tsx';
import s from './fetch.module.css'


function App() {


    return (
        <div>
            <nav>
                <ul className={`${s.photos} ${s.row}`}>
                    <li>
                        <Link to="/">About project</Link>
                    </li>
                    <li>
                        <Link to="/fetch">Get 5 random images of the selected breed</Link>
                    </li>
                </ul>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/fetch" element={<Fetch />} />

            </Routes>
        </div>
    )
}


export default App
