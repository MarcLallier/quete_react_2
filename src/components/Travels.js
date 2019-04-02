import React from 'react';



const voyages  = [
  {
  destination : "Paris", 
  distance    : "100km",
   country    : "France", 
   landscape      : "http://paris.cg.mfa.gov.tr/Content/assets/m-covers/1100118/phone1.jpg"
  },  

  {
  destination : "Petaouchnok",
  distance : "archi loin",
  country : "Trouducudumond",
  landscape : "http://media.topito.com/wp-content/uploads/2015/12/une_nom_ville_perdue.jpg"
  },
  
  {
    destination : "Toilettes",
    distance : "juste à coté",
    country : "chez moi",
    landscape : "https://cdn.fr.hudsonreed.com/media/catalog/product/cache/75eed2686e01eb22cb4050b2f40ddf97/7/5/7538_image.jpg"
  },

  {
    destination : "Mon slip",
    distance : "en dessous de la ceinture",
    country : "Pantalon",
    landscape : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRItyQTZuk0AC0u5r0rD-e9aUG_twR-Z2Ud0OFoznh0BrLh4YBiyg"
  },
  
  {
    destination : "Frigo",
    distance : "au fond du couloir",
    country : "Cuisine",
    landscape : "https://im.qccdn.fr/node/guide-d-achat-refrigerateur-americain-10557/principal-14333.jpg"
  },
]


class Travels extends React.Component {
  state={
  apply : ""
  }
  
  colorChange = () =>{
    return this.setState({apply : !this.state.apply})
  }
  
  render(){
    
    
   const work = this.state.apply ? "applying" : "notApplying"
 
 
    return (
          <div>
              { voyages.map ( voyage =>  
               <div>
                 <div className="Work">
                 <button className = {work} onClick = {this.colorChange} > Click On Me</button>
                
               <h1 className={work}> 
                  J'aimerais aller à {voyage.destination}
                </h1>
                </div>
                <h1> 
                   qui est à {voyage.distance}
                </h1>
                <h1>
                   dans le pays {voyage.country}
                </h1>
                <img className = "picture"
                src = {voyage.landscape} alt = "trip"
                />
                </div>
                )}
          </div>
          )}
              }
export default Travels