import {
  SiNextdotjs,
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiPostcss,
  SiJest,
} from "react-icons/si";
import { FaFeatherAlt, FaRegHandPeace } from "react-icons/fa";
import StyleMode from "./StyleMode";
export default function HelloWord() {
  return (
    <div>
      <h1 className="flex text-3xl font-bold m-4">
        Boilerplate <FaFeatherAlt className="ml-2" />
      </h1>
      <hr className="border-1" />
      <div className="m-2">
        <StyleMode />
      </div>
      <ul className="text-xl">
        <li className="flex items-center">
          <SiReact className="mr-2" /> React.Js
        </li>
        <li className="flex items-center">
          <SiTypescript className="mr-2" /> TypeScript
        </li>
        <li className="flex items-center">
          <SiNextdotjs className="mr-2" /> Next.js
        </li>
        <li className="flex items-center">
          <SiTailwindcss className="mr-2" /> Tailwind Css
        </li>
        <li className="flex items-center">
          <SiPostcss className="mr-2" /> PostCss
        </li>
        <li className="flex items-center">
          <SiJest className="mr-2" /> Jest
        </li>
        <li className="flex items-center">
          <FaRegHandPeace className="mr-2" /> React-Icon
        </li>
      </ul>
    </div>
  );
}
