export default function DashboardHome() {
  return (
    <div>
      <div
        className="hero min-h-screen w-full"
        style={{
          width: "1100px",
          height: "500px",
          backgroundImage:
            "url(https://img.freepik.com/free-photo/delicious-burger-with-fresh-ingredients_23-2150857908.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="w-[700px]">
            <h1 className="mb-5 text-5xl w-full  font-bold">
              Welcome to Dashboard
            </h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
}
