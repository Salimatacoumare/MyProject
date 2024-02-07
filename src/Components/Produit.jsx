function Produit({ title, price, image }) {
    return (
      <div className="produit">
        <img src={"./images/" + image} alt={title} />
        <p>{title}</p>
        <p>{price}</p>
        <p>Boite a panier</p>
        <NbreArti/>
      </div>
    );
  }
  export default Produit;