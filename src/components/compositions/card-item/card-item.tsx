import { Card, CardDescription, CardTitle } from "@/components/ui/card";

export const CardItem = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <Card>
      <CardTitle>{title}</CardTitle>
      <CardDescription className="font-serif">{description}</CardDescription>
    </Card>
  );
};
