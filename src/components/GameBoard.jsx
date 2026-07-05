
import { useState } from "react";

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

export default function GameBoard({ onSelectSquare, activePlayerSymbol }) {

    const [gameBoard, setGameBoard] = useState(initialGameBoard);

    function handleSelectSquare(rowIndex, colIndex) {
        setGameBoard((prevGameBoard) => {

            const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];//yeni bir dizi oluşturuyor. innerarray ile satırları da kopyalıyoruz.
            updatedBoard[rowIndex][colIndex] = activePlayerSymbol; //yeni dizinin ilgili hücresine aktif oyuncunun sembolünü atıyor.
            return updatedBoard;//yeni diziyi döndürüyor
        });

        onSelectSquare();


    }

    return <ol id="game-board">
        {gameBoard.map((row, rowIndex) => <li key={rowIndex} >

            <ol>
                {row.map((playerSymbol, colIndex) => <li key={colIndex}>
                    <button onClick={() => handleSelectSquare(rowIndex, colIndex)}>
                        {playerSymbol}
                    </button>
                </li>)}
            </ol>

        </li>)}







    </ol>;










}