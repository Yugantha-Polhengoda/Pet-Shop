import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const CustomerSwiper = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await fetch(
          "https://monitor-backend-rust.vercel.app/api/customers"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setCustomers(data);
      } catch (error) {
        console.error("Error fetching customer data:", error);
      }
    };

    fetchCustomers();
  }, []);

  return (
    <div className="my-20 p-4 sm:p-0">
      <h2 className="text-xl my-4 font-bold">Our Lovely Customers</h2>
      <div className="relative">
        <Swiper
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="mySwiper"
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          style={{ paddingBottom: "40px" }}
        >
          {customers.map((customer, index) => (
            <SwiperSlide key={index}>
              <img
                src={customer.image}
                alt={`Customer ${index}`}
                className="w-72 h-[340px]"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <style jsx>{`
          .swiper-pagination {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            display: flex;
            justify-content: center;
          }
        `}</style>
      </div>
    </div>
  );
};

export default CustomerSwiper;
