import React,{useRef} from 'react';
import './SearchBar.css';
import { Col, Form, FormGroup } from 'reactstrap';

const SearchBar = () => {
  const locationRef = useRef('');
  const distancenRef = useRef(0);
  const maxGroupSizeRef = useRef();

  const searchHandler = () => {
    const location = locationRef.current.value
    const distance = distancenRef.current.value
    const maxGroupSize = maxGroupSizeRef.current.value
  }
  return (
    <Col lg='12'> 
      <div className='search_bar'>
        <Form className='d-flex align-items-center gap-4'>
            <FormGroup className='d-flex gap-3 form_group form_group-fast'> 
                <span><i class="ri-map-pin-line"></i></span>
                <div>
                    <h6>Location</h6>
                    <input  type='text' placeholder='Where are you going?' ref={locationRef}/>
                </div>
            </FormGroup>

            <FormGroup className='d-flex gap-3 form_group form_group-fast'> 
              <i class="ri-map-pin-time-line"></i>
              <div>
                  <h6>Distance</h6>
                  <input  type='number' placeholder='Distance k/m' ref={distancenRef}/>
              </div>
            </FormGroup>

            <FormGroup className='d-flex gap-3 form_group form_group-last'> 
              <i class="ri-group-line"></i>
              <div>
                  <h6>Max People</h6>
                  <input  type='number' placeholder='0' ref={maxGroupSizeRef}/>
              </div>
            </FormGroup>

            <span className="search_icon" type="submit" onClick={searchHandler}>
             <i class="ri-search-line"></i>
            </span>
        </Form>
      </div>
    </Col>
  )
}

export default SearchBar
