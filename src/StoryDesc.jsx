import React from "react";
import { Card, CardContent, CardDescription,
    CardHeader,
    CardTitle,} from "./components/ui/card";

function StoryDesc( {description} ) {
  return (
    <div>
      <Card className=" m-5 bg-gradient-to-l from-[#a8ff78] to-[#78ffd6] shadow-lg">
      <CardHeader>
        <CardTitle>Story Description:</CardTitle>
      </CardHeader>
        <CardContent className="mx-5 mb-8 p-2 border border-black rounded-md text-center">{description}</CardContent>
      </Card>
    </div>
  );
}

export default StoryDesc;
