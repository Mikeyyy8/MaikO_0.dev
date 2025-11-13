const Project = ({ name, url, dscr }) => {
  return (
    <div className="border border-neutral-800 rounded-lg p-2 hover:bg-neutral-900 duration-200">
      <a href={url} className="flex items-center gap-4">
        <div className="border border-neutral-800 h-10 w-10 rounded">
          <img
            src=""
            alt=""
            className=""
          />
        </div>
        <div>
          <p>{name}</p>
          <p>{dscr}</p>
        </div>
      </a>
    </div>
  );
};

export default Project;
