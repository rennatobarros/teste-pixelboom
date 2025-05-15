import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { ComponentProps } from "react";
import { cn } from "@/lib/utils";

type SearchInputProps = ComponentProps<typeof Input>;

export const SearchInput = ({ className, ...props }: SearchInputProps) => {
  return (
    <div className="relative w-full">
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />
      <Input className={cn("pl-9", className)} {...props} />
    </div>
  );
};
