import "./Home.css";

export default function Home() {
  return (
    <>
      <div className="search">
        <input
          id="searchbar"
          type="text"
          name="search"
          placeholder="Search City.."
        />
      </div>
      <div className="city">
        <section>
          <div className="card">
            <img
              src="https://a.cdn-hotels.com/gdcs/production16/d239/e80fae7e-b9c9-4f83-9fd0-9e52858466a0.jpg"
              alt=""
            />
            <p>Îles de Santorin, Grèce</p>
          </div>
        </section>
        <section>
          <div className="card">
            <img
              src="https://res.klook.com/image/upload/Mobile/City/swox6wjsl5ndvkv5jvum.jpg"
              alt=""
            />
            <p>Ville de Paris, France</p>
          </div>
        </section>
        <section>
          <div className="card">
            <img
              src="https://www.perche-gouet.net/histoire/photos/communes/28196-01/13861.jpg"
              alt=""
            />
            <p>Illiers-Combray, France</p>
          </div>
        </section>
        <section>
          <div className="card">
            <img
              src="https://a2f6z9k6.rocketcdn.me/wp-content/uploads/2022/10/strasbourg-velo@bikezen.jpg"
              alt=""
            />
            <p>Strasbourg, France</p>
          </div>
        </section>
        <section>
          <div className="card">
            <img
              src="https://media.istockphoto.com/id/825428482/fr/photo/reykjavik-ville-capitale-de-lislande.jpg?s=612x612&w=0&k=20&c=UMrI56n-Kv4bg7lBaxQJnqMZ5nYdiC9TaS1bRC-BE_w="
              alt=""
            />
            <p>Reykjavik, Island</p>
          </div>
        </section>
        <section>
          <div className="card">
            <img
              src="https://www.eltiempo.com/files/image_640_428/uploads/2022/11/30/6387f1d093eb5.jpeg"
              alt=""
            />
            <p>Toronto, Canada</p>
          </div>
        </section>
        <section>
          <div className="card">
            <img
              src="https://i0.wp.com/leblogduherisson.com/wp-content/uploads/2020/06/flaner-a-lisbonne-1.jpg?resize=800%2C533&ssl=1"
              alt=""
            />
            <p>Lisbonne, Portugal</p>
          </div>
        </section>
        <section>
          <div className="card">
            <img
              src="https://tourisme.biarritz.fr/sites/default/files/promenades_a_biarritz.jpg"
              alt=""
            />
            <p>Biarritz, France</p>
          </div>
        </section>
        <section>
          <div className="card">
            <img
              src="https://resources.matcha-jp.com/resize/720x2000/2023/03/28-136333.webp"
              alt=""
            />
            <p>Osaka, Japon</p>
          </div>
        </section>
        <section>
          <div className="card">
            <img
              src="https://a.cdn-hotels.com/gdcs/production85/d1474/95ef4e66-fd92-41dc-99af-c7f628857eb6.jpg"
              alt=""
            />
            <p>Seville, Espagne</p>
          </div>
        </section>
      </div>
    </>
  );
}
