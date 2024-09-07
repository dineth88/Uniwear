import React, { useState, useEffect } from 'react';
import Img1 from '../../assets/348428189_988640645839983_6693744623780082422_n.jpg';
import './Sell.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';


export default function Sell({ userId }) { // Receive userId as a prop
    const [images, setImages] = useState([null, null, null]);
    const [tshirtName, setTshirtName] = useState('');
    const [shortDesc, setShortDesc] = useState('');
    const [itemDesc, setItemDesc] = useState('');
    const [price, setPrice] = useState('');
    const [colar, setColar] = useState('');
    const [cuff, setCuff] = useState('');
    const [placket, setPlacket] = useState('');
    const [pLength, setPLength] = useState('');
    const [material, setMaterial] = useState('');
    const [manufacturer, setManufacturer] = useState('');
    const [message, setMessage] = useState('');
    const [university, setUniversity] = useState('');
    const [category, setCategory] = useState('');
    const [shirtUser, setShirtUser] = useState(null); // State for storing user data
    
        // Fetch user data based on userId
        useEffect(() => {
            const fetchUser = async () => {
                try {
                    const response = await fetch(`http://localhost:8080/user/find/${userId}`);
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    const text = await response.text();
                    console.log('Raw response:', text);
                    const user = JSON.parse(text);
                    setShirtUser(user);
                } catch (error) {
                    console.error('An error occurred while fetching user:', error);
                    setMessage('Failed to fetch user data.');
                }
            };
        
            if (userId) {
                fetchUser();
            }
        }, [userId]);
        

    const handleImageChange = (e, index) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const newImages = [...images];
                newImages[index] = reader.result;
                setImages(newImages);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Form validation
        if (!tshirtName || !shortDesc || !itemDesc || !price || !colar || !cuff || !placket || !pLength || !material || !manufacturer || !university || !category || !images[0] || !images[1] || !images[2] || !shirtUser) {
            setMessage('Please fill in all fields and add all images.');
            return;
        }

        // Prepare the form data
        const formData = {
            name: tshirtName,
            shortDesc,
            itemDesc,
            price,
            colar,
            cuff,
            placket,
            pLength,
            material,
            manufacturer,
            university,
            category,
            image1: images[0],
            image2: images[1],
            image3: images[2],
            user: shirtUser // Include the fetched user data
        };

        

        // Send the form data to the server
        try {
            const response = await fetch('http://localhost:8080/shirt', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.text();
            if (result === 'New shirt added') {
                setMessage('Successfully entered new T-shirt');
            } else {
                setMessage('Failed to add new T-shirt');
            }
        } catch (error) {
            setMessage('An error occurred. Please try again later.');
        }
    };

    const uniOptions = [
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

    const catOptions = [
        { value: 'Sport', label: 'Sport' },
        { value: 'Casual', label: 'Casual' },
        { value: 'Club', label: 'Club' },
    ];

    return (
        <>
            <div className='txtmargin'>
                <center>
                    <h2>UniWear Best Sellers</h2>
                </center>
            </div>
            <div className='img-div'>
                <img src={Img1} className='imgBestSeller' alt="Best Seller"/>
                <img src={Img1} className='imgBestSeller' alt="Best Seller"/>
                <img src={Img1} className='imgBestSeller' alt="Best Seller"/>
                <img src={Img1} className='imgBestSeller' alt="Best Seller"/>
                <img src={Img1} className='imgBestSeller' alt="Best Seller"/>
            </div>
            <div className='addItem-div'>
                <div className='card addItem-card'>
                    <h2>Add Your Item</h2>
                    <form className='form-addItem' onSubmit={handleSubmit}>
                        <div className="name-fields">
                            <div className="first-name">
                                <label htmlFor="tname" className='txtlabel'>T-Shirt Name </label> 
                                <input type="text" className='tname-form-control' value={tshirtName} onChange={(e) => setTshirtName(e.target.value)} />
                            </div>
                            <div className="last-name">
                                <label htmlFor="sdes" className='txtlabel'>Short Description</label> 
                                <input type="text" className='sdes-form-control' value={shortDesc} onChange={(e) => setShortDesc(e.target.value)} />
                            </div>
                        </div>
                        <label htmlFor="ides" className='txtlabel'>Item Description</label> 
                        <textarea name="txtdes" id="txtdes" cols="30" rows="10" value={itemDesc} onChange={(e) => setItemDesc(e.target.value)}></textarea>
                        <label htmlFor="university" className="email">University</label>
                        <Dropdown
                            options={uniOptions}
                            onChange={(option) => setUniversity(option.value)}
                            value={uniOptions.find(option => option.value === university)} // Make sure this correctly finds the selected value
                            placeholder="Select an option"
                            className="form-control"
                        />
                        <label htmlFor="category" className="email">Category</label>
                        
                        <Dropdown
                            options={catOptions}
                            onChange={(option) => setCategory(option.value)}
                            value={catOptions.find(option => option.value === category)} // Make sure this correctly finds the selected value
                            placeholder="Select an option"
                            className="form-control"
                        />
                        <label htmlFor="sdes" className='txtlabel'>Price</label> 
                        <input type="text" className='sdes-form-control' value={price} onChange={(e) => setPrice(e.target.value)} />
                        <label htmlFor="ides" className='txtlabel'>Add Features</label>
                        <div className='addremove-div'>
                            <div className="features-fields">
                                <div className="first-feature">
                                    <label htmlFor="colar" className='txtlabel'>Colar</label> 
                                    <input type="text" className='tname-form-control' value={colar} onChange={(e) => setColar(e.target.value)} />
                                    <label htmlFor="cuff" className='txtlabel'>Cuff</label> 
                                    <input type="text" className='tname-form-control' value={cuff} onChange={(e) => setCuff(e.target.value)} />
                                    <label htmlFor="placket" className='txtlabel'>Placket</label> 
                                    <input type="text" className='tname-form-control' value={placket} onChange={(e) => setPlacket(e.target.value)} />
                                </div>
                                <div className="last-feature">
                                    <label htmlFor="plength" className='txtlabel'>P length</label> 
                                    <input type="text" className='sdes-form-control' value={pLength} onChange={(e) => setPLength(e.target.value)} />
                                    <label htmlFor="material" className='txtlabel'>Material</label> 
                                    <input type="text" className='sdes-form-control' value={material} onChange={(e) => setMaterial(e.target.value)} />
                                    <label htmlFor="manufacturer" className='txtlabel'>Manufacturer</label> 
                                    <input type="text" className='sdes-form-control' value={manufacturer} onChange={(e) => setManufacturer(e.target.value)} />
                                </div>
                            </div>
                        </div>
                        <label htmlFor="ides" className='txtlabel'>Add on Images</label><br />
                        <div className='img-add-div'>
                            {['first-img', 'second-img', 'third-img'].map((className, index) => (
                                <div className={className} key={index}>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        style={{ display: 'none' }}
                                        id={`file-input-${index}`}
                                        onChange={(e) => handleImageChange(e, index)}
                                    />
                                    {images[index] ? (
                                        <img src={images[index]} alt="Selected" className="selected-image" />
                                    ) : (
                                        <label htmlFor={`file-input-${index}`}>
                                            <FontAwesomeIcon icon={faImage} />
                                        </label>
                                    )}
                                </div>
                            ))}
                        </div>
                        <div className='btn-div'>
                            <button type="submit">Add Post</button>
                            {message && <p className='message'>{message}</p>}
                        </div>
                    </form>
                </div>
            </div>
           
        </>
    );
}
