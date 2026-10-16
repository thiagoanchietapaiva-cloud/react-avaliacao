import { useState } from "react";
import { MdOutlineStar } from "react-icons/md";
const App = () => {
  const [nota, setNota] = useState(null);
  const [mostrarNota, setmostrarNota] = useState(false);
  return ( 
    <div className="h-screen bg-slate-900 flex items-center justify-center p-4">
      <div className="bg-slate-800 w-full max-w-sm rounded-3xl p-8">
        {
          mostrarNota ? (
            <div className="flex flex-col items-center text-center">
              <img
                src="https://cdn.jsdelivr.net/gh/frontendmentorio/interactive-rating-component@main/images/illustration-thank-you.svg"
                alt=""
                className="w-40"
              />
              <h3 className="bg-slate-700 text-orange-500 rounded-full px-4 py-1 text-sm mt-8">
                Você selecionou a nota {nota} de 5
              </h3>
              <p className="text-white/20 text-center mt-4">
                Agradecemos por dedicar seu tempo para avaliar. Se precisar, não hesite em entrar em contato!
              </p>
            </div>
          ) : (
            <>
              <div className="w-10 h-10 rounded-full bg-white/10 flex justify-center items-center mb-5">
                <MdOutlineStar className="text-orange-400"/>
              </div>
              <h1 className="text-white text-2xl font-bold mt-6">Escolha uma nota</h1>
              <p className="text-slate-400 text-sm leading-6 mt-4">
                Deixe sua avaliação escolhendo uma nota para o filme. 
              </p>
              <div className="flex justify-between mt-6 *:w-10 *:h-10 *:bg-white/10 *:rounded-full *:flex *:justify-center *:items-center *:text-white *:hover:bg-orange-400 *:duration-200 *:cursor-pointer *:[&.active]:bg-orange-400 font-bold">
                <button onClick={() => setNota(1)} className={nota === 1 ? "active" : ""}>1</button>
                <button onClick={() => setNota(2)} className={nota === 2 ? "active" : ""}>2</button>
                <button onClick={() => setNota(3)} className={nota === 3 ? "active" : ""}>3</button>
                <button onClick={() => setNota(4)} className={nota === 4 ? "active" : ""}>4</button>
                <button onClick={() => setNota(5)} className={nota === 5 ? "active" : ""}>5</button>
              </div>
              <button onClick={()=> setmostrarNota(true)} 
                disabled={nota == null}
                className="w-full h-10 flex justify-center items-center mt-6 bg-white/10 rounded-full text-white hover:bg-orange-400 duration-200 cursor-pointer font-bold disabled:opacity-50 disabled:cursor-not-allowed">
                ENVIAR
              </button>
            </>
          )
        }
      </div>  
    </div>
   );
}
export default App;