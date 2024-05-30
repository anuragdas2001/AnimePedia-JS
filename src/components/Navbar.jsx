import { Link } from "react-router-dom";
export const Navbar = () => {
  const navlinks = [
    { name: "Home", link: "/", img: "/haunted-house.png" },
    { name: "Genre", link: "/genre", img: "/genre.png" },
    { name: "Manga", link: "/Manga", img: "/comic.png" },
    { name: "Favourites", link: "/Favourties", img: "/star.png" },
  ];
  return (
    <>
      <h1>Navbar</h1>
      <div>
      <ul className=" flex xs:gap-1 sm:gap-5 md:gap-10 lg:gap-20 covered-by-your-grace-regular ">
          {navlinks.map((item, index) => (
            <Link to={item.link} key={index}>
              <li
                key={index}
                className="flex items-center hover:bg-teal-500 rounded-md py-1 px-3"
              >
                <img src={item.img} className="h-8 w-8 mr-2" alt={item.name} />
                {item.name}
              </li>
            </Link>
          ))}
          </ul>
      </div>
    </>
  );
};
