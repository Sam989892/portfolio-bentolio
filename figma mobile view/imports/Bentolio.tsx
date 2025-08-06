import svgPaths from "./svg-iu8vadswdw";
import imgLilcodermanPinkChairSittingOnTableInARoomInTheStyle8F5E5Aa938F84Af089F38572B0Ae93621 from "figma:asset/bdf05f127e983c7a87434379e33db88c745be221.png";
import imgImage from "figma:asset/ab325d5d46b804b1ce04547ea0b4bd6703d39370.png";

function Links() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row font-['Gilroy:Light',_sans-serif] items-center justify-between leading-[0] left-1/2 not-italic p-0 text-[#000000] text-[15px] text-left text-nowrap top-1/2 translate-x-[-50%] translate-y-[-50%] uppercase w-[334px]"
      data-name="LINKS"
    >
      <div className="relative shrink-0">
        <p className="block leading-[normal] text-nowrap whitespace-pre">
          Instagram
        </p>
      </div>
      <div className="relative shrink-0">
        <p className="block leading-[normal] text-nowrap whitespace-pre">
          Twitter
        </p>
      </div>
      <div className="relative shrink-0">
        <p className="block leading-[normal] text-nowrap whitespace-pre">
          Linkedin
        </p>
      </div>
    </div>
  );
}

function Socials() {
  return (
    <div
      className="absolute bg-[#fadcd9] h-[101px] overflow-clip rounded-[20px] top-[899px] w-[448px]"
      data-name="SOCIALS"
      style={{ left: "calc(66.667% + 8px)" }}
    >
      <Links />
    </div>
  );
}

function Arrow() {
  return (
    <div className="relative shrink-0 size-[38px]" data-name="ARROW">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 38 38"
      >
        <g id="ARROW">
          <path
            clipRule="evenodd"
            d={svgPaths.p17200c00}
            fill="var(--fill-0, black)"
            fillRule="evenodd"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function TopBar() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row items-end justify-between left-1/2 p-0 top-[30px] translate-x-[-50%] w-[400px]"
      data-name="TOP BAR"
    >
      <div className="font-['Gilroy:Light',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#000000] text-[15px] text-left text-nowrap whitespace-pre">
        <p className="block mb-0">Have some</p>
        <p className="block">questions?</p>
      </div>
      <Arrow />
    </div>
  );
}

function Contact() {
  return (
    <div
      className="absolute bg-[#f8afa6] h-[351px] overflow-clip rounded-[20px] top-[649px] w-[448px]"
      data-name="CONTACT"
      style={{ left: "calc(33.333% + 16px)" }}
    >
      <div className="absolute font-['Gilroy:Medium',_sans-serif] leading-[0] left-6 not-italic text-[#000000] text-[55px] text-left text-nowrap top-[259px]">
        <p className="block leading-[normal] whitespace-pre">Contact me</p>
      </div>
      <TopBar />
    </div>
  );
}

