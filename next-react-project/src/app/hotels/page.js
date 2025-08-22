async function getData() {
  const res = await fetch("https://snowtooth-hotel-api.fly.dev");
  return res.json();
}

// dymanic component to render inside the page
function HotelBlock({ name, capacity }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{capacity}</p>
    </div>
  );
}

export default async function Page() {
  const data = await getData();
  return (
    <main>
      <div>
        <h1>Hotels:</h1>
        <div>
          {data.map((hotel) => (
            <HotelBlock
              key={hotel.id}
              name={hotel.name}
              capacity={hotel.capacity}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
