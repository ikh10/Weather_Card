import React, { useState } from 'react'
const blubOffImg = `https://th.bing.com/th/id/R.4c16cb66cd64a2c443a74878ac4dfefa?rik=QlWUW5i0jmQJdw&riu=http%3a%2f%2fstevegumaer.files.wordpress.com%2f2013%2f10%2flight-bulb.jpg&ehk=duH3kV8Yft5SwrpNUCX%2feCMqmI%2fs%2fqSEU%2fMJDAA3R6Q%3d&risl=&pid=ImgRaw&r=0`;
const bulbOnImg = `https://th.bing.com/th/id/OIP.RZnLzFsFh7tqQF_NqQlfEQAAAA?rs=1&pid=ImgDetMain`;
const BulkToggle = () => {
    const [isOn, setIsOn] = useState(false);
    const toggleBlub = () =>{
        setIsOn(!isOn);
    }
  return (
    <div>
        BulbToggle
        <br /><br />
      <img src={isOn ? bulbOnImg : blubOffImg} alt="bulboff.png" />
      {/* <img src="(bulbOnImg)" alt="bulbon.png" /> */}
      <button onClick={toggleBlub}>Click ME</button>
    </div>
  )
}

export default BulkToggle
