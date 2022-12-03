/** @format */

import { sleep } from "k6";
import http from "k6/http";

export const options = {
  duration: "1m",
  vus: 100,
};

export default function () {
  setTimeout(() => {console.log("15secs")},"15000",)
  http.get("http://catchup.hng.tech");
  sleep(3);
}
