import logo from './logo.svg';
import styled from './Component/styled-Components'
import './App.css';
import styles from './Component/style.module.css';



function StyleReact() {
  return (
    <div className="App">
      <div style={{backgroundColor:"white",padding:"10px",border: "3px solid black",borderRadius:"5px",marginRight:"150px",marginLeft:"150px",marginBlock:"10px"}}>
      <h1>Shop un style</h1>
      <h2>Ma seconde titre</h2>
      </div>
      <button className={styles.buttonAjout}>Ajouter</button>
      <button className={styles.buttonSupp}>Supprimer</button>
      
    </div>
  );
}

export default StyleReact;
