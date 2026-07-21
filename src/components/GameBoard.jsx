
import { useState } from "react";


export default function GameBoard({ onSelectSquare, board }) {




    // const [gameBoard, setGameBoard] = useState(initialGameBoard);

    // function handleSelectSquare(rowIndex, colIndex) {
    //     setGameBoard((prevGameBoard) => {

    //         const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];//yeni bir dizi oluşturuyor. innerarray ile satırları da kopyalıyoruz.
    //         updatedBoard[rowIndex][colIndex] = activePlayerSymbol; //yeni dizinin ilgili hücresine aktif oyuncunun sembolünü atıyor.
    //         return updatedBoard;//yeni diziyi döndürüyor
    //     });

    //     onSelectSquare();


    // }

    return <ol id="game-board">
        {board.map((row, rowIndex) => <li key={rowIndex} >

            <ol>
                {row.map((playerSymbol, colIndex) => <li key={colIndex}>
                    <button onClick={() => onSelectSquare(rowIndex, colIndex)} disabled={playerSymbol !== null}>
                        {playerSymbol}
                    </button>
                </li>)}
            </ol>

        </li>)}







    </ol>;










}