function CircleIcon() {
  return (
    <div className="absolute left-6 size-[38px] top-8" data-name="CIRCLE ICON">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 38 38"
      >
        <g clipPath="url(#clip0_2_86)" id="CIRCLE ICON">
          <path
            d={svgPaths.p21c04900}
            fill="var(--fill-0, #F8AFA6)"
            id="Vector"
          />
        </g>
        <defs>
          <clipPath id="clip0_2_86">
            <rect fill="white" height="38" width="38" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function About() {
  return (
    <div
      className="absolute bg-[#fadcd9] h-[351px] left-6 overflow-clip rounded-[20px] top-[649px] w-[448px]"
      data-name="ABOUT"
    >
      <div
        className="absolute font-['Gilroy:Light',_sans-serif] leading-[0] left-6 not-italic text-[#000000] text-[20px] text-left w-[296px]"
        style={{ top: "calc(50% - 20.5px)" }}
      >
        <p className="block leading-[25px]">
          Julia Huang is an innovative AI artist, renowned for blending
          cutting-edge technology with creative expression. Based in LA, she
          crafts unique digital art experiences accessible globally.
        </p>
      </div>
      <CircleIcon />
    </div>
  );
}

function Item4() {
  return (
    <div className="absolute contents left-6 top-[651px]" data-name="ITEM 4">
      <div className="absolute font-['Gilroy:Medium',_sans-serif] leading-[0] left-6 not-italic text-[#000000] text-[25px] text-left text-nowrap top-[651px]">
        <p className="block leading-[normal] whitespace-pre">Zephyr</p>
      </div>
    </div>
  );
}

function Item3() {
  return (
    <div className="absolute contents left-6 top-[538px]" data-name="ITEM 3">
      <div
        className="absolute h-0 left-1/2 top-[609px] translate-x-[-50%] w-[399px]"
        data-name="BORDER"
      >
        <div
          className="absolute bottom-0 left-0 right-0 top-[-2px]"
          style={
            { "--stroke-0": "rgba(248, 175, 166, 1)" } as React.CSSProperties
          }
        >
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            role="presentation"
            viewBox="0 0 399 2"
          >
            <line
              id="BORDER"
              stroke="var(--stroke-0, #F8AFA6)"
              strokeWidth="2"
              x2="399"
              y1="1"
              y2="1"
            />
          </svg>
        </div>
      </div>
      <div className="absolute font-['Gilroy:Medium',_sans-serif] leading-[0] left-6 not-italic text-[#000000] text-[25px] text-left text-nowrap top-[538px]">
        <p className="block leading-[normal] whitespace-pre">Verve</p>
      </div>
    </div>
  );
}

function Item2() {
  return (
    <div className="absolute contents left-6 top-[425px]" data-name="ITEM 2">
      <div
        className="absolute h-0 left-1/2 top-[497px] translate-x-[-50%] w-[399px]"
        data-name="BORDER"
      >
        <div
          className="absolute bottom-0 left-0 right-0 top-[-2px]"
          style={
            { "--stroke-0": "rgba(248, 175, 166, 1)" } as React.CSSProperties
          }
        >
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            role="presentation"
            viewBox="0 0 399 2"
          >
            <line
              id="BORDER"
              stroke="var(--stroke-0, #F8AFA6)"
              strokeWidth="2"
              x2="399"
              y1="1"
              y2="1"
            />
          </svg>
        </div>
      </div>
      <div className="absolute font-['Gilroy:Medium',_sans-serif] leading-[0] left-6 not-italic text-[#000000] text-[25px] text-left text-nowrap top-[425px]">
        <p className="block leading-[normal] whitespace-pre">Elara</p>
      </div>
    </div>
  );
}

function Image() {
  return (
    <div
      className="absolute h-[269px] left-6 overflow-clip rounded-2xl top-[85px] w-[399px]"
      data-name="IMAGE"
    >
      <div
        className="absolute bg-center bg-cover bg-no-repeat h-[400px] left-0 top-[-113px] w-[399px]"
        data-name="lilcoderman_pink_chair_sitting_on_table_in_a_room_in_the_style__8f5e5aa9-38f8-4af0-89f3-8572b0ae9362 1"
        style={{
          backgroundImage: `url('${imgLilcodermanPinkChairSittingOnTableInARoomInTheStyle8F5E5Aa938F84Af089F38572B0Ae93621}')`,
        }}
      />
    </div>
  );
}

function ArrowIcon() {
  return (
    <div
      className="absolute left-[397px] size-[26px] top-9"
      data-name="ARROW ICON"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 26 26"
      >
        <g id="ARROW ICON">
          <path
            clipRule="evenodd"
            d={svgPaths.pd563480}
            fill="var(--fill-0, black)"
            fillRule="evenodd"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Item1() {
  return (
    <div className="absolute contents left-6 top-[34px]" data-name="ITEM 1">
      <div
        className="absolute h-0 left-1/2 top-96 translate-x-[-50%] w-[399px]"
        data-name="BORDER"
      >
        <div
          className="absolute bottom-0 left-0 right-0 top-[-2px]"
          style={
            { "--stroke-0": "rgba(248, 175, 166, 1)" } as React.CSSProperties
          }
        >
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            role="presentation"
            viewBox="0 0 399 2"
          >
            <line
              id="BORDER"
              stroke="var(--stroke-0, #F8AFA6)"
              strokeWidth="2"
              x2="399"
              y1="1"
              y2="1"
            />
          </svg>
        </div>
      </div>
      <Image />
      <ArrowIcon />
      <div className="absolute font-['Gilroy:Medium',_sans-serif] leading-[0] left-6 not-italic text-[#000000] text-[25px] text-left text-nowrap top-[34px]">
        <p className="block leading-[normal] whitespace-pre">Musea</p>
      </div>
    </div>
  );
}

function Work() {
  return (
    <div
      className="absolute bg-[#fadcd9] h-[726px] overflow-clip rounded-[20px] top-[149px] w-[447px]"
      data-name="WORK"
      style={{ left: "calc(66.667% + 8px)" }}
    >
      <Item4 />
      <Item3 />
      <Item2 />
      <Item1 />
    </div>
  );
}

function Portrait() {
  return (
    <div
      className="absolute h-[476px] overflow-clip rounded-[20px] top-[149px] w-[330px]"
      data-name="PORTRAIT"
      style={{ left: "calc(41.667% + 14px)" }}
    >
      <div
        className="absolute bg-center bg-cover bg-no-repeat h-[556px] left-[-25px] top-[-19px] w-[355px]"
        data-name="IMAGE"
        style={{ backgroundImage: `url('${imgImage}')` }}
      />
    </div>
  );
}

function FlowerIcon() {
  return (
    <div
      className="absolute left-[416px] size-[119px] top-[34px]"
      data-name="FLOWER ICON"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 119 119"
      >
        <g clipPath="url(#clip0_2_74)" id="FLOWER ICON">
          <path
            d={svgPaths.p12a08980}
            fill="var(--fill-0, #F8AFA6)"
            id="Vector"
          />
        </g>
        <defs>
          <clipPath id="clip0_2_74">
            <rect fill="white" height="119" width="119" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SloganIntro() {
  return (
    <div
      className="absolute bg-[#fadcd9] h-[479px] left-6 overflow-clip rounded-[20px] top-[146px] w-[565px]"
      data-name="SLOGAN/INTRO"
    >
      <div
        className="absolute font-['Gilroy:Bold',_sans-serif] leading-[0] left-6 not-italic text-[#000000] text-[0px] text-left w-[475px]"
        style={{ top: "calc(50% - 14.5px)" }}
      >
        <p className="leading-none text-[56px]">
          <span>{`Artist Redefining `}</span>
          <span className="font-['Gilroy:Light_Italic',_sans-serif] not-italic">
            Architecture
          </span>
          <span>{` with AI-Driven Design`}</span>
        </p>
      </div>
      <FlowerIcon />
    </div>
  );
}

function Frame14() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-row font-['Gilroy:Light',_sans-serif] items-center justify-between leading-[0] ml-0 mt-0 not-italic p-0 relative text-[#000000] text-[16px] text-left text-nowrap w-[303px]">
      <div className="relative shrink-0">
        <p className="block leading-[normal] text-nowrap whitespace-pre">
          PROJECTS
        </p>
      </div>
      <div className="relative shrink-0">
        <p className="block leading-[normal] text-nowrap whitespace-pre">
          ABOUT
        </p>
      </div>
      <div className="relative shrink-0">
        <p className="block leading-[normal] text-nowrap whitespace-pre">
          CONTACT
        </p>
      </div>
    </div>
  );
}

function PageLinks() {
  return (
    <div
      className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0"
      data-name="PAGE LINKS"
    >
      <Frame14 />
    </div>
  );
}

function Nav() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row items-center justify-between leading-[0] p-0 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[1343px]"
      data-name="NAV"
      style={{ left: "calc(50% - 0.5px)" }}
    >
      <div className="font-['Gilroy:Light',_sans-serif] not-italic relative shrink-0 text-[#000000] text-[25px] text-left text-nowrap uppercase">
        <p className="leading-[normal] whitespace-pre">
          <span className="font-['Gilroy:Light_Italic',_sans-serif] not-italic">
            JULIA
          </span>{" "}
          <span className="font-['Gilroy:Medium',_sans-serif] not-italic">
            HUANG
          </span>
        </p>
      </div>
      <PageLinks />
    </div>
  );
}

function Header() {
  return (
    <div
      className="absolute bg-[#fadcd9] h-[101px] left-6 overflow-clip rounded-[20px] top-6 w-[1392px]"
      data-name="HEADER"
    >
      <Nav />
    </div>
  );
}

export default function Bentolio() {
  return (
    <div className="bg-[#f9f1f0] relative size-full" data-name="bentolio">
      <Socials />
      <Contact />
      <About />
      <Work />
      <Portrait />
      <SloganIntro />
      <Header />
    </div>
  );
}