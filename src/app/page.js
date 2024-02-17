import Calculator from "@/components/calculator/calculator";

export default function Home() {
  return (
    <>
      <div className="px-5 bg-back-top">
        <div className="w-full h-screen flex justify-center items-center bg-back">
          <Calculator />
        </div>
      </div>
    </>
  );
}
