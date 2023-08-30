import Image from "next/image";

const AboutItem = ({ title, content, image, reverse }) => {
  return (
    <section
      className={`px-48 flex gap-8 items-center ${
        reverse ? "flex-row-reverse" : ""
      }`}
    >
      <div className="w-full md:w-2/5">
        <Image className="w-full max-w-md" src={image} alt={title} />
      </div>
      <div className="w-full md:w-3/5">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p>{content}</p>
      </div>
    </section>
  );
};

export default AboutItem;
