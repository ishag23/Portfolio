import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";

const AboutDetails = () => {
  return (
    <section className="py-5 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6  md:gap-8 w-full">
        <ItemLayout
          className={
            " col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="  text-xl md:text-2xl text-left w-full capitalize">
            Architect of Enchantment
          </h2>
          <p className="font-light  text-xs sm:text-sm md:text-base   ">
           
As a Digital Sorcerer at SatSure since 2023, I've been conjuring dynamic solutions in the mystical realm of satellite data analytics. With over two years of web development wizardry under my belt, I've mastered spells like HTML5, JavaScript, CSS3, and Java to craft enchanting products that leave users spellbound.

My journey in the tech realm is fueled by a passion for innovation that rivals even the most daring adventurers. At SatSure, I've wielded my magic to boost user engagement and retention rates, turning ordinary projects into extraordinary feats of digital wizardry.

Armed with a Bachelor of Technology degree in Computer Science and a treasure trove of online certifications, I'm always eager to expand my horizons and tackle new challenges head-on. Whether it's collaborating with fellow wizards or embarking on quests that push the boundaries of innovation, I'm always ready to make magic happen.

So, let's join forces and weave spells that defy convention. Reach out, and let's embark on a journey to the digital unknown together.
          </p>
        </ItemLayout>

        <ItemLayout
          className={" col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-2xl">
          Fields of exploration: <sub className="font-semibold text-base">Product Management, Content Writing, Freelancing</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            2+{" "}
            <sub className="font-semibold text-base">years of experience</sub>
          </p>
        </ItemLayout>

 

        <ItemLayout className={"col-span-full"}>
          <img
            className="w-full h-auto"
            src={`https://skillicons.dev/icons?i=appwrite,aws,babel,bitbucket,bootstrap,css,figma,firebase,git,github,html,js,jquery,mysql,nextjs,nodejs,npm,postgres,react,redux,jest,sass,typescript,threejs,vscode`}
            alt="CodeBucks"
            loading="lazy"
          />
        </ItemLayout>

      </div>
    </section>
  );
};

export default AboutDetails;
