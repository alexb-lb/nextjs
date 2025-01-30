import HoverBorderGradientDemo from "@/components/common/HoverBorderGradientDemo";

const Company = () => {
  return (
    <section className="lg:py-[100px] py-[50px] text-[#444444]">
      <h1 className="title2 font-semibold">About the Company</h1>
      <h6 className="lg:py-10 py-5 lg:text-2xl text-lg">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis vel
        possimus vero. Aliquid, minima?
      </h6>
      <p className="lg:text-lg text-sm">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor suscipit
        voluptates nulla vitae beatae at ad iure quas recusandae doloribus,
        quaerat aliquam incidunt debitis eos quasi necessitatibus, ratione
        tempore fugit voluptate. Voluptas excepturi, molestias quo impedit
        sapiente dolorem aperiam saepe corporis hic pariatur quibusdam officiis
        deserunt, delectus repudiandae, cum nemo? Aut doloremque magni doloribus
        deleniti corporis autem sint beatae laboriosam ex voluptatum tenetur
        perspiciatis reiciendis obcaecati, quisquam dolores suscipit provident
        sed tempora quam delectus. Hic nobis facilis rem sunt placeat non animi
        ipsam aspernatur dolore, quisquam perferendis, officiis recusandae?
      </p>
      <p className="lg:py-10 py-5 lg:text-lg text-sm">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam nihil
        saepe blanditiis commodi alias aperiam. Velit vel facere voluptatem
        quibusdam?
      </p>
      <div className="w-full flex justify-start">
        <HoverBorderGradientDemo content="Apply Now" />
      </div>
    </section>
  );
};
export default Company;
