import React from 'react';

const List = ({pepole}) => {
  return (
    <>
      {pepole.map((person)=>{
        const {id , name, age , image} = person;
        return (
          <article className="person" key={id}>
            <img src={image} alt={name}></img>
            <div>
              <h4>{name}</h4>
              <p>{age} years</p>
            </div>
          </article>
        )
      })}
    </>
  );
};

export default List;
