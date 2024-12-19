import { ChevronLeft, ChevronRight } from "lucide-react";

interface ToggleSidebarButtonProps {
  isOpen: boolean;
  toggle: () => void;
}

const ToggleSidebarButton: React.FC<ToggleSidebarButtonProps> = ({
  isOpen,
  toggle,
}) => {
  return (
    <button
      onClick={toggle}
      className="absolute top-4 -right-3 bg-background text-foreground rounded-full p-1 shadow-md hover:bg-accent hover:text-accent-foreground transition-colors"
      aria-label={isOpen ? "Minimize sidebar" : "Maximize sidebar"}
    >
      {isOpen ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
    </button>
  );
};

export default ToggleSidebarButton;
