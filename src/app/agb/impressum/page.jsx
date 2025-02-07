import Image from "next/image";
const page = () => {
  return (
    <div className="bg-white">
      <Image
        src="/impressum-1.png"
        className="mb-8"
        width={800}
        height={800}
        alt=""
      />
      <Image src="/impressum-2.png" width={600} height={600} alt="" />
    </div>
  );
};

export default page;
