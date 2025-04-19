import { Button } from "@/common/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/common/components/ui/card";

import { ArrowRight, MapPin, Shapes } from "lucide-react";
import Image from "next/image";
import React from "react";

const ProductCard = () => {
  return (
    <Card className="max-w-xs shadow-none">
      <CardContent className="text-[15px] text-muted-foreground px-5 gap-2 flex flex-col">
        <div className="relative w-full aspect-video bg-muted rounded-xl overflow-hidden">
          <Image
            src="/images/download.jfif"
            alt="location"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="flex flex-row gap-1">
          <MapPin className="text-purple-500 h-5 w-5" />
          <p className="text-gray-500">Cambodia</p>
        </div>
        <p className="text-xl font-semibold">Angkor Wat,Trip </p>
        <p>3 Days</p>
        <p>
          Explore a collection of Shadcn UI blocks and components, ready to
          preview and copy.
        </p>
      </CardContent>

      <CardFooter>
        <Button className="/blocks">
          Explore Blocks <ArrowRight />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
