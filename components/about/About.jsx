import AboutItem from "./AboutItem";
import Tree from "../../assets/tree.png";

const dummyDate = {
  title: "Lorem Ipsum",
  content:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
};

const About = () => {
  return (
    <section className="mt-24">
      <h2 className="text-4xl font-bold text-primaryGreen text-center">
        About Us
      </h2>
      <section className="mt-18">
        <AboutItem
          title={dummyDate.title}
          content={dummyDate.content}
          image={Tree}
        />
        <AboutItem
          title={dummyDate.title}
          content={dummyDate.content}
          image={Tree}
          reverse
        />
      </section>
    </section>
  );
};

export default About;
