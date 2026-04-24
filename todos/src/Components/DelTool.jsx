import React from 'react'

export default function DeleteButton({selected, delCallback}){
    return (
        <button onClick={()=>{
                    delCallback(selected);
                }
            }
            disabled={!selected}>
                Удалить
        </button>
    );
}