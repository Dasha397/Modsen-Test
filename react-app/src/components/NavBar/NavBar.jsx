import React, { useState } from 'react';
import { Button, Col, Navbar, InputGroup, Form, FormControl } from 'react-bootstrap';
import canvasSwitch from '../../assets/switch.png';
import './navbar.css';

const NavBar = () => {
	const [currentActiveElement, setCurrentActiveElement] = useState()

	const [sportChecked, setSportChecked] = useState(true)
	const [naturalChecked, setNaturalChecked] = useState(false)
	const [cultureChecked, setCultureChecked] = useState(false)
	const [historyChecked, setHistoryChecked] = useState(false)
	const [shopChecked, setShopChecked] = useState(false)
	const [cafeChecked, setCafeChecked] = useState(false)
	const [bankChecked, setBankChecked] = useState(false)
	const [forAdultsChecked, setForAdultsChecked] = useState(false)
	const [hotelChecked, setHotelChecked] = useState(false)

	const selectSearch = () => {
		setCurrentActiveElement(() => 'search')
	}

	const selectFavorite = () => {
		setCurrentActiveElement(() => 'favorite')
	}

	return (
		<Navbar
			expand="md"
			className="bg-body-tertiary full-height"
			bg="light">
			<Col className="p-3 col-direction full-height" >
				<Button
					variant="light"
					className='size-50 p-0'>
					<img src={canvasSwitch} alt="switch" heigth='30' width='32' />
				</Button>
				<Button
					variant={currentActiveElement == 'search' ? "primary" : "outline-primary"}
					className='size-50 p-0 border-3 mt-4'
					onClick={selectSearch}
				>
					<svg width="22" height="22" viewBox="0 0 22 22" fill='none' xmlns="http://www.w3.org/2000/svg">
						<path className='hover' d="M17.4933 15.5798C18.7586 13.8964 19.4487 11.826 19.4487 9.72433C19.4487 4.36027 15.0884 0 9.72433 0C4.36027 0 0 4.36027 0 9.72433C0 15.0884 4.36027 19.4487 9.72433 19.4487C11.826 19.4487 13.8964 18.7586 15.5798 17.4933L20.076 22L22 20.076L17.4933 15.5798ZM14.6074 14.7538C13.2899 16.0295 11.5542 16.73 9.72433 16.73C7.89449 16.73 6.08555 15.9981 4.76806 14.6702C3.44011 13.3422 2.71863 11.5856 2.71863 9.72433C2.71863 5.86597 5.86597 2.71863 9.72433 2.71863C13.5827 2.71863 16.73 5.86597 16.73 9.72433C16.73 11.5542 16.0295 13.2899 14.7538 14.6074L14.6074 14.7538Z"
							fill={currentActiveElement == 'search' ? 'white' : 'blue'} />
					</svg>
				</Button>
				<Button
					variant={currentActiveElement == 'favorite' ? "danger" : "outline-danger"}
					className='size-50 p-0 border-3 mt-2'
					onClick={selectFavorite}
				>
					<svg width="18" height="24" viewBox="0 0 18 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path className='hover' d="M1.8 23.8866C1.37143 24.0696 0.964285 24.0298 0.578571 23.7671C0.192857 23.5045 0 23.121 0 22.6167V2.74559C0 1.99055 0.252 1.34397 0.756 0.805831C1.26 0.267697 1.86514 -0.000912864 2.57143 2.33072e-06H15.4286C16.1357 2.33072e-06 16.7413 0.26907 17.2453 0.807204C17.7493 1.34534 18.0009 1.99147 18 2.74559V22.6167C18 23.1201 17.8071 23.5036 17.4214 23.7671C17.0357 24.0307 16.6286 24.0705 16.2 23.8866L9 20.5919L1.8 23.8866Z"
							fill={currentActiveElement == 'favorite' ? 'white' : 'red'} />
					</svg>
				</Button>
			</Col>
			<Col xs={9} className="p-4 gray-left-border col-direction full-height">
				<InputGroup className="mb-5 b-2">
					<InputGroup.Text>
						<svg width="20" height="20" viewBox="0 0 22 22" fill='none' xmlns="http://www.w3.org/2000/svg">
							<path className='hover' d="M17.4933 15.5798C18.7586 13.8964 19.4487 11.826 19.4487 9.72433C19.4487 4.36027 15.0884 0 9.72433 0C4.36027 0 0 4.36027 0 9.72433C0 15.0884 4.36027 19.4487 9.72433 19.4487C11.826 19.4487 13.8964 18.7586 15.5798 17.4933L20.076 22L22 20.076L17.4933 15.5798ZM14.6074 14.7538C13.2899 16.0295 11.5542 16.73 9.72433 16.73C7.89449 16.73 6.08555 15.9981 4.76806 14.6702C3.44011 13.3422 2.71863 11.5856 2.71863 9.72433C2.71863 5.86597 5.86597 2.71863 9.72433 2.71863C13.5827 2.71863 16.73 5.86597 16.73 9.72433C16.73 11.5542 16.0295 13.2899 14.7538 14.6074L14.6074 14.7538Z"
								fill='gray'
							/>
						</svg>
					</InputGroup.Text>
					<FormControl placeholder="Место, адрес..." />
				</InputGroup>
				<p className='fw-bold fs-18'>Искать:</p>
				<Form className='search-form'>
					<Form.Check
						label="Спорт"
						id="1"
						checked={sportChecked}
						onChange={(e) => {
							setSportChecked(e.target.checked)
							localStorage.setItem('sport', e.target.checked)
						}}
					/>

					<Form.Check
						label="Культура"
						id="2"
						checked={cultureChecked}
						onChange={(e) => {
							setCultureChecked(e.target.checked)
							localStorage.setItem('culture', e.target.checked)
						}}
					/>
					<Form.Check
						label="История"
						id="3"
						checked={historyChecked}
						onChange={(e) => {
							setHistoryChecked(e.target.checked)
							localStorage.setItem('history', e.target.checked)
						}}
					/>
					<Form.Check
						label="Природа"
						id="4"
						checked={naturalChecked}
						onChange={(e) => {
							setNaturalChecked(e.target.checked)
							localStorage.setItem('natural', e.target.checked)
						}}
					/>
					<Form.Check
						label="Магазин"
						id="5"
						checked={shopChecked}
						onChange={(e) => {
							setShopChecked(e.target.checked)
							localStorage.setItem('shop', e.target.checked)
						}}
					/>
					<Form.Check
						label="Кафе"
						id="6"
						checked={cafeChecked}
						onChange={(e) => {
							setCafeChecked(e.target.checked)
							localStorage.setItem('cafe', e.target.checked)
						}}
					/>
					<Form.Check
						label="Банк"
						id="7"
						checked={bankChecked}
						onChange={(e) => {
							setBankChecked(e.target.checked)
							localStorage.setItem('bank', e.target.checked)
						}}
					/>
					<Form.Check
						label="Для взрослых"
						id="8"
						checked={forAdultsChecked}
						onChange={(e) => {
							setForAdultsChecked(e.target.checked)
							localStorage.setItem('adults', e.target.checked)
						}}
					/>
					<Form.Check
						label="Место для сна"
						id="9"
						checked={hotelChecked}
						onChange={(e) => {
							setHotelChecked(e.target.checked)
							localStorage.setItem('hotel', e.target.checked)
						}}
					/>
				</Form>
			</Col>
		</Navbar>
	)
}

export default NavBar;