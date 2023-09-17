'use client'
import '@picocss/pico'

export default function Home() {

  const weapons = ['CZ75 - Auto',
    'Desert Eagle',
    'Dual Berettas',
    'Five - SeveN',
    'Glock - 18',
    'P2000',
    'P250',
    'R8 Revolver',
    'Tec - 9',
    'USP - S',
    'MAG - 7',
    'Nova',
    'Sawed - Off',
    'XM101 4',
    'M249',
    'Negev',
    'MAC - 10',
    'MP5 - SD',
    'MP7',
    'MP9',
    'P90',
    'PP - Bizon',
    'UMP - 45',
    'AK - 47',
    'AUG',
    'FAMAS',
    'Galil AR',
    'M4A1 - S',
    'M4A4',
    'SG 553',
    'AWP',
    'G3SG1',
    'SCAR - 20',
    'SSG 08',
    'C4 - BOMB',
    'DECOY',
    'FLASHBANG',
    'FRAG GRENADE',
    'INCENDIARY GRENADE',
    'MOLOTOV',
    'SMOKE GRENADE',
    'ZEUS X27',
    'DEFUSE KIT',
    'KELVAR + HELMET',
    'KELVAR',
    'HELMET',
  ]

  return (
    <div >
      <h1 >What do you want to do?</h1>
      <select type="select" >
        <option value="buy">Buy</option>
        <option value="equip">Equip</option>
      </select>
      {/* <button >chain action</button> */}
      <button >submit</button>
      <input type="text" placeholder="select the weapon"></input>


    </div>
  )
}
