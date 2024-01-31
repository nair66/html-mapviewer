interface Hello {
  message: string;
}

const key = "AIzaSyBNLrJhOMz6idD05pzfn5lhA-TAw-mAZCU";

import { Company } from "./Company";
import { CustomMap } from "./CustomMap";
import { User } from "./User";

const user = new User();
const company = new Company();
document.querySelector("h1")!.innerText = "Hello from typescript";

const mapDiv: HTMLElement = document.querySelector("#map")!;
const map = new CustomMap(mapDiv);
map.addMarker(user);
map.addMarker(company);

// console.log({ user }, { company });
