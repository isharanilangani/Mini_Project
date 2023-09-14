import React from 'react'

import '../css/Book.css';
import '../css/Content.css';
import Navigation from '../component/Navigationbar.jsx';
import Sidebarcode from '../component/Sidebar.jsx';
import right from '../images/right.png';
import wrong from '../images/wrong.png';

export default function Book() {
  return (
    <div class='fullpage'>
        <div>
            <Sidebarcode/>
        </div>
        <div class='bars'>
            <div>
                <Navigation/>
            </div>
            <div class='content'>
            <table>
              <tr class='title' >
                <th id='username'>Book  Name</th>
                <th>BookId</th>
                <th>Book Author</th>
                <th>Category</th>
                <th>Language</th>
                <th></th>
              </tr>
              <tr class='user1' id='users'>
                <td>Bana katha 100</td>
                <td>nov_0055</td>
                <td>karidawasam</td>
                <td>religious</td>
                <td>Sinhala</td>
                <td class='button'>
                    <button class='accept'>
                        <img src={right} alt='right' class='imageright'/>  Update</button>
                    <button class='ignore'>
                    <img src={wrong} alt='wrong' class='imagewrong'/> Delete</button>
                </td>
            </tr>
            <tr class='user2' id='users'>
                <td>MadoL Doowa</td>
                <td>nov_0005</td>
                <td>matin wikramasingha</td>
                <td>Novel</td>
                <td>Sinhala</td>
                <td>
                <button class='accept'>
                        <img src={right} alt='right' class='imageright'/>  Update</button>
                    <button class='ignore'>
                    <img src={wrong} alt='wrong' class='imagewrong'/> Delete</button>
                </td>
            </tr>
            <tr class='user3' id='users'>
                <td>Virahawa</td>
                <td>nov_0002</td>
                <td>monika harshani</td>
                <td>Novel</td>
                <td>Sinhala</td>
                <td>
                <button class='accept'>
                        <img src={right} alt='right' class='imageright'/>  Update</button>
                    <button class='ignore'>
                    <img src={wrong} alt='wrong' class='imagewrong'/> Delete</button>
                </td>
            </tr>
            <tr class='user4' id='users'>
                <td>Iwum_pihum</td>
                <td>otr_0099</td>
                <td>pabilis silva</td>
                <td>Cooking</td>
                <td>Sinhala</td>
                <td>
                <button class='accept'>
                        <img src={right} alt='right' class='imageright'/>  Update</button>
                    <button class='ignore'>
                    <img src={wrong} alt='wrong' class='imagewrong'/> Delete</button>
                </td>
            </tr>
            <tr class='user5' id='users'>
                <td>Baby Names</td>
                <td>otr_0599</td>
                <td>samanthi ahubudu</td>
                <td>kids books</td>
                <td>English</td>
                <td>
                <button class='accept'>
                        <img src={right} alt='right' class='imageright'/>  Update</button>
                    <button class='ignore'>
                    <img src={wrong} alt='wrong' class='imagewrong'/> Delete</button>
                </td>
            </tr>   
            <tr class='user6' id='users'>
                <td>Emma</td>
                <td>otr_0340</td>
                <td>jane austen</td>
                <td>Novel</td>
                <td>English</td>
                <td>
                <button class='accept'>
                        <img src={right} alt='right' class='imageright'/>  Update</button>
                    <button class='ignore'>
                    <img src={wrong} alt='wrong' class='imagewrong'/> Delete</button>
                </td>
            </tr>   

        </table>
           <button class='newbook'>New Book</button>
    
    </div>
        </div>
    </div>
  )
}
