"use client";

const SimpleMap = () => {
  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap');
      `}</style>
    <div className="w-full bg-white py-8 px-4 max-[470px]:pt-4"style={{fontFamily: "'Outfit', sans-serif"}}>
      <div className="max-w-4xl mx-auto">

         <h2 className="text-2xl sm:text-3xl text-center pb-4 lg:text-4xl font-bold text-[#ea2424]">
                     Visit Us
                  </h2>
        <div className="w-full h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden shadow">
         <iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d29553.629130051137!2d80.1707553!3d13.0671714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3bae3d65b0b5f45d%3A0x568dc4b3d56f9443!2sNew%20no.117%2C%202nd%20Floor%2C%201st%20main%20Road%2C%20Dr%2C%20near%2C%20Dr%20Rajkumar%20Rd%2C%20below%20Kapoor&#39;s%20Cafe%2C%201st%20Block%2C%20Rajajinagar%2C%20Bengaluru%2C%20Karnataka%20560010!3m2!1d12.9994818!2d77.5523659!5e1!3m2!1sen!2sin!4v1766407770430!5m2!1sen!2sin"
            className="w-full h-full border-0"
            loading="lazy"
            title="Clinic Location"
            allowFullScreen
          />
        </div>
      </div>
    </div>
    </>
  );
};

export default SimpleMap;