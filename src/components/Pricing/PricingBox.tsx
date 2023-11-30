import React from "react";

interface PricingBoxProps {
  price: any;
  purchaseLink: string;
  packageName: string;
  btn: string;
  popular?: boolean;
  subtitle: string;
  children: React.ReactNode;
}

const PricingBox = (props: PricingBoxProps) => {
  const { price, purchaseLink, packageName, subtitle, children, btn, popular } =
    props;

  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.createElement(child.type, { popular, ...child.props });
    }
    return child;
  });

  return (
    <div className="w-full px-4 md:w-1/2 lg:w-1/3">
      <div
        className="shadow-pricing dark:bg-dark-2 relative z-10 mb-10 overflow-hidden rounded-xl bg-white px-8 py-10 sm:p-12 lg:px-6 lg:py-10 xl:p-14"
        data-wow-delay=".1s"
      >
        {popular && (
          <p className="bg-primary absolute right-[-50px] top-[60px] inline-block -rotate-90 rounded-bl-md rounded-tl-md px-5 py-2 text-base font-medium text-white">
            Recommended
          </p>
        )}
        <span className="text-dark mb-5 block text-xl font-medium dark:text-white">
          {packageName}
        </span>
        <h2 className="text-dark mb-11 text-4xl font-semibold dark:text-white xl:text-[42px] xl:leading-[1.21]">
          <span className="text-xl font-medium">$</span>
          <span className="-ml-1 -tracking-[2px]">{price}</span>
          <span className="text-body-color dark:text-dark-6 text-base font-normal">
            Per Month
          </span>
        </h2>

        <div className="mb-[50px]">
          <h3 className="text-dark mb-5 text-lg font-medium dark:text-white">
            Features
          </h3>
          <div className="mb-10">{childrenWithProps}</div>
        </div>
        <div className="w-full">
          <button className="bg-primary hover:bg-blue-dark inline-block rounded-md px-7 py-3 text-center text-base font-medium text-white transition">
            Purchase Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingBox;