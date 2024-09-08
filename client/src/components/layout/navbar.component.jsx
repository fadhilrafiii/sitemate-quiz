import { useLocation } from "react-router-dom";

const routes = [
  {
    url: "/book",
    title: "Book",
  },
  {
    url: "/movie",
    title: "Movie",
  },
];

const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <header className="px-4 h-[72px] bg-purple-800 flex justify-between items-center">
      <div>
        <h4 className="font-semibold text-white text-xl">SiteMate Quiz</h4>
      </div>
      <nav>
        <ul className="flex gap-8 items-center justify-end">
          {routes.map((route) => (
            <li
              key={route.url}
              className={`text-white ${
                route.url === pathname ? "underline" : ""
              }`}
            >
              {route.title}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
