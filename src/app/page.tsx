import QuantityInfo from "@/components/QuantityInfo";

export default function Home() {
  return <>
    <main className="w-full flex flex-col items-center justify-center p-20 max-sm:p-10">
      <section className="w-full flex justify-center flex-wrap gap-8">
        <QuantityInfo quantity={"200"} text="International Brands" />
        <div className="hidden sm:block border-r border-gray-300"></div>
        <QuantityInfo quantity={"2,000"} text="High-Quality Products" />
        <div className="hidden md:block border-r border-gray-300"></div>
        <QuantityInfo quantity={"30,000"} text="Happy Customers" />
      </section>
    </main>
  </>
}
