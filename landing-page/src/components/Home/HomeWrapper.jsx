import HomeContents from "./HomeContents";
import HomeHeading from "./HomeHeading";

function HomeWrapper() {
  return (
    <div
      id="home"
      className="tracking-[-0.02em] select-none block box-border min-h-[54vh]"
    >
      <HomeHeading />
      <HomeContents />
    </div>
  );
}

export default HomeWrapper;
