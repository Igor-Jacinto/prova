import Menu from "./Menu";
import Menu1 from "./Menu1";
import Menu2 from "./Menu2";
import Titulo from "./Titulo";
import Container from "./Container";

function App(){

	const menu = [
		{
			logo: "logo.svg",
		},
];

  const menu1 = [
    {
      botao: "Entregador",
    },
    {
      botao: "Restaurante e Mercado",
		},
    {
      botao: "Carreiras",
		},
    {
      botao: "iFood Card",
		},
  ];

    const menu2 = [

      {
        botao1: "Criar conta",
      },
      {
        botao1: "Entrar",
      },
    ];

    
    const titulo = [

      {
        title: "Destaques",
      },
   
    ];

    const container = [

      {
        foto: "big-king.webp",
        ti: "Combo Big King",
        desc: "Um hamburguer com duas carnes bovinas grelhadas de 57g, pão com gergelim, queijo...",
        qtd: "Serve 1 pessoa",
        preco: "R$ 41,90"
      },
      {
        foto: "cheddar-duplo.webp",
        ti: "Combo Cheddar Duplo",
        desc: "Um hamburguer com duas carnes bovinas grelhadas de 57g, pão preto com gergilim...",
        qtd: "Serve 1 pessoa",
        preco: "R$ 41,90"
      },
      {
        foto: "cheeseburger-duplo.webp",
        ti: "Combo Cheeseburguer Duplo com Bacon",
        desc: "Um hamburguer com duas carnes bovinas grelhadas de 57g, pão com gergelim, queijo...",
        qtd: "Serve 1 pessoa",
        preco: "R$ 36,90"
      },
      {
        foto: "mega-stacker.webp",
        ti: "Combo Mega Stacker 2.0",
        desc: "Um hamburguer com duas carnes bovinas grelhadas de 113g, pão com gergelim, queijo...",
        qtd: "Serve 1 pessoa",
        preco: "R$ 51,90"
      },
    ];

    



	return(

    <div className="todo">
      <div className="cont"> 
            
            {
            menu.map((cons, cont) => {
                    return <Menu key={cont}
                    logo={cons.logo}
                  />;
              })
            }

            {
            menu1.map((cons, cont) => {
                    return <Menu1 key={cont}
                    botao={cons.botao}
                  />;
              })
            }


            <div className="cont2">

            {   
            menu2.map((cons, cont) => {
                    return <Menu2 key={cont}
                    botao1={cons.botao1}
                  />;
              })
            }
            
          </div>
    </div>

    <div className="tituloD">

    {   
			titulo.map((cons, cont) => {
					    return <Titulo key={cont}
							title={cons.title}
						/>;
				})
			}
  <div/>
    <div className="container">
      
       {   
			container.map((cons, cont) => {
					    return <Container key={cont}
							foto={cons.foto}
              ti={cons.ti}
              desc={cons.desc}
              qtd={cons.qtd}
              preco={cons.preco}
						/>;
				})
			}
      
</div>

</div>
    </div>
		

    
	);
}

export default App;
