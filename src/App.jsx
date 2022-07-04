import Menu from "./Menu";
import Menu1 from "./Menu1";
import Menu2 from "./Menu2";
import Titulo from "./Titulo";

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

	return(

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

    <div className="tituloD">

    {   
			titulo.map((cons, cont) => {
					    return <Titulo key={cont}
							title={cons.title}
						/>;
				})
			}
      </div>
    </div>
	);
}

export default App;
