import React from "react";
import './Card.css';

function Card({ title, avatar, text, badges, link }) {
    return (
        <div className="card-wrapper">
            <div className="card-container" >
                <div className="card-img-wrapper">
                    <div className="card-img-container" >
                        {
                            link && link.length > 0 ?
                                                  <a href={ link } target="_blank" rel="noopener noreferrer">
                                                      <img className="card-img" src={ avatar } alt=""/>
                                                  </a>
                            :
                                                  <img className="card-img" src={ avatar } alt=""/>
                        }
                    </div>
                </div>
                
                <div className="card-body-container" >
                    <h4 className="card-body-title" >{ title }</h4>
                    <div className="card-body-text" >{ text }</div>
                    
                    <div className="card-body-badges-wrap" >
                        {
                            badges && badges.map((badge, index) =>
                                <div className="card-body-badges" key={ index }>{ badge }</div>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
