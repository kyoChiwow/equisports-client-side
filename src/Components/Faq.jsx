const Faq = () => {
  return (
    <div>
      {/* Header div */}
      <div>
        <h1 className="text-4xl font-bold text-center">
          Frequently Asked Questions
        </h1>
      </div>
      {/* Header div */}

      {/* Faq div */}
      <div className="mt-10 max-w-[95%] md:max-w-[90%] lg:max-w-[98%] xl:max-w-[80%] mx-auto space-y-4">
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title text-xl font-medium">
            What types of products does EquiSports offer?
          </div>
          <div className="collapse-content">
            <p>
              At EquiSports, we offer a diverse selection of high-quality sports
              accessories designed for athletes and fitness enthusiasts alike.
              Our product categories include fitness and training equipment,
              outdoor sports gear, team sports equipment, water sports
              accessories, and racket sports gear. Whether you are looking for
              equipment to enhance your home workouts or gearing up for an
              outdoor adventure, we have something for everyone. Our goal is to
              provide sports enthusiasts with the best gear to help them perform
              at their best and enjoy their favorite activities. All of our
              products are carefully selected to meet the highest standards of
              quality and durability.
            </p>
          </div>
        </div>

        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            How can I track my order?
          </div>
          <div className="collapse-content">
            <p>
              Once your order has been shipped, you will receive an email
              notification with tracking information. This email will include a
              link to track your package through the shipping carrier. You can
              also track your order directly from your account on our website.
              Simply log in and go to your order history to view the status of
              your shipment and access real-time tracking updates. In case you
              encounter any issues with tracking or delivery, feel free to
              contact our customer support team for assistance. We aim to ensure
              that your order reaches you as quickly and smoothly as possible.
            </p>
          </div>
        </div>

        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            What payment methods do you accept?
          </div>
          <div className="collapse-content">
            <p>
              We offer a variety of secure payment options to make your shopping
              experience as convenient as possible. You can pay for your orders
              using major credit and debit cards, including Visa, MasterCard,
              and American Express. We also accept PayPal, which provides a fast
              and secure payment method. Additionally, we offer alternative
              payment options that may be available in your region. Rest assured
              that all transactions are securely processed using the latest
              encryption technology to protect your personal and payment
              details. If you encounter any issues with payment, our support
              team is here to assist you.
            </p>
          </div>
        </div>

        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            Can I return or exchange an item?
          </div>
          <div className="collapse-content">
            <p>
              Yes, we offer a hassle-free return and exchange policy to ensure
              that you are satisfied with your purchase. If you are not happy
              with your order, you can return or exchange any item within 30
              days of receiving it, provided that the product is unused and in
              its original packaging. To initiate a return or exchange, simply
              contact our customer service team or follow the instructions in
              your order confirmation email. Please note that return shipping
              costs may apply, depending on your location. Refunds will be
              processed once the returned item is received and inspected, and
              you will be notified once the transaction is complete.
            </p>
          </div>
        </div>

        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            How do I know if an item is in stock?
          </div>
          <div className="collapse-content">
            <p>
              We strive to keep our website up-to-date with accurate stock
              information. Each product page includes real-time availability, so
              you can see if an item is in stock or if it is temporarily
              unavailable. If an item is out of stock, we will provide an
              estimated restock date if possible. You can also sign up to
              receive an email notification when the item is back in stock, so
              you don’t miss out. Additionally, our customer service team is
              always available to provide information about specific product
              availability or alternatives if you need assistance with finding a
              similar item.
            </p>
          </div>
        </div>

        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            Do you offer international shipping?
          </div>
          <div className="collapse-content">
            <p>
              Yes, we are proud to offer international shipping to many
              countries around the world. Shipping fees and delivery times vary
              based on your location, and you can view the estimated shipping
              costs and delivery times during checkout. We use trusted
              international carriers to ensure that your order is delivered
              safely and efficiently. Please note that customs fees or import
              duties may apply, depending on your country’s regulations, and
              these charges are the responsibility of the customer. If you need
              assistance with international shipping or have any concerns,
              please don’t hesitate to contact our customer service team for
              more details.
            </p>
          </div>
        </div>
      </div>
      {/* Faq div */}
    </div>
  );
};

export default Faq;
