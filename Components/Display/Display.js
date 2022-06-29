import Image from "next/image";

export default function Display() {
  return (
    <>
      <Image
        src="/ovdat.jpg"
        alt="none"
        width={500}
        height={350}
        value="עבדת"
      />
    </>
  );
}
