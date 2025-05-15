import { ChevronsUpDown } from "lucide-react";
import { FunctionComponent } from "react";

export const Selector: FunctionComponent = () => {
  return (
    <div className="container flex items-center gap-2 justify-between w-full p-2">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center text-xs font-semibold text-primary">
          FA
        </div>
        <p className="text-sm font-semibold text-sidebar-foreground">
          Filial A
        </p>
      </div>
      <ChevronsUpDown className="w-4 h-4 text-sidebar-foreground" />
    </div>
  );
};
