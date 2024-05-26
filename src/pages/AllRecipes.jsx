import RecepiCard from "../components/cards/RecepiCard";

export default function AllRecipes({ recipes }) {
  console.log(recipes); // Log the received recipes prop
  return (
    <div className="mx-16 mb-11">
      {/* <h1 className="text-4xl my-20 italic bg-orange-500 text-white w-[400px] mx-auto rounded pb-1 text-center">
        Our Newest Recipes
      </h1> */}
      <div className="grid lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-2 gap-6">
        {recipes?.slice(0, 6)?.map((recipe) => (
          <RecepiCard key={recipe?.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}
