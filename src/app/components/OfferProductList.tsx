import React from 'react';

const OfferProductList = () => {
  const products = [
    {
      image: '/images/29.JFIF',
      name: 'Duis lectus est.',
      price: '$12.00 - $15.00',
    },
    {
      image: '/imageS/29(1).JFIF',
      name: 'Sed placerat.',
      price: '$12.00 - $15.00',
    },
    {
      image: '/imageS/29(2).JFIF',
      name: 'Netus proin.',
      price: '$12.00 - $15.00',
    },
    {
      image: '/imageS/29(3).JFIF',
      name: 'Platea in.',
      price: '$12.00 - $15.00',
    },
  ];

  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold mb-4 text-[#151875] text-left">
        Offer product
      </h3>
      <ul className="grid grid-cols-2 gap-y-4 list-none">
        {products.map((product, index) => (
          <li key={index} className="text-center cursor-pointer w-[126px]">
            <div className="flex items-center justify-center mb-3">
              <img
                src={product.image}
                alt="img"
                style={{ width: '126px', height: '80px', objectFit: 'cover' }}
              />
            </div>
            <h1 className="text-[#151875] font-medium text-xs mb-1">
              {product.name}
            </h1>
            <p className="text-[#1518757d] text-xs">{product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OfferProductList;
