import FooterAbout from "@/components/FooterAbout";
import FooterCopyright from "@/components/FooterCopyright";
import FooterIllust from "@/components/FooterIllust";
import FooterInfo from "@/components/FooterInfo";

function FooterBar() {
  return (
    <footer className="relative w-full h-full">
      <div className="footerWrapper p-5 grid place-content-start max-w-[73.75rem] absolute bottom-5 left-1/2 -translate-x-1/2">
        <FooterAbout />
        <FooterInfo />
        <FooterCopyright />
        <FooterIllust />
      </div>
    </footer>
  );
}

export default FooterBar;
