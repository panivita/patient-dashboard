import Image from "next/image";
import { TwoColumnSection } from "./components/TwoColumnSection";
import { partnerImagesData } from "./data/partner-images";

export default function Home() {
  return (
    <main className="w-full md:w-2/3 p-16 overflow-hidden m-auto bg-white">
      <Image width="120" height="120" src="./img/logo.svg" alt="logo" priority />
      <span>
        We’re digital health specialists, creating life-changing solutions
      </span>
      <small>
        ISO 13485:2016 certified developer of SaMD and GxP Solutions
      </small>
      <div>
        Our mission is to develop digital health products that bring research,
        care, and technology together with the ultimate goal of helping people
        live longer and better lives.
      </div>
      <img src="./img/company-hero.jpg" alt="company hero" />
      <TwoColumnSection
        description={[
          {
			id: '1',
            text: "We envision a connected healthcare industry that efficienctly develops individualized treatments for patients and empowers practitioners to choose and manage the right treatments.",
          },
          {
			id: '2',
            text: "As an ISO13485:2016 certified developer of regulated digital health products, Dawn delivers value throughout the entire project lifecycle from concept and launch, to ongoing maintenance, support, and user acquisition.",
          },
        ]}
        title={"Code to Save Lives"}
        big_text={
          "Dawn provides life-changing digital health therapies driving improved patient outcomes beyond the pill. We deliver strategic consulting and develop innovative digital health solutions in close collaboration with the pharmaceutical, medical device, and biotech industries."
        }
        image_src={"./img/gallery1.jpg"}
      />
      <span>Partners</span>
      <div className="flex flex-wrap justify-between md:justify-normal md:gap-[5%]">
		{partnerImagesData.map(({image_src, alt, id})=> (
			<img src={image_src} alt={alt} key={id} className="w-5/12 md:w-1/5"/>
		))}
      </div>
      <TwoColumnSection
        description={[
          {
			id: '1',
            text: "Working at Dawn Health is more than just a job. We are not just looking for new employees. We are looking for deeply passionate souls, gifted minds, innovators, team players, entrepreneurs and people who believe they can change the world. We love to build things, change the status quo and we drive a new digital health agenda that will impact 1 million patients by 2030.",
          },
        ]}
        title={"Want to do meaningful work? Join us!"}
        big_text={
          "We are a passionate and dedicated mix of designers, engineers, regulatory and quality specialists and business consultants who want to make a difference in the lives of people living with diseases."
        }
        image_src={"./img/gallery6.jpg"}
      />
    </main>
  );
}
