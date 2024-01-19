export function Card ({name , description , Interets }){
    return <div className="Card" style={{borderWidth : 3 , borderColor : "white", borderStyle: "solid" }}>
      <h2>{name}</h2>
      <p>{description}</p>
      <h3>Interests</h3>
      <ol style={{ textAlign : 'left'}}>
      {Interets.map((interest , index)=>
        <li key={index}>{interest}</li>
    )}
      </ol>
      <button style={{padding : 10 , margin : 10  }}>Linkdein</button>
      <button style={{padding : 10 , margin : 10  }}>Twiiter</button>

    </div>
}