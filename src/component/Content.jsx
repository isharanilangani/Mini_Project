import React from 'react'

import '../css/Content.css';
import right from '../images/right.png';
import wrong from '../images/wrong.png';

export default function Content() {
  return (
    <div class='content'>
        <table>
            <tr class='title' >
                <th id='username'>User</th>
                <th>BookId</th>
                <th>BookName</th>
                <th>No. of days requested to extend</th>
                <th></th>
            </tr>
            <tr class='user1' id='users'>
                <td>Deshani K.</td>
                <td>nov_0055</td>
                <td>Bana katha 100</td>
                <td>5 days</td>
                <td class='button'>
                    <button class='accept'>
                        <img src={right} alt='right' class='imageright'/>  Accept</button>
                    <button class='ignore'>
                    <img src={wrong} alt='wrong' class='imagewrong'/> Ignore</button>
                </td>
            </tr>
            <tr class='user2' id='users'>
                <td>Dulaj Mithun</td>
                <td>nov_0005</td>
                <td>MadoLDooowa</td>
                <td>2 days</td>
                <td>
                <button class='accept'>
                        <img src={right} alt='right' class='imageright'/>  Accept</button>
                    <button class='ignore'>
                    <img src={wrong} alt='wrong' class='imagewrong'/> Ignore</button>
                </td>
            </tr>
            <tr class='user3' id='users'>
                <td>Deelaka Silva</td>
                <td>nov_0002</td>
                <td>Virahawa</td>
                <td>3 days</td>
                <td>
                <button class='accept'>
                        <img src={right} alt='right' class='imageright'/>  Accept</button>
                    <button class='ignore'>
                    <img src={wrong} alt='wrong' class='imagewrong'/> Ignore</button>
                </td>
            </tr>
            <tr class='user4' id='users'>
                <td>Ishara Dabare</td>
                <td>otr_0099</td>
                <td>Iwum_pihum</td>
                <td>1 days</td>
                <td>
                <button class='accept'>
                        <img src={right} alt='right' class='imageright'/>  Accept</button>
                    <button class='ignore'>
                    <img src={wrong} alt='wrong' class='imagewrong'/> Ignore</button>
                </td>
            </tr>
            <tr class='user5' id='users'>
                <td>Niluka Dias</td>
                <td>otr_0599</td>
                <td>Baby Names</td>
                <td>4 days</td>
                <td>
                <button class='accept'>
                        <img src={right} alt='right' class='imageright'/>  Accept</button>
                    <button class='ignore'>
                    <img src={wrong} alt='wrong' class='imagewrong'/> Ignore</button>
                </td>
            </tr>   

        </table>
      
    </div>
  )
}
