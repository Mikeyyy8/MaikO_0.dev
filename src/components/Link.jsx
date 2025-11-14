import rup from "../assets/rup.svg";

const Link = ({ name, url }) => {
  return (
      <a href={url} target="_blank" className="flex h-10 px-4 place-items-center place-content-center rounded-full bg-neutral-900 hover:bg-neutral-800 duration-200
     transition-all ease-in">
        <img src={rup} width={20}/> {name}
      </a>
  );
};

export default Link;
