import rup from "../assets/rup.svg";

const Link = ({ name, url }) => {
  return (
    <div className="py-2 px-6 rounded-full bg-neutral-900 hover:bg-neutral-800 duration-200
     transition-all ease-in">
      <a href={url} target="_blank" className="flex items-center gap-2">
        <img src={rup} width={20}/> {name}
      </a>
    </div>
  );
};

export default Link;
