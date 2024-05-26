
//bikin object

const planet=[
  {id:1,name:"Merkurius",jarak:"57,9 juta km",gambar:"/merkurius.jpg"},
  {id:2,name:"Venus",jarak:"108 juta km",gambar:"/venus.jpg"},
  {id:3,name:"Bumi",jarak:"150 juta km",gambar:"/bumi.jpg"},
  {id:4,name:"Mars",jarak:"228 juta km",gambar:"/mars.jpg"},
  {id:5,name:"Jupiter",jarak:"779 juta km",gambar:"jupiter.jpg"},
  {id:6,name:"Uranus",jarak:"1.430 juta km",gambar:"uranus.jpg"},
  {id:7,name:"Saturnus",jarak:"2.880 juta km",gambar:"saturnus.jpg"},
  {id:8,name:"Neptunus",jarak:"4.500 juta km",gambar:"neptunus.jpg"}
]

const judul = "Planet - Planet";
const nama = "Hello Tisatun R.F";

export function Header() {
  const displayNama = nama || "Tanpa Nama";

  return (
    <header className="header">
      <p className="judul">{judul}</p>
      <p className="nama">{displayNama}</p>
    </header>
  );
}

export default function App()
{
  return(
    <>
    <body>
    <Header/>
    <div className="container">
      <div className="container-luar">
      {planet.map((panggil)=>(
        <div className="container-dalam">
          <img src={panggil.gambar} alt=""/>
          <p>{panggil.name}</p>
          <p>Jarak : {panggil.jarak}</p>  
        </div>
      ))}
      </div>
     
    </div>
    </body>
    </>
  
    
  )
    
}

