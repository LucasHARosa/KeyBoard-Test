interface KeyButtonProps {
  code: string;
  label: string;
  isPressed: boolean;
  className?: string;
  isClicked?: boolean;
}

export const KeyButton = ({ label, isPressed, isClicked, className = "" }: KeyButtonProps) => {

  const baseClasses = "p-4 rounded-xl text-sm font-medium transition-all shadow-md";
  const styleClasses = isPressed
    ? "bg-amber-400 text-blackdd"
    : isClicked
      ? "bg-teal-600 text-white"
      : "bg-teal-100 text-black hover:bg-gray-300";

  return (
    <button className={`${baseClasses} ${styleClasses} ${className}`}>
      {label}
    </button>
  );
};