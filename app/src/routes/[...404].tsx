import { Title } from "@solidjs/meta";
import { HttpStatusCode } from "@solidjs/start";
import "public/less/notfound.less";

export default function NotFound() {
  return (
    <>
      <Title>Not Found</Title>
      <HttpStatusCode code={404} />
      <p class="notfound-message">404, Page not found &#128546;</p>
    </>
  );
}
