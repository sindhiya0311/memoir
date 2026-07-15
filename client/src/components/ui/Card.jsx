const Card = ({ children, className = "" }) => {
  return (
    <div
      className={`
      rounded-3xl
      border
      border-slate-200
      bg-white
      shadow-xl
      ${className}
    `}
    >
      {children}
    </div>
  );
};

export default Card;
