import guaranteeBadge from "@/assets/guarantee-badge.png";

const GuaranteeSection = () => {
  return (
    <section className="py-8 px-3 md:py-16 md:px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-6 md:mb-10">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-slate-800 mb-1 md:mb-2 leading-tight">
            100% Satisfaction or Your Money Back
          </h2>
          <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-primary">
            180-Day Unconditional Guarantee
          </h3>
        </div>

        <div className="flex flex-col items-center gap-4 md:gap-8 md:flex-row">
          <div className="flex-shrink-0">
            <img 
              src={guaranteeBadge} 
              alt="100% Money-Back Guarantee" 
              className="w-28 h-28 md:w-40 md:h-40 object-contain"
            />
          </div>
          <div className="text-center md:text-left">
            <p className="text-sm md:text-base text-slate-600 mb-3 md:mb-4 leading-relaxed">
              We are so confident that ErecPro will deliver remarkable results for you that we are willing to take on all the risk for a full 180 days. From the moment your order arrives, start taking ErecPro daily and pay close attention to how you feel.
            </p>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed">
              If at any point during those 180 days you feel that ErecPro has not delivered what we promised, simply let us know. Our team will refund every penny, no questions asked.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
