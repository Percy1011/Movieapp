import React from 'react';

export default function Result(props) {
    const boxes = props.movies.map(
        (item, index) => {
            return (
                <Box
                    key={index}
                    image={item.poster_path}
                    title={item.original_title}
                    rating={item.vote_average}
                />
            );
        }
    );
    return (
        <div className='container mt-5'>
            <div className='row'>
                {boxes}
            </div>
        </div>
    );
}

const Box = (props) => {
    const IMGPATH = "https://image.tmdb.org/t/p/w1280";
    return (
        <div className='col-md-3 mb-3'>
            <div className='card'>
                <img src={IMGPATH + props.image} alt="" className='card-img-top' />
                <div className='card-body'>
                    <h5 className='card-title'>{props.title}</h5>
                    <p className='card-text'>Rating: {props.rating}</p>
                </div>
            </div>
        </div>
    );
};
