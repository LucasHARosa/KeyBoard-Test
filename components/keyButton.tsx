interface KeyButtonProps {
  code: string;
  label: string;
  isPressed: boolean;
  className?: string;
  isClicked?: boolean;
}

export const KeyButton = ({ code, label, isPressed, isClicked, className = "" }: KeyButtonProps) => {
  // Define as classes base e escolhe a cor de acordo com o estado:
  const baseClasses = "p-4 rounded-xl text-sm font-medium transition-all shadow-md";
  const styleClasses = isPressed
    ? "bg-amber-400 text-blackdd"            // Tecla está pressionada no momento
    : isClicked
      ? "bg-teal-600 text-white"           // Tecla já foi clicada anteriormente
      : "bg-teal-100 text-black hover:bg-gray-300"; // Estado padrão

  return (
    <button className={`${baseClasses} ${styleClasses} ${className}`}>
      {label}
    </button>
  );
};