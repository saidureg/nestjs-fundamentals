import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <Link href="/about">
        <button className="btn btn-primary">About</button>
      </Link>
    </div>
  );
};

export default HomePage;
