import { useState, useEffect } from 'react';
import './Discover.css';
import '../../index.css';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css'; // Ensure to import the CSS for the Dropdown component
import { useNavigate } from 'react-router-dom';

export default function Discover({setShowNav}){

    const [university, setUniversity] = useState('');

    const options = [
        { value: 'SelectUni', label: 'Select Your University...' },
        { value: 'UOV', label: 'University of Vavuniya' },
        { value: 'UOP', label: 'University of Peradeniya' },
        { value: 'UOC', label: 'University of Colombo' },
        { value: 'UOJ', label: 'University of Jaffna' },
        { value: 'UOR', label: 'University of Ruhuna' },
        { value: 'UOK', label: 'University of Kelaniya' },
        { value: 'UOM', label: 'University of Moratuwa' },
        { value: 'USJ', label: 'University of Sri Jayawardenepura' },
        { value: 'RUSL', label: 'Rajarata University of Sri Lanka' },
        { value: 'EUSL', label: 'Eastern University of Sri Lanka' }
    ];
    const defaultOption = options[0];

    return(
        <>
            <div className="discover-div">
                <form >
                    <div>
                        <Dropdown
                            options={options}
                            onChange={(option) => setUniversity(option.value)}
                            value={defaultOption}
                            className="form-control"
                        />
                    </div>
                </form>
            </div>
        </>
    );
}