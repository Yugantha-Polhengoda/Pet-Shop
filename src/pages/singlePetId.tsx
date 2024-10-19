// Create a file at app/pages/singlePet/[id].tsx or pages/singlePet/[id].js (depending on your structure)
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function singlePet() {
  const router = useRouter();
  const { id } = router.query;
  const [pet, setPet] = useState(null);

  useEffect(() => {
    // Fetch the pet data using the ID from the query params
    if (id) {
      fetch(`https://monitor-backend-rust.vercel.app/api/pets/${id}`)
        .then((response) => response.json())
        .then((data) => setPet(data))
        .catch((error) => console.error("Error fetching pet details:", error));
    }
  }, [id]);

  if (!pet) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>{pet.breed}</h1>
      <p>Price: {pet.price}</p>
      <p>Gender: {pet.gender}</p>
      <p>Age: {pet.age}</p>
      <img src={pet.image} alt={pet.name} />
      {/* Add more details as needed */}
    </div>
  );
}
