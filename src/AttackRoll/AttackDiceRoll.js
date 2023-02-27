import React from 'react';
import './AttackDiceRoll.css'

/*
Used crtl + shift + n to open a second instance of VScode allowing me to see the code on two separate monitors rather than the side by side mode
*/

function AttackDiceRoll(){



    return<div>
        <h1 className='Attack-Dice-Header' >This is where the attack dice go</h1>
        <div className='Attack-Dice-Buttons'>
        <button >Add</button><button>Subtract</button><button>Roll</button><button>Clear</button>
        </div>
    </div>
}

export default AttackDiceRoll;