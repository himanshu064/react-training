import React, { useContext, useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [Timer, setTimer] = useState();
  const [userInput, setUserInput] = useState('');
  const [activeWordIndex, setActiveWordIndex] = useState(0);
  const [correct,setCorrect] = useState([]);
  const typeData = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel voluptas quaerat suscipit. Magni ullam aliquid ipsa debitis sunt, corrupti omnis optio? Ad ea quo minima fugiat laboriosam repellat, autem nulla.
  Ullam cumque expedita libero numquam natus odit corrupti atque facere obcaecati incidunt deleniti necessitatibus distinctio quo, exercitationem repellendus optio suscipit omnis voluptatum quis labore asperiores nulla! Ut soluta in adipisci!
  Quod deleniti ab, nemo aspernatur reprehenderit et, quo non dolores deserunt explicabo quasi nisi autem cum, nobis ducimus nam eveniet nostrum laudantium nesciunt ex? Unde sed reprehenderit totam repudiandae quisquam.
  Modi omnis fugit veritatis sint, cumque suscipit id a amet molestiae alias eius! Dolores accusamus doloribus, maxime non autem qui deserunt? Sapiente ab reiciendis incidunt explicabo nulla neque aliquid placeat?
  Cumque molestias temporibus minus commodi natus hic animi eos nostrum quis corporis ea soluta sit magnam, maiores expedita iste delectus voluptatum minima atque nulla. Quos amet vel fuga hic iure?
  Repellat eligendi ullam qui quia eius natus nisi deleniti vero earum atque? Deleniti quo laudantium, animi maiores tempora obcaecati adipisci accusantium quas, nisi pariatur deserunt totam nulla est, voluptatem optio!
  Totam veritatis, ipsam ea tempore atque iusto provident quasi ducimus sint labore sunt distinctio. Nisi laudantium architecto adipisci ducimus deserunt, aliquid minus explicabo dolorum vero in esse incidunt aut facilis.`.split(' ');

  const HandleSetTimer = (e) => {
    setTimer(e.target.value);
  };
  const startInput = (value) => {
    document.body.onkeyup = function(e){
      if(e.keyCode === 32){
    // if(value.endsWith(' ')){
      setUserInput(value);
      setActiveWordIndex(i => i + 1);
      const a  = userInput.split(' ');
      const b = a[a.length - 1]
      const word = b.trim();
        const newResult = [...correct];
        newResult[activeWordIndex] =word === typeData[activeWordIndex];
      setCorrect( newResult)  
      }
    else if(e.keyCode === 8 &&  value.endsWith(' ') && activeWordIndex > 0 ){
      setActiveWordIndex(i => i - 1);
      setUserInput(value)
    }
    else{
      setUserInput(value);
    }
  }
}

  return (
    <AppContext.Provider
      value={{
        Timer,
        userInput,
        activeWordIndex,
        correct,
        typeData,
        HandleSetTimer,
        startInput,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };