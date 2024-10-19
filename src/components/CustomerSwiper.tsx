// components/CustomerSwiper.tsx
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

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
    <div className="my-20 p-4 sm:p-0 ">
      <h2 className="text-xl my-4 font-bold">Our Lovely Customer</h2>
      <Swiper
        pagination={{ clickable: true }}
        navigation
        modules={[Pagination, Navigation]}
        className="mySwiper"
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
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
    </div>
  );
};

export default CustomerSwiper;
