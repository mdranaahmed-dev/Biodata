/**
 * 
 * props = {
 *  Name: "Setu",
 *  Email: "setu@gmail.com",
 *  phone: "0123000449",
 *  github: "gitHub",
 *  slill: ["JS", "WP", "CSS", "HTML"],
 *  intarest: ["CHASS", "BOOTBALL", "VOLIBOL"],
 *  socailLink :[{platfromName: "FB", handle: "Facrbook.com"}, {platfromName: "LN", handle: "linkden.com"}]
 * }
 */

const BioData = (props) => {
    return (

        <div className="bio-data">
        <div className="parsonal-info">
          <h2>Bio Data of {props.name}</h2>
          <p>
            <strong>Email:</strong>
            {props.Email}
          </p>
          <p>
            <strong>Phone:</strong>
            {props.phone}
          </p>
          <p>
            <strong>GitHub:</strong>
            {props.github}
          </p>
        </div>
        <div className="my-skill">
          <h2>My Skill</h2>
          <ul>
            {props?.skill?.map(skill => (
                <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
        <div className="intarast">
          <h2>My intarast</h2>
          <ul>
            {props?.intrast?.map((intrast)=> (
                <li key={intrast}>{intrast}</li>
            ))}
          </ul>
        </div>

        <div className="socail-media">
          <h2>My socail Media</h2>
          <ul>
            {props?.socailLink?.map(socailLink => (
                <li key={socailLink.handle}><strong>{socailLink.platfromName}</strong>{socailLink.handle}</li>
            ))}
          </ul>
        </div>
      </div>
    )
}

export default BioData