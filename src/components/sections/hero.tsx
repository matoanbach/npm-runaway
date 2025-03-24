"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useUserView } from "@/hooks/use-account";
import { ArrowRight } from "lucide-react";
// import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export const HeroSection = () => {
  // const { theme } = useTheme();
  const { view } = useUserView();

  return (
    <section className="container w-full">
      <div className="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-20 md:py-32">
        <div className="text-center space-y-8">
          <Badge variant="outline" className="text-sm py-2">
            <span className="mr-2 text-primary">
              <Badge>New</Badge>
            </span>
            <span> Update is out now! </span>
          </Badge>

          <div className="max-w-screen-md mx-auto text-center text-4xl md:text-6xl font-bold">
            <h1>
              Transform Your Food Business with{" "}
              <span className="text-transparent px-2 bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
                Data Analytics &amp; POS SaaS
              </span>
            </h1>
          </div>

          <p className="max-w-screen-sm mx-auto text-xl text-muted-foreground">
            Gain real-time insights, optimize inventory, and drive sales with our innovative cloud-based platform tailored for restaurants, catering, and grocery chains.
          </p>

          <div className="space-y-4 md:space-y-0 md:space-x-4">
            <Link href={view === "company" ? "/company-dashboard" : "/supplier-dashboard"} >
              <Button className="w-5/6 md:w-1/4 font-bold group/arrow ">
                Get Started
                <ArrowRight className="ml-2 group-hover/arrow:translate-x-1 transition-transform" />
              </Button>
            </Link>


            <Button asChild variant="secondary" className="w-5/6 md:w-1/4 font-bold">
              <Link href="https://github.com/matoanbach/npm-runaway" target="_blank">
                View on GitHub
              </Link>
            </Button>
          </div>
        </div>
        <div className="w-full flex mt-14 justify-center relative">
          <div className="absolute top-2 lg:-top-8 left-1/2 transform -translate-x-1/2 w-[80%] mx-auto h-24 lg:h-80 bg-primary/50 rounded-full blur-3xl z-0"></div>
          <div className="z-10">
            <Image
              src="/demo-light-min.png"
              width={1080}
              height={608}
              alt="demo"
              priority
              className="border rounded-xl shadow-sm dark:hidden"
            />
            <Image
              src="/demo-dark-min.png"
              width={1080}
              height={608}
              alt="demo-dark"
              priority
              className="border border-zinc-600 rounded-xl shadow-sm hidden dark:block dark:shadow-gray-500/5"
            />
            <Image
              src="/demo-mobile-light-min.png"
              width={228}
              height={494}
              alt="demo-mobile"
              className="border rounded-xl absolute bottom-0 right-0 hidden lg:block dark:hidden"
            />
            <Image
              src="/demo-mobile-dark-min.png"
              width={228}
              height={494}
              alt="demo-mobile"
              className="border border-zinc-600 rounded-xl absolute bottom-0 right-0 hidden dark:lg:block"
            />
          </div>
          <div className="absolute bottom-0 left-0 w-full h-20 md:h-28 bg-gradient-to-b from-background/0 via-background/50 to-background rounded-lg"></div>
        </div>
      </div>
    </section>
  );
};
