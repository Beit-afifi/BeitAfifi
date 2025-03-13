import React, { useState, useContext } from 'react';
import { RiHome5Line, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
import { Menu } from '@headlessui/react';
import { HouseContext } from './HouseContext';

const PropertyDropdown = () => {
  const { property, setproperty, properties } = useContext(HouseContext);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Menu as="div" className="dropdown relative">
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className="dropdown-btn w-full text-left flex items-center justify-between"
      >
        <div className="flex items-center gap-2">
          <RiHome5Line className="dropdown-icon-primary" />
          <div>
            <div className="text-[15px] font-medium leading-tight">
              {property}
            </div>
            <div className="text-[13px] text-gray-500">Select property type</div>
          </div>
        </div>
        {isOpen ? ( 
          <RiArrowUpSLine className="dropdown-icon-secondary" />
        ) : (
          <RiArrowDownSLine className="dropdown-icon-secondary" />
        )}
      </Menu.Button>

      {/* Dropdown List */}
      <Menu.Items className="absolute mt-2 w-full bg-white shadow-lg rounded-md">
        <ul className="py-2">
          {properties.map((item, index) => (
            <Menu.Item key={index}>
              {({ active }) => (
                <li
                  onClick={() => {
                    setproperty(item);
                    setIsOpen(false);
                  }}
                  className={`cursor-pointer px-4 py-2 transition ${
                    active ? 'text-violet-700 bg-gray-100' : 'text-gray-700'
                  }`}
                >
                  {item}
                </li>
              )}
            </Menu.Item>
          ))}
        </ul>
      </Menu.Items>
    </Menu>
  );
};

export default PropertyDropdown;
