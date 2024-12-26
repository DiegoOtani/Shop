import QuantityInfo from "@/components/QuantityInfo";

export default function Home() {
  return <>
    <main className="w-full flex flex-col items-center justify-center">
      <section className="w-full flex justify-center space-x-8 flex-wrap">
        <QuantityInfo quantity={"200"} text="International Brands" />
        <div className="border-r border-gray-300"></div>
        <QuantityInfo quantity={"2,000"} text="High-Quality Products" />
        <div className="hidden sm:block border-r border-gray-300"></div>
        <QuantityInfo quantity={"30,000"} text="Happy Customers" />
      </section>
    </main>
  </>
}
