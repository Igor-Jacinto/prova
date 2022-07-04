import "./Central.css";

function Container({foto, ti, desc, qtd, preco}){
	
	return(

        <div className="conte"> 
            <img className="img" src={foto} alt="foto hamburguer" />
            <h3>{ti}</h3>
            <p>{desc}</p>
            <h4>{qtd}</h4>
            <h4>{preco}</h4>
        </div>
	);
}

export default Container;
