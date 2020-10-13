import React from 'react';
import Star from '../../assets/images/star.svg'
import StarOutline from '../../assets/images/star-outline.svg';

function Rating({rating}) {

    return (
        <>
            <p className="card-text"><small className="text-muted">Avaliação </small></p>
            <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                <div className="btn-group mr-2" role="group" aria-label="First group">
                    <img src={rating >= 1 ? Star : StarOutline} />
                    <img src={rating >= 2 ? Star : StarOutline} />
                    <img src={rating >= 3 ? Star : StarOutline} />
                    <img src={rating >= 4 ? Star : StarOutline} />
                    <img src={rating >= 5 ? Star : StarOutline} />
                </div>
            </div>
        </>
    );
}

export default Rating;