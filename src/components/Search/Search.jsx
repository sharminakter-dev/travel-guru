import React, { useState } from 'react';
import Header from '../Header/Header';
import { useSelector } from 'react-redux';
import { Col, Pagination, Row } from 'react-bootstrap';
import Hotel from '../Hotel/Hotel';
import Map from '../Map/Map';


const Search = () => {
    const destination = useSelector(state=>state.destination);
    // console.log(destination);
    const [currentPage, setCurrentPage]  = useState(1);
    const itemsPerPage = 2;

    const totalItems = destination.accommodations.length;
    const totalPages = Math.ceil(totalItems/itemsPerPage);
    
    const startIndex = (currentPage-1)*itemsPerPage;
    const paginatedItems =destination.accommodations.slice(startIndex,startIndex+itemsPerPage)
    
    const handlePageChange = (pageNum)=>{
        if(pageNum>=1 && pageNum<=totalPages){
            setCurrentPage(pageNum);
        }
    }

    return (
        <div className='mx-5'>
            <hr />
            <p className='text-secondary'>252 stays Apr 13-17 3 guests</p>
            <h5 className='fw-bold'>Stays in {destination.name}</h5>
            <Row > 
                <Col xs={12} md={6}>
                    {paginatedItems.map((acc, idx)=> <Hotel key={idx} acc={acc} /> ) }
                </Col>
                <Col xs={12} md={6} >
                    <Map/>
                </Col>
            </Row>

            <Pagination className='mt-2 justify-content-center'>
                <Pagination.Prev onClick={()=>handlePageChange(currentPage-1)} disabled={currentPage<=1} />
                    {[...Array(totalPages)].map((_,idx)=>{
                        return(
                            <Pagination.Item 
                                key={idx+1} 
                                active={currentPage===idx+1}
                                onClick={()=>handlePageChange(idx+1)}>{idx+1}
                            </Pagination.Item>
                        )
                    })}
                <Pagination.Next onClick={()=>handlePageChange(currentPage+1)} disabled={currentPage===totalPages} />
            </Pagination>

        </div>
    );
};

export default Search;