import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { Tent } from "lucide-react";

function Logo() {
  return (
    <Button size="icon" asChild>
      <Link href="/">
        <Tent className="w-6 h-6" />
      </Link>
    </Button>
  );
}

export default Logo;
