import { useState } from "react";

export default function Player({ initialName, symbol, isActive, onChangeName }) {
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    function handleEditClick() {

        //setIsEditing(!isEditing); bu yavaş yöntemdir. Çünkü önceki state değerine bağlı olarak yeni state değerini belirler. Bu nedenle, önceki state değerini kullanmak için bir fonksiyon kullanmak daha güvenlidir.
        setIsEditing((editing) => !editing);
        if (isEditing) {
            onChangeName(symbol, playerName);
        }
    }

    function handleChange(e) { //e ya da event yaygın olarak kullanılır
        setPlayerName(e.target.value); // two way binding : input value değiştiğinde state güncellenir ve state değiştiğinde input value güncellenir. Bu sayede input value ve state her zaman senkronize olur.
    }


    let editablePlayerName = <span className="player-name">{playerName}</span>;



    if (isEditing) {
        editablePlayerName = <input type="text" required value={playerName} onChange={handleChange} />

    }
    return (
        <li className={isActive ? "active" : undefined}>
            <span className="player">
                {editablePlayerName}

                <span className="player-symbol">{symbol}</span>

            </span>
            <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
        </li>
    )



